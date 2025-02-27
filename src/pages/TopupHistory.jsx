import { useState, useEffect } from "react";
import "jspdf-autotable";
import { ChevronLeft } from "lucide-react";
import "jspdf-autotable";

import { useNavigate } from "react-router-dom";
import Footer from "../component/Footer";
import {
  exportToClipboard,
  exportToExcel,
  exportToPDF
} from "../utils/ExportUtils";

const ClubIncome = () => {
  const navigate = useNavigate();
  // Sample data - replace with your actual data
  const initialData = [
    {
      id: 1,
      fullname: "Test",
      memberId: "123",
      topup: "₹ 100",
      date: "2025-10-12"
    },
    {
      id: 2,
      fullname: "Amit Sharma",
      memberId: "124",
      topup: "₹ 500",
      date: "2025-09-20"
    },
    {
      id: 3,
      fullname: "Priya Patel",
      memberId: "125",
      topup: "₹ 250",
      date: "2025-08-15"
    },
    {
      id: 4,
      fullname: "Rahul Verma",
      memberId: "126",
      topup: "₹ 750",
      date: "2025-07-05"
    },
    {
      id: 5,
      fullname: "Neha Gupta",
      memberId: "127",
      topup: "₹ 300",
      date: "2025-06-25"
    },
    {
      id: 6,
      fullname: "Vikram Singh",
      memberId: "128",
      topup: "₹ 600",
      date: "2025-05-10"
    },
    {
      id: 7,
      fullname: "Sanya Mehta",
      memberId: "129",
      topup: "₹ 900",
      date: "2025-04-18"
    },
    {
      id: 8,
      fullname: "Arjun Nair",
      memberId: "130",
      topup: "₹ 200",
      date: "2025-03-30"
    },
    {
      id: 9,
      fullname: "Riya Kapoor",
      memberId: "131",
      topup: "₹ 450",
      date: "2025-02-14"
    },
    {
      id: 10,
      fullname: "Karan Joshi",
      memberId: "132",
      topup: "₹ 700",
      date: "2025-01-05"
    }
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
    club: "All",
    status: "All"
  });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Adjust as needed

  // Calculate total pages
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  // Get data for the current page
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Get unique clubs and statuses for filters
  const uniqueClubs = ["All", ...new Set(data.map((item) => item.club))];
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

    // Apply club filter
    if (filters.club !== "All") {
      result = result.filter((item) => item.club === filters.club);
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
      club: "All",
      status: "All"
    });
    setDateRange({
      startDate: "",
      endDate: ""
    });
    setSearchTerm("");
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

  return (
    <>
      {/* Header (Fixed) */}
      <div className="grid grid-cols-3 p-3 text-center shadow-md bg-white sticky top-0 z-10">
        <button onClick={() => navigate(-1)}>
          <ChevronLeft />
        </button>
        <span className="font-semibold text-lg whitespace-nowrap">
          Topup History
        </span>
      </div>
      <div className="space-y-4 p-4 bg-gray-50 rounded-xl pb-20">
        {/* Export Buttons */}
        <div className="flex justify-end gap-2 mb-4">
          <button
            type="button"
            onClick={() =>
              exportToClipboard(initialData, selectedRows, columns)
            }
            className="text-white bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 hover:bg-gradient-to-br focus:outline-none shadow-lg shadow-gray-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Copy
          </button>
          <button
            onClick={() =>
              exportToExcel(
                initialData,
                selectedRows,
                columns,
                "table_data.csv"
              )
            }
            type="button"
            className="text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:outline-none shadow-lg shadow-blue-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Excel
          </button>
          <button
            onClick={() =>
              exportToPDF(
                initialData,
                selectedRows,
                columns,
                "Exported Table Data",
                "table_data.pdf"
              )
            }
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
            {/* Club Filter */}
            <div className="hidden">
              <label className="block mb-1 text-sm font-medium">Club:</label>
              <select
                className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                value={filters.club}
                onChange={(e) => handleFilterChange("club", e.target.value)}
              >
                {uniqueClubs.map((club) => (
                  <option key={club} value={club}>
                    {club}
                  </option>
                ))}
              </select>
            </div>

            {/* Status Filter */}
            <div className="hidden">
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
                className="flex items-center border rounded-lg p-2  bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              className=" bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-lg transition-colors"
              onClick={resetFilters}
            >
              Reset Filters
            </button>
          </div>
        </div>

        {/* Active Filters Summary */}
        {(filters.club !== "All" ||
          filters.status !== "All" ||
          dateRange.startDate ||
          dateRange.endDate ||
          searchTerm) && (
          <div className="text-sm bg-blue-50 p-3 rounded-lg flex items-center justify-between">
            <div>
              <span className="font-semibold">Active filters:</span>
              {filters.club !== "All" && (
                <span className="ml-2 bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                  {filters.club}
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
            <thead className="text-gray-700  bg-gradient-to-r from-primary to-secondary">
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
                <th className="px-3 py-2">Date & Time</th>
                <th className="px-3 py-2">full name</th>
                <th className="px-3 py-2">member Id</th>
                <th className="px-3 py-2">top up</th>
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
                    <td className="px-3 py-2">{item.fullname}</td>
                    <td className="px-3 py-2">{item.memberId}</td>
                    <td className="px-3 py-2">{item.topup}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="7"
                    className="px-3 py-6 text-center text-gray-500"
                  >
                    No records found matching your filters
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          {/* Pagination Controls */}
          <div className="flex justify-between items-center p-4">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 bg-primary text-gray-700 rounded disabled:opacity-50"
            >
              Previous
            </button>
            <span className="text-gray-700">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="px-3 py-1 bg-primary text-gray-700 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>

        {/* Selected items summary */}
        <div className="text-sm text-gray-600">
          Selected: {Object.values(selectedRows).filter(Boolean).length} of{" "}
          {filteredData.length} items
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ClubIncome;
