import { useState } from "react";
import { ChevronLeft } from "lucide-react";
import Footer from "../component/Footer";

const DocumentUploader = () => {
  const [selectedFiles, setSelectedFiles] = useState({
    aadharFront: null,
    aadharBack: null,
    panCard: null,
    bankPassbook: null
  });
  const [previewUrls, setPreviewUrls] = useState({});

  const handleFileChange = (event, type) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFiles((prev) => ({ ...prev, [type]: file }));
      const reader = new FileReader();
      reader.onload = (e) =>
        setPreviewUrls((prev) => ({ ...prev, [type]: e.target.result }));
      reader.readAsDataURL(file);
    } else {
      setSelectedFiles((prev) => ({ ...prev, [type]: null }));
      setPreviewUrls((prev) => ({ ...prev, [type]: null }));
    }
  };

  return (
    <>
      <div className="grid grid-cols-3 p-3 text-center shadow-md bg-white sticky top-0 z-10">
        <button>
          <ChevronLeft />
        </button>
        <span className="font-semibold text-lg whitespace-nowrap">Kyc</span>
      </div>

      <div className="  ">
        <p className="p-4 text-xs ">
          Note - As part of the mandatory regulatory requirements and to ensure
          the security and authenticity of your account, we kindly request you
          to complete the KYC process by submitting the following document
        </p>
        <div className=" mx-auto pb-20 bg-white rounded-2xl shadow-[0px_-12px_15px_0px_rgba(0,_0,_0,_0.050)]  overflow-hidden items-center">
          <div className="px-4 py-3">
            {Object.keys(selectedFiles).map((key) => (
              <div key={key} className="mb-4">
                <div className="flex justify-between mb-2">
                  <h5 className=" text-xl font-bold leading-1 text-gray-700 capitalize">
                    {key.replace(/([A-Z])/g, " $1").trim()}
                  </h5>
                  <span className="flex items-center bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0 rounded-full ">
                    <span className="w-2 h-2 me-1 bg-green-500 rounded-full animate-pulse"></span>
                    Approved
                  </span>
                </div>
                <div className="max-w-sm  bg-yellow-1/30 border-dashed border-2 border-gray-400 rounded-lg items-center mx-auto text-center">
                  <input
                    id={key}
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={(e) => handleFileChange(e, key)}
                  />
                  <label htmlFor={key} className="cursor-pointer block">
                    {previewUrls[key] ? (
                      <img
                        src={previewUrls[key]}
                        alt="Preview"
                        className="max-h-48 rounded-lg mx-auto"
                      />
                    ) : (
                      <>
                        <div className="p-6 py-10">
                          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-700">
                            Upload {key.replace(/([A-Z])/g, " $1").trim()}
                          </h5>
                          <p className="font-normal text-sm text-gray-400">
                            Choose a file less than{" "}
                            <b className="text-gray-600">2MB</b>
                          </p>
                        </div>
                      </>
                    )}
                  </label>
                </div>
                {selectedFiles[key] && (
                  <p className="text-gray-500 bg-gray-200 p-2 rounded-lg text-center">
                    {selectedFiles[key].name}
                  </p>
                )}
              </div>
            ))}
            <div className="flex items-center justify-center mt-4">
              <button className="w-full px-1 py-2.5  text-sm font-medium text-gray-900 bg-gradient-to-t from-primary  rounded-full   text-center   flex gap-2  justify-center shadow-md">
                Upload
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DocumentUploader;
