"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/services/auth_service.js";
import Cookies from "js-cookie"; 
import { auth, db, googleProvider } from "@/lib/firebase";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

// icon
import { HugeiconsIcon } from '@hugeicons/react'
import { 
  AlertCircleFreeIcons, 
  CheckmarkCircle03FreeIcons, 
  ViewFreeIcons, 
  ViewOffSlashFreeIcons 
} from '@hugeicons/core-free-icons'

// ui components
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

// 1. Import komponen Alert dari shadcn/ui. 
// Pastikan anda sudah menginstallnya dengan perintah: npx shadcn-ui@latest add alert
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

import Image from "next/image";

export default function LoginPage() {

  // state untuk mengelola autentikasi
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // state untuk mengelola status autentikasi (error atau success)
  const [status, setStatus] = useState<{ type: 'error' | 'success', message: string } | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  // Check session on mount
  useEffect(() => {
    const savedToken = Cookies.get("token");
    const savedRole = Cookies.get("role");
    if (savedToken && savedRole && savedRole !== "none") {
      setIsLoading(true); // Tampilkan loading agar form tidak terlihat saat redirect
      redirectUser(savedRole);
    }
  }, []);

  // Efek untuk mengelola animasi masuk dan keluar alert
  useEffect(() => {
    if (status) {
      setIsVisible(true);
      // Mulai animasi keluar setelah 2 detik
      const hideTimer = setTimeout(() => {
        setIsVisible(false);
      }, 3000);
      // Benar-benar hapus dari DOM setelah animasi selesai (duration-500)
      const removeTimer = setTimeout(() => setStatus(null), 3500);
      
      return () => {
        clearTimeout(hideTimer);
        clearTimeout(removeTimer);
      };
    }
  }, [status]);

  // fungsi untuk menangani login email dan password
  const handleLogin = async (e) => {
    e.preventDefault();
    
    // Reset status/alert sebelumnya setiap kali tombol login ditekan
    setStatus(null);
    setIsVisible(false);
    
    setIsLoading(true);
    try {
      // Login menggunakan Firebase Email & Password
      const userCredential = await signInWithEmailAndPassword(auth, email.trim(), password);
      const firebaseUser = userCredential.user;
      const token = await firebaseUser.getIdToken();

      // Ambil Role dari Firestore
      const role = await getUserRole(firebaseUser.email);

      const userData = { email: firebaseUser.email, role: role };
      // Simpan ke Storage & Cookies untuk Middleware
      saveAuthSession(token, userData);

      // Set status sukses 
      setStatus({
        type: 'success',
        message: `Login Berhasil, selamat datang kembali ${firebaseUser.email}!`
      });
      
      // Memberikan jeda 2.2 detik (2200ms) agar user sempat membaca Alert sukses sebelum pindah halaman
      await new Promise((resolve) => setTimeout(resolve, 2200));

      redirectUser(role);
    } catch (err) {
      console.error(err);
      // Error handling 
      let message = "Terjadi kesalahan saat login";
      
      const errorCode = (err as any).code;
      //daftar error dan convertnya ke bahasa pengguna
      switch (errorCode) {
        case 'auth/invalid-email':
          message = "Format email tidak valid. Contoh format email yang benar adalah example@gmail.com";
          break;
        case 'auth/user-not-found':
        case 'auth/wrong-password':
        case 'auth/invalid-credential':
          message = "Email atau Password salah. Silahkan periksa kembali akun anda.";
          break;
      }
      
      // set status error
      setStatus({
        type: 'error',
        message: "Login gagal: " + message
      });
    } finally {
      setIsLoading(false);
    }
  };

  // fungsi untuk menangani login email google
  const handleGoogleLogin = async () => {
    try {
      // Reset status/alert sebelumnya
      setStatus(null);
      setIsVisible(false);
      
      const result = await signInWithPopup(auth, googleProvider);
      const firebaseUser = result.user;
      const token = await firebaseUser.getIdToken();

      // Ambil Role dari Firestore
      const role = await getUserRole(firebaseUser.email);

      const userData = { email: firebaseUser.email, role: role };
      saveAuthSession(token, userData);
      
      // set status succes
      setStatus({
        type: 'success',
        message: `Google Login Berhasil, selamat datang kembali ${firebaseUser.email}!`
      });

      // Memberikan jeda 2.2 detik (2200ms) agar user sempat membaca Alert sukses sebelum pindah halaman
      await new Promise((resolve) => setTimeout(resolve, 2200));

      redirectUser(role);
    } catch (err) {
      // jika error set status error
      setStatus({
        type: 'error',
        message: "Google Login Gagal: " + (err as any).message
      });
    }
  };

  // Fungsi pembantu untuk mengambil role dari Firestore
  const getUserRole = async (email) => {
    try {
      const docRef = doc(db, "users", email);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        return docSnap.data().role;
      } else {
        // Default role jika email tidak terdaftar di Firestore
        return "none";
      }
    } catch (error) {
      console.error("Error fetching role:", error);
      return "none";
    }
  };

  // fungsi untuk simpan session auth
  const saveAuthSession = (token, user) => {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    
    // Menambahkan atribut keamanan: 
    // secure: true (hanya lewat HTTPS), sameSite: 'strict' (mencegah CSRF)
    const cookieOptions = { 
      expires: 2 / 24, // Session akan kedaluwarsa dalam 2 jam
      secure: process.env.NODE_ENV === "production", 
      sameSite: "lax" as const 
    };

    Cookies.set("token", token, cookieOptions);
    Cookies.set("role", user.role, cookieOptions);
  };

  // fungsi untuk redirect user berdasarkan role
  const redirectUser = (role) => {
    if (role === 'admin') router.push("/admin");
    else if (role === 'dosen') router.push("/dosen");
    else if (role === 'alumni') router.push("/alumni");
    else router.push("/");
  };

  // bagian ui
  return (
    <div className="bg-blue-50">
      <section className="w-full min-h-screen flex flex-row justify-center items-center px-5">
        {/* Menampilkan Alert secara kondisional berdasarkan state 'status' */}
        {status && (
          <div className={`absolute top-10 z-50 px-5 w-full md:w-fit max-w-none md:max-w-sm duration-500 ease-out fill-mode-forwards
            ${isVisible 
              ? "animate-in fade-in slide-in-from-top-2" 
              : "animate-out fade-out slide-out-to-top-2"
            }`}>
            <Alert 
              // Kita tetap gunakan variant untuk aksesibilitas, namun styling utama dihandle oleh className
              variant={status.type === 'error' ? 'destructive' : 'default'}
              // Custom styling untuk kedua tipe agar tampilan lebih konsisten (Soft UI style)
              className={status.type === 'error' 
                ? 'border-red-300 bg-red-50 shadow-xl shadow-red-200 text-red-700' 
                : 'border-green-300 bg-green-50 shadow-xl shadow-green-200 text-green-700'}
            >
              {/* Pengecekan tipe status untuk icon yang tampil */}
              {status.type === 'error' ? (
                <HugeiconsIcon icon={AlertCircleFreeIcons} />
              ) : (
                <HugeiconsIcon icon={CheckmarkCircle03FreeIcons} />
              )}

              <AlertTitle className="font-bold">
                {status.type === 'error' ? 'Perhatian' : 'Berhasil'}
              </AlertTitle>
              <AlertDescription>
                {status.message}
              </AlertDescription>
            </Alert>
          </div>
        )}
        <div className="w-full max-w-lg flex flex-col p-10 bg-white rounded-4xl shadow-2xl shadow-blue-300 border-md border-blue-200">
          <form onSubmit={handleLogin}>
            <FieldGroup>
              <div className="flex justify-center shrink-0 items-center">
                <Image alt="" src={'/icon-web/logo-tracer-study_1.webp'} width={250} height={24}/>
              </div>
              <FieldSet>
                <FieldLegend className="text-2xl! w-full text-center">Masuk Ke Tracker Study</FieldLegend>
                <FieldDescription className="w-full text-center">
                  Masukkan email dan password yang sesuai dengan akun anda atau jika ingin lebih praktis gunakan login email google dan pilih email google yang terkoneksi dengan akun anda
                </FieldDescription>
                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="email">
                      Email
                    </FieldLabel>
                    <Input
                      id="email"
                      placeholder="Example: youremail@gmail.com"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="py-5 px-5 rounded-full"
                    />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="password">
                      Password
                    </FieldLabel>
                    <div className="relative ">
                      <Input
                        id="password"
                        // Ubah type secara dinamis berdasarkan state showPassword
                        type={showPassword ? "text" : "password"}
                        placeholder="example: admin1234 (pemerintah momentos)"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        // Tambahkan padding kanan (pr-14) agar teks tidak tertutup icon
                        className="py-5 pl-5 pr-14 rounded-full w-full"
                      />
                      {/* Tombol Toggle Show/Hide Password */}
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-5 top-1/2 -translate-y-1/2 flex items-center justify-center text-gray-400 hover:text-blue-500 transition-colors cursor-pointer focus:outline-none"
                        aria-label={showPassword ? "Sembunyikan password" : "Tampilkan password"}
                      >
                        <HugeiconsIcon 
                          icon={showPassword ? ViewOffSlashFreeIcons : ViewFreeIcons} 
                          size={20}
                        />
                      </button>
                    </div>
                  </Field>
                </FieldGroup>
              </FieldSet>
              <Field orientation="vertical" className="w-full! gap-4">
                <Button 
                  type="submit" 
                  disabled={isLoading}
                  className={'bg-blue-500 w-full py-5.5 rounded-full hover:bg-blue-400 hover:shadow-lg shadow-blue-300/75 duration-300 cursor-pointer disabled:bg-gray-400'}
                >
                  {isLoading ? "Memproses..." : "Masuk"}
                </Button>
                <div className="relative flex items-center py-2 w-full">
                  <div className="grow border-t border-gray-200"></div>
                  <span className="shrink mx-4 text-gray-400 text-xs font-normal">Atau</span>
                  <div className="grow border-t border-gray-200"></div>
                </div>
                <div onClick={handleGoogleLogin}>
                  <Button variant="outline" type="button" className={'w-full h-fit py-2.5 rounded-full hover:bg-gray-900 hover:text-white hover:shadow-lg shadow-blue-100 active:bg-gray-500 duration-300 cursor-pointer'}>
                    {/* <HugeiconsIcon icon={GoogleFreeIcons}  size={24} color="black" strokeWidth={1.5} className="w-6! h-6!"/> */}
                    <Image alt="" src={'/Google__G__logo.svg.webp'} width={24} height={24}/>
                    Masuk dengan Google
                  </Button>  
                </div>
              </Field>
            </FieldGroup>
          </form>
        </div>
      </section>
    </div>
  );
}