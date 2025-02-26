import { ArrowLeft } from "lucide-react";
import user from "../../assets/images/user.png";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-hot-toast";
import { Toaster } from "react-hot-toast";

import { useState } from "react";

function ProfileCard({ isVerified, isActive }) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setImage(imageURL); // Update state with new image
    }
  };

  const handleSubmit = (data, e) => {
    // alert(`Submitted: ${JSON.stringify(data)}`);
    toast.success("Profile updated successfully!", {
      position: "top-right",
      duration: 3000
    });
    setModalOpen(false);
    e.preventDefault();
  };
  return (
    <>
      <div className=" w-full relative">
        <div className="w-full  bg-white rounded-3xl rounded-t-none shadow-lg overflow-hidden pb-12">
          <div className="p-2 px-3">
            {/* Header */}
            <div className="flex items-center justify-end">
              <button
                className="text-yellow-3  font-medium transition-colors cursor-pointer"
                onClick={() => setModalOpen(true)}
              >
                Edit Profile
              </button>
            </div>

            {/* Profile Info */}
            <div className="flex items-center">
              <div className="w-24 h-24 rounded-2xl overflow-hidden  mb-1 relative" >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  className="absolute w-8 bottom-1 right-0 z-50"
                >
                  <g fill="none">
                    <path
                      fill="url(#fluentColorEdit160)"
                      d="M2.657 9.635L9.75 2.542l3.707 3.708l-7.093 7.092l-2.267-1.439z"
                    ></path>
                    <path
                      fill="url(#fluentColorEdit161)"
                      d="m2.964 9.328l-.307.307a2.95 2.95 0 0 0-.772 1.355l-.87 3.385a.5.5 0 0 0 .61.609l3.385-.87c.512-.13.98-.398 1.354-.772l.307-.307s-1.285-.3-2.345-1.361s-1.362-2.346-1.362-2.346"
                    ></path>
                    <path
                      fill="url(#fluentColorEdit162)"
                      d="M10.529 1.764a2.621 2.621 0 1 1 3.707 3.707l-1.908 1.908l-3.707-3.707z"
                    ></path>
                    <path
                      fill="url(#fluentColorEdit163)"
                      d="M8.266 4.026s.295 1.291 1.356 2.352a5.4 5.4 0 0 0 2.351 1.356L13.4 6.308s-1.29-.298-2.35-1.358A5.4 5.4 0 0 1 9.692 2.6z"
                    ></path>
                    <defs>
                      <linearGradient
                        id="fluentColorEdit160"
                        x1={8.631}
                        x2={10.281}
                        y1={5.563}
                        y2={10.095}
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#ffa43d"></stop>
                        <stop offset={1} stopColor="#fb5937"></stop>
                      </linearGradient>
                      <linearGradient
                        id="fluentColorEdit161"
                        x1={0.187}
                        x2={4.275}
                        y1={10.908}
                        y2={14.972}
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset={0.255} stopColor="#ffd394"></stop>
                        <stop offset={1} stopColor="#ff921f"></stop>
                      </linearGradient>
                      <linearGradient
                        id="fluentColorEdit162"
                        x1={13.669}
                        x2={11.316}
                        y1={2.324}
                        y2={4.537}
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#f97dbd"></stop>
                        <stop offset={1} stopColor="#dd3ce2"></stop>
                      </linearGradient>
                      <linearGradient
                        id="fluentColorEdit163"
                        x1={10.921}
                        x2={7.295}
                        y1={6.114}
                        y2={4.528}
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#ff921f"></stop>
                        <stop offset={1} stopColor="#ffe994"></stop>
                      </linearGradient>
                    </defs>
                  </g>
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
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Charles Peprah
                </h1>
                <p className="text-gray-500">@Penzilcharlie</p>
                <p className="text-gray-700 font-medium">
                  {isActive ? (
                    <span className="inline-flex items-center bg-green-100 ring-1 ring-[#0F9D58] text-[#0F9D58] text-[9px] font-medium ms-2 px-2 py-0 rounded-full">
                      <span className="animate-pulse w-1.5 h-1.5 me-1 bg-[#0F9D58] rounded-full"></span>
                      Active
                    </span>
                  ) : (
                    <span className="inline-flex items-center bg-red-100 ring-1 ring-red-600 text-red-600 text-[9px] font-medium ms-2 px-2 py-0 rounded-full">
                      <span className="animate-pulse w-1.5 h-1.5 me-1 bg-red-600 rounded-full"></span>
                      Active
                    </span>
                  )}
                  {!isVerified ? (
                    <span className=" inline-flex items-center bg-red-100 ring-1 ring-[#EA4335] text-[#EA4335] text-[9px] font-medium ms-2 px-2 py-0 rounded-full ">
                      <span className="animate-pulse w-1.5 h-1.5 me-1 bg-[#EA4335] rounded-full"></span>
                      KYC Pending
                    </span>
                  ) : (
                    <span className=" inline-flex items-center bg-green-100 ring-1 ring-green-600 text-green-600 text-[9px] font-medium ms-2 px-2 py-0 rounded-full ">
                      <span className="animate-pulse w-1.5 h-1.5 me-1 bg-green-600 rounded-full"></span>
                      KYC Approved
                    </span>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FormModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleSubmit}
      />
    </>
  );
}

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: "100%" }} // Start from the bottom when opening
        animate={{ y: 0 }} // Animate to its normal position
        exit={{ y: "100%" }} // When closed, slide it back down
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30
        }}
        className="fixed z-50 inset-0 flex items-end w-full
                        justify-center bg-black/10 bg-opacity-50"
      >
        <div
          className="bg-white rounded-lg rounded-b-none mb-10
                            shadow-lg p-6 pb-12
                            w-full relative"
        >
          <button
            className="absolute top-2
                               right-2 text-gray-500
                               hover:text-gray-700 cursor-pointer"
            onClick={onClose}
          >
            &#x2715; {/* Close button */}
          </button>
          {children}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

const FormModal = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    memberID: "",
    name: "",
    DOB: "",
    Gender: "",
    email: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    toast.success("Profile updated successfully!", {
      position: "top-right",
      duration: 3000
    });
    onClose();
  };

  return (
    <>
      <Toaster />
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        className="fixed inset-0 flex justify-center items-end bg-black bg-opacity-50 z-50"
      >
        <div>
          <h2 className="text-lg font-bold mb-6">Edit Profile</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <div className="relative">
                <input
                  type="text"
                  name="memberID"
                  value={formData.memberID}
                  onChange={handleChange}
                  className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-primary peer cursor-pointer"
                  placeholder=" "
                />
                <label
                  htmlFor="MemberID"
                  className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-secondary  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Member ID
                </label>
              </div>
            </div>
            <div className="mb-4">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-primary peer cursor-pointer"
                  placeholder=" "
                />
                <label
                  htmlFor="name"
                  className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-secondary  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Name
                </label>
              </div>
            </div>
            <div className="mb-4">
              <div className="relative">
                <select
                  name="Gender"
                  value={formData.DOB}
                  onChange={handleChange}
                  className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-primary peer cursor-pointer"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                <label
                  htmlFor="gender"
                  className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-secondary  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Select your Gender
                </label>
              </div>
            </div>
            <div className="mb-4">
              <div className="relative">
                <input
                  type="date"
                  name="DOB"
                  value={formData.DOB}
                  onChange={handleChange}
                  className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-primary peer cursor-pointer"
                  placeholder=" "
                />
                <label
                  htmlFor="name"
                  className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-secondary  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Date of Birth
                </label>
              </div>
            </div>

            <div className="mb-4">
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-primary peer cursor-pointer"
                  placeholder=" "
                />
                <label
                  htmlFor="email"
                  className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-secondary  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Email Address
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="px-6 py-2.5  text-sm font-medium text-black bg-gradient-to-b from-primary/80 hover:bg-gradient-to-b hover:from-primary hover:from-45%   rounded-full   text-center   flex gap-2  justify-center shadow-md cursor-pointer"
            >
              Update
            </button>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default ProfileCard;
