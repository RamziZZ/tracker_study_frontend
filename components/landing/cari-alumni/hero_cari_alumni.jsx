"use client";
import Image from "next/image";

import { useState } from "react";

export default function HeroCariAlumni() {
    const [value, setValue] = useState("");

    return (
        <section className="max-w-7xl mx-auto px-10 py-16 flex flex-row md:flex-row items-center gap-10">
            <div className="w-full flex flex-col gap-5">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight text-center lg:text-start">
                    Temukan <span className="text-blue-700">Talenta</span>  <br />
                    di Prodi Teknik <br />
                    Informatika kami
                </h1>

                <p className="text-sm md:text-lg text-gray-600 text-center lg:text-start">
                    Lacak jejak karir dan studi alumni Prodi D4 Teknik Informatika PSDKU Nganjuk. Masukkan nama alumni untuk melihat informasi lengkapnya.
                </p>
                
                <form action="" className="w-full flex flex-col gap-4">
                    <input 
                        type="text" 
                        value={value}
                        onChange={(e) => {
                            const onlyText = e.target.value.replace(/[^a-zA-Z ]/g, '');
                            setValue(onlyText);
                        }}
                        className="w-full h-fit py-2.5 px-5 border rounded-full" 
                        placeholder="masukkan nama alumni"/>

                    <button type="submit" className="bg-blue-700 flex justify-center w-full text-white px-6 py-4 rounded-full hover:bg-blue-600 hover:text-blue-50 active:bg-blue-500 duration-300 cursor-pointer">
                        Cari Alumni
                    </button>
                </form>
            </div>

            <div className="hidden lg:flex w-full">
                <Image alt="" src={'/hero/hero_talent_resize.webp'} width={300} height={300} className="w-full"/>
            </div>
        </section>
    )
}