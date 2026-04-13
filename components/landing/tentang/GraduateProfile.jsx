"use client";

import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowDown01FreeIcons, ArrowUp01FreeIcons } from "@hugeicons/core-free-icons"

import { useState } from "react";

export default function GraduateProfile() {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggle = (index) => {
    setOpenIndexes((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  const data = [
    {
      title: "Software Engineer",
      items: ["Mampu mendemostrasikan pengetahuan dan kemampuan yang berkaitan dengan model/metode pengumpulan data. ", 
              "Mampu mendemostrasikan pengetahuan dan kemampuan yang berkaitan dengan logika pemrograman.",
              "Mampu mendemostrasikan pengetahuan dan kemampuan yang berkaitankonsep basis data.",
              "Mampu mendemostrasikan pengetahuan dan kemampuan yang berkaitan dengan metode pengembangan perangkat lunak (SDLC). ",
              "Mampu mendemostrasikan pengetahuan dan kemampuan yang berkaitan desain tampilan antarmuka perangkat lunak yang ramah bagi pengguna.",
              "Mampu memahami infrastruktur pendukung pengembangan perangkat lunak Mampu menganalisa kebutuhan pengembangan aplikasi perangkat lunak, Menguasai konsep teoritis analisa desain sistem.",
              "Mampu menyusun dan membuat dokumen requirement analysis dan spesifikasi aplikasi perangkat lunak.",
              "Mampu membuat rekayasa perangkat lunak, dan penentuan teknologi berdasarkan requirement analysis.",
              "Mampu mengimplementasikan sistem perangkat lunak. ",
              "Mampu melakukan uji coba perangkat lunak sesuai dengan requirement analysis"
            ],
    },
    {
      title: "Software Quality Assurance Analyst",
      items: ["Mampu mendemostrasikan pengetahuan dan kemampuan yang berkaitan dengan macam-macam metode pengujian ", 
              "Mampu mendemostrasikan pengetahuan dan kemampuan yang berkaitan dengan perawatan perangkat lunak.",
              "Mampu memilih metode yang sesuai dengan kebutuhan pengujian Mampu merancang prosedur pengujian.",
              "Mampu melakukan pengujian sesuai dengan prosedur.",
              "Mampu mendokumentasikan hasil pengujian.",
              "Mampu merekomendasikan hasil pengujian sebagai tindak lanjut",
            ],
    },
    {
      title: "Information Technology Entrepreneur",
      items: ["Mampu mendemostrasikan pengetahuan dan kemampuan yang berkaitan dengan kewirausahaan.",
              "Mampu mendemostrasikan pengetahuan dan kemampuan yang berkaitan dengan manajemen proyek. ",
              "Mampu mengembangkan produk startup",
            ],
    },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-md/15 space-y-4">
      <h3 className="text-xl font-semibold">
        Profil Lulusan Teknik Informatika
      </h3>

      {data.map((item, index) => (
        <div key={index} className="bg-blue-100 rounded-lg p-4">
          
          {/* Header */}
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggle(index)}
          >
            <h4 className="font-semibold text-blue-500">
              {item.title}
            </h4>
            <span>
              {openIndexes.includes(index) ? <HugeiconsIcon icon={ArrowUp01FreeIcons} size={24} color="black" strokeWidth={1.5} /> : <HugeiconsIcon icon={ArrowDown01FreeIcons} size={24} color="black" strokeWidth={1.5} />}
            </span>
          </div>

          {/* Content */}
          <div className={`overflow-hidden transition-all duration-300 ease-in-out ${ openIndexes.includes(index) ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
            <ul className="mt-3 text-sm text-gray-500 space-y-2 list-disc pl-5">
              {item.items.map((text, i) => (
                <li key={i}>{text}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}