import Image from "next/image";

import { HugeiconsIcon } from '@hugeicons/react'
import { Location05FreeIcons } from "@hugeicons/core-free-icons"

export default function Hero() {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-center px-10 py-16 bg-transparent">
      <div className="max-w-7xl py-20 gap-2.5 flex flex-row items-center">
        <div className="w-full">
          <h1 className="text-4xl font-bold mb-10">
            Politeknik Negeri Jember
          </h1>
          <p className="text-gray-600 mb-6">
            Politeknik Negeri Jember merupakan perguruan tinggi yang menyelenggarakan pendidikan vokasional, 
            yaitu program pendidikan yang mengarah proses belajar mengajar pada tingkat keahlian, keterampilan, 
            dan standar kompetensi yang spesifik sesuai dengan kebutuhan pasar kerja dan stakeholder, 
            serta mempunyai kemandirian dalam berkarya dan berwirausaha berbasis IPTEKS yang diperolehnya.
          </p>

          <a href="https://maps.app.goo.gl/moYHsLu8x8q3WVqK6" target="_blank" className="bg-blue-500 flex flex-row justify-center items-center gap-2.5 text-white text-xs md:text-sm px-6 py-3 rounded-full shadow hover:bg-blue-400 hover:shadow-blue-300 active:bg-blue-300 duration-300 cursor-pointer">
            <HugeiconsIcon icon={Location05FreeIcons} size={24} color="white" strokeWidth={1.5} />
            Jl. Mastrip PO BOX 164, Jember - Jawa Timur - Indonesia
          </a>
        </div>

        <div className="hidden lg:flex w-full">
            <Image alt="" src={'/icon-web/LOGO-POLITEKNIK-NEGERI-JEMBER-gabung.png'} width={300} height={300} className="w-full"/>
        </div>

        {/* <div className="w-full mt-10 md:mt-0">
          <img
            src="/logo-polije.png"
            alt="logo"
            className="w-72"
          />
        </div> */}
      </div>
    </section>
  );
}