import Image from "next/image";
import { HugeiconsIcon } from '@hugeicons/react'
import { Mortarboard02FreeIcons, ArrowRight02FreeIcons } from '@hugeicons/core-free-icons'

const AlumniCard = ({name, image, nim, graduate}) => {
    return (
        <div
            className="bg-white w-full flex flex-row gap-5 p-4 rounded-4xl shadow-sm"
        >
            <div className="relative w-40 h-40 rounded-2xl overflow-hidden shrink-0">
                <Image alt="" src={image} fill className="object-cover"/>
            </div>

            <div className="w-full flex flex-row items-start gap-5">
                <div className="w-full flex flex-col gap-2.5">
                    <h3 className="text-base font-semibold">{name}</h3>

                    <div className="w-full flex flex-col gap-2">
                        <div className="w-fit flex justify-center py-2.5 px-5 border border-blue-300 rounded-md text-xs">

                            <p>{'NIM: '+nim}</p>
                        </div>
                        <div className="w-fit flex justify-center items-center py-2.5 px-5 bg-blue-100 text-blue-700 rounded-md text-xs gap-2.5">
                            <HugeiconsIcon icon={Mortarboard02FreeIcons} size={18} color="currentColor" strokeWidth={1.5} />
                            <p>{graduate}</p>
                        </div>
                    </div>
                    <div className="w-full flex justify-end">
                        <button className="w-fit flex flex-row items-center gap-1 px-5 bg-transparent text-blue-500 text-sm font-medium py-2.5 rounded-full hover:bg-blue-50 active:bg-blue-100 duration-300 cursor-pointer">
                            Selengkapnya
                            <HugeiconsIcon icon={ArrowRight02FreeIcons} size={18} color="currentColor" strokeWidth={1.5} />
                        </button>
                    </div>
                </div>
                
               
                {/* <button className="mt-4 w-full bg-blue-800 text-white text-xs font-normal py-2.5 rounded-full hover:bg-blue-600 hover:text-blue-50 active:bg-blue-500 duration-300 cursor-pointer">
                Selengkapnya
                </button> */}
            </div>
        </div>
    )
}

export default AlumniCard;