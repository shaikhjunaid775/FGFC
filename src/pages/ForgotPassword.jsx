import { Link } from "react-router-dom";
import logo from "../assets/images/logo/logo-dark.png";
import { useState } from "react";
import { ArrowLeft, Mail } from "lucide-react";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Dummy local database of users (for testing)
  const users = ["test1@example.com", "test2@example.com"];

  const handleCheckEmail = (e) => {
    e.preventDefault();

    if (users.includes(email)) {
      setIsSubmitted(true); // Hide form
    } else {
      setMessage("Email not found. Please try again.");
    }
  };

  return (
    <>
      <div className="bg-white text-black flex min-h-screen flex-col items-center pt-10 sm:justify-center sm:pt-0">
        <Link to="/">
          <div className="text-foreground text-black font-semibold text-2xl tracking-tighter mx-auto flex items-center gap-2">
            <div>
              <img src={logo} className="w-32" />
            </div>
          </div>
          <div className="relative -mb-px h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent"></div>
        </Link>
        <div className="relative mt-12 w-full max-w-lg sm:mt-10">
          <div className="mx-5 border border-primary shadow-[0px_0px_50px_5px] shadow-[#fed3285e]/50 rounded-xl">
            <div className="flex flex-col p-6">
              <h3 className="text-xl font-semibold leading-6 tracking-tighter">
                Forgot Password
              </h3>
              <p className="mt-1.5 text-sm font-medium text-black/50">
                No worries, it happens. Please enter the email associated with
                your account.
              </p>
            </div>
            <div className="p-6 px-4 pt-0">
              {isSubmitted ? (
                // Success message box (only shown after submission)
                <>
                  {/* Icon */}
                  <div className="flex justify-center">
                    <div className="p-4 bg-primary/30 rounded-full">
                      <Mail className="h-12 w-12 text-secondary" />
                    </div>
                  </div>

                  {/* Heading */}
                  <h2 className="text-2xl font-semibold mt-4 text-center">
                    Check your mail
                  </h2>
                  <p className="text-gray-600 mt-2 text-sm text-center">
                    We have sent a password recovery link to your email.
                  </p>

                  <Link
                    to="/login"
                    className="mt-6 w-full bg-gradient-to-r from-primary to-secondary justify-center rounded-full text-black py-2 font-medium transition text-center block"
                  >
                    Back to login
                  </Link>

                  {/* Footer */}
                  <p className="mt-6 text-xs text-gray-500">
                    Did not receive the email? Check your spam filter, or{" "}
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-secondary hover:underline"
                    >
                      try another email address
                    </button>
                    .
                  </p>
                </>
              ) : (
                // Form (hidden after successful submission)
                <form onSubmit={handleCheckEmail}>
                  <div>
                    <label className="text-sm text-muted-foreground text-black mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      autoComplete="off"
                      className="block w-full p-3 py-2.5 rounded-full bg-gray-200 text-sm"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  {message && !isSubmitted && (
                    <div className="mt-4 p-3 bg-red-200 text-red-800 rounded-lg text-center text-sm font-medium">
                      {message}
                    </div>
                  )}

                  <div className="mt-4 flex items-center justify-end gap-x-2">
                    <button
                      type="submit"
                      className="w-full text-center items-center bg-gradient-to-r from-primary to-secondary justify-center rounded-full text-md font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent h-10 px-4 py-2 duration-200 border border-primary"
                    >
                      Submit
                    </button>
                  </div>
                  <div className="text-center text-sm mt-3 flex justify-center items-center gap-2">
                    <ArrowLeft size={16} />
                    <Link to="/login" className="underline">
                      <span> Back to login</span>
                    </Link>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
