// import Image from "next/image";
"use client";

import { useState } from "react";
import { 
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select.tsx";

export default function HeroSearch() {
    const [value, setValue] = useState("");

    return (
        <section className="max-w-5xl min-h-screen mx-auto px-10 py-16 flex flex-row md:flex-row items-center gap-10">
        <div className="flex flex-col w-full items-center gap-10">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight text-center lg:text-start">
            Cari Informasi Lowongan Kerja Disini <br />
            </h1>

            <p className="max-w-5xl text-sm md:text-lg text-gray-600 text-center">
            Bantu kami memetakan kesuksesan lulusan dan tingkatkan kualitas almamater. Kontribusi kecil Anda hari ini adalah inspirasi besar bagi adik tingkat di masa depan.
            </p>

            <form action="" className="w-full flex flex-col gap-5">
                <input 
                    type="text" 
                    value={value}
                    onChange={(e) => {
                        const onlyText = e.target.value.replace(/[^a-zA-Z ]/g, '');
                        setValue(onlyText);
                    }}
                    className="w-full h-fit py-2.5 px-5 border border-blue-500 rounded-full" 
                    placeholder="masukkan nama loker disini"/>

                <div className="w-full flex flex-col gap-1.5">
                    <label className="block text-sm font-medium text-heading text-blue-500">Kategori Pekerjaan</label>
                    <Select className="">
                        <SelectTrigger className="w-full h-fit py-6 px-5 rounded-full border-blue-500">
                            <SelectValue className="h-fit " placeholder="Pilih Jenis Pekerjaan" />
                        </SelectTrigger>
                        <SelectContent className="bg-blue-100">
                            <SelectGroup>
                            <SelectLabel>Fruits</SelectLabel>
                            <SelectItem value="paruh_waktu">Paruh Waktu/Part Time</SelectItem>
                            <SelectItem value="penuh_waktu">Penuh Waktu/Full Time</SelectItem>
                            <SelectItem value="freelance">Freelance</SelectItem>
                            <SelectItem value="contract">Contract</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>

                <div className="w-full h-fit flex flex-col md:flex-row gap-5">
                    <div className="w-full flex flex-col gap-1.5">
                        <label className="block text-sm font-medium text-heading text-blue-500">Kategori Waktu Kerja</label>
                        <Select className="">
                            <SelectTrigger className="w-full h-fit py-6 px-5 rounded-full border-blue-500">
                                <SelectValue className="h-fit " placeholder="Select a fruit" />
                            </SelectTrigger>
                            <SelectContent className="bg-blue-100">
                                <SelectGroup>
                                <SelectLabel>Fruits</SelectLabel>
                                <SelectItem value="wfh/wfa">WFH/WFA (Work From Home/Anywhere)</SelectItem>
                                <SelectItem value="wfo/onsite">WFO/Onsite (Work From Office)</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>

                    
                    <div className="w-full flex flex-col gap-1.5">
                        <label className="block text-sm font-medium text-heading text-blue-500">Kategori Publiser</label>
                        <Select className="">
                            <SelectTrigger className="w-full h-fit py-6 px-5 rounded-full border-blue-500">
                                <SelectValue className="h-fit " placeholder="Pilih Publiser" />
                            </SelectTrigger>
                            <SelectContent className="bg-blue-100">
                                <SelectGroup>
                                <SelectLabel>Fruits</SelectLabel>
                                <SelectItem value="admin">Admin</SelectItem>
                                <SelectItem value="alumni">Alumni</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <button type="submit" className="bg-blue-500 flex justify-center w-full text-white px-6 py-4 rounded-full hover:bg-blue-400 hover:text-blue-50 hover:shadow-lg shadow-blue-200/75 hover:scale-101 active:bg-blue-300 duration-300 cursor-pointer">
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