import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import Footer from "../component/Footer";

function ChangePassword() {
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate passwords
    if (!oldPassword || !newPassword || !confirmPassword) {
      toast.error("All fields are required!");
      return;
    }

    if (newPassword.length < 8) {
      toast.error("Password must be at least 8 characters!");
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error("New Password and Confirm Password do not match!");
      return;
    }

    // API Call (Dummy Example)
    toast.success("Password changed successfully!");
    console.log({ oldPassword, newPassword });
  };
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="bg-white p-3 text-center sticky top-0 z-10">
        <span className="font-semibold text-lg whitespace-nowrap">
          Change Password
        </span>
      </div>
      <div className="bg-white text-black flex min-h-screen flex-col items-center  sm:justify-center sm:pt-0">
        <div className="relative mt-8 w-full max-w-lg ">
          <div className="mx-5 border   border-primary shadow-[0px_0px_50px_5px] shadow-[#fed3285e]/50  rounded-xl">
            <div className="p-6 px-4 pt-0">
              <form onSubmit={handleSubmit}>
                <div className="mt-4">
                  <div>
                    <div className="flex justify-between">
                      <label className="text-sm text-muted-foreground  text-black mb-1">
                        Old Password
                      </label>
                    </div>
                    <div className="   relative">
                      <input
                        type={showOldPassword ? "text" : "password"}
                        value={oldPassword}
                        onChange={(e) => setOldPassword(e.target.value)}
                        name="password"
                        placeholder="Enter your Old Password"
                        autoComplete="off"
                        className="block w-full p-3 py-2.5 rounded-full bg-gray-200  text-sm border border-primary focus:border-primary"
                      />
                      {/* Toggle Password Button */}
                      <button
                        type="button"
                        className="absolute top-2 end-2"
                        onClick={() => setShowOldPassword(!showOldPassword)}
                      >
                        {showOldPassword ? (
                          // Eye icon (open)
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="fill-gray-400 size-6"
                          >
                            <path
                              fill=""
                              d="M12 18.75c-5.83 0-8.57-6.19-8.69-6.45a.78.78 0 0 1 0-.6c.12-.26 2.86-6.45 8.69-6.45s8.57 6.19 8.69 6.45a.78.78 0 0 1 0 .6c-.12.26-2.86 6.45-8.69 6.45m0-2c3.88 0 6.26-3.45 6.82-4.44-.56-.99-2.94-4.31-6.82-4.31s-6.26 3.32-6.82 4.31c.56.99 2.94 4.44 6.82 4.44"
                            />
                            <path
                              fill=""
                              d="M12 15.25A3.25 3.25 0 1 1 15.25 12A3.26 3.26 0 0 1 12 15.25m0-5A1.75 1.75 0 1 0 13.75 12A1.76 1.76 0 0 0 12 10.25"
                            />
                          </svg>
                        ) : (
                          // Eye icon (closed)
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="fill-gray-400 size-6"
                          >
                            <path d="M2 5.27L3.28 4L20 20.72L18.73 22l-3.08-3.08c-1.15.38-2.37.58-3.65.58c-5 0-9.27-3.11-11-7.5c.69-1.76 1.79-3.31 3.19-4.54zM12 9a3 3 0 0 1 3 3a3 3 0 0 1-.17 1L11 9.17A3 3 0 0 1 12 9m0-4.5c5 0 9.27 3.11 11 7.5a11.8 11.8 0 0 1-4 5.19l-1.42-1.43A9.86 9.86 0 0 0 20.82 12A9.82 9.82 0 0 0 12 6.5c-1.09 0-2.16.18-3.16.5L7.3 5.47c1.44-.62 3.03-.97 4.7-.97M3.18 12A9.82 9.82 0 0 0 12 17.5c.69 0 1.37-.07 2-.21L11.72 15A3.064 3.064 0 0 1 9 12.28L5.6 8.87c-.99.85-1.82 1.91-2.42 3.13"></path>
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <div>
                    <div className="flex justify-between">
                      <label className="text-sm text-muted-foreground  text-black mb-1">
                        New Password
                      </label>
                    </div>
                    <div className="   relative">
                      <input
                        type={showNewPassword ? "text" : "password"}
                        name="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        placeholder="Enter your New Password"
                        autoComplete="off"
                        className="block w-full p-3 py-2.5 rounded-full bg-gray-200  text-sm border border-primary focus:border-primary"
                      />
                      {/* Toggle Password Button */}
                      <button
                        type="button"
                        className="absolute top-2 end-2"
                        onClick={() => setShowNewPassword(!showNewPassword)}
                      >
                        {showNewPassword ? (
                          // Eye icon (open)
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="fill-gray-400 size-6"
                          >
                            <path
                              fill=""
                              d="M12 18.75c-5.83 0-8.57-6.19-8.69-6.45a.78.78 0 0 1 0-.6c.12-.26 2.86-6.45 8.69-6.45s8.57 6.19 8.69 6.45a.78.78 0 0 1 0 .6c-.12.26-2.86 6.45-8.69 6.45m0-2c3.88 0 6.26-3.45 6.82-4.44-.56-.99-2.94-4.31-6.82-4.31s-6.26 3.32-6.82 4.31c.56.99 2.94 4.44 6.82 4.44"
                            />
                            <path
                              fill=""
                              d="M12 15.25A3.25 3.25 0 1 1 15.25 12A3.26 3.26 0 0 1 12 15.25m0-5A1.75 1.75 0 1 0 13.75 12A1.76 1.76 0 0 0 12 10.25"
                            />
                          </svg>
                        ) : (
                          // Eye icon (closed)
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="fill-gray-400 size-6"
                          >
                            <path d="M2 5.27L3.28 4L20 20.72L18.73 22l-3.08-3.08c-1.15.38-2.37.58-3.65.58c-5 0-9.27-3.11-11-7.5c.69-1.76 1.79-3.31 3.19-4.54zM12 9a3 3 0 0 1 3 3a3 3 0 0 1-.17 1L11 9.17A3 3 0 0 1 12 9m0-4.5c5 0 9.27 3.11 11 7.5a11.8 11.8 0 0 1-4 5.19l-1.42-1.43A9.86 9.86 0 0 0 20.82 12A9.82 9.82 0 0 0 12 6.5c-1.09 0-2.16.18-3.16.5L7.3 5.47c1.44-.62 3.03-.97 4.7-.97M3.18 12A9.82 9.82 0 0 0 12 17.5c.69 0 1.37-.07 2-.21L11.72 15A3.064 3.064 0 0 1 9 12.28L5.6 8.87c-.99.85-1.82 1.91-2.42 3.13"></path>
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <div>
                    <div className="flex justify-between">
                      <label className="text-sm text-muted-foreground  text-black mb-1">
                        Confirm Password
                      </label>
                    </div>
                    <div className="   relative">
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        name="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Enter your Confirm Password"
                        autoComplete="off"
                        className="block w-full p-3 py-2.5 rounded-full bg-gray-200  text-sm border border-primary focus:border-primary"
                      />
                      {/* Toggle Password Button */}
                      <button
                        type="button"
                        className="absolute top-2 end-2"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                      >
                        {showConfirmPassword ? (
                          // Eye icon (open)
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="fill-gray-400 size-6"
                          >
                            <path
                              fill=""
                              d="M12 18.75c-5.83 0-8.57-6.19-8.69-6.45a.78.78 0 0 1 0-.6c.12-.26 2.86-6.45 8.69-6.45s8.57 6.19 8.69 6.45a.78.78 0 0 1 0 .6c-.12.26-2.86 6.45-8.69 6.45m0-2c3.88 0 6.26-3.45 6.82-4.44-.56-.99-2.94-4.31-6.82-4.31s-6.26 3.32-6.82 4.31c.56.99 2.94 4.44 6.82 4.44"
                            />
                            <path
                              fill=""
                              d="M12 15.25A3.25 3.25 0 1 1 15.25 12A3.26 3.26 0 0 1 12 15.25m0-5A1.75 1.75 0 1 0 13.75 12A1.76 1.76 0 0 0 12 10.25"
                            />
                          </svg>
                        ) : (
                          // Eye icon (closed)
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="fill-gray-400 size-6"
                          >
                            <path d="M2 5.27L3.28 4L20 20.72L18.73 22l-3.08-3.08c-1.15.38-2.37.58-3.65.58c-5 0-9.27-3.11-11-7.5c.69-1.76 1.79-3.31 3.19-4.54zM12 9a3 3 0 0 1 3 3a3 3 0 0 1-.17 1L11 9.17A3 3 0 0 1 12 9m0-4.5c5 0 9.27 3.11 11 7.5a11.8 11.8 0 0 1-4 5.19l-1.42-1.43A9.86 9.86 0 0 0 20.82 12A9.82 9.82 0 0 0 12 6.5c-1.09 0-2.16.18-3.16.5L7.3 5.47c1.44-.62 3.03-.97 4.7-.97M3.18 12A9.82 9.82 0 0 0 12 17.5c.69 0 1.37-.07 2-.21L11.72 15A3.064 3.064 0 0 1 9 12.28L5.6 8.87c-.99.85-1.82 1.91-2.42 3.13"></path>
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-end gap-x-2">
                  <button
                    type="submit"
                    className="w-full text-center items-center bg-gradient-to-tr from-primary to-secondary  justify-center rounded-full text-md font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent  h-10 px-4 py-2 duration-200 "
                  >
                    Change Password
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ChangePassword;
