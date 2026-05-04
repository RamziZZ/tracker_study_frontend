import { HugeiconsIcon } from '@hugeicons/react'
import { Location05FreeIcons } from "@hugeicons/core-free-icons"

export default function AboutCampus() {
  return (
    <section className="text-center flex flex-col items-center px-6 py-16">
      <h2 className="text-2xl font-bold mb-4">
        POLIJE PSDKU Kab. Nganjuk
      </h2>
      <p className="text-gray-600 max-w-3xl mx-auto mb-6">
        Program Studi Diluar Kampus Utama (PSDKU) Politeknik Negeri Jember di Kabupaten Nganjuk merupakan perwujudan komitmen Polije untuk memperluas akses pendidikan tinggi vokasi yang berkualitas. Kampus 3 Nganjuk hadir sebagai solusi bagi talenta muda daerah untuk meraih gelar pendidikan negeri tanpa harus jauh meninggalkan rumah. Memiliki 2 Program Studi yang mendukung pengembangan potensi daerah yaitu Program Studi Sarjana Terapan (D4) Teknik Informatika dan D3 Manajemen Agribisnis.
      </p>

      <a href="https://maps.app.goo.gl/Ju6SkEcmFuPcenis5" target="_blank" className="bg-blue-500 w-fit flex flex-row gap-2 justify-center items-center text-start text-xs md:text-sm text-white px-6 py-3 rounded-full shadow hover:bg-blue-400 hover:shadow-blue-300 active:bg-blue-300 duration-300 cursor-pointer">
        <HugeiconsIcon icon={Location05FreeIcons} size={24} color="white" strokeWidth={1.5} />
        Jl. Gatot Subroto No 02, Nganjuk - Jawa Timur
      </a>
    </section>
  );
}