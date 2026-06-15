import { HugeiconsIcon } from "@hugeicons/react";
import {
  PinLocation01FreeIcons,
  SmartWatch04FreeIcons,
  ArrowRight02FreeIcons,
  PencilEdit02FreeIcons,
  Delete02FreeIcons,
} from "@hugeicons/core-free-icons";

const JobCard = ({
  label,
  company,
  comp_image,
  periode,
  type,
  time,
  onEdit,
  onDelete,
  onDetail,
}) => {
  return (
    <div className="bg-white w-full flex flex-col gap-5 p-6 rounded-4xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
      <div className="w-full flex flex-col justify-between gap-4">
        <div className="w-full flex flex-col gap-3">
          <div className="space-y-1">
            <h3 className="text-base font-bold text-slate-900 line-clamp-1">
              {label}
            </h3>
            <p className="text-sm font-medium text-blue-600">{company}</p>
          </div>

          <div className="w-full flex flex-col gap-2">
            <div className="w-full flex justify-center py-2 border border-blue-200 bg-blue-50/30 rounded-lg text-xs font-medium text-blue-700">
              <p>{periode}</p>
            </div>
            <div className="w-full flex flex-row gap-2">
              <div className="w-full flex justify-center items-center py-2.5 bg-blue-100 text-blue-700 rounded-md text-xs gap-2.5">
                <HugeiconsIcon
                  icon={PinLocation01FreeIcons}
                  size={18}
                  color="currentColor"
                  strokeWidth={1.5}
                />
                <p>{type}</p>
              </div>
              <div className="w-full flex justify-center items-center py-2.5 bg-blue-100 text-blue-700 rounded-md text-xs gap-2.5">
                <HugeiconsIcon
                  icon={SmartWatch04FreeIcons}
                  size={18}
                  color="currentColor"
                  strokeWidth={1.5}
                />
                <p>{time}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-between items-center pt-2 border-t border-slate-50">
          <div className="flex gap-1">
            <button
              onClick={onEdit}
              className="p-2 text-amber-500 hover:bg-amber-50 rounded-full transition-all cursor-pointer"
              title="Edit Loker"
            >
              <HugeiconsIcon icon={PencilEdit02FreeIcons} size={18} />
            </button>
            <button
              onClick={onDelete}
              className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-all cursor-pointer"
              title="Hapus Loker"
            >
              <HugeiconsIcon icon={Delete02FreeIcons} size={18} />
            </button>
          </div>
          <button
            onClick={onDetail}
            className="w-fit flex flex-row items-center gap-1 px-4 bg-transparent text-blue-500 text-xs font-bold py-2 rounded-full hover:bg-blue-50 active:bg-blue-100 duration-300 cursor-pointer"
          >
            Selengkapnya
            <HugeiconsIcon
              icon={ArrowRight02FreeIcons}
              size={18}
              color="currentColor"
              strokeWidth={1.5}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
