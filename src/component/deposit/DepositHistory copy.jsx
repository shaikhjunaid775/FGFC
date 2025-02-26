import React, { useState, useEffect } from 'react';
import { ChevronLeft } from 'lucide-react';

const DepositHistory = () => {
  // Sample data
  const initialData = [
    {
      id: 1,
      depositINR: 5000,
      depositUSDT: 60,
      mode: "UPI",
      txHash: "TX12345",
      date: "2024-02-26 10:00 AM",
      status: "Pending",
      proof: "proof1.jpg"
    },
    {
      id: 2,
      depositINR: 7000,
      depositUSDT: 85,
      mode: "Bank Transfer",
      txHash: "TX12346",
      date: "2024-02-26 11:00 AM",
      status: "Completed",
      proof: "proof2.jpg"
    },
    // Other data items are included here
  ];

  const columns = Object.keys(initialData[0] || {});

  // State for filtered data, selected rows, and search term
  const [data, setData] = useState(initialData);
  const [filteredData, setFilteredData] = useState(initialData);
  const [selectedRows, setSelectedRows] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [dateRange, setDateRange] = useState({
    startDate: "",
    endDate: ""
  });
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [filters, setFilters] = useState({
    depositMode: "All",
    status: "All"
  });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Calculate total pages
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  // Get data for the current page
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Get unique deposit modes and statuses for filters
  const uniqueDepositModes = ["All", ...new Set(data.map((item) => item.mode))];
  const uniqueStatuses = ["All", ...new Set(data.map((item) => item.status))];

  // Format datetime string for comparison (extract just the date part)
  const getDateForComparison = (dateTimeString) => {
    return dateTimeString.split(" ")[0];
  };

  // Format date for display
  const formatDateForDisplay = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric"
    });
  };

  // Handle search and filter changes
  useEffect(() => {
    let result = data;

    // Apply Deposit Mode Filter
    if (filters.depositMode !== "All") {
      result = result.filter((item) => item.mode === filters.depositMode);
    }

    // Apply status filter
    if (filters.status !== "All") {
      result = result.filter((item) => item.status === filters.status);
    }

    // Apply date range filter
    if (dateRange.startDate) {
      result = result.filter(
        (item) => getDateForComparison(item.date) >= dateRange.startDate
      );
    }

    if (dateRange.endDate) {
      result = result.filter(
        (item) => getDateForComparison(item.date) <= dateRange.endDate
      );
    }

    // Apply search term
    if (searchTerm) {
      const lowercasedSearchTerm = searchTerm.toLowerCase();
      result = result.filter((item) =>
        Object.values(item).some((value) =>
          value.toString().toLowerCase().includes(lowercasedSearchTerm)
        )
      );
    }

    setFilteredData(result);
    // Reset to page 1 when filters change
    setCurrentPage(1);
  }, [data, filters, dateRange, searchTerm]);

  // Handle row selection
  const handleSelectRow = (id) => {
    setSelectedRows((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Handle select all
  const handleSelectAll = () => {
    const allIds = filteredData.map((item) => item.id);
    const areAllSelected = allIds.every((id) => selectedRows[id]);

    const newSelectedRows = { ...selectedRows };
    allIds.forEach((id) => {
      newSelectedRows[id] = !areAllSelected;
    });

    setSelectedRows(newSelectedRows);
  };

  // Handle filter changes
  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value
    }));
  };

  // Handle date range changes
  const handleDateRangeChange = (type, value) => {
    setDateRange((prev) => ({
      ...prev,
      [type]: value
    }));
  };

  // Apply date range
  const applyDateRange = () => {
    setIsDatePickerOpen(false);
  };

  // Clear date range
  const clearDateRange = () => {
    setDateRange({
      startDate: "",
      endDate: ""
    });
  };

  // Reset all filters
  const resetFilters = () => {
    setFilters({
      depositMode: "All",
      status: "All"
    });
    setDateRange({
      startDate: "",
      endDate: ""
    });
    setSearchTerm("");
    setSelectedRows({});
  };

  // Get date range display text
  const getDateRangeText = () => {
    if (dateRange.startDate && dateRange.endDate) {
      return `${formatDateForDisplay(
        dateRange.startDate
      )} - ${formatDateForDisplay(dateRange.endDate)}`;
    } else if (dateRange.startDate) {
      return `From ${formatDateForDisplay(dateRange.startDate)}`;
    } else if (dateRange.endDate) {
      return `Until ${formatDateForDisplay(dateRange.endDate)}`;
    }
    return "Select date range";
  };

  // Check if any filters are active
  const hasActiveFilters = () => {
    return (
      filters.depositMode !== "All" ||
      filters.status !== "All" ||
      dateRange.startDate ||
      dateRange.endDate ||
      searchTerm
    );
  };

  // Mock functions for export functionality
  const exportToClipboard = () => {
    console.log("Export to clipboard");
  };

  const exportToExcel = () => {
    console.log("Export to Excel");
  };

  const exportToPDF = () => {
    console.log("Export to PDF");
  };

  return (
    <>
      {/* Header (Fixed) */}
      <div className="grid grid-cols-3 p-3 text-center shadow-md bg-white sticky top-0 z-10">
        <button>
          <ChevronLeft />
        </button>
        <span className="font-semibold text-lg whitespace-nowrap">
          Deposit History
        </span>
        <div></div> {/* Empty div for grid alignment */}
      </div>
      
      <div className="space-y-4 p-4 bg-gray-50 rounded-xl pb-20">
        {/* Export Buttons */}
        <div className="flex justify-end gap-2 mb-4">
          <button
            type="button"
            onClick={exportToClipboard}
            className="text-white bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 hover:bg-gradient-to-br focus:outline-none shadow-lg shadow-gray-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Copy
          </button>
          <button
            onClick={exportToExcel}
            type="button"
            className="text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:outline-none shadow-lg shadow-blue-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Excel
          </button>
          <button
            onClick={exportToPDF}
            type="button"
            className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:outline-none shadow-lg shadow-red-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            PDF
          </button>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col gap-4">
          {/* Search */}
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="absolute left-3 top-2.5 text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
          </div>

          {/* Filter Section */}
          <div className="grid grid-cols-2 gap-4 items-end">
            {/* Deposit Mode Filter */}
            <div>
              <label className="block mb-1 text-sm font-medium">
                Deposit Mode:
              </label>
              <select
                className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                value={filters.depositMode}
                onChange={(e) =>
                  handleFilterChange("depositMode", e.target.value)
                }
              >
                {uniqueDepositModes.map((mode) => (
                  <option key={mode} value={mode}>
                    {mode}
                  </option>
                ))}
              </select>
            </div>

            {/* Status Filter */}
            <div>
              <label className="block mb-1 text-sm font-medium">Status:</label>
              <select
                className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                value={filters.status}
                onChange={(e) => handleFilterChange("status", e.target.value)}
              >
                {uniqueStatuses.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </div>

            {/* Date Range Picker */}
            <div className="relative">
              <label className="block mb-1 text-sm font-medium">
                Date Range:
              </label>
              <button
                className="flex items-center border rounded-lg p-2 w-full bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onClick={() => setIsDatePickerOpen(!isDatePickerOpen)}
              >
                <svg
                  className="w-5 h-5 mr-2 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  ></path>
                </svg>
                <span className="text-gray-700 mr-2 text-sm">
                  {getDateRangeText()}
                </span>
                {(dateRange.startDate || dateRange.endDate) && (
                  <button
                    className="ml-auto text-gray-400 hover:text-gray-600"
                    onClick={(e) => {
                      e.stopPropagation();
                      clearDateRange();
                    }}
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      ></path>
                    </svg>
                  </button>
                )}
              </button>

              {isDatePickerOpen && (
                <div className="absolute z-10 mt-1 bg-white rounded-lg shadow-lg border p-4 w-72">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Start Date:
                      </label>
                      <input
                        type="date"
                        className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={dateRange.startDate}
                        onChange={(e) =>
                          handleDateRangeChange("startDate", e.target.value)
                        }
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">
                        End Date:
                      </label>
                      <input
                        type="date"
                        className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={dateRange.endDate}
                        onChange={(e) =>
                          handleDateRangeChange("endDate", e.target.value)
                        }
                      />
                    </div>

                    <div className="flex space-x-2">
                      <button
                        className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors flex-1"
                        onClick={applyDateRange}
                      >
                        Apply
                      </button>
                      <button
                        className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-lg transition-colors"
                        onClick={clearDateRange}
                      >
                        Clear
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Reset Button */}
            <button
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-lg transition-colors"
              onClick={resetFilters}
            >
              Reset Filters
            </button>
          </div>
        </div>

        {/* Active Filters Summary - Only shows when filters are active */}
        {hasActiveFilters() && (
          <div className="text-sm bg-blue-50 p-3 rounded-lg flex items-center justify-between">
            <div>
              <span className="font-semibold">Active filters:</span>
              {filters.depositMode !== "All" && (
                <span className="ml-2 bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                  {filters.depositMode}
                </span>
              )}
              {filters.status !== "All" && (
                <span className="ml-2 bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                  {filters.status}
                </span>
              )}
              {(dateRange.startDate || dateRange.endDate) && (
                <span className="ml-2 bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                  Date: {getDateRangeText()}
                </span>
              )}
              {searchTerm && (
                <span className="ml-2 bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                  Search: "{searchTerm}"
                </span>
              )}
            </div>
            <div className="text-xs text-gray-500">
              Showing {filteredData.length} of {data.length} entries
            </div>
          </div>
        )}

        {/* Table */}
        <div className="relative overflow-x-auto rounded-xl bg-white shadow-lg">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-gray-700 bg-gradient-to-r from-yellow-200 to-yellow-300">
              <tr className="text-center whitespace-nowrap capitalize">
                <th className="px-3 py-2">
                  <input
                    type="checkbox"
                    checked={
                      filteredData.length > 0 &&
                      filteredData.every((item) => selectedRows[item.id])
                    }
                    onChange={handleSelectAll}
                    className="w-4 h-4"
                  />
                </th>
                <th className="px-3 py-2">Sr</th>
                <th className="px-4 py-2">Date & Time</th>
                <th className="px-4 py-2">Deposit Amount (INR)</th>
                <th className="px-4 py-2">Deposit Amount (USDT)</th>
                <th className="px-4 py-2">Deposit Mode</th>
                <th className="px-4 py-2">Transaction Hash</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Payment Proof</th>
              </tr>
            </thead>
            <tbody>
              {paginatedData.length > 0 ? (
                paginatedData.map((item, index) => (
                  <tr
                    key={item.id}
                    className="even:bg-gray-50 odd:bg-[#fdf8ea] border-b last:border-0 text-center whitespace-nowrap"
                  >
                    <td className="px-3 py-2">
                      <input
                        type="checkbox"
                        checked={!!selectedRows[item.id]}
                        onChange={() => handleSelectRow(item.id)}
                        className="w-4 h-4"
                      />
                    </td>
                    <td className="px-3 py-2 font-bold">
                      {(currentPage - 1) * itemsPerPage + index + 1}
                    </td>
                    <td className="px-3 py-2">{item.date}</td>
                    <td className="px-3 py-2">{item.depositINR}</td>
                    <td className="px-3 py-2">{item.depositUSDT}</td>
                    <td className="px-3 py-2">{item.mode}</td>
                    <td className="px-3 py-2">{item.txHash}</td>
                    <td className="px-3 py-2">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          item.status === "Completed"
                            ? "bg-green-100 text-green-800"
                            : item.status === "Pending"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className="px-4 py-2">
                      <a
                        href="#"
                        className="text-blue-500 underline"
                      >
                        View Proof
                      </a>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="9"
                    className="px-3 py-6 text-center text-gray-500"
                  >
                    No records found matching your filters
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          {/* Pagination Controls */}
          {paginatedData.length > 0 && (
            <div className="flex justify-between items-center p-4">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-3 py-1 bg-yellow-200 text-gray-700 rounded disabled:opacity-50"
              >
                Previous
              </button>
              <span className="text-gray-700">
                Page {currentPage} of {totalPages || 1}
              </span>
              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages || 1))
                }
                disabled={currentPage === totalPages || totalPages === 0}
                className="px-3 py-1 bg-yellow-200 text-gray-700 rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          )}
        </div>

        {/* Selected items summary */}
        <div className="text-sm text-gray-600">
          Selected: {Object.values(selectedRows).filter(Boolean).length} of{" "}
          {filteredData.length} items
        </div>
      </div>
      
      {/* Footer placeholder */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-3 text-center">
        Footer
      </div>
    </>
  );
};

export default DepositHistory;