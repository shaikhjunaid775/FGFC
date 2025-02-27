import { Link } from "react-router-dom";
import logo from "../assets/images/logo/logo-dark.png";
import { useState, useContext } from "react";
import { toast } from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../App"; // Import the AuthContext

function Register() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    fullname: "",
    mobile: "",
    country: "",
    email: "",
    password: "",
    confirmPassword: "",
    referralId: "",
    termsAccepted: false
  });
  const auth = useContext(AuthContext); // Use the auth context

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === "mobile") {
      // Allow only digits and limit to 10 characters
      if (!/^\d*$/.test(value) || value.length > 10) {
        return;
      }
    }
    if (name === "username") {
      // Prevent spaces in the username
      if (/\s/.test(value)) {
        toast.error("Username should not contain spaces");
        return;
      }
    }
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const passwordRegex = /^(?=.*[A-Za-z]).{7,}$/; // Ensures at least one letter and a minimum length of 7

    if (!passwordRegex.test(formData.password)) {
      toast.error(
        "Password must be at least 7 characters long and contain at least one alphabetic letter"
      );
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    if (!formData.termsAccepted) {
      toast.error("You must accept the terms and conditions");
      return;
    }

    // Store form data in local storage (excluding the password for security)
    const { ...userData } = formData;
    localStorage.setItem("userData", JSON.stringify(userData));

    console.log(formData);
    toast.success("Form submitted and data stored successfully");

    // Store form data in local storage (excluding the password for security)
    localStorage.setItem("userData", JSON.stringify(formData));

    // Auto login the user
    auth.login({ username: formData.username });

    toast.success("Registration successful! Logging in...");
    navigate("/welcomeletter"); // Redirect to welcome letter
  };

  const isFormValid = () => {
    return (
      formData.username &&
      formData.fullname &&
      formData.mobile &&
      formData.country &&
      formData.email &&
      formData.password &&
      formData.confirmPassword
    );
  };

  return (
    <>
      <Toaster />
      <div className="bg-white text-black flex min-h-screen flex-col items-center pt-10 sm:justify-center sm:pt-0">
        <a href="#">
          <div className="text-foreground text-black font-semibold text-2xl tracking-tighter mx-auto flex items-center gap-2">
            <div>
              <img src={logo} className="w-32" />
            </div>
          </div>
          <div className="relative -mb-px h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent"></div>
        </a>
        <div className="relative my-12 w-full max-w-lg sm:mt-10">
          <div className="mx-5 border   border-primary shadow-[0px_0px_50px_5px] shadow-[#fed3285e]/50      rounded-xl">
            <div className="flex flex-col p-4 pt-6">
              <h3 className="text-xl font-semibold leading-6 tracking-tighter">
                Register
              </h3>
              <p className="mt-1.5 text-sm font-medium text-black/50">
                Join FGFC Family less than 1 minute for free.
              </p>
            </div>
            <div className="p-4 pb-6">
              <form onSubmit={handleSubmit}>
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
                        value={formData.username}
                        onChange={handleChange}
                        placeholder="Enter your username"
                        className="block w-full p-3 py-2.5 rounded-full bg-gray-200  text-sm border border-primary focus:border-primary"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <div>
                    <div className="flex justify-between">
                      <label className="text-sm text-muted-foreground  text-black pb-1">
                        Fullname
                      </label>
                    </div>
                    <div className=" relative   duration-200">
                      <input
                        type="text"
                        name="fullname"
                        value={formData.fullname}
                        onChange={handleChange}
                        placeholder="Enter your fullname"
                        className="block w-full p-3 py-2.5 rounded-full bg-gray-200  text-sm border border-primary focus:border-primary"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <div>
                    <div className="flex justify-between">
                      <label className="text-sm text-muted-foreground  text-black pb-1">
                        Mobile Number
                      </label>
                    </div>
                    <div className=" relative   duration-200">
                      <input
                        type="text" // Use "text" instead of "number" to prevent issues with leading zeros
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        placeholder="Enter your mobile number"
                        maxLength="10" // Restricts input to 10 characters
                        className="block w-full p-3 py-2.5 rounded-full bg-gray-200 text-sm border border-primary focus:border-primary"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <div>
                    <div className="flex justify-between">
                      <label className="text-sm text-muted-foreground  text-black pb-1">
                        Select Country
                      </label>
                    </div>
                    <div className="  rounded-lg    duration-200 relative">
                      <select
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="block w-full p-3 py-2.5 rounded-full bg-gray-200  text-sm border border-primary focus:border-primary"
                      >
                        <option value="" className="bg-white ">
                          Select Country
                        </option>
                        <option value="USA" className="bg-white">
                          USA
                        </option>
                        <option value="India" className="bg-white">
                          India
                        </option>
                        <option value="UK" className="bg-white">
                          UK
                        </option>
                        <option value="Canada" className="bg-white">
                          Canada
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <div>
                    <div className="flex justify-between">
                      <label className="text-sm text-muted-foreground  text-black pb-1">
                        Email
                      </label>
                    </div>
                    <div className="  rounded-lg border  border-white/10  duration-200 relative ">
                      <input
                        value={formData.email}
                        onChange={handleChange}
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        autoComplete="off"
                        className="block w-full p-3 py-2.5 rounded-full bg-gray-200  text-sm border border-primary focus:border-primary"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <div>
                    <div className="flex justify-between">
                      <label className="text-sm text-muted-foreground  text-black pb-1">
                        Password
                      </label>
                    </div>
                    <div className="  rounded-lg border  border-white/10  duration-200 relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={handleChange}
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
                            className="fill-gray-400 size-6"
                          >
                            <path d="M12 18.75c-5.83 0-8.57-6.19-8.69-6.45a.78.78 0 0 1 0-.6c.12-.26 2.86-6.45 8.69-6.45s8.57 6.19 8.69 6.45a.78.78 0 0 1 0 .6c-.12.26-2.86 6.45-8.69 6.45m0-2c3.88 0 6.26-3.45 6.82-4.44-.56-.99-2.94-4.31-6.82-4.31s-6.26 3.32-6.82 4.31c.56.99 2.94 4.44 6.82 4.44" />
                            <path d="M12 15.25A3.25 3.25 0 1 1 15.25 12A3.26 3.26 0 0 1 12 15.25m0-5A1.75 1.75 0 1 0 13.75 12A1.76 1.76 0 0 0 12 10.25" />
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
                      <label className="text-sm text-muted-foreground  text-black pb-1">
                        Confirm Password
                      </label>
                    </div>
                    <div className="  rounded-lg border border-white/10   duration-200 relative">
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        name="confirmPassword"
                        placeholder="Confirm your password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
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
                            className="fill-gray-400 size-6"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 18.75c-5.83 0-8.57-6.19-8.69-6.45a.78.78 0 0 1 0-.6c.12-.26 2.86-6.45 8.69-6.45s8.57 6.19 8.69 6.45a.78.78 0 0 1 0 .6c-.12.26-2.86 6.45-8.69 6.45m0-2c3.88 0 6.26-3.45 6.82-4.44-.56-.99-2.94-4.31-6.82-4.31s-6.26 3.32-6.82 4.31c.56.99 2.94 4.44 6.82 4.44" />
                            <path d="M12 15.25A3.25 3.25 0 1 1 15.25 12A3.26 3.26 0 0 1 12 15.25m0-5A1.75 1.75 0 1 0 13.75 12A1.76 1.76 0 0 0 12 10.25" />
                          </svg>
                        ) : (
                          // Eye icon (closed)
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="fill-gray-400 size-6"
                            viewBox="0 0 24 24"
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
                      <label className="text-sm text-muted-foreground  text-black pb-1">
                        Enter Referral ID
                      </label>
                    </div>
                    <div className=" relative rounded-lg border border-white/10  duration-200">
                      <input
                        type="text"
                        name="referralId"
                        placeholder="Enter referral ID (optional)"
                        value={formData.referralId}
                        onChange={handleChange}
                        className="block w-full p-3 py-2.5 rounded-full bg-gray-200  text-sm border border-primary focus:border-primary"
                      />
                    </div>
                  </div>
                </div>
                {/* Accept Terms & Conditions */}
                <div className="mt-4 flex items-start">
                  <input
                    type="checkbox"
                    name="termsAccepted"
                    checked={formData.termsAccepted}
                    onChange={handleChange}
                    className="mr-2 mt-1 "
                  />
                  <label className="text-sm text-gray-700">
                    I accept the{" "}
                    <span className="underline">terms and conditions</span> &
                    confirm i am at least 18 years old.
                  </label>
                </div>
                <div className="mt-4 flex items-center justify-end gap-x-2">
                  <button
                    type="submit"
                    disabled={!isFormValid()}
                    className={`w-full text-center items-center bg-gradient-to-r from-primary to-secondary justify-center rounded-full text-md font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent  h-10 px-4 py-2 duration-200 border border-primary ${
                      isFormValid() ? "" : ""
                    }`}
                  >
                    Register
                  </button>
                </div>
                <div className="text-center text-sm mt-3">
                  <span>Already have an account? </span>
                  <Link to="/login" className="underline">
                    {" "}
                    Login
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

export default Register;
