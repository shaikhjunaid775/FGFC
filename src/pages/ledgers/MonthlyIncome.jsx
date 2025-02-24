import { ChevronLeft } from "lucide-react";
import { useState } from "react";
import { CSVLink } from "react-csv";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import "jspdf-autotable";
import Datepicker from "tailwind-datepicker-react";
import Footer from "../../component/Footer";
import { useNavigate } from "react-router-dom";

function MonthlyIncome() {
  const [showStart, setShowStart] = useState(false);
  const [showEnd, setShowEnd] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const navigate = useNavigate();
  const options = {
    autoHide: true,
    todayBtn: false,
    clearBtn: true,
    placement: "start", // Ensures it opens downward
    theme: {
      background: "bg-white",
      text: "text-gray-900",
      primary: "border border-primary focus:ring-primary", // 👈 Custom border color
      secondary: "bg-gray-200",
      disabled: "bg-gray-300"
    },
    icons: {
      prev: () => <span>{"<"}</span>,
      next: () => <span>{">"}</span>
    }
  };
  const rowsPerPage = 5;

  const data = [
    {
      id: 1,
      date: "2025-10-12",
      particulars: "Investment Return",
      monthlyProfit: "₹ 1000",
      slab: "Gold",
      payoutDate: "2025-11-12",
      status: "Completed"
    },
    {
      id: 2,
      date: "2025-09-15",
      particulars: "Monthly Bonus",
      monthlyProfit: "₹ 1500",
      slab: "Silver",
      payoutDate: "2025-10-15",
      status: "Pending"
    },
    {
      id: 3,
      date: "2025-10-10",
      particulars: "Referral Bonus",
      monthlyProfit: "₹ 2000",
      slab: "Platinum",
      payoutDate: "2025-11-10",
      status: "Completed"
    },
    {
      id: 4,
      date: "2025-08-22",
      particulars: "Investment Return",
      monthlyProfit: "₹ 2500",
      slab: "Gold",
      payoutDate: "2025-09-22",
      status: "Completed"
    },
    {
      id: 5,
      date: "2025-11-05",
      particulars: "Monthly Profit",
      monthlyProfit: "₹ 3000",
      slab: "Diamond",
      payoutDate: "2025-12-05",
      status: "Pending"
    },
    {
      id: 6,
      date: "2025-07-18",
      particulars: "Bonus Reward",
      monthlyProfit: "₹ 3500",
      slab: "Silver",
      payoutDate: "2025-08-18",
      status: "Completed"
    },
    {
      id: 7,
      date: "2025-06-30",
      particulars: "Profit Share",
      monthlyProfit: "₹ 4000",
      slab: "Gold",
      payoutDate: "2025-07-30",
      status: "Pending"
    }
  ];

  const isWithinDateRange = (date) => {
    if (!startDate && !endDate) return true;
    const dateObj = new Date(date);
    const start = startDate ? new Date(startDate) : null;
    const end = endDate ? new Date(endDate) : null;

    return (!start || dateObj >= start) && (!end || dateObj <= end);
  };

  const filteredData = data.filter((item) => isWithinDateRange(item.date));
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const paginatedData = filteredData.slice(
    startIndex,
    startIndex + rowsPerPage
  );

  const handleReset = () => {
    setStartDate(null);
    setEndDate(null);
    setCurrentPage(1); // Update parent state if applicable
  };

  // Copy to Clipboard
  const copyToClipboard = () => {
    const text = data
      .map(
        (row) =>
          `${row.id}\t${row.date}\t${row.particulars}\t${row.monthlyProfit}\t${row.slab}\t${row.payoutDate}\t${row.status}`
      )
      .join("\n");
    navigator.clipboard.writeText(text);
    alert("Data copied to clipboard!");
  };

  // Export to Excel
  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    XLSX.writeFile(workbook, "table_data.xlsx");
  };

  // Export to PDF
  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.text("Table Data", 20, 10);
    doc.autoTable({
      head: [
        [
          "Sr",
          "Date & Time",
          "Particulars",
          "Monthly Profit",
          "Slab",
          "Payout Date",
          "Status"
        ]
      ],
      body: data.map((row) => [
        row.id,
        row.date,
        row.particulars,
        row.monthlyProfit,
        row.slab,
        row.payoutDate,
        row.status
      ])
    });
    doc.save("table_data.pdf");
  };

  return (
    <>
      <div>
        {/* Header (Fixed) */}
        <div className="grid grid-cols-3 p-3 text-center shadow-md bg-white sticky top-0 z-10">
          <button onClick={() => navigate(-1)}>
            <ChevronLeft />
          </button>
          <span className="font-semibold text-lg whitespace-nowrap">
            Monthly Income
          </span>
        </div>
        <div className="p-4 pb-20">
          <div className="mb-4">
            <div className="grid grid-cols-2 gap-10">
              <div className="flex flex-col justify-space p-2 bg-primary text-black rounded-lg primary-gradient">
                <span className="text-md">Total Earning</span>
                <span className="text-2xl font-semibold">
                  ₹<span id="level-income">5000.00</span>
                </span>
              </div>
            </div>
          </div>
          {/* Export Buttons */}
          <div className="flex gap-2 mb-4">
            <button
              onClick={copyToClipboard}
              className="px-4 py-2 bg-gray-500 text-white rounded-md"
            >
              Copy
            </button>
            <CSVLink
              data={filteredData}
              filename="table_data.csv"
              className="px-4 py-2 bg-green-500 text-white rounded-md"
            >
              CSV
            </CSVLink>
            <button
              onClick={exportToExcel}
              className="px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              Excel
            </button>
            <button
              onClick={exportToPDF}
              className="px-4 py-2 bg-red-500 text-white rounded-md"
            >
              PDF
            </button>
          </div>

          {/* Date Filter */}
          <div className="mb-4 flex flex-col md:flex-row justify-end items-end gap-4">
            <div className="grid grid-cols-2 gap-3">
              {/* Start Date */}
              <div className="relative  md:w-auto w-full">
                <label className="font-semibold">Start Date: </label>
                <Datepicker
                  options={options}
                  onChange={(date) => setStartDate(date)}
                  show={showStart}
                  setShow={setShowStart}
                  className="bg-white text-gray-900 border border-primary p-2 rounded-md w-full" // 👈 Custom Input Styles
                />
              </div>

              {/* End Date */}
              <div className="relative md:w-auto w-full">
                <label className="font-semibold">End Date: </label>
                <Datepicker
                  options={options}
                  onChange={(date) => setEndDate(date)}
                  show={showEnd}
                  setShow={setShowEnd}
                  inputClassName="bg-white text-gray-900 border border-primary p-2 rounded-md w-full" // 👈 Custom Input Styles
                />
              </div>
            </div>
            {/* Reset Button */}
            <button
              onClick={handleReset}
               className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 h-fit w-full"
            >
              Reset
            </button>
          </div>

          {/* Table */}
          <div className="relative overflow-x-auto rounded-xl bg-white shadow-lg ">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-gray-700 bg-gradient-to-r from-primary to-secondary">
                <tr className="text-center whitespace-nowrap capitalize">
                  <th className="px-3 py-2">Sr</th>
                  <th className="px-3 py-2">date & Time</th>
                  <th className="px-3 py-2">particulars</th>
                  <th className="px-3 py-2">monthly Profit</th>
                  <th className="px-3 py-2">slab</th>
                  <th className="px-3 py-2">payoutDate</th>
                  <th className="px-3 py-2">status</th>
                </tr>
              </thead>
              <tbody>
                {paginatedData.length > 0 ? (
                  paginatedData.map((item, index) => (
                    <tr
                      key={item.id}
                      className="even:bg-gray-50 odd:bg-[#fdf8ea] border-b last:border-0 text-center whitespace-nowrap"
                    >
                      <td className="px-3 py-2 font-bold">
                        {startIndex + index + 1}
                      </td>
                      <td className="px-3 py-2">{item.date}</td>
                      <td className="px-3 py-2">{item.particulars}</td>
                      <td className="px-3 py-2">{item.monthlyProfit}</td>
                      <td className="px-3 py-2">{item.slab}</td>
                      <td className="px-3 py-2">{item.payoutDate}</td>
                      <td className="px-3 py-2">{item.status}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="text-center py-4 text-gray-500">
                      No records found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {filteredData.length > rowsPerPage && (
            <div className="flex justify-end items-center mt-4 gap-2">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-3 py-2 bg-primary border border-primary text-black rounded-lg disabled:bg-primary/5"
              >
                Previous
              </button>

              {/* Page Numbers */}
              {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-3 py-2 rounded-md ${
                      currentPage === page
                        ? "bg-primary text-white"
                        : "bg-gray-200"
                    }`}
                  >
                    {page}
                  </button>
                )
              )}

              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className="px-3 py-2 bg-primary border border-primary text-black rounded-lg disabled:bg-primary/5"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MonthlyIncome;
