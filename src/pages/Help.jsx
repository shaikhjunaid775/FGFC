import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footer from "../component/Footer";

const links = [
  {
    href: "https://fgfcunion.finance/Main/articleBusinessPre",
    text: "FGFC Business Presentation"
  },
  {
    href: "https://fgfcunion.finance/Main/articleLoginReg",
    text: "How to Register & Login?"
  },
  {
    href: "https://fgfcunion.finance/Main/articleDepositUsdt",
    text: "How to deposit funds In USDT?"
  },
  {
    href: "https://fgfcunion.finance/Main/articleDepositUpi",
    text: "How to deposit funds In UPI?"
  },
  {
    href: "https://fgfcunion.finance/Main/articleDepositBank",
    text: "How to deposit funds In Bank?"
  }
];

function Help() {
  const navigate = useNavigate();
  return (
    <>
      {/* Header (Fixed) */}
      <div className=" p-3 text-center shadow-md bg-white sticky top-0 z-10">
        <button onClick={() => navigate(-1)} className="absolute left-0 top-4">
          <ChevronLeft />
        </button>
        <span className="font-semibold text-lg whitespace-nowrap">
          FGFC Business Presentation
        </span>
      </div>
      <div className="relative w-full mt-4">
        <div className="mx-auto px-3">
          {links.map((link, index) => (
            <div
              key={index}
              className="bg-primary/30 shadow-md my-2 rounded-2xl"
            >
              <Link
                to={link.href}
                className="py-3 px-3 flex justify-between items-center"
              >
                <span className="fs-16 text-slate-900">{link.text}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-4 stroke-slate-900"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Help;
