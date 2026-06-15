export default function JobCardSkeleton() {
  return (
    <div className="w-full h-fit p-6 bg-white border gap-4 border-gray-100 rounded-3xl animate-pulse flex flex-row shadow-sm">
        {/* Wireframe Logo Perusahaan */}
        <div className="aspect-square h-16 bg-gray-200 rounded-2xl mb-5" />
        
        <div className="w-full flex flex-col">
            {/* Wireframe Judul Pekerjaan */}
            <div className="h-8  bg-gray-200 rounded-lg w-11/12 mb-3" />
            
            {/* Wireframe Nama Perusahaan */}
            <div className="h-6 bg-gray-200 rounded-lg w-1/2 mb-6" />

            {/* Wireframe Periode */}
            <div className="flex items-center gap-2 mb-8">
                <div className="w-full h-6 bg-gray-200 rounded-full" />
                <div className="w-full h-6 bg-gray-200 rounded-lg" />
            </div>

            {/* Wireframe Badges/Tags (Time & Type) */}
            <div className="mt-auto flex justify-end gap-3">
                <div className="h-8 w-24 bg-gray-100 rounded-full" />
                {/* <div className="h-8 w-20 bg-gray-100 rounded-full" /> */}
            </div>
        </div>
    </div>
  );
}
