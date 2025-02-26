import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer";
import home from "../../assets/images/article/home1.png";
import menuBtnlogin from "../../assets/images/article/login.png";
import login from "../../assets/images/article/login2.png";
import dashboard from "../../assets/images/article/dashboard.png";
import profile from "../../assets/images/article/profile.png";
import usdt from "../../assets/images/article/usdt1.png";
import usdt2 from "../../assets/images/article/usdt2.png";

function ArticleDepositUsdt() {
  const navigate = useNavigate();

  return (
    <>
      <div className=" pb-20">
        {/* Header (Fixed) */}
        <div className=" p-3 text-center shadow-md bg-white sticky top-0 z-10">
          <button
            onClick={() => navigate(-1)}
            className="absolute left-0 top-3.5"
          >
            <ChevronLeft />
          </button>
          <span className="font-semibold text-lg whitespace-nowrap">
            How to Deposit in USDT
          </span>
        </div>
        <div className="flex items-center justify-center px-4 pb-5">
          <div className=" rounded-lg p-2 max-w-2xl w-full">
            <span className="text-3xl font-bold text-center text-secondary mb-6 flex">
              How to Deposit in USDT
            </span>

            <ol className="list-decimal space-y-6 text-slate-900">
              <li className="space-y-2">
                <h2 className="text-lg font-semibold">Visit the Website</h2>
                <p className="text-sm text-slate-900">
                  Open your browser and go to
                  <a
                    href="https://fgfcunion.finance/"
                    target="_blank"
                    className="text-secondary underline"
                  >
                    fgfcunion.finance
                  </a>
                  .
                </p>
                <div className="mx-auto px-0">
                  <img
                    src={home}
                    alt="image"
                    className="img-fluid rounded-1 parallax-image vert-move  "
                  />
                </div>
              </li>

              <li className="space-y-2">
                <h2 className="text-lg font-semibold">
                  Navigate to the Login Page
                </h2>
                <p className="text-sm text-slate-900">
                  Click on the{" "}
                  <span className="font-medium text-slate-900">
                    <a
                      href="https://fgfcunion.finance/login"
                      target="_blank"
                      className="text-secondary underline"
                    >
                      Login
                    </a>
                  </span>{" "}
                  button on the homepage.
                </p>
                <div className="mx-auto px-0">
                  <img
                    src={menuBtnlogin}
                    alt="image"
                    className="img-fluid rounded-1 parallax-image vert-move  "
                  />
                </div>
              </li>

              <li className="space-y-2">
                <h2 className="text-lg font-semibold">Fill in Your Details</h2>
                <ul className="list-disc ml-6 space-y-1 text-sm text-slate-900">
                  <li>
                    Enter your log in
                    <span className="font-medium"> Username</span>.
                  </li>
                  <li>
                    Enter your log in
                    <span className="font-medium"> Password</span>.
                  </li>
                  <li>And hit Login button.</li>
                </ul>
                <div className="mx-auto px-0">
                  <img
                    src={login}
                    alt="image"
                    className="img-fluid rounded-1 parallax-image vert-move  "
                  />
                </div>
              </li>

              <li className="space-y-2">
                <h2 className="text-lg font-semibold">
                  After Accessing Dashboard
                </h2>
                <p className="text-sm text-slate-900">
                  After a successful login, you will be redirected to the
                  dashboard.
                </p>
              </li>

              <li className="space-y-2">
                <h2 className="text-lg font-semibold">
                  Navigate to the Account Section
                </h2>
                <p className="text-sm text-slate-900">
                  On the bottom navigation menu (optimized for mobile), click
                  the <span className="font-medium text-secondary">Account</span>{" "}
                  button to access your profile.
                </p>
                <div className="mx-auto px-0">
                  <img
                    src={dashboard}
                    alt="image"
                    className="img-fluid rounded-1 parallax-image vert-move  "
                  />
                </div>
              </li>

              <li className="space-y-2">
                <h2 className="text-lg font-semibold">
                  Select the Deposit Option
                </h2>
                <p className="text-sm text-slate-900">
                  In the Account section, locate and click the{" "}
                  <span className="font-medium text-secondary">Deposit fund</span>{" "}
                  option.
                </p>
                <div className="mx-auto px-0">
                  <img
                    src={profile}
                    alt="image"
                    className="img-fluid rounded-1 parallax-image vert-move  "
                  />
                </div>
              </li>

              <li className="space-y-2">
                <h2 className="text-lg font-semibold">
                  Choose USDT as Your Deposit Method
                </h2>
                <p className="text-sm text-slate-900">
                  Click on the{" "}
                  <span className="font-medium text-secondary">USDT</span> tab to
                  proceed with a USDT deposit.
                </p>
              </li>
              <li className="space-y-2">
                <h2 className="text-lg font-semibold">
                  Enter the Deposit Amount
                </h2>
                <p className="text-sm text-slate-900">
                  In the amount field, enter the amount you wish to deposit in
                  USDT.
                </p>
                <div className="mx-auto px-0">
                  <img
                    src={usdt}
                    alt="image"
                    className="img-fluid rounded-1 parallax-image vert-move  "
                  />
                </div>
              </li>
              <div className="bg-gray-50 p-2 border rounded-md text-gray-700 text-sm">
                Note: Enter <span className="font-medium">Min 100000</span>{" "}
                USDT.
              </div>

              <li className="space-y-2">
                <h2 className="text-lg font-semibold">Select the Network</h2>
                <p className="text-sm text-slate-900">
                  Choose the network (e.g.,{" "}
                  <span className="font-medium">
                    Ethereum, Binance Smart Chain
                  </span>
                  ) from the dropdown menu or selection options.
                </p>
              </li>

              <li className="space-y-2">
                <h2 className="text-lg font-semibold">
                  Enter Transaction Hash & Upload Payment Receipt 
                </h2>
                <p className="text-sm text-slate-900">
                Enter Transaction Hash and Use the file upload option to attach your payment receipt as
                  proof of the transaction.
                </p>

                <div className="mx-auto px-0">
                  <img
                    src={usdt2}
                    alt="image"
                    className="img-fluid rounded-1 parallax-image vert-move  "
                  />
                </div>
              </li>

              <li className="space-y-2">
                <h2 className="text-lg font-semibold">Submit Your Deposit</h2>
                <p className="text-sm text-slate-900">
                  Review all details, then click the{" "}
                  <span className="font-medium text-secondary">Submit</span>{" "}
                  button to complete the deposit process. A confirmation message
                  will be displayed upon successful submission.
                </p>
              </li>
            </ol>

            <p className="text-center text-black my-8 text-sm">
              For any issues, contact our support team at{" "}
              <a
                href="mailto:support@fgfcunion.finance"
                className="text-secondary underline"
              >
                support@fgfcunion.finance
              </a>
              .
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ArticleDepositUsdt;
