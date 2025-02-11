import { Power } from "lucide-react";
import logo from "../assets/images/logo/logo-white.png";
import user from "../assets/images/user.png";
import { useNavigate } from "react-router-dom";

function Header() {
  const Navigate = useNavigate();

  const Logout = () =>{
    Navigate("/login")
  }
  return (
    <>
      <header className="relative w-full flex flex-col gap-5 py-4 bg-gradient-to-b from-amber-400 to-amber-500 rounded-b-[30px] px-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-2">
            <img src={logo} alt="logo" className="w-24" />
          </div>

          <div className="flex items-center gap-4">
          <span className=" inline-flex items-center bg-green-100 ring-1 ring-[#0F9D58] text-[#0F9D58] text-[9px] font-medium ms-2 px-2 py-0 rounded-full ">
                    <span className="animate-pulse w-1.5 h-1.5 me-1 bg-[#0F9D58] rounded-full"></span>
                    Active
                  </span>

            <button onClick={Logout} className="p-2 bg-white rounded-full transition-colors">
              <Power className="w-6 h-6 text-red-500" strokeWidth={2.5} />
            </button>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col ">
            <h2 className="text-lg font-medium text-white">
              Good Afternoon, FGFC19
            </h2>
            <span className="flex items-center gap-1.5 px-2 py-0.5 bg-white backdrop-blur-sm rounded-full text-[10px] text-green-700 w-fit">
              Active On: 2024-12-10 20:59:02
            </span>
          </div>
          <div className="w-12 h-12 rounded-full overflow-hidden border-3 border-white/60">
            <img
              src={user}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
