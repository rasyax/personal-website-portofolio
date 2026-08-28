"use client"; // Wajib untuk menjalankan interval dan state di browser

import { useState, useEffect } from "react";

export default function RealTimeClock() {
  // State untuk memastikan komponen sudah di-mount di klien
  const [mounted, setMounted] = useState(false);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setMounted(true); // Tandai bahwa komponen sudah di klien

    // Perbarui state 'time' setiap 1 detik (1000 ms)
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Bersihkan interval saat komponen di-unmount agar tidak bocor memori
    return () => clearInterval(interval);
  }, []);

  // Mencegah Hydration Mismatch: render kosong (atau skeleton) sebelum mount
  if (!mounted) {
    return <span>Memuat waktu...</span>; 
  }

  // --- Logika Pemformatan Waktu ---
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const months = ["JAN", "FEB", "MAR", "APR", "MEY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DES"];

 const dayName = days[time.getDay()];
  const day = String(time.getDate()).padStart(2, "0");
  const monthName = months[time.getMonth()];
  
  // --- Logika AM/PM ---
  const rawHours = time.getHours();
  const ampm = rawHours >= 12 ? "PM" : "AM";
  
  // Mengubah format 24 jam menjadi 12 jam
  // Jika rawHours adalah 0 (tengah malam), jadikan 12. 
  // Jika rawHours 13-23, kurangi 12 (menggunakan modulus %)
  const hours12 = rawHours % 12 || 12; 
  
  const hours = String(hours12).padStart(2, "0");
  const minutes = String(time.getMinutes()).padStart(2, "0");
  const seconds = String(time.getSeconds()).padStart(2, "0");

  // Hasil akhir: Kamis, 27 Aug 21.25.14
  const formattedTime = `${dayName}, ${day} ${monthName} · ${hours}.${minutes}.${seconds} ${ampm}`;

  return <span className="font-medium text-sm text-neutral-400">{formattedTime}</span>;
}