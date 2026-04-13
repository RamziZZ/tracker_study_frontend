export default function SearchSection() {
  return (
    <section className="px-10 py-16 bg-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-2">
          Cari Informasi Lowongan Kerja Disini
        </h1>
        <p className="text-gray-500 mb-6">
          Masukkan nama dari alumni yang akan kamu cari
        </p>

        {/* Input */}
        <input
          type="text"
          placeholder="masukkan nama loker disini..."
          className="w-full p-3 rounded-full border mb-4"
        />

        {/* Dropdown */}
        <div className="grid md:grid-cols-3 gap-4 mb-4">
          <select className="p-3 rounded-full border">
            <option>Semua Jenis/Type</option>
          </select>

          <select className="p-3 rounded-full border">
            <option>Semua Lokasi</option>
          </select>

          <select className="p-3 rounded-full border">
            <option>Semua Pembuat</option>
          </select>
        </div>

        {/* Button */}
        <button className="w-full bg-blue-800 text-white py-3 rounded-full">
          Cari Alumni
        </button>
      </div>
    </section>
  );
}