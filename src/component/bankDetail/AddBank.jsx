import { useState } from "react";

const AddBank = () => {
  const [selectedMethod, setSelectedMethod] = useState("");

  const [selectedFile, setSelectedFile] = useState(null);
  const [formData, setFormData] = useState({
    bankName: "",
    accountHolder: "",
    accountType: "Savings",
    accountNumber: "",
    ifscCode: "",
    bankBranch: "",
    BEP20add: ""
  });

  const withdrawalTypes = [
    { id: "bank", label: "Bank Transfer", active: true },
    { id: "usdt", label: "USDT", active: false }
  ];

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create submission data based on selected method
    let submissionData = {};

    if (selectedMethod === "bank") {
      submissionData = {
        method: "bank",
        bankName: formData.bankName,
        accountHolder: formData.accountHolder,
        accountType: formData.accountType,
        accountNumber: formData.accountNumber,
        ifscCode: formData.ifscCode,
        bankBranch: formData.bankBranch
      };
    } else if (selectedMethod === "usdt") {
      submissionData = {
        method: "usdt",
        BEP20add: formData.BEP20add,
        qrCode: selectedFile
      };
    }

    console.log("Submitting data:", submissionData);
    // Here you would typically send the data to your API
  };

  return (
    <div className=" mx-0 rounded-3xl p-3    [background:linear-gradient(45deg,#fff,#fff,#fff)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.50/.48)_40%,_theme(colors.secondary)_86%,_theme(colors.secondary)_20%,_theme(colors.secondary)_94%,_theme(colors.slate.50/.48))_border-box]  border border-transparent  animated-border">
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-3">
          Choose your withdrawal type
        </h2>
        <div className="flex gap-2 mb-4">
          {withdrawalTypes.map((type) => (
            <button
              key={type.id}
              className={` text-xs font-medium me-2 px-2.5 py-0.5 rounded ${
                type.active
                  ? "bg-gray-200 text-gray-600 "
                  : "bg-red-900 text-red-100 animate-pulse"
              }`}
              disabled={!type.active}
            >
              {!type.active ? "Pending " : ""}
              {type.label}
            </button>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Add Withdrawal Method
            </label>
            <select
              className="w-full p-2 border border-primary rounded-full focus:ring-2 focus:ring-secondary focus:border-secondary"
              value={selectedMethod}
              onChange={(e) => setSelectedMethod(e.target.value)}
            >
              <option value="">Select method</option>
              <option value="bank">Bank Transfer</option>
              <option value="usdt">USDT</option>
            </select>
          </div>

          {selectedMethod === "bank" && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Bank Name
                </label>
                <input
                  type="text"
                  name="bankName"
                  className="w-full p-2 border border-primary rounded-full focus:ring-2 focus:ring-secondary focus:border-secondary"
                  placeholder="Enter bank name"
                  value={formData.bankName}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Account Holder Name
                </label>
                <input
                  type="text"
                  name="accountHolder"
                  className="w-full p-2 border border-primary rounded-full focus:ring-2 focus:ring-secondary focus:border-secondary"
                  placeholder="Enter account holder name"
                  value={formData.accountHolder}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Select Account Type
                </label>
                <select
                  name="accountType"
                  className="w-full p-2 border border-primary rounded-full focus:ring-2 focus:ring-secondary focus:border-secondary"
                  value={formData.accountType}
                  onChange={handleInputChange}
                >
                  <option value="Savings">Savings</option>
                  <option value="Current">Current</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Account Number
                </label>
                <input
                  type="text"
                  name="accountNumber"
                  className="w-full p-2 border border-primary rounded-full focus:ring-2 focus:ring-secondary focus:border-secondary"
                  placeholder="Enter account number"
                  value={formData.accountNumber}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Bank IFSC Code
                </label>
                <input
                  type="text"
                  name="ifscCode"
                  className="w-full p-2 border border-primary rounded-full focus:ring-2 focus:ring-secondary focus:border-secondary"
                  placeholder="Enter bank IFSC"
                  value={formData.ifscCode}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Bank Branch
                </label>
                <input
                  type="text"
                  name="bankBranch"
                  className="w-full p-2 border border-primary rounded-full focus:ring-2 focus:ring-secondary focus:border-secondary"
                  placeholder="Enter bank branch"
                  value={formData.bankBranch}
                  onChange={handleInputChange}
                />
              </div>
            </>
          )}
          {selectedMethod === "usdt" && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  BEP20 Address
                </label>
                <input
                  type="text"
                  name="BEP20add"
                  className="w-full p-2 border border-primary rounded-full focus:ring-2 focus:ring-secondary focus:border-secondary"
                  placeholder="Enter BEP20 Address"
                  value={formData.BEP20add}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Upload your BEP20 QR code
                </label>
                <input
                  id="file-upload"
                  name="file-upload"
                  onChange={handleFileChange}
                  className="w-full text-gray-400 font-semibold text-sm bg-white border border-primary file:cursor-pointer cursor-pointer file:border-0 file:py-1.5 file:px-4 file:mr-4 file:bg-gray-100 file:hover:bg-gray-200 file:text-gray-500 rounded-full"
                  type="file"
                />
                <p className="text-xs text-gray-400 ">
                  PNG, JPG, SVG, WEBP, and GIF are allowed.
                </p>
              </div>
            </>
          )}
        </div>

        {selectedMethod && (
          <button
            type="submit"
            className="w-full px-6 py-2.5  text-sm font-medium text-black bg-gradient-to-tr from-primary to-secondary  rounded-full   text-center   flex gap-2  justify-center shadow-md cursor-pointer"
          >
            Submit
          </button>
        )}
      </form>
    </div>
  );
};

export default AddBank;
