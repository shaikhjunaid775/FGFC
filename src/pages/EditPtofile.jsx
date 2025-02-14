import { ChevronLeft } from "lucide-react";
import Footer from "../component/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";

function EditPtofile() {
  const [formData, setFormData] = useState({
    username: "",
    gender: "",
    email: "",
    MemberID: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    
    console.log("Form submitted", formData);
  };

  return (
    <>
      {/* Header (Fixed) */}
      <div className="grid grid-cols-3 p-3 text-center shadow-md bg-white sticky top-0 z-10">
        <button>
          <ChevronLeft />
        </button>
        <span className="font-semibold text-lg whitespace-nowrap">
          Edit Profile
        </span>
      </div>
      <div className="relative my-12 w-full max-w-lg sm:mt-10">
        <div className="mx-5 border   border-primary shadow-[0px_0px_50px_5px] shadow-[#fed3285e]/50      rounded-xl">
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
                      Member ID
                    </label>
                  </div>
                  <div className=" relative   duration-200">
                    <input
                      type="text"
                      name="MemberID"
                      value={formData.MemberID}
                      onChange={handleChange}
                      placeholder="Enter your Member ID"
                      className="block w-full p-3 py-2.5 rounded-full bg-gray-200  text-sm border border-primary focus:border-primary"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <div>
                  <div className="flex justify-between">
                    <label className="text-sm text-muted-foreground  text-black pb-1">
                      Select gender
                    </label>
                  </div>
                  <div className="  rounded-lg    duration-200 relative">
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className="block w-full p-3 py-2.5 rounded-full bg-gray-200  text-sm border border-primary focus:border-primary"
                    >
                      <option value="" className="bg-white ">
                        Select Gender
                      </option>
                      <option value="Male" className="bg-white">
                        Male
                      </option>
                      <option value="Female" className="bg-white">
                        Female
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

              <div className="mt-4 flex items-center justify-end gap-x-2">
                <button
                  className="w-full text-center items-center bg-gradient-to-tr from-primary to-secondary  justify-center rounded-full text-md font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent  h-10 px-4 py-2 duration-200 "
                  type="submit"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default EditPtofile;
