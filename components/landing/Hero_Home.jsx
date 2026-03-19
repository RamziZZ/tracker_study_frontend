export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-10">
      <div className="flex-1">
        <h1 className="text-4xl font-bold text-gray-800 leading-tight">
          Jejak Langkahmu, <br />
          <span className="text-blue-700">Kebanggaan Kami</span>
        </h1>

        <p className="mt-4 text-gray-600">
          Bantu kami memetakan kesuksesan lulusan dan tingkatkan kualitas
          almamater.
        </p>

        <div className="mt-6 flex gap-4">
          <button className="bg-blue-700 text-white px-6 py-2 rounded-full">
            Isi Kuisioner
          </button>
          <button className="border px-6 py-2 rounded-full">
            Lihat Alumni
          </button>
        </div>
      </div>

      <div className="flex-1">
        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <p className="text-gray-500">[ Gambar Landing ]</p>
        </div>
      </div>
    </section>
  );
}