"use client";

import { useState } from "react";
import { login } from "@/services/authService";

export default function LoginPage() {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleLogin = async () => {
    try{
      await login({email,password});
      alert("Login berhasil");
    }catch(err){
      alert("Login gagal");
    }
  }

  return (
    <div>
      <h2>Login Alumni</h2>

      <input
        type="email"
        placeholder="Email"
        onChange={(e)=>setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e)=>setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>
        Login
      </button>

    </div>
  );
}