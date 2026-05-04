export default function Accreditation() {
  return (
    <section className="bg-transparent ">
      <div className="w-full flex flex-col items-center">
        <div className="bg-white max-w-7xl flex flex-col p-4 rounded-xl shadow-md">
          <h3 className="w-full text-xl font-semibold mb-4">
            Akreditasi Prodi Teknik Informatika
          </h3>

          <embed 
            className="w-full h-200 aspect-video" 
            src="/SERTIFIKAT AKREDITASI NGANJUK.pdf#zoom=100" 
            type="application/pdf"
          />
        </div>
      </div>
    </section>
  );
}