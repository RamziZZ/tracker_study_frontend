export default function Footer() {
  return (
    <footer className="bg-[#2f4a8a] text-white mt-10">
      
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        
        {/* Kiri */}
        <div>
          <h2 className="font-semibold text-lg mb-2">
            PRODI D4 Teknik Informatika <br />
            PSDKU Kab. Nganjuk
          </h2>
          <p className="text-sm text-gray-200 mb-4">
            Jl. Gatot Subroto 2, Kauman, Kec. Nganjuk, Kab. Nganjuk
          </p>

          {/* Sosial Icon */}
          <div className="flex gap-3">
            {["✉️", "📧", "📱", "📸", "🎵"].map((icon, i) => (
              <div
                key={i}
                className="bg-white/20 p-3 rounded-lg hover:bg-white/30 cursor-pointer"
              >
                {icon}
              </div>
            ))}
          </div>
        </div>

        {/* Tengah */}
        <div>
          <h3 className="font-semibold mb-3">Internal Link</h3>
          <ul className="space-y-2 text-sm text-gray-200">
            <li>• E-Learning JTI</li>
            <li>• Publikasi JTI</li>
            <li>• Pusat Karir Polije</li>
            <li>• SiM Online</li>
            <li>• Evaluasi Pembelajaran</li>
            <li>• JTI Surat</li>
            <li>• Ruang Baca</li>
            <li>• Pameran JTI</li>
            <li>• JTI Marchendise</li>
          </ul>
        </div>

        {/* Kanan */}
        <div>
          <h3 className="font-semibold mb-3">Other Link</h3>
          <ul className="space-y-2 text-sm text-gray-200">
            <li>• Politeknik Negeri Jember</li>
            <li>• LSP P1 POLIJE</li>
            <li>• Perpustakaan POLIJE</li>
            <li>• Jurnal POLIJE</li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="bg-[#1c2f5c] px-6 py-4 flex flex-col md:flex-row justify-between items-center text-sm">
        <span>TIF PSDKU Nganjuk</span>
        <span>2026@ Copyright RUWET Team</span>
      </div>
    </footer>
  );
}