import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer";
import home from "../../assets/images/article/home1.png";
import menuBtn from "../../assets/images/article/register.png";
import menuBtnlogin from "../../assets/images/article/login.png";
import login from "../../assets/images/article/login2.png";
import registration from "../../assets/images/article/register2.png";

function ArticleLoginRed() {
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
            How to Login/Registration
          </span>
        </div>
        <div className="flex items-center justify-center px-4 pb-5 border-b border-gray-300">
          <div className=" rounded-lg p-2 pt-0 max-w-2xl w-full mt-4">
            <span className="text-3xl font-bold text-center text-secondary mb-6 flex justify-center">
              How to Register/Login
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
                  Navigate to the Registration Page
                </h2>
                <p className="text-sm text-slate-900">
                  Click on the{" "}
                  <span className="font-medium text-slate-900">
                    <a
                      href="https://fgfcunion.finance/registration"
                      target="_blank"
                      className="text-secondary underline"
                    >
                      Register
                    </a>
                  </span>{" "}
                  button on the homepage.
                </p>
                <div className="mx-auto px-0">
                  <img
                    src={menuBtn}
                    alt="image"
                    className="img-fluid rounded-1 parallax-image vert-move  "
                  />
                </div>
              </li>

              <li className="space-y-2">
                <h2 className="text-lg font-semibold">Fill in Your Details</h2>
                <ul className="list-disc ml-6 space-y-1 text-sm text-slate-900">
                  <li>
                    Enter your <span className="font-medium">UserName</span>.
                  </li>
                  <li>
                    Enter your <span className="font-medium">Full Name</span>.
                  </li>
                  <li>
                    Provide your{" "}
                    <span className="font-medium">Mobile Number</span>.
                  </li>
                  <li>
                    Use a valid{" "}
                    <span className="font-medium">Email Address</span>.
                  </li>
                  <li>
                    Create a strong{" "}
                    <span className="font-medium">Password</span>.
                  </li>
                  <li>
                    Re-enter <span className="font-medium">Password</span>.
                  </li>
                  <li>
                    Input the <span className="font-medium">Referral ID</span>
                    <b> given by your referrer.</b>
                  </li>
                  <li>And hit Register button.</li>
                </ul>
                <div className="mx-auto px-0">
                  <img
                    src={registration}
                    alt="image"
                    className="img-fluid rounded-1 parallax-image vert-move  "
                  />
                </div>
              </li>

              <li className="space-y-2">
                <h2 className="text-lg font-semibold">Verify Your Details</h2>
                <p className="text-sm text-slate-900">
                  Double-check all the fields to ensure they are correct before
                  proceeding.
                </p>
              </li>

              <li className="space-y-2">
                <h2 className="text-lg font-semibold">
                  Accept Terms and Conditions
                </h2>
                <p className="text-sm text-slate-900">
                  Tick the checkbox to agree to the platforms terms and
                  conditions.
                </p>
              </li>

              <li className="space-y-2">
                <h2 className="text-lg font-semibold">Complete Registration</h2>
                <p className="text-sm text-slate-900">
                  Click on the{" "}
                  <span className="font-medium text-slate-900">Submit</span> or{" "}
                  <span className="font-medium text-slate-900">Register</span>{" "}
                  button. Verify your account through the confirmation email or
                  SMS.
                </p>
              </li>

              <li className="space-y-2">
                <h2 className="text-lg font-semibold">Login to Your Account</h2>
                <p className="text-sm text-slate-900">
                  Use your email and password to log in and access your
                  dashboard.
                </p>
              </li>
            </ol>
          </div>
        </div>
        <div className="flex items-center justify-center px-4 pb-5 mt-6">
          <div className=" rounded-lg p-2 max-w-2xl w-full">
            <h1 className="text-3xl font-bold text-center text-secondary mb-6">
              How to Login
            </h1>

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
            </ol>

            <p className="text-center text-black mb-8 mt-4 text-sm">
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

export default ArticleLoginRed;
