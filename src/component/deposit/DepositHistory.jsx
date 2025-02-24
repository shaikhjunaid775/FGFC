import { ChevronLeft } from "lucide-react";
import { useState } from "react";
import { CSVLink } from "react-csv";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import "jspdf-autotable";
import Datepicker from "tailwind-datepicker-react";
import Footer from "../../component/Footer"
import { Link } from "react-router-dom";

function DepositHistory() {
  const [showStart, setShowStart] = useState(false);
  const [showEnd, setShowEnd] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

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
      disabled: "bg-gray-300",
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
      fullname: "Test",
      memberId: "123",
      topup: "₹ 100",
      date: "2025-10-12"
    },
    {
      id: 2,
      fullname: "John Doe",
      memberId: "456",
      topup: "₹ 200",
      date: "2025-09-15"
    },
    {
      id: 3,
      fullname: "Alice",
      memberId: "789",
      topup: "₹ 150",
      date: "2025-10-10"
    },
    {
      id: 4,
      fullname: "David",
      memberId: "111",
      topup: "₹ 250",
      date: "2025-08-22"
    },
    {
      id: 5,
      fullname: "Emma",
      memberId: "222",
      topup: "₹ 300",
      date: "2025-11-05"
    },
    {
      id: 6,
      fullname: "Sophia",
      memberId: "333",
      topup: "₹ 400",
      date: "2025-07-18"
    },
    {
      id: 7,
      fullname: "James",
      memberId: "444",
      topup: "₹ 500",
      date: "2025-06-30"
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
    const text = filteredData
      .map(
        (row) =>
          `${row.id}\t${row.fullname}\t${row.memberId}\t${row.topup}\t${row.date}`
      )
      .join("\n");
    navigator.clipboard.writeText(text);
    alert("Data copied to clipboard!");
  };

  // Export to Excel
  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(filteredData);
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
        ["Sr", "Fullname", "Member ID", "Top-up Amount", "Top-up Active Date"]
      ],
      body: filteredData.map((row) => [
        row.id,
        row.fullname,
        row.memberId,
        row.topup,
        row.date
      ])
    });
    doc.save("table_data.pdf");
  };

  return (
    <>
      <div>
        {/* Header (Fixed) */}
        <div className="grid grid-cols-3 p-3 text-center shadow-md bg-white sticky top-0 z-10">
          <Link to="/deposit">
            <ChevronLeft />
          </Link>
          <span className="font-semibold text-lg whitespace-nowrap">
            Deposit History
          </span>
        </div>
        <div className="p-4">
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
            {/* Reset Button */}
            <button
              onClick={handleReset}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 h-fit"
            >
              Reset
            </button>
          </div>

          {/* Table */}
          <div className="relative overflow-x-auto rounded-xl bg-white shadow-lg ">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-gray-700 bg-gradient-to-r from-primary to-secondary">
                <tr className="text-center whitespace-nowrap">
                  <th className="px-3 py-2">Sr</th>
                  <th className="px-3 py-2">Fullname</th>
                  <th className="px-3 py-2">Member ID</th>
                  <th className="px-3 py-2">Top-up Amount</th>
                  <th className="px-3 py-2">Top-up Active Date</th>
                </tr>
              </thead>
              <tbody>
                {paginatedData.length > 0 ? (
                  paginatedData.map((item, index) => (
                    <tr
                      key={item.id}
                      className="even:bg-gray-50 odd:bg-[#fdf8ea] border-b text-center whitespace-nowrap"
                    >
                      <td className="px-3 py-2 font-bold">
                        {startIndex + index + 1}
                      </td>
                      <td className="px-3 py-2">{item.fullname}</td>
                      <td className="px-3 py-2">{item.memberId}</td>
                      <td className="px-3 py-2">{item.topup}</td>
                      <td className="px-3 py-2">{item.date}</td>
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

export default DepositHistory;
