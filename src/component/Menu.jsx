import { Link } from "react-router-dom";

function Menu() {
  const menuItems = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="fill-primary size-8"
        >
          <path fill="" d="M19 12a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></path>
          <path
            fill=""
            fillRule="evenodd"
            d="M9.944 3.25h3.112c1.838 0 3.294 0 4.433.153c1.172.158 2.121.49 2.87 1.238c.924.925 1.219 2.163 1.326 3.77c.577.253 1.013.79 1.06 1.47c.005.061.005.126.005.186v3.866c0 .06 0 .125-.004.185c-.048.68-.484 1.218-1.061 1.472c-.107 1.606-.402 2.844-1.326 3.769c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153H9.944c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433v-.112c0-1.838 0-3.294.153-4.433c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238c1.14-.153 2.595-.153 4.433-.153m10.224 12.5H18.23c-2.145 0-3.981-1.628-3.981-3.75s1.836-3.75 3.98-3.75h1.938c-.114-1.341-.371-2.05-.87-2.548c-.423-.423-1.003-.677-2.009-.812c-1.027-.138-2.382-.14-4.289-.14h-3c-1.907 0-3.261.002-4.29.14c-1.005.135-1.585.389-2.008.812S3.025 6.705 2.89 7.71c-.138 1.028-.14 2.382-.14 4.289s.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14h3c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812c.499-.498.756-1.206.87-2.548M5.25 8A.75.75 0 0 1 6 7.25h4a.75.75 0 0 1 0 1.5H6A.75.75 0 0 1 5.25 8m15.674 1.75H18.23c-1.424 0-2.481 1.059-2.481 2.25s1.057 2.25 2.48 2.25h2.718c.206-.013.295-.152.302-.236V9.986c-.007-.084-.096-.223-.302-.235z"
            clipRule="evenodd"
          ></path>
        </svg>
      ),
      label: "Wallet",
      path: "/"
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="fill-primary size-8"
          viewBox="0 0 256 256"
        >
          <path d="M128 35.31V128a8 8 0 0 1-16 0V35.31L93.66 53.66a8 8 0 0 1-11.32-11.32l32-32a8 8 0 0 1 11.32 0l32 32a8 8 0 0 1-11.32 11.32Zm64 88.31V96a16 16 0 0 0-16-16h-16a8 8 0 0 0 0 16h16v80.4a28 28 0 0 0-44.25 33.6l.24.38l22.26 34a8 8 0 0 0 13.39-8.76l-22.13-33.79A12 12 0 0 1 166.4 190c.07.13.15.26.23.38l10.68 16.31a8 8 0 0 0 14.69-4.38V144a74.84 74.84 0 0 1 24 54.69V240a8 8 0 0 0 16 0v-41.35a90.89 90.89 0 0 0-40-75.03M80 80H64a16 16 0 0 0-16 16v104a8 8 0 0 0 16 0V96h16a8 8 0 0 0 0-16"></path>
        </svg>
      ),
      label: "Deposit",
      path: "/messages"
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-primary size-6"
          viewBox="0 0 14 14"
        >
          <g
            fill="none"
            stroke=""
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
          >
            <path d="M5.71 4.31C3.79 3 2 4 .5 5.54l3.32 2m5.87.75C11 10.21 10 12 8.46 13.5l-2-3.32"></path>
            <path d="m3.82 7.53l2.65 2.65C8.59 8.91 11 7.68 12.1 6.54c2.38-2.38 1-5.64 1-5.64s-3.26-1.38-5.64 1C6.32 3 5.08 5.42 3.82 7.53m1.46-2.51l3.7 3.7"></path>
            <path d="M10.5 4a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m-6.82 8.44C3.1 13 .5 13.5.5 13.5s.5-2.6 1.06-3.18a1.501 1.501 0 0 1 2.597 1.049a1.5 1.5 0 0 1-.477 1.07Z"></path>
          </g>
        </svg>
      ),
      label: "Start Investing",
      path: "/profile"
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="fill-primary size-7"
          viewBox="0 0 32 32"
        >
          <path
            d="m23 4l-5 3.75v6.5L15 12l-5 3.75v6.5L7 20l-5 3.75V30h2v-5.25l3-2.25l3 2.25V30h2V16.75l3-2.25l3 2.25V30h2V8.75l3-2.25l3 2.25V30h2V7.75z"
          ></path>
        </svg>
      ),
      label: "Levels",
      path: "/calendar"
    }
  ];
  return (
    <>
      <div className="flex items-center justify-center my-5 ">
        <div className="relative w-full">
          <div className="flex">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                className="group flex flex-col gap-2 items-center p-1 w-full rounded-xl transition-all duration-300 hover:bg-white/40 hover:scale-105 hover:shadow-lg"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-white/50 shadow-inner shadow-md shadow-primary/40 border border-secondary/10">
                  {item.icon}
                </div>
                <span className="text-sm text-gray-700/80 font-medium whitespace-nowrap">
                  {item.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
