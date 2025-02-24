import { toast } from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

function ReferralCard() {
  const handleCopy = () => {
    const urlToCopy = window.location.href; // Get current URL
    navigator.clipboard
      .writeText(urlToCopy)
      .then(() => toast.success("Referal Copied to clipboard!"))
      .catch(() => toast.error("Failed to copy URL"));
  };

  const message = "Hey! Check out this amazing app: https://yourwebsite.com";
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="relative bg-[#fff5d2] border-dashed border-2 border-gray-400 rounded-xl mx-3 p-2 shadow-none cursor-pointer mb-3">
        <div className="balance border-0 pb-0">
          <div className=" grid grid-cols-2 items-center text-center">
            <div className=" flex flex-col  w-full bg-[#ffecac] border-dashed border-2 border-primary rounded-xl mx-3 p-1">
              <p className="text-dark font-semibold text-black/80 text-md">
                My Referral Code
              </p>
              <p className="my-1 leading-none font-semibold text-2xl text-dark ">
                FGFC
              </p>
            </div>
            <div className="wallet-footer mt-0 px-2">
              <div className="flex justify-center gap-3 ">
                <span className="p-3 items-center text-sm font-medium text-gray-900 bg-white rounded-full text-center flex gap-2 justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-7"
                    onClick={handleCopy}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
                    ></path>
                  </svg>
                </span>
                <Link
                  to={whatsappUrl}
                  target="_blank"
                  className=" items-center p-3 text-sm font-medium text-center text-dark bg-white rounded-full     flex gap-2 justify-center"
                >
                  <img
                    className="w-7 h-7 rounded-full whatsapp-image"
                    src="https://fgfcunion.finance/assets/assets/images/WhatsApp.png"
                    alt="Rounded avatar"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReferralCard;
