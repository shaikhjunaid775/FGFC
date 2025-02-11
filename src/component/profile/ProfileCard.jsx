import { ArrowLeft } from "lucide-react";
import user from "../../assets/images/user.png";
import { motion, AnimatePresence } from "framer-motion";

import { useState } from "react";

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
    onClose();
  };

  return (
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
  );
};

function ProfileCard() {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleSubmit = (data, e) => {
    alert(`Submitted: ${JSON.stringify(data)}`);
    e.preventDefault();
  };
  return (
    <>
      <div className=" w-full relative">
        <div className="w-full  bg-white rounded-3xl rounded-t-none shadow-lg overflow-hidden pb-12">
          <div className="p-1 px-3">
            {/* Header */}
            <div className="flex items-center justify-between">
              <button className="hover:bg-gray-100 p-2 rounded-full transition-colors">
                <ArrowLeft className="w-5 h-5 text-gray-700" />
              </button>
              <button
                className="text-yellow-3  font-medium transition-colors cursor-pointer"
                onClick={() => setModalOpen(true)}
              >
                Edit Profile
              </button>
            </div>

            {/* Profile Info */}
            <div className="flex items-center">
              <div className="w-24 h-24 rounded-2xl overflow-hidden bg-purple-100 mb-1">
                <img
                  src={user}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Charles Peprah
                </h1>
                <p className="text-gray-500">@Penzilcharlie</p>
                <p className="text-gray-700 font-medium">
                  <span className=" inline-flex items-center bg-green-100 ring-1 ring-[#0F9D58] text-[#0F9D58] text-[9px] font-medium ms-2 px-2 py-0 rounded-full ">
                    <span className="animate-pulse w-1.5 h-1.5 me-1 bg-[#0F9D58] rounded-full"></span>
                    Active
                  </span>
                  <span className=" inline-flex items-center bg-red-100 ring-1 ring-[#EA4335] text-[#EA4335] text-[9px] font-medium ms-2 px-2 py-0 rounded-full ">
                    <span className="animate-pulse w-1.5 h-1.5 me-1 bg-[#EA4335] rounded-full"></span>
                    KYC Pending
                  </span>
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

export default ProfileCard;
