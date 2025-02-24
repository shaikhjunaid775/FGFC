import { ChevronLeft } from "lucide-react";
import { useState } from "react";
import { CSVLink } from "react-csv";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import "jspdf-autotable";
import Datepicker from "tailwind-datepicker-react";
import Footer from "../../component/Footer";
import { useNavigate } from "react-router-dom";

function PayoutReport() {
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
      dateTime: "2025-02-12",
      particulars: "Investment Return",
      openingBalance: "₹ 2500",
      depositAmount: "₹ 0", // Example value
      monthlyProfit: "₹ 200", // Example value
      levelIncome: "₹ 50", // Example value
      clubIncome: "₹ 30", // Example value
      compounding: "₹ 20", // Example value
      activationReceived: "₹ 100", // Example value
      transferDeducted: "₹ 10", // Example value
      transferReceived: "₹ 20", // Example value
      withdrawalAmount: "₹ 1500", // Example value
      credit: "₹ 500", // Example value
      debit: "₹ 0", // Example value
      totalBalance: "₹ 2500", // Example value
      status: "Completed"
    },
    {
      id: 2,
      dateTime: "2025-02-15 ",
      particulars: "Monthly Bonus",
      openingBalance: "₹ 1500",
      depositAmount: "₹ 200", // Example value
      monthlyProfit: "₹ 100", // Example value
      levelIncome: "₹ 20", // Example value
      clubIncome: "₹ 10", // Example value
      compounding: "₹ 15", // Example value
      activationReceived: "₹ 50", // Example value
      transferDeducted: "₹ 5", // Example value
      transferReceived: "₹ 10", // Example value
      withdrawalAmount: "₹ 1000", // Example value
      credit: "₹ 400", // Example value
      debit: "₹ 0", // Example value
      totalBalance: "₹ 1600", // Example value
      status: "Pending"
    },
    {
      id: 3,
      dateTime: "2025-02-10 ",
      particulars: "Referral Bonus",
      openingBalance: "₹ 2500",
      depositAmount: "₹ 300", // Example value
      monthlyProfit: "₹ 150", // Example value
      levelIncome: "₹ 70", // Example value
      clubIncome: "₹ 40", // Example value
      compounding: "₹ 25", // Example value
      activationReceived: "₹ 150", // Example value
      transferDeducted: "₹ 8", // Example value
      transferReceived: "₹ 12", // Example value
      withdrawalAmount: "₹ 1300", // Example value
      credit: "₹ 550", // Example value
      debit: "₹ 10", // Example value
      totalBalance: "₹ 2800", // Example value
      status: "Completed"
    },
    {
      id: 4,
      dateTime: "2025-02-22",
      particulars: "Investment Return",
      openingBalance: "₹ 2500",
      depositAmount: "₹ 500", // Example value
      monthlyProfit: "₹ 250", // Example value
      levelIncome: "₹ 60", // Example value
      clubIncome: "₹ 25", // Example value
      compounding: "₹ 30", // Example value
      activationReceived: "₹ 120", // Example value
      transferDeducted: "₹ 12", // Example value
      transferReceived: "₹ 15", // Example value
      withdrawalAmount: "₹ 1700", // Example value
      credit: "₹ 600", // Example value
      debit: "₹ 5", // Example value
      totalBalance: "₹ 3200", // Example value
      status: "Completed"
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
          `${row.id}\t${row.dateTime}\t${row.particulars}\t${row.openingBalance}\t${row.depositAmount}\t${row.monthlyProfit}\t${row.levelIncome}\t${row.clubIncome}\t${row.compounding}\t${row.activationReceived}\t${row.transferDeducted}\t${row.transferReceived}\t${row.withdrawalAmount}\t${row.credit}\t${row.debit}\t${row.totalBalance}\t${row.status}`
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
          "Opening Balance",
          "Deposit Amount",
          "Monthly Profit",
          "Level Income",
          "Club Income",
          "Compounding",
          "Activation Received",
          "Transfer Deducted",
          "Transfer Received",
          "Withdrawal Amount",
          "Credit",
          "Debit",
          "Total Balance",
          "Status"
        ]
      ],
      body: data.map((row) => [
        row.id,
        row.dateTime,
        row.particulars,
        row.openingBalance,
        row.depositAmount,
        row.monthlyProfit,
        row.levelIncome,
        row.clubIncome,
        row.compounding,
        row.activationReceived,
        row.transferDeducted,
        row.transferReceived,
        row.withdrawalAmount,
        row.credit,
        row.debit,
        row.totalBalance,
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
            Payout Report
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
          <div className="relative overflow-x-auto rounded-xl bg-white shadow-lg">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-gray-700 bg-gradient-to-r from-primary to-secondary">
                <tr className="text-center whitespace-nowrap capitalize">
                  <th className="px-3 py-2">Sr</th>
                  <th className="px-3 py-2">Date & Time</th>
                  <th className="px-3 py-2">Particulars</th>
                  <th className="px-3 py-2">Opening Balance</th>
                  <th className="px-3 py-2">Deposit Amount</th>
                  <th className="px-3 py-2">Monthly Profit</th>
                  <th className="px-3 py-2">Level Income</th>
                  <th className="px-3 py-2">Club Income</th>
                  <th className="px-3 py-2">Compounding</th>
                  <th className="px-3 py-2">Activation Received</th>
                  <th className="px-3 py-2">Transfer Deducted</th>
                  <th className="px-3 py-2">Transfer Received</th>
                  <th className="px-3 py-2">Withdrawal Amount</th>
                  <th className="px-3 py-2">Credit</th>
                  <th className="px-3 py-2">Debit</th>
                  <th className="px-3 py-2">Total Balance</th>
                  <th className="px-3 py-2">Status</th>
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
                      <td className="px-3 py-2">{item.dateTime}</td>
                      <td className="px-3 py-2">{item.particulars}</td>
                      <td className="px-3 py-2">{item.openingBalance}</td>
                      <td className="px-3 py-2">{item.depositAmount || "-"}</td>
                      <td className="px-3 py-2">{item.monthlyProfit || "-"}</td>
                      <td className="px-3 py-2">{item.levelIncome || "-"}</td>
                      <td className="px-3 py-2">{item.clubIncome || "-"}</td>
                      <td className="px-3 py-2">{item.compounding || "-"}</td>
                      <td className="px-3 py-2">
                        {item.activationReceived || "-"}
                      </td>
                      <td className="px-3 py-2">
                        {item.transferDeducted || "-"}
                      </td>
                      <td className="px-3 py-2">
                        {item.transferReceived || "-"}
                      </td>
                      <td className="px-3 py-2">
                        {item.withdrawalAmount || "-"}
                      </td>
                      <td className="px-3 py-2">{item.credit || "-"}</td>
                      <td className="px-3 py-2">{item.debit || "-"}</td>
                      <td className="px-3 py-2">{item.totalBalance || "-"}</td>
                      <td className="px-3 py-2">{item.status}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="17" className="text-center py-4 text-gray-500">
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

export default PayoutReport;
