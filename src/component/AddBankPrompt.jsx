import { X, ChevronRight } from "lucide-react";

function AddBankPrompt() {
  return (
    <>
      <div className="px-5">
        <div className="flex items-center justify-between  p-2 rounded-2xl  w-full bg-white   ">
          <span className="text-black font-medium">Add Bank Details</span>
          <div className="flex items-center">
            <div className="flex items-center gap-2 bg-red-500 text-white text-sm font-semibold px-3 py-0.5 rounded-full">
              {/* <UnCheck  /> */}
              <X size={14}/>
              Pending
            </div>
            <ChevronRight />
          </div>
        </div>
      </div>
      {/* <hr className="mx-2 mt-1 text-gray-200" /> */}
    </>
  );
}

export default AddBankPrompt;
