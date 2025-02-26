import { Power } from "lucide-react";
import { useState } from "react";
import { useContext } from "react";
import logo from "../assets/images/logo/logo-white.png";
import user from "../assets/images/user.png";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../App";

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const Navigate = useNavigate();
  const auth = useContext(AuthContext);
  const { username } = auth; // Destructure username from auth context

  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setImage(imageURL); // Update state with new image
    }
  };

  const handleLogout = () => {
    setIsModalOpen(true); // Open modal when logout button is clicked
  };

  const confirmLogout = () => {
    setIsModalOpen(false);
    auth.logout();
    Navigate("/login");
  };

  const isActive = true; // Change this to false to test inactive state
  return (
    <>
      <header className="relative w-full flex flex-col gap-5 py-4 bg-gradient-to-b from-amber-400 to-amber-500 rounded-b-[30px] px-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-2">
            <img src={logo} alt="logo" className="w-24" />
          </div>

          <div className="flex items-center gap-4">
            <span
              className={`inline-flex items-center text-[12px] font-medium ms-2 px-2 py-0 rounded-full ring-1 ${
                isActive
                  ? "bg-green-100 ring-green-600 text-green-600"
                  : "bg-red-100 ring-red-600 text-red-600"
              }`}
            >
              <span
                className={`animate-pulse w-1.5 h-1.5 me-1 rounded-full ${
                  isActive ? "bg-green-600" : "bg-red-600"
                }`}
              ></span>
              {isActive ? "Active" : "Inactive"}
            </span>

            <button
              onClick={handleLogout}
              className="p-2 bg-white rounded-full transition-colors"
            >
              <Power className="w-4 h-4 text-red-500" strokeWidth={2.5} />
            </button>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col ">
            <h2 className="text-lg font-medium text-white">
              Good Afternoon, {username}
            </h2>
            {/* <span className="flex items-center gap-1.5 px-2 py-0.5 bg-white backdrop-blur-sm rounded-full text-[10px] text-green-700 w-fit">
              Active On: 2024-12-10 20:59:02
            </span> */}
          </div>
          <div className="w-14 h-14 rounded-full  border-3 border-white/60 relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute w-5 -bottom-1 right-0 z-50"
              viewBox="0 0 48 48"
            >
              <path
                fill="#8cbcd6"
                d="M31 41H8c-2.2 0-4-1.8-4-4V11c0-2.2 1.8-4 4-4h32c2.2 0 4 1.8 4 4v17c0 7.2-5.8 13-13 13"
              ></path>
              <circle cx={35} cy={16} r={3} fill="#b3ddf5"></circle>
              <path fill="#9ac9e3" d="M20 16L9 32h22z"></path>
              <path fill="#b3ddf5" d="m31 22l-8 10h16z"></path>
              <path
                fill="#e57373"
                d="m47.7 29.1l-2.8-2.8c-.4-.4-1.1-.4-1.6 0L42 27.6l4.4 4.4l1.3-1.3c.4-.4.4-1.1 0-1.6"
              ></path>
              <path
                fill="#403e3d"
                d="M27.467 42.167L39.77 29.865l4.384 4.384L31.85 46.55z"
              ></path>
              <path
                fill="#b0bec5"
                d="m46.4 32.038l-2.192 2.192l-4.383-4.384l2.192-2.191z"
              ></path>
              <path fill="#808080" d="M27.5 42.2L26 48l5.8-1.5z"></path>
              <path fill="#37474f" d="m26.7 45l-.7 3l3-.7z"></path>
            </svg>

            {/* Profile Image (Click to Upload) */}
            <label htmlFor="fileUpload" className="cursor-pointer">
              <img
                src={image || user} // Default image if no upload
                alt="Profile"
                className="w-full h-full rounded-full object-cover"
              />
            </label>

            {/* Hidden File Input */}
            <input
              id="fileUpload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
          </div>
        </div>
      </header>

      {/* Logout Confirmation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-3 shadow-lg w-80 text-center">
            <h2 className="text-lg font-semibold text-gray-800">
              Are you sure you want to log out?
            </h2>
            <div className="mt-4 flex justify-end gap-4">
              <button
                onClick={confirmLogout}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
              >
                Yes, Logout
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
