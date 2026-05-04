import JobCard from '@/components/ui/job-card'

export default function JobList() {
  return (
    <section className=" py-16 px-10 w-full mx-auto">
      <div className="w-full flex flex-col gap-5 items-center">
        <h2 className="text-2xl md:text-4xl font-semibold text-center text-gray-900">
          Hasil Pencarian Anda
          {/* <br /> dalam Karier Anda */}
        </h2>
        {/* <p className="text-sm md:text-lg text-center text-gray-600">
          Akses terbuka untuk publik. Menghubungkan telanta terbaik dengan perusahaan
        </p> */}
      </div>
      

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
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
    </section>
  );
}