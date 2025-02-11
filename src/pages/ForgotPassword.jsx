import { Link } from "react-router-dom";
import logo from "../assets/images/logo/logo-dark.png";
import { ArrowLeft } from "lucide-react";

function ForgotPassword() {
  return (
    <>
      <div className="bg-white text-black flex min-h-screen flex-col items-center pt-10 sm:justify-center sm:pt-0">
              <a href="#">
                <div className="text-foreground text-black font-semibold text-2xl tracking-tighter mx-auto flex items-center gap-2">
                  <div>
                    <img src={logo} className="w-32" />
                  </div>
                </div>
                <div className="relative -mb-px h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent"></div>
              </a>
              <div className="relative mt-12 w-full max-w-lg sm:mt-10">
                <div className="mx-5 border   border-primary shadow-[0px_0px_50px_5px] shadow-[#fed3285e]/50 rounded-lg   border-black/20  rounded-xl">
                  <div className="flex flex-col p-6">
                    <h3 className="text-xl font-semibold leading-6 tracking-tighter">
                      Forgot Password
                    </h3>
                    <p className="mt-1.5 text-sm font-medium text-black/50">
                    No worries, it happens, Please enter the username associated
                    with your account.
                    </p>
                  </div>
                  <div className="p-6 px-4 pt-0">
              <form>
                <div>
                  <div>
                    <div className="flex justify-between">
                    <label className="text-sm text-muted-foreground  text-black mb-1">
                        Username
                      </label>
                    </div>
                    <div className=" relative   duration-200">
                      <input
                        type="text"
                        name="username"
                        placeholder="Enter your username"
                        autoComplete="off"
                        className="block w-full p-3 py-2.5 rounded-full bg-gray-200  text-sm "
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-end gap-x-2">
                  <Link
                    to="/dashboard"
                    className="w-full text-center items-center bg-gradient-to-r from-primary to-secondary justify-center rounded-full text-md font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent  h-10 px-4 py-2 duration-200 border border-primary"
                  >
                    Submit
                  </Link>
                </div>
                <div className="text-center text-sm mt-3 flex justify-center items-center gap-2">
                  <ArrowLeft size={16} />
                  <Link to="/login" className="underline">
                    <span> Back to login</span>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
