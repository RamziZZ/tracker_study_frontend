// import Image from "next/image";
"use client";

import { useState } from "react";

export default function HeadSearch() {
    const [value, setValue] = useState("");

    return (
        <section className="max-w-7xl mx-auto px-10 py-16 flex flex-row md:flex-row items-center gap-10">
        <div className="flex flex-col w-full items-center">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight text-center lg:text-start">
            Cari Informasi Lowongan Kerja Disini <br />
            {/* <span className="text-blue-700">Kebanggaan Kami</span> */}
            </h1>

            <p className="mt-4 text-sm md:text-lg text-gray-600 text-center lg:text-start">
            Bantu kami memetakan kesuksesan lulusan dan tingkatkan kualitas almamater. Kontribusi kecil Anda hari ini adalah inspirasi besar bagi adik tingkat di masa depan.
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
                    placeholder="masukkan nama loker disini"/>

                <label for="countries" class="block mb-2.5 text-sm font-medium text-heading">Kategori Pekerjaan</label>
                <select id="countries" class="block w-full px-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body rounded-full">
                    <option selected>Pilih Kategori Pekerjaan</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                </select>

                <button type="submit" className="bg-blue-700 flex justify-center w-full text-white px-6 py-4 rounded-full hover:bg-blue-600 hover:text-blue-50 active:bg-blue-500 duration-300 cursor-pointer">
                    Cari Alumni
                </button>
            </form>
        </div>

        {/* <div className="hidden lg:flex w-full">
            <Image alt="" src={'/hero/hero-image-resize.webp'} width={300} height={300} className="w-full"/>
        </div> */}
        </section>
    );
}