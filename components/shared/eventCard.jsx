import Image from "next/image";
import { HugeiconsIcon } from '@hugeicons/react'
import { PinLocation01FreeIcons, Money03FreeIcons, Chair02FreeIcons, Calendar03FreeIcons, ArrowRight02FreeIcons } from '@hugeicons/core-free-icons'

const EventCard = ({label, thumbnail, location, type, calender, cost, quota}) => {
    return (
        <div
            className="bg-white w-full flex flex-col gap-5 p-4 rounded-[25px]"
        >
            <Image alt="" src={thumbnail} width={72} height={72} className="w-full aspect-video rounded-xl"/>

            <div className="w-full flex flex-col gap-5">
                <div className="w-full flex flex-col gap-5">
                    <div className="w-full flex flex-col gap-2.5">
                        <div className="w-full flex flex-wrap flex-row gap-2.5">
                            <div className="w-fit flex justify-center items-center py-1.5 px-2.5 bg-blue-100 text-blue-700 rounded-md text-xs gap-2.5">
                                <p className="text-xs">{type}</p>
                            </div>

                            <div className="w-fit flex justify-center items-center py-1.5 px-2.5 bg-blue-100 text-blue-700 rounded-md text-xs gap-2.5">
                                <HugeiconsIcon icon={Money03FreeIcons} size={18} color="currentColor" strokeWidth={1.5} />
                                <p className="text-xs">{'Rp. ' + cost}</p>
                            </div>

                            <div className="w-fit flex justify-center items-center py-1.5 px-2.5 bg-blue-100 text-blue-700 rounded-md text-xs gap-2.5">
                                <HugeiconsIcon icon={Chair02FreeIcons} size={18} color="currentColor" strokeWidth={1.5} />
                                <p className="text-xs">{quota}</p>
                            </div>
                        </div>

                        <h3 className="text-base font-semibold">{label}</h3>
                    </div>

                    <div className="w-full flex flex-col gap-2.5">
                        <div className="w-full h-fit flex flex-row items-start gap-2 text-xs text-gray-500">
                            <HugeiconsIcon icon={PinLocation01FreeIcons} size={18} className="shrink-0" color="currentColor" strokeWidth={1.5} />
                            <p>{location}</p>
                        </div>

                        <div className="w-full h-fit flex flex-row items-center gap-2 text-xs text-gray-500">
                            <HugeiconsIcon icon={Calendar03FreeIcons} size={18} className="shrink-0" color="currentColor" strokeWidth={1.5} />
                            <p className="w-full">{calender}</p>
                        </div>
                    </div>
                    
                </div>
                <div className="w-full flex justify-end gap-2">
                    <a className="w-full flex flex-row items-center justify-center gap-1 px-5 bg-blue-500 text-blue-50 text-xs font-normal py-2.5 rounded-full hover:bg-blue-400 active:bg-blue-100 duration-300 cursor-pointer">
                        Daftar
                    </a>

                    <button className="w-full flex flex-row items-center justify-center gap-1 px-5 bg-transparent text-blue-500 text-xs font-normal py-2.5 rounded-full hover:bg-blue-200 active:bg-blue-100 duration-300 cursor-pointer">
                        Lihat Detail
                        <HugeiconsIcon icon={ArrowRight02FreeIcons} size={18} color="currentColor" strokeWidth={1.5} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default EventCard;