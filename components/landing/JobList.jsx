export default function JobList() {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold text-center text-gray-800">
        Temukan Langkah Selanjutnya
        <br /> dalam Karier Anda
      </h2>

      <div className="grid md:grid-cols-3 gap-6 mt-10">
        {[1,2,3,4,5,6].map((item) => (
          <div
            key={item}
            className="bg-white p-4 rounded-xl shadow-sm border"
          >
            <h3 className="font-semibold">Frontend Developer</h3>
            <p className="text-sm text-gray-500 mt-1">
              Perusahaan XYZ
            </p>

            <button className="mt-4 w-full bg-blue-700 text-white py-2 rounded-lg">
              Selengkapnya
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}