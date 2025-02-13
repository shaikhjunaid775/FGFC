import { useState } from "react";
import { motion } from "framer-motion";
import {
  Copy,
  ChevronLeft,
} from "lucide-react";
import { toast, Toaster } from "react-hot-toast";

const Bank = ({ goBack }) => {
    const [selectedBank, setSelectedBank] = useState("Axis Bank");
    console.log(selectedBank);
    const [file, setFile] = useState(null);
    const handleCopy = (text) => {
      navigator.clipboard.writeText(text);
      toast.success("Copied to clipboard", {
        duration: 10000,
        style: { background: "#333", color: "#fff" }
      });
    };
  
    return (
      <>
        <Toaster position="top-center" reverseOrder={false} />
  
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "tween", duration: 0.5 }}
          className="bg-white h-screen flex flex-col"
        >
          <div>
            <div className="grid grid-cols-3 p-3 text-center">
              <button onClick={goBack}>
                <ChevronLeft />
              </button>
              <span className="font-semibold text-lg whitespace-nowrap">
                Deposit with Bank
              </span>
            </div>
          </div>
          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto px-3 pb-20">
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Select Bank</label>
                <div className="relative">
                  <select
                    value={selectedBank}
                    onChange={(e) => setSelectedBank(e.target.value)}
                    className="w-full h-10 px-3 rounded-md border border-input bg-card text-sm focus:ring-2 focus:ring-ring input-transition"
                  >
                    <option>Axis Bank</option>
                    <option>HDFC Bank</option>
                    <option>ICICI Bank</option>
                  </select>
                </div>
              </div>
  
              <div className="rounded-2xl p-4 space-y-4 glass [background:linear-gradient(45deg,#fff,#fff,#fff)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.50/.48)_40%,_theme(colors.secondary)_86%,_theme(colors.secondary)_20%,_theme(colors.secondary)_94%,_theme(colors.slate.50/.48))_border-box]  border border-transparent  animated-border ">
                <div className="flex justify-between items-center border-b border-gray-500 pb-2">
                  <span className="text-md font-medium text-muted-foreground">
                    FGFC Union Bank Deposit
                  </span>
                </div>
                {selectedBank === "Axis Bank" ? (
                  <>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">
                          BANK NAME
                        </span>
                        <span className="text-sm font-medium">AXIS BANK</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">
                          A/C NAME
                        </span>
                        <span className="text-sm font-medium">FGFC UNION</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">
                          ACCOUNT TYPE
                        </span>
                        <span className="text-sm font-medium">
                          CURRENT ACCOUNT
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">
                          A/C NO
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium">
                            923020064886451
                          </span>
                          <button
                            className=" hover-lift"
                            onClick={() => handleCopy("923020064886451")}
                          >
                            <Copy className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">
                          IFSC CODE
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium">AXIS0001576</span>
                          <button
                            className=" hover-lift"
                            onClick={() => handleCopy("AXIS0001576")}
                          >
                            <Copy className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">
                          BRANCH
                        </span>
                        <span className="text-sm font-medium">
                          KHARADI, PUNE - 411014
                        </span>
                      </div>
                    </div>
                  </>
                ) : selectedBank === "ICICI Bank" ? (
                  <>
                    
  
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">
                            BANK NAME
                          </span>
                          <span className="text-sm font-medium">ICICI BANK</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">
                            A/C NAME
                          </span>
                          <span className="text-sm font-medium">
                            FGFC UNION ICICI
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">
                            ACCOUNT TYPE
                          </span>
                          <span className="text-sm font-medium">
                            CURRENT ACCOUNT
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">
                            A/C NO
                          </span>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium">
                              923020064886451
                            </span>
                            <button
                              className=" hover-lift"
                              onClick={() => handleCopy("923020064886451")}
                            >
                              <Copy className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">
                            IFSC CODE
                          </span>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium">
                              HDGC0001576
                            </span>
                            <button
                              className=" hover-lift"
                              onClick={() => handleCopy("HDGC0001576")}
                            >
                              <Copy className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">
                            BRANCH
                          </span>
                          <span className="text-sm font-medium">
                            KHARADI, PUNE - 411014
                          </span>
                        </div>
                      </div>
                  </>
                ) : (
                  <>
                    
  
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">
                            BANK NAME
                          </span>
                          <span className="text-sm font-medium">HDFC BANK</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">
                            A/C NAME
                          </span>
                          <span className="text-sm font-medium">
                            FGFC UNION HDFC
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">
                            ACCOUNT TYPE
                          </span>
                          <span className="text-sm font-medium">
                            CURRENT ACCOUNT
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">
                            A/C NO
                          </span>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium">
                              923020064886451
                            </span>
                            <button
                              className=" hover-lift"
                              onClick={() => handleCopy("923020064886451")}
                            >
                              <Copy className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">
                            IFSC CODE
                          </span>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium">
                              HDFC0001576
                            </span>
                            <button
                              className=" hover-lift"
                              onClick={() => handleCopy("HDFC0001576")}
                            >
                              <Copy className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">
                            BRANCH
                          </span>
                          <span className="text-sm font-medium">
                            KHARADI, PUNE - 411014
                          </span>
                        </div>
                      </div>
                  </>
                )}
              </div>
              <div className="space-y-2">
                <label className="text-base text-gray-500 font-semibold block mb-0">
                  Amount
                </label>
                <div className="flex items-center justify-between border-b border-gray-300 pb-2">
                  <input
                    type="number"
                    className="w-full outline-none text-sm text-gray-700 p-2"
                    placeholder="Enter amount"
                  />
                </div>
              </div>
  
              {/* Transaction Hash */}
              <div className="space-y-2">
                <label className="text-base text-gray-500 font-semibold block mb-0">
                  Bank/UTR Number
                </label>
                <div className="flex items-center justify-between border-b border-gray-300 pb-2">
                  <input
                    type="text"
                    className="w-full outline-none text-sm text-gray-700 p-2"
                    placeholder="Enter Bank/UTR Number"
                  />
                </div>
              </div>
  
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Upload Payment Screenshot
                </label>
                <div className="mt-1">
                  <div className="flex items-center justify-center w-full">
                    <label className="w-full flex flex-col items-center px-4 py-6 bg-card border border-dashed border-border rounded-lg cursor-pointer hover:bg-primary/50 input-transition">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <p className="text-sm text-muted-foreground">
                          {file ? file.name : "Click to upload or drag and drop"}
                        </p>
                      </div>
                      <input
                        type="file"
                        className="hidden"
                        onChange={(e) => setFile(e.target.files?.[0] || null)}
                      />
                    </label>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="px-6 py-2.5 w-full  text-sm font-medium text-black bg-gradient-to-t from-primary/80 hover:bg-gradient-to-b hover:from-primary hover:from-45%   rounded-full   text-center   flex gap-2  justify-center shadow-md cursor-pointer"
              >
                Submit
              </button>
            </div>
          </div>
        </motion.div>
      </>
    );
  };


  
export default Bank