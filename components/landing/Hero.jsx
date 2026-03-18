export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-10 py-16 bg-white">
      <div className="max-w-xl">
        <h1 className="text-4xl font-bold mb-4">
          Politeknik Negeri Jember
        </h1>
        <p className="text-gray-600 mb-6">
          Politeknik Negeri Jember merupakan perguruan tinggi yang menyelenggarakan pendidikan vokasional, yaitu program pendidikan yang mengarah proses belajar mengajar pada tingkat keahlian, keterampilan, dan standar kompetensi yang spesifik sesuai dengan kebutuhan pasar kerja dan stakeholder, serta mempunyai kemandirian dalam berkarya dan berwirausaha berbasis IPTEKS yang diperolehnya.
        </p>

        <button className="bg-blue-600 text-white px-6 py-3 rounded-full shadow">
          📍 Jl. Mastrip PO BOX 164, Jember - Jawa Timur - Indonesia
        </button>
      </div>

      <div className="mt-10 md:mt-0">
        <img
          src="/logo-polije.png"
          alt="logo"
          className="w-72"
        />
      </div>
    </section>
  );
}