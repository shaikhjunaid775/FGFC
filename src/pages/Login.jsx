import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo/logo-dark.png";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { Toaster } from "react-hot-toast";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Hardcoded credentials for demo
    const validUsername = "admin";
    const validPassword = "password123";

    if (username === validUsername && password === validPassword) {
      navigate("/dashboard", { state: { message: "Login Successful!" } }); // Redirect with state
    } else if (username === "" || password === "") {
      toast.error("Please fill in all fields");
    } else {
      toast.error("Username or Password is incorrect!");
    }
  };

  return (
    <>
      <Toaster />
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
          <div className="mx-5 border   border-primary shadow-[0px_0px_50px_5px] shadow-[#fed3285e]/50 rounded-lg     rounded-xl">
            <div className="flex flex-col p-6">
              <h3 className="text-xl font-semibold leading-6 tracking-tighter">
                Login
              </h3>
              <p className="mt-1.5 text-sm font-medium text-black/50">
                Welcome back, enter your credentials to continue.
              </p>
            </div>
            <div className="p-6 px-4 pt-0">
              <form onSubmit={handleLogin}>
                <div>
                  <div>
                    <div className="flex justify-between">
                      <label className="text-sm text-muted-foreground  text-black pb-1">
                        Username
                      </label>
                    </div>
                    <div className=" relative   duration-200">
                      <input
                        type="text"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter your username"
                        autoComplete="off"
                        className="block w-full p-3 py-2.5 rounded-full bg-gray-200  text-sm border border-primary focus:border-primary"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <div>
                    <div className="flex justify-between">
                      <label className="text-sm text-muted-foreground  text-black mb-1">
                        Password
                      </label>
                    </div>
                    <div className="   relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        autoComplete="off"
                        className="block w-full p-3 py-2.5 rounded-full bg-gray-200  text-sm border border-primary focus:border-primary"
                      />
                      {/* Toggle Password Button */}
                      <button
                        type="button"
                        className="absolute top-2 end-2"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          // Eye icon (open)
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="fill-gray-400 size-7"
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
                            className="fill-gray-400 size-7"
                          >
                            <path d="M2 5.27L3.28 4L20 20.72L18.73 22l-3.08-3.08c-1.15.38-2.37.58-3.65.58c-5 0-9.27-3.11-11-7.5c.69-1.76 1.79-3.31 3.19-4.54zM12 9a3 3 0 0 1 3 3a3 3 0 0 1-.17 1L11 9.17A3 3 0 0 1 12 9m0-4.5c5 0 9.27 3.11 11 7.5a11.8 11.8 0 0 1-4 5.19l-1.42-1.43A9.86 9.86 0 0 0 20.82 12A9.82 9.82 0 0 0 12 6.5c-1.09 0-2.16.18-3.16.5L7.3 5.47c1.44-.62 3.03-.97 4.7-.97M3.18 12A9.82 9.82 0 0 0 12 17.5c.69 0 1.37-.07 2-.21L11.72 15A3.064 3.064 0 0 1 9 12.28L5.6 8.87c-.99.85-1.82 1.91-2.42 3.13"></path>
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="remember"
                      className="outline-none focus:outline focus:outline-sky-300"
                    />
                    <span className="text-xs">Remember me</span>
                  </label>
                  <Link
                    to="/forgotpass"
                    className="text-sm font-medium text-foreground underline"
                  >
                    Forgot password?
                  </Link>
                </div>
                <div className="mt-4 flex items-center justify-end gap-x-2">
                  <button
                    type="submit"
                    className=" w-full text-center items-center bg-gradient-to-r from-primary to-secondary justify-center rounded-full text-md font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent  h-10 px-4 py-2 duration-200 border border-primary"
                  >
                    Login
                  </button>
                </div>
                <div className="text-center text-sm mt-3">
                  <span>Dont have an account? </span>
                  <Link to="/register" className="underline">
                    {" "}
                    Register
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

export default Login;
