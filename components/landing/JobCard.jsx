export default function JobCard({ title, company, image }) {
  return (
    <div className="bg-white rounded-xl shadow p-4">
      <div className="flex items-center gap-3 mb-3">
        <img src={image} alt={company} className="w-10 h-10" />
        <div>
          <h3 className="font-semibold">{title}</h3>
          <p className="text-sm text-gray-500">{company}</p>
        </div>
      </div>

      <div className="text-sm text-gray-400 mb-2">
        7 Maret - 7 Mei 2026
      </div>

      <div className="flex gap-2 mb-3">
        <span className="px-3 py-1 text-xs bg-gray-200 rounded-full">
          Onsite
        </span>
        <span className="px-3 py-1 text-xs bg-gray-200 rounded-full">
          Fulltime
        </span>
      </div>

      <button className="w-full bg-blue-800 text-white py-2 rounded-full">
        Selengkapnya
      </button>
    </div>
  );
}