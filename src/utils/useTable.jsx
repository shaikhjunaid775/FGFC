import { useState, useEffect } from "react";

export const useTableLogic = (initialData) => {
  const [data, setData] = useState(initialData);
  const [filteredData, setFilteredData] = useState(initialData);
  const [selectedRows, setSelectedRows] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [dateRange, setDateRange] = useState({ startDate: "", endDate: "" });
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [filters, setFilters] = useState({ club: "All", status: "All" });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    let result = [...data];
  
    if (filters.club !== "All") {
      result = result.filter((item) => item.club === filters.club);
    }
  
    if (filters.status !== "All") {
      result = result.filter((item) => item.status === filters.status);
    }
  
    if (dateRange.startDate) {
      result = result.filter(
        (item) => getDateForComparison(item.date) >= new Date(dateRange.startDate).getTime()
      );
    }
  
    if (dateRange.endDate) {
      result = result.filter(
        (item) => getDateForComparison(item.date) <= new Date(dateRange.endDate).getTime()
      );
    }
  
    if (searchTerm) {
      const lowercasedSearchTerm = searchTerm.toLowerCase();
      result = result.filter((item) =>
        Object.values(item)
          .filter((value) => typeof value === "string")
          .some((value) => value.toLowerCase().includes(lowercasedSearchTerm))
      );
    }
  
    setFilteredData(result);
  }, [data, filters, dateRange, searchTerm]);
  
  
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const uniqueClubs = ["All", ...new Set(data.map((item) => item.club))];
  const uniqueStatuses = ["All", ...new Set(data.map((item) => item.status))];

  const getDateForComparison = (dateTimeString) => {
    return dateTimeString.split(" ")[0];
  };

  const formatDateForDisplay = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric"
    });
  };

  useEffect(() => {
    let result = data;

    if (filters.club !== "All") {
      result = result.filter((item) => item.club === filters.club);
    }

    if (filters.status !== "All") {
      result = result.filter((item) => item.status === filters.status);
    }

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

  const handleSelectRow = (id) => {
    setSelectedRows((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleSelectAll = () => {
    const allIds = filteredData.map((item) => item.id);
    const areAllSelected = allIds.every((id) => selectedRows[id]);

    const newSelectedRows = { ...selectedRows };
    allIds.forEach((id) => {
      newSelectedRows[id] = !areAllSelected;
    });

    setSelectedRows(newSelectedRows);
  };

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value
    }));
  };

  const handleDateRangeChange = (type, value) => {
    setDateRange((prev) => ({
      ...prev,
      [type]: value
    }));
  };

  const applyDateRange = () => {
    setIsDatePickerOpen(false);
  };

  const clearDateRange = () => {
    setDateRange({ startDate: "", endDate: "" });
  };

  const resetFilters = () => {
    setFilters({ club: "All", status: "All" });
    setDateRange({ startDate: "", endDate: "" });
    setSearchTerm("");
  };

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

  return {
    filteredData,
    selectedRows,
    searchTerm,
    dateRange,
    isDatePickerOpen,
    setIsDatePickerOpen, // <-- Add this to the return object
    filters,
    currentPage,
    totalPages,
    paginatedData,
    uniqueClubs,
    uniqueStatuses,
    handleSelectRow,
    handleSelectAll,
    handleFilterChange,
    handleDateRangeChange,
    applyDateRange,
    clearDateRange,
    resetFilters,
    getDateRangeText,
    setSearchTerm,
    setCurrentPage,
  };
};

