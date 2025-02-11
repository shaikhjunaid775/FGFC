import { motion } from "framer-motion";

function Wallet() {
  return <>
   <div className=" w-full  flex items-center justify-center p-4 -mt-14 relative z-40">
          <div className="w-full bg-white rounded-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full  bg-gradient-to-br from-primary/50 rounded-3xl shadow-lg overflow-hidden p-5 relative"
            >
              <div className=" items-center justify-center">
                {/* <div className="relative w-full max-w-lg ">
              <div
                className={
                  "absolute -right-24 -top-28 h-72 w-72 animate-profile-blob rounded-sm bg-primary p-8 opacity-45 mix-blend-multiply blur-3xl filter"
                }
              ></div>
              <div
                className={
                  "absolute -left-40 -top-64 h-72 w-72 animate-profile-blob rounded-sm bg-secondary p-8 opacity-45 mix-blend-multiply blur-3xl filter"
                }
              ></div>
            </div> */}
              </div>
              {/* Balance Display */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center space-x-2">
                  <div className=" p-5   overflow-hidden  border-[1px] border-[#ffffffaa] bg-[#8988885c] backdrop-blur-[6px] duration-[500ms] rounded-full w-12 h-12 flex items-center justify-center">
                    <div className="bg-white border border-black rounded-full w-4 h-4 flex items-center justify-center p-2.5">
                      <span className="text-black text-sm leading-none">$</span>
                    </div>
                  </div>
                  <div className="mt-1">
                    <motion.h1
                      initial={{ scale: 0.95 }}
                      animate={{ scale: 1 }}
                      className="text-3xl font-bold  leading-6"
                    >
                      <p className=" font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.yellow-2),theme(colors.yellow-2),theme(colors.secondary),theme(colors.primary),theme(colors.yellow-3),theme(colors.yellow-2),theme(colors.yellow-2))] bg-[length:200%_auto] animate-gradient"> ₹24,129.50</p>
                    </motion.h1>
                    <p className="text-black/50 text-lg font-semibold ">
                      FGFC Wallet
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <span className="px-1 py-2.5  text-sm font-medium text-black bg-gradient-to-t from-primary   rounded-full   text-center   flex gap-2  justify-center shadow-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1"
                        stroke="currentColor"
                        className="size-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        ></path>
                      </svg>

                      <span>Withdraw</span>
                    </span>
                  </div>
                  <div>
                    <span className="px-1 py-2.5  text-sm font-medium text-gray-900 bg-gradient-to-t from-primary  rounded-full   text-center   flex gap-2  justify-center shadow-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1"
                        stroke="currentColor"
                        className="size-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        ></path>
                      </svg>

                      <span>Deposit</span>
                    </span>
                  </div>
                </div>
              </div>
              {/* Action Buttons */}
              {/* <div className="flex items-center justify-between gap-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 bg-green-500 text-white py-3 rounded-xl font-medium hover:bg-green-600 transition-colors"
            >
              Add money
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 bg-gray-800 text-white py-3 rounded-xl font-medium hover:bg-gray-700 transition-colors"
            >
              Transfer
            </motion.button>
          </div> */}
            </motion.div>
          </div>
        </div>
  </>;
}

export default Wallet;
