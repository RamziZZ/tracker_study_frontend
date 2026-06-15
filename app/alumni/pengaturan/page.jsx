'use client';

import { useState, useEffect } from 'react';
import { alumniService } from '@/services/user_alumni_service'; // <--- Import service FE lu di sini

export default function AlumniPengaturanPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone_number: '',
    privacy_settings: {
      receive_job_notifications: true,
      receive_admin_notifications: true,
      share_profile_to_public: false,
    }
  });

  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  // 1. Ambil data profil pakai alumniService
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const alumniData = await alumniService.getProfile(); // <--- Manggil Service FE
        
        if (alumniData) {
          setFormData({
            name: alumniData.name || '',
            email: alumniData.user?.email || '', 
            phone_number: alumniData.phone_number || '',
            privacy_settings: alumniData.privacy_settings ? JSON.parse(alumniData.privacy_settings) : {
              receive_job_notifications: true,
              receive_admin_notifications: true,
              share_profile_to_public: false,
            }
          });
        }
      } catch (error) {
        console.error('Gagal memuat profil:', error);
        setMessage({ type: 'error', text: 'Gagal memuat data profil Anda.' });
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (key) => {
    setFormData((prev) => ({
      ...prev,
      privacy_settings: {
        ...prev.privacy_settings,
        [key]: !prev.privacy_settings[key]
      }
    }));
  };

  // 2. Kirim data pembaruan pakai alumniService
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setMessage({ type: '', text: '' });

    try {
      // Manggil Service FE, kirim objek data mentah langsung
      await alumniService.updateProfile(formData); 
      
      setMessage({ type: 'success', text: 'Pengaturan akun berhasil diperbarui!' });
    } catch (error) {
      console.error('Gagal memperbarui profil:', error);
      const errorMsg = error.message || 'Terjadi kesalahan saat menyimpan perubahan.';
      setMessage({ type: 'error', text: errorMsg });
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <main className="p-6 flex items-center justify-center min-h-screen">
        <p className="text-slate-600 font-medium">Memuat pengaturan akun...</p>
      </main>
    );
  }

  return (
    <main className="p-6">
      <div className="mb-8">
        <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Pengaturan</p>
        <h1 className="mt-3 text-3xl font-semibold text-slate-900">Pengaturan Akun</h1>
        <p className="mt-2 text-sm text-slate-600">Kelola preferensi dan informasi akun Anda.</p>
      </div>

      {message.text && (
        <div className={`mb-6 p-4 rounded-xl text-sm font-medium ${
          message.type === 'success' ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' : 'bg-rose-50 text-rose-800 border border-rose-200'
        }`}>
          {message.text}
        </div>
      )}

      <form onSubmit={handleSubmit} className="rounded-2xl bg-white border border-slate-200 shadow-sm p-6">
        <div className="space-y-6">
          {/* Profile Section */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-slate-900">Profil Pribadi</h3>
            <div className="space-y-4">
              <div>
                <label className="block mb-2 text-sm font-medium text-slate-700">Nama Lengkap</label>
                <input 
                  type="text" name="name" value={formData.name} onChange={handleInputChange}
                  placeholder="Masukkan nama lengkap" required
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200" 
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-slate-700">Email</label>
                <input 
                  type="email" name="email" value={formData.email} onChange={handleInputChange}
                  placeholder="Masukkan email" required
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200" 
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-slate-700">Nomor Telepon</label>
                <input 
                  type="tel" name="phone_number" value={formData.phone_number} onChange={handleInputChange}
                  placeholder="Masukkan nomor telepon" 
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200" 
                />
              </div>
            </div>
          </div>

          <hr className="my-6 border-slate-200" />

          {/* Preferences Section */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-slate-900">Preferensi</h3>
            <div className="space-y-3">
              <label className="flex items-center gap-3 cursor-pointer">
                <input 
                  type="checkbox" checked={formData.privacy_settings.receive_job_notifications} onChange={() => handleCheckboxChange('receive_job_notifications')}
                  className="rounded border-slate-300 text-blue-600 focus:ring-blue-500" 
                />
                <span className="text-sm text-slate-700">Terima notifikasi lowongan kerja baru</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input 
                  type="checkbox" checked={formData.privacy_settings.receive_admin_notifications} onChange={() => handleCheckboxChange('receive_admin_notifications')}
                  className="rounded border-slate-300 text-blue-600 focus:ring-blue-500" 
                />
                <span className="text-sm text-slate-700">Terima notifikasi dari admin</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input 
                  type="checkbox" checked={formData.privacy_settings.share_profile_to_public} onChange={() => handleCheckboxChange('share_profile_to_public')}
                  className="rounded border-slate-300 text-blue-600 focus:ring-blue-500" 
                />
                <span className="text-sm text-slate-700">Bagikan profil ke publik</span>
              </label>
            </div>
          </div>

          <hr className="my-6 border-slate-200" />

          {/* Keamanan Section */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-slate-900">Keamanan</h3>
            <div className="space-y-3">
              <button type="button" className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-left text-sm font-medium text-slate-700 hover:bg-slate-50 transition">
                Ubah Password
              </button>
              <button type="button" className="w-full rounded-lg border border-red-300 px-4 py-2.5 text-left text-sm font-medium text-red-700 hover:bg-red-50 transition">
                Hapus Akun
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex gap-3">
            <button 
              type="submit" disabled={submitting}
              className="flex-1 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 transition disabled:bg-blue-400"
            >
              {submitting ? 'Menyimpan...' : 'Simpan Perubahan'}
            </button>
            <button 
              type="button" onClick={() => window.location.reload()}
              className="flex-1 rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition"
            >
              Batal
            </button>
          </div>
        </div>
      </form>
    </main>
  );
}