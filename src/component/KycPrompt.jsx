import { X, ChevronRight } from "lucide-react";

function KycPrompt() {
  return (
    <>
      <div className="px-5">
        <div className="flex items-center justify-between  p-2 rounded-xl  w-full bg-white  ">
          <span className="text-black font-medium">KYC</span>
          <div className="flex items-center">
            <div className="flex items-center gap-2 bg-red-500 text-white text-sm font-semibold px-3 py-0.5 rounded-full">
              {/* <Check size={14} /> */}
              <X size={14}/>
              Unverified
            </div>
            <ChevronRight />
          </div>
        </div>
      </div>
      {/* <hr className="mx-2 mt-1 text-gray-200" /> */}
    </>
  );
}

export default KycPrompt;
