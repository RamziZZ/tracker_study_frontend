// import Image from "next/image";
// "use client";

// // import { useState } from "react";
// // import { 
// //     Select,
// //     SelectContent,
// //     SelectGroup,
// //     SelectItem,
// //     SelectLabel,
// //     SelectTrigger,
// //     SelectValue,
// // } from "@/components/ui/select.tsx";

// export default function HeroEvent() {
//     // const [value, setValue] = useState("");

//     return (
//         <section className="w-full h-fit px-10 flex flex-col items-center gap-10">
//             <div className="max-w-5xl flex flex-col w-full py-20 items-center gap-10">
//                 <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight text-center lg:text-start">
//                 Jelajahi Peluang Baru <br />
//                 </h1>

//                 <p className="max-w-5xl text-sm md:text-lg text-gray-600 text-center">
//                     Tingkatkan skill dan bangun koneksi profesional melalui event-event yang ada dibawah ini
//                 </p>
//             </div>
//             <div className="w-full">
//                 <form action="" className="w-full flex flex-row flex-wrap gap-5">
//                     <a href="" className="w-fit h-fit text-blue-500 bg-transparent py-2.5 px-10 border border-blue-500 rounded-full hover:bg-blue-500 hover:text-white duration-300 hover:shadow-lg shadow-blue-300/75">
//                         Semua
//                     </a>

//                     <a href="" className="w-fit h-fit text-blue-500 bg-transparent py-2.5 px-10 border border-blue-500 rounded-full hover:bg-blue-500 hover:text-white duration-300 hover:shadow-lg shadow-blue-300/75">
//                         Job Fair
//                     </a>
                    
//                     <a href="" className="w-fit h-fit text-blue-500 bg-transparent py-2.5 px-10 border border-blue-500 rounded-full hover:bg-blue-500 hover:text-white duration-300 hover:shadow-lg shadow-blue-300/75">
//                         Bootcamp
//                     </a>
                    
//                     <a href="" className="w-fit h-fit text-blue-500 bg-transparent py-2.5 px-10 border border-blue-500 rounded-full hover:bg-blue-500 hover:text-white duration-300 hover:shadow-lg shadow-blue-300/75">
//                         Study Club
//                     </a>
                    
//                     <a href="" className="w-fit h-fit text-blue-500 bg-transparent py-2.5 px-10 border border-blue-500 rounded-full hover:bg-blue-500 hover:text-white duration-300 hover:shadow-lg shadow-blue-300/75">
//                         Seminar
//                     </a>
                    
//                     <a href="" className="w-fit h-fit text-blue-500 bg-transparent py-2.5 px-10 border border-blue-500 rounded-full hover:bg-blue-500 hover:text-white duration-300 hover:shadow-lg shadow-blue-300/75">
//                         Program Beasiswa
//                     </a>
//                 </form>
//             </div>
//         </section>
//     );
// }

"use client";

import { useState } from "react";

export default function HeroEvent() {
    // 1. Definisikan kategori dalam array
    const categories = [
        "Semua", 
        "Job Fair", 
        "Bootcamp", 
        "Study Club", 
        "Seminar", 
        "Program Beasiswa"
    ];

    // 2. State untuk melacak kategori yang aktif
    const [activeCategory, setActiveCategory] = useState("Semua");

    return (
        <section className="w-full h-fit px-6 md:px-10 flex flex-col items-center gap-10">
            <div className="max-w-5xl flex flex-col w-full py-20 items-center gap-6">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight text-center">
                    Jelajahi Peluang Baru
                </h1>

                <p className="max-w-2xl text-sm md:text-lg text-gray-600 text-center">
                    Tingkatkan skill dan bangun koneksi profesional melalui event-event pilihan di bawah ini.
                </p>
            </div>

            <div className="w-full max-w-7xl">
                <div className="w-full flex flex-row flex-wrap gap-5">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`w-fit h-fit py-2.5 px-10 border rounded-full transition-all duration-300 cursor-pointer
                                ${activeCategory === category 
                                    ? "bg-blue-500 text-white border-blue-500 shadow-lg shadow-blue-300/50" 
                                    : "bg-transparent text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white hover:shadow-lg shadow-blue-300/75 active:bg-blue-600 "
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}