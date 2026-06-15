const EventCardSkeleton = () => {
    return (
        <div className="bg-white/75 w-full flex flex-col gap-5 p-4 rounded-[25px] animate-pulse">
            {/* Thumbnail Placeholder */}
            <div className="w-full aspect-video rounded-xl bg-gray-200" />
            
            <div className="w-full flex flex-col gap-5">
            <div className="w-full flex flex-col gap-5">
                <div className="w-full flex flex-col gap-2.5">
                {/* Badges Placeholder */}
                <div className="w-full flex flex-wrap flex-row gap-2.5">
                    <div className="w-16 h-6 bg-gray-100/75 rounded-md" />
                    <div className="w-20 h-6 bg-gray-100/75 rounded-md" />
                    <div className="w-12 h-6 bg-gray-100/75 rounded-md" />
                </div>
                {/* Title Placeholder */}
                <div className="h-5 w-3/4 bg-gray-200 rounded mt-2" />
                </div>

                <div className="w-full flex flex-col gap-2.5">
                {/* Location & Calendar Placeholder */}
                <div className="h-3 w-full bg-gray-100 rounded" />
                <div className="h-3 w-1/2 bg-gray-100 rounded" />
                </div>
            </div>
            
            {/* Buttons Placeholder */}
            <div className="w-full flex justify-end gap-2">
                <div className="h-9 w-full bg-gray-300 rounded-full" />
                <div className="h-9 w-full bg-gray-100 rounded-full" />
            </div>
            </div>
        </div>
    );
}
export default EventCardSkeleton;
