import Image from "next/image";
import { HugeiconsIcon } from '@hugeicons/react'
import { Mortarboard02FreeIcons, ArrowRight02FreeIcons } from '@hugeicons/core-free-icons'

const EventCard = ({name, image, date, location}) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image src={image} alt={name} width={400} height={200} />
            <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{name}</h3>
                <p className="text-gray-600 mb-2">{date}</p>
                <p className="text-gray-600 mb-4">{location}</p>
                <button className="flex items-center text-blue-500 hover:text-blue-700">
                    <span>Learn More</span>
                    <HugeiconsIcon icon={ArrowRight02FreeIcons} />
                </button>
            </div>
        </div>
    );
};

export default EventCard;