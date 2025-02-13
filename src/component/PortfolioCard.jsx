function PortfolioCard() {
  return (
    <>
      <div className="mt-3">
        <div className="card  pb-5">
          <div className="top-section">
            <div className="borders">
              <div className="skew-x-40 mt-1">
                <span className="text-black font-semibold  px-1   ">
                  Live Investment
                </span>
              </div>
            </div>
            <div>
              <div className="grid grid-cols-2 divide-x balance border-0 br-right  px-3 my-2 ">
                <div className=" text-center">
                  <h4 className="text-xs font-medium">Total Investment</h4>
                  <p className="text-xl font-bold leading-tight"> ₹100000.00</p>
                </div>

                <div className="text-center ">
                  <h4 className="text-xs font-medium">Profit Earned</h4>
                  <p className="text-xl font-bold leading-tight"> ₹ 0</p>
                </div>
              </div>
              <div className="border-t border-b border-gray-300 rounded-2xl text-center bg-[#FFF5D2] mx-3 py-2 my-2">
                <h3 className="text-sm font-semibold mb-1">Withdrawals</h3>

                <div className="grid grid-cols-2 divide-x balance border-0  ">
                  <div className="">
                    <h4 className="text-xs font-medium ">Total Investment</h4>
                    <p className="text-xl font-black leading-tight text-black">
                      {" "}
                      ₹ 0
                    </p>
                  </div>
                  <div className="  ">
                    <h4 className="text-xs font-medium ">Profit</h4>
                    <p className="text-xl font-black leading-tight text-black">
                      {" "}
                      ₹ 0
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PortfolioCard;
