import { Link } from "react-router-dom";
import logomarket from "../assets/images/logo/logomarketing.png";

const Footer = () => {
  return (
    <article className="max-w-[1124px] fixed z-100  bottom-0 border-t border-solid border-secondary w-full ease-in-out duration-500  rounded-2xl rounded-b-none flex  bg-[#fffbee]">
      <Link to="/dashboard"
        className=" relative w-full p-2 ease-in-out duration-300 border-solid border-black/10  group flex flex-col gap-1 items-center justify-center text-black rounded-xl"
        htmlFor="dashboard"
      >
        <input
          id="dashboard"
          name="path"
          type="radio"
          className="hidden peer/expand"
        />
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="size-7 peer-hover/expand:scale-125 peer-hover/expand:text-primary peer-hover/expand:fill-primary peer-checked/expand:text-primary peer-checked/expand:fill-primary text-2xl peer-checked/expand:scale-115 ease-in-out duration-300"
        >
          <path d="M20.25 10a1.25 1.25 0 1 0-2.5 0zm-14 0a1.25 1.25 0 1 0-2.5 0zm13.866 2.884a1.25 1.25 0 0 0 1.768-1.768zM12 3l.884-.884a1.25 1.25 0 0 0-1.768 0zm-9.884 8.116a1.25 1.25 0 0 0 1.768 1.768zM7 22.25h10v-2.5H7zM20.25 19v-9h-2.5v9zm-14 0v-9h-2.5v9zm15.634-7.884l-9-9l-1.768 1.768l9 9zm-10.768-9l-9 9l1.768 1.768l9-9zM17 22.25A3.25 3.25 0 0 0 20.25 19h-2.5a.75.75 0 0 1-.75.75zm-10-2.5a.75.75 0 0 1-.75-.75h-2.5A3.25 3.25 0 0 0 7 22.25z"></path>
        </svg>
        <span className="leading-none text-black/50 peer-checked/expand:text-primary font-semibold">Home</span>
      </Link>
      <Link to=""
        className=" relative w-full  p-2 ease-in-out duration-300 border-solid border-black/10  group flex flex-col gap-1 items-center justify-center text-black rounded-xl"
      >
        <input
          id="Markets"
          name="path"
          type="radio"
          className="hidden peer/expand"
        />
        <img src={logomarket} alt="Logo Marketing" className="w-6" />
        <span className="leading-none text-black/50 peer-checked/expand:text-primary font-semibold">Markets</span>
      </Link>
      <Link to="/portfolio"
        className=" relative w-full  p-2 ease-in-out duration-300 border-solid border-black/10  group flex flex-col gap-1 items-center justify-center text-black rounded-xl"
        htmlFor="Portfolio"
      >
        <input
          id="Portfolio"
          name="path"
          type="radio"
          className="hidden peer/expand"
        />
        <svg
          viewBox="0 0 24 24"
          height="24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          className="peer-hover/expand:scale-125 peer-hover/expand:text-primary peer-hover/expand:fill-primary peer-checked/expand:text-primary peer-checked/expand:fill-primary text-2xl peer-checked/expand:scale-125 ease-in-out duration-300"
        >
          <g>
            <path d="M14 11h-4v2h4z"></path>
            <path
              fillRule="evenodd"
              d="M7 5V4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1h3a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3zm2-1h6v1H9zM4 7a1 1 0 0 0-1 1v6h18V8a1 1 0 0 0-1-1zM3 18v-2h18v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1"
              clipRule="evenodd"
            ></path>
          </g>
        </svg>
        <span className="leading-none text-black/50 peer-checked/expand:text-primary font-semibold">Portfolio</span>
      </Link>
      <Link to="/profile"
        className=" relative w-full p-2 ease-in-out duration-300 border-solid border-black/10  group flex flex-col gap-1 items-center justify-center text-black rounded-xl"
        htmlFor="Account"
      >
        <input
          id="Account"
          name="path"
          type="radio"
          className="hidden peer/expand"
        />
        <svg
          viewBox="0 0 24 24"
          height="24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          className="peer-hover/expand:scale-125 peer-hover/expand:text-primary peer-hover/expand:fill-primary peer-checked/expand:text-primary peer-checked/expand:fill-primary text-2xl peer-checked/expand:scale-125 ease-in-out duration-300"
        >
          <path  d="M12 2a5 5 0 1 0 5 5a5 5 0 0 0-5-5m0 8a3 3 0 1 1 3-3a3 3 0 0 1-3 3m9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"></path>
        </svg>
        <span className="leading-none text-black/50 peer-checked/expand:text-primary font-semibold">Account</span>
      </Link>
    </article>
  );
};

export default Footer;
