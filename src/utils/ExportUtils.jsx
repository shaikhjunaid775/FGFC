import { jsPDF } from "jspdf";
import "jspdf-autotable";


export const exportToClipboard = (data, selectedRows, columns) => {
  const selectedData = data.filter((item) => selectedRows[item.id]);

  if (selectedData.length === 0) {
    alert("No rows selected.");
    return;
  }

  const textToCopy = selectedData
    .map((item) => columns.map((col) => item[col]).join(", "))
    .join("\n");

  navigator.clipboard
    .writeText(textToCopy)
    .then(() => {
      alert("Selected data copied to clipboard!");
    })
    .catch((err) => {
      console.error("Failed to copy:", err);
    });
};

export const exportToExcel = (data, selectedRows, columns, filename = "data.csv") => {
  const selectedData = data.filter((item) => selectedRows[item.id]);

  if (selectedData.length === 0) {
    alert("No rows selected.");
    return;
  }

  const header = columns.join(",") + "\n";
  const csvData = selectedData
    .map((item) => columns.map((col) => item[col]).join(","))
    .join("\n");

  const blob = new Blob([header + csvData], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const exportToPDF = (data, selectedRows, columns, title = "Selected Data", filename = "data.pdf") => {
  const selectedData = data.filter((item) => selectedRows[item.id]);

  if (selectedData.length === 0) {
    alert("No rows selected.");
    return;
  }

  const doc = new jsPDF();
  doc.text(title, 10, 10);

  const tableRows = selectedData.map((item) => columns.map((col) => item[col]));

  doc.autoTable({
    head: [columns],
    body: tableRows,
  });

  doc.save(filename);
};
