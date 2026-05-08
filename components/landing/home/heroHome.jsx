import Image from "next/image";

export default function HeroHome() {
  return (
    <section className="max-w-7xl mx-auto px-10 py-16 flex flex-row md:flex-row items-center gap-10">
      <div className="flex flex-col w-full">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight text-center lg:text-start">
          Jejak Langkahmu, <br />
          <span className="text-blue-500">Kebanggaan Kami</span>
        </h1>

        <p className="mt-4 text-sm md:text-lg text-gray-600 text-center lg:text-start">
          Bantu kami memetakan kesuksesan lulusan dan tingkatkan kualitas
          almamater. Kontribusi kecil Anda hari ini adalah inspirasi besar bagi
          adik tingkat di masa depan.
        </p>

        <div className="mt-6 flex flex-col md:flex-row w-full gap-4  text-xs md:text-md">
          <a
            href="/alumni/kuisioner"
            className="bg-blue-500 flex justify-center w-full text-white text-lg px-6 py-4 rounded-full hover:bg-blue-400 hover:text-blue- hover:shadow-lg shadow-blue-300/75 hover:scale-105 active:bg-blue-500 duration-300 cursor-pointer"
          >
            Isi Kuisioner
          </a>
          <a
            href="/cari-alumni"
            className="w-full flex justify-center border border-blue-500 text-blue-500 text-lg px-6 py-4 rounded-full hover:bg-blue-500 hover:text-blue-50 hover:shadow-lg shadow-blue-300/75 hover:scale-105 active:bg-blue-400 duration-300 cursor-pointer"
          >
            Lihat Alumni
          </a>
        </div>
      </div>

      <div className="hidden lg:flex w-full">
        <Image
          alt=""
          src={"/hero/hero-image-resize.webp"}
          width={300}
          height={300}
          className="w-full"
        />
      </div>
    </section>
  );
}
