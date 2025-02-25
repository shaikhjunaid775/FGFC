import { useState, useEffect } from "react";

// Hook for managing filters
export const useFilters = (initialData) => {
  const [data, setData] = useState(initialData);
  const [filteredData, setFilteredData] = useState(initialData);
  const [searchTerm, setSearchTerm] = useState("");
  const [dateRange, setDateRange] = useState({
    startDate: "",
    endDate: "",
  });
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [filters, setFilters] = useState({
    club: "All",
    status: "All",
  });

  // Get unique clubs and statuses for filters
  const uniqueClubs = ["All", ...new Set(data.map((item) => item.club))];
  const uniqueStatuses = ["All", ...new Set(data.map((item) => item.status))];

  // Format datetime string for comparison
  const getDateForComparison = (dateTimeString) => {
    return dateTimeString.split(" ")[0];
  };

  // Handle filter changes
  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  // Handle date range changes
  const handleDateRangeChange = (type, value) => {
    setDateRange((prev) => ({
      ...prev,
      [type]: value,
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
      endDate: "",
    });
  };

  // Reset all filters
  const resetFilters = () => {
    setFilters({ club: "All", status: "All" });
    setSearchTerm("");
    clearDateRange();
  };

  // Filtering logic
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

  return {
    filteredData,
    setData,
    searchTerm,
    setSearchTerm,
    filters,
    handleFilterChange,
    dateRange,
    handleDateRangeChange,
    applyDateRange,
    clearDateRange,
    resetFilters,
    isDatePickerOpen,
    setIsDatePickerOpen,
    uniqueClubs,
    uniqueStatuses,
  };
};
