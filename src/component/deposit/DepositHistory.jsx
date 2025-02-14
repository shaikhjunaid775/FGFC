import { ChevronLeft } from "lucide-react";

function DepositHistory() {
  return (
    <>
      <div>
        {/* Header (Fixed) */}
        <div className="grid grid-cols-3 p-3 text-center shadow-md bg-white sticky top-0 z-10">
          <button>
            <ChevronLeft />
          </button>
          <span className="font-semibold text-lg whitespace-nowrap">
            Add Bank
          </span>
        </div>
        <div className="">
          <div className="relative overflow-x-auto  m-3 rounded-xl bg-white shadow-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
              <thead className=" text-gray-700 capitilize bg-gradient-to-r from-primary to-secondary whitespace-nowrap">
                <tr className="text-center">
                  <th className="px-3 py-1">Sr</th>
                  <th className="px-3 py-1">Fullname</th>
                  <th className="px-3 py-1">Member ID</th>
                  <th className="px-3 py-1">Top-up Amount</th>
                  <th className="px-3 py-1">Top-up Active Date</th>
                </tr>
              </thead>
              <tbody>
                <tr className=" even:bg-gray-50 odd:bg-[#fdf8ea] border-b whitespace-nowrap">
                  <td
                    scope="row"
                    className="px-3 py-1 font-medium text-gray-900 whitespace-nowrap "
                  >
                    1
                  </td>
                  <td className="px-3 py-1 font-medium text-gray-900 whitespace-nowrap">
                    test
                  </td>
                  <td className="px-3 py-1 font-medium text-gray-900 whitespace-nowrap">
                    test
                  </td>
                  <td className="px-3 py-1 font-medium text-gray-900 whitespace-nowrap">
                    ₹ 100
                  </td>
                  <td className="px-3 py-1 font-medium text-gray-900 whitespace-nowrap">
                    12/10/2025
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default DepositHistory;
