import JobCard from '@/components/shared/jobCard'

export default function JobList() {
  return (
    <section className="py-16 px-10 w-full mx-auto flex flex-col items-center">
      <div className="w-full flex flex-col gap-5 items-center">
        <h2 className="text-2xl md:text-4xl font-semibold text-center text-gray-900">
          Temukan Langkah Selanjutnya
          <br /> dalam Karier Anda
        </h2>
        <p className="text-sm md:text-lg text-center text-gray-600">
          Akses terbuka untuk publik. Menghubungkan telanta terbaik dengan perusahaan
        </p>
      </div>
      
      <div className='w-full max-w-7xl'>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-15">
          {[1,2,3,4,5,6].map((item) => (
            <JobCard
              key={item}
              label={'Fron End Dev'}
              company={'Canva'}
              comp_image={'/test_company.png'}
              periode={'3 Mar - 2 Aug 2026'}
              time={'Fulltime'}
              type={'Onsite'}
            />
          ))}
        </div>
      </div>
    </section>
  );
}