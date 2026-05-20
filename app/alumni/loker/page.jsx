// import { LokerAlumniCard } from "../../../components/forms/form_loker_alumni";

import JobCard from "@/components/shared/jobCard";

export default function AlumniLokerPage() {
  return (
    <main className="p-6">
      <div className="mb-8">
        {/* <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Info Loker</p> */}
        <h1 className="mt-3 text-3xl font-semibold text-slate-900">Informasi Lowongan Kerja</h1>
        <p className="mt-2 text-sm text-slate-600">
          Daftar lowongan kerja terbaru dari perusahaan-perusahaan terkemuka.
        </p>
      </div>
      <div className='w-full'>
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
      </div>
    </main>
  );
}
