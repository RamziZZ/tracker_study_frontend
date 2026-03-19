export default function ProgramStudy() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 w-full">
      
      <h3 className="text-lg font-semibold mb-4 text-gray-900">
        Program Studi Sarjana Terapan (D4) Teknik Informatika
      </h3>

      {/* VISI */}
      <div className="mb-4">
        <h4 className="font-semibold text-blue-700 mb-1">Visi</h4>
        <p className="text-sm text-gray-700 leading-relaxed">
          Menjadi Program Studi unggulan dibidang Teknik Informatika yang menghasilkan
          Sarjana Terapan berdaya saing di Asia tahun 2035.
        </p>
      </div>

      {/* MISI */}
      <div className="mb-4">
        <h4 className="font-semibold text-blue-700 mb-1">Misi</h4>
        <ol className="text-sm text-gray-700 list-decimal pl-5 space-y-1 leading-relaxed">
          <li>Menyelenggarakan pendidikan vokasi untuk menghasilkan lulusan yang kompeten
              dan inovatif sehingga mampu bersaing di tingkat nasional dan internasional.</li>
          <li>Menyelenggarakan pengembangan ilmu pengetahuan dan teknologi terapan di bidang 
              Teknik Informatika untuk diimplementasikan dalam kegiatan pendidikan, 
              penelitian dan pengabdian kepada masyarakat.</li>
          <li>Menjalin kerjasama dalam maupun luar negeri guna meningkatkan mutu pendidikan, 
              penelitian dan pengabdian kepada masyarakat.</li>
        </ol>
      </div>

      {/* TUJUAN */}
      <div className="mb-4">
        <h4 className="font-semibold text-blue-700 mb-1">Tujuan</h4>
        <p className="text-sm text-gray-700 mb-2 leading-relaxed">
          Guna tercapainya visi misi program studi maka perlu menetapkan tujuan 
          program studi yang didasari pada relevansi, atmosfir akademik, manajemen 
          internal, keberlanjutan dan efisiensi yang akan menghasilkan lulusan yang :
        </p>
        <ol className="text-sm text-gray-700 list-[lower-alpha] pl-5 space-y-1 leading-relaxed">
          <li>Mampu mengembangkan sistem informasi dan melakukan pengelolaan 
              sumberdaya informasi dengan berbagai teknik dan metode.</li>
          <li>Mampu membuat perangkat lunak baik berbasis desktop, website, 
              maupun mobile untuk diterapkan pada berbagai bidang keilmuan.</li>
          <li>Mampu melaksanakan tugas sebagai staf, penyelia, hingga menjalankan 
              fungsi manajerial tingkat menengah dalam bidang informatika.</li>
          <li>Memiliki kemampuan berwirausaha yang kompetitif 
              dalam bidang informatika maupun bidang lainnya.</li>
        </ol>
      </div>

      {/* SASARAN */}
      <div>
        <h4 className="font-semibold text-blue-700 mb-1">Sasaran</h4>
        <p className="text-sm text-gray-700 mb-2 leading-relaxed">
          Sasaran program studi teknik informatika adalah:
        </p>
        <ol className="text-sm text-gray-700 list-[lower-roman] pl-5 space-y-1 leading-relaxed">
          <li>Meluasnya akses dan meningkatkan mutu dan relevansi pendidikan 
              sehingga dapat menghasilkan lulusan Program Studi Teknik Informatika 
              yang berkarakter, berdaya saing, dan sesuai dengan kebutuhan masyarakat.</li>
          <li>Menghasilkan penelitian dan pengabdian pada masyarakat 
              yang berkualitas, dan berdaya inovasi tinggi.</li>
          <li>Mewujudnya tata kelola program studi yang 
              sesuai dengan Good Polytechnic Governance.</li>
          <li>Peningkatan hasil dan manfaat kerjasama dengan calon pengguna 
              lulusan, dengan lembaga lain dan dengan kampus luar negeri.</li>
          <li>Meningkatkan kreatifitas dan prestasi mahasiswa 
              pada kompetisi tingkat nasional maupun internasional.</li>
          <li>Meningkatkan kemampuan berwirausaha 
              khususnya dibidang informatika.</li>
        </ol>
      </div>

    </div>
  );
}