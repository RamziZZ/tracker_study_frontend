"use client";

import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowDown01FreeIcons, ArrowUp01FreeIcons } from "@hugeicons/core-free-icons"

import { useState } from "react";

export default function ProgramStudy() {
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
      title: "Visi ",
      describe: "none",
      items: ["Menjadi Program Studi unggulan dibidang Teknik Informatika yang menghasilkan Sarjana Terapan berdaya saing di Asia tahun 2035."
            ],
    },
    {
      title: "Misi",
      items: ["Menyelenggarakan pendidikan vokasi untuk menghasilkan lulusan yang kompeten dan inovatif sehingga mampu bersaing di tingkat nasional dan internasional.", 
              "Menyelenggarakan pengembangan ilmu pengetahuan dan teknologi terapan di bidang Teknik Informatika untuk diimplementasikan dalam kegiatan pendidikan, penelitian dan pengabdian kepada masyarakat",
              "Menjalin kerjasama dalam maupun luar negeri guna meningkatkan mutu pendidikan, penelitian dan pengabdian kepada masyarakat.",
            ],
    },
    {
      title: "Tujuan",
      describe: "Guna tercapainya visi misi program studi maka perlu menetapkan tujuan program studi yang didasari pada relevansi, atmosfir akademik, manajemen internal, keberlanjutan dan efisiensi yang akan menghasilkan lulusan yang :",
      items: ["Mampu mengembangkan sistem informasi dan melakukan pengelolaan sumberdaya informasi dengan berbagai teknik dan metode.",
              "Mampu membuat perangkat lunak baik berbasis desktop, website, maupun mobile untuk diterapkan pada berbagai bidang keilmuan.",
              "Mampu melaksanakan tugas sebagai staf, penyelia, hingga menjalankan fungsi manajerial tingkat menengah dalam bidang informatika",
              "Memiliki kemampuan berwirausaha yang kompetitif dalam bidang informatika maupun bidang lainnya.",
            ],
    },
    {
      title: "Sasaran",
      items: ["Mampu mendemostrasikan pengetahuan dan kemampuan yang berkaitan dengan kewirausahaan.",
              "Mampu mendemostrasikan pengetahuan dan kemampuan yang berkaitan dengan manajemen proyek. ",
              "Mampu mengembangkan produk startup",
            ],
    },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 w-full space-y-4">
      
      <h3 className="text-lg font-semibold mb-4 text-gray-900">
        Program Studi Sarjana Terapan (D4) Teknik Informatika
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
            {item.describe !== "none" && (
              <p className="text-sm text-gray-500 space-y-2 pl-1">{item.describe}</p>
            )}
            <ul className="text-sm text-gray-500 space-y-2 list-disc pl-5">
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