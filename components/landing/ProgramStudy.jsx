export default function ProgramStudy() {
  return (
    <div className="bg-white p-6 rounded-xl shadow space-y-6">
      
      <h3 className="text-xl font-semibold">
        Program Studi Sarjana Terapan (D4) Teknik Informatika
      </h3>

      {/* VISI */}
      <div>
        <h4 className="font-semibold text-blue-700 mb-2">Visi</h4>
        <p className="text-gray-600 text-sm">
          Menjadi Program Studi unggulan dibidang Teknik Informatika yang menghasilkan
          Sarjana Terapan berdaya saing di Asia tahun 2035.
        </p>
      </div>

      {/* MISI */}
      <div>
        <h4 className="font-semibold text-blue-700 mb-2">Misi</h4>
        <ul className="text-gray-600 text-sm space-y-2 list-disc pl-5">
          <li>
            Menyelenggarakan pendidikan vokasi untuk menghasilkan lulusan yang kompeten dan inovatif
            sehingga mampu bersaing di tingkat nasional dan internasional.
          </li>
          <li>
            Menyelenggarakan pengembangan ilmu pengetahuan dan teknologi terapan di bidang Teknik Informatika.
          </li>
          <li>
            Menjalin kerjasama dalam maupun luar negeri guna meningkatkan mutu pendidikan, penelitian dan pengabdian.
          </li>
        </ul>
      </div>

      {/* TUJUAN */}
      <div>
        <h4 className="font-semibold text-blue-700 mb-2">Tujuan</h4>
        <ul className="text-gray-600 text-sm space-y-2 list-disc pl-5">
          <li>Mampu mengembangkan sistem informasi dan pengelolaan sumber daya informasi.</li>
          <li>Mampu membuat perangkat lunak desktop, web, maupun mobile.</li>
          <li>Mampu menjalankan fungsi manajerial tingkat menengah di bidang informatika.</li>
          <li>Memiliki kemampuan berwirausaha yang kompetitif.</li>
        </ul>
      </div>

      {/* SASARAN */}
      <div>
        <h4 className="font-semibold text-blue-700 mb-2">Sasaran</h4>
        <ul className="text-gray-600 text-sm space-y-2 list-disc pl-5">
          <li>Meningkatkan mutu dan relevansi pendidikan.</li>
          <li>Menghasilkan penelitian dan pengabdian berkualitas.</li>
          <li>Mewujudkan tata kelola program studi yang baik.</li>
          <li>Meningkatkan kerja sama dengan berbagai pihak.</li>
          <li>Meningkatkan prestasi mahasiswa tingkat nasional & internasional.</li>
          <li>Meningkatkan kemampuan berwirausaha di bidang informatika.</li>
        </ul>
      </div>

    </div>
  );
}