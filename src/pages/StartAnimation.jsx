import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Lock } from "lucide-react";
import logo from "../assets/images/logo/logo-dark.png";
import { useMotionValue, useTransform } from "framer-motion";

// Main StartAnimation component
const StartAnimation = () => {
  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  // Handle successful authentication
  const handleAuthenticated = () => {
    setAuthenticated(true);
    setShowTerms(true);
  };

  

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5 }
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.5 }
    }
  };

  const x = useMotionValue(0);
  const width = useTransform(x, [0, 300 - 60], [300, 60]);
  const opacity = useTransform(x, [0, 300 - 60], [1, 0]);
  const rotate = useTransform(x, [0, 300 - 60], [-90, 0]);
  const dashOffset = useTransform(x, [0, 300 - 60], [192, 202]);
  const offsetX = useTransform(x, [0, 300 - 60], [0, -3]);
  const offsetY = useTransform(x, [0, 300 - 60], [0, 3]);

  // Handle drag end and redirect to login page
  const handleDragEnd = (event, info) => {
    const finalX = info.offset.x; // Get the final drag position from `info.offset.x`

    console.log("Final X:", finalX); // Debug log to check the final position

    // Check if the drag reached the rightmost position
    if (finalX >= 300 - 60) {
      navigate("/Withdraw"); // Redirect to the login page when reached the end
    }
  };

  return (
    <>
      <style>
        {`
         .slider {
            border: 1px solid rgb(255 173 16 / 37%);
            background: rgb(254 252 232 / 21%);
        }
        `}
      </style>
      <div className="min-h-screen bg-gray-50 flex justify-center items-center px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={authenticated ? "authenticated" : "unauthenticated"}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-full max-w-md"
          >
            {!authenticated ? (
              <TouchID onAuthenticated={handleAuthenticated} />
            ) : (
              <div className="flex flex-col items-center">
                <TermsModal isVisible={showTerms} />
                <div className="mt-8">
                  {/* Swipe Button */}
                  <div className="flex justify-center mt-6">
                    <div className="swipercontainer">
                      <motion.div
                        className="thumb"
                        drag="x"
                        dragConstraints={{ left: 0, right: 300 - 60 }}
                        dragSnapToOrigin
                        dragElastic={0.01}
                        style={{ x }}
                        onDragEnd={handleDragEnd} // Attach the drag end handler
                      >
                        <motion.svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          fill="none"
                          style={{
                            rotate,
                            position: "relative",
                            top: offsetY,
                            left: offsetX
                          }}
                        >
                          <motion.path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            strokeDasharray={100}
                            strokeDashoffset={dashOffset}
                            d="M23 4L17.5 9.5L12 15L7 10"
                          />
                        </motion.svg>
                      </motion.div>

                      <motion.div className="slider" style={{ width }}>
                        <motion.div
                          className="slider-text text-black"
                          style={{ opacity }}
                        >
                          Swipe to Start
                        </motion.div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
};

const TouchID = ({ onAuthenticated }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [processingTouch, setProcessingTouch] = useState(false);
  const controls = useAnimation();
  const touchContainerRef = useRef(null);

  useEffect(() => {
    // Initial animation sequence
    const sequence = async () => {
      await controls.start("visible");

      // Auto-start authentication after a delay (2 seconds)
      setTimeout(() => {
        if (!processingTouch && !authenticated) {
          startAuthentication();
        }
      }, 2000);
    };

    sequence();
  }, [controls]);

  const startAuthentication = () => {
    if (processingTouch || authenticated) return;

    setProcessingTouch(true);

    // Animate fingerprint scanning
    const authenticate = async () => {
      await controls.start("scanning");
      await controls.start("authenticated");
      setAuthenticated(true);
      setTimeout(() => {
        onAuthenticated();
      }, 1200);
    };

    authenticate();
  };

  const handleTouchStart = () => {
    startAuthentication();
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        delay: 0.2
      }
    },
    authenticated: {
      scale: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
        delay: 1
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        delay: 0.4
      }
    },
    authenticated: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3
      }
    }
  };

  const lockVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        delay: 0.3
      }
    },
    authenticated: {
      opacity: 0,
      y: 30,
      transition: {
        duration: 0.3
      }
    }
  };

  const fingerprintVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        delay: 0.5
      }
    },
    scanning: {
      opacity: [1, 0.8, 1],
      scale: [1, 0.95, 1],
      transition: {
        duration: 1.5,
        times: [0, 0.5, 1],
        ease: "easeInOut"
      }
    },
    authenticated: {
      opacity: 0,
      scale: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="scanner relative flex flex-col items-center justify-center mb-10 px-6"
      >
        <motion.h1
          variants={textVariants}
          initial="hidden"
          animate={controls}
          className="text-3xl font-bold mb-4 text-black"
        >
          Hello, User
        </motion.h1>

        <motion.p
          variants={textVariants}
          initial="hidden"
          animate={controls}
          className="text-base text-gray-600 mb-8 text-center"
        >
          Please identify your touch ID to login to your account
        </motion.p>

        <div
          ref={touchContainerRef}
          className="touch-container"
          onTouchStart={handleTouchStart}
          onClick={handleTouchStart}
        >
          <div className="inner-1">
            <div className="inner-2">
              <motion.svg
                variants={fingerprintVariants}
                initial="hidden"
                animate={controls}
                className={`w-28 h-28 transition-colors duration-500 ${
                  processingTouch ? "text-amber-700" : "text-gray-800"
                }`}
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0)">
                  <path
                    className="transition-colors duration-300"
                    d="M349.057 469.888L336.193 429.035C331.073 413.718 326.294 397.526 326.273 397.462C324.993 393.131 321.153 390.081 316.652 389.825C312.044 389.505 307.969 392.15 306.22 396.31C305.985 396.865 282.22 452.737 254.977 495.617C251.82 500.588 253.292 507.18 258.262 510.337C260.033 511.468 262.017 512.001 263.979 512.001C267.52 512.001 270.955 510.252 272.982 507.052C289.473 481.089 304.449 451.244 314.219 430.487C314.774 432.194 315.35 433.922 315.926 435.628L328.705 476.289C330.476 481.9 336.406 485.057 342.081 483.265C347.691 481.493 350.827 475.52 349.057 469.888Z"
                    fill="currentColor"
                  />
                  <path
                    className="transition-colors duration-300"
                    d="M412.971 109.845C369.728 65.898 315.435 42.666 255.979 42.666C196.758 42.666 142.507 65.898 99.115 109.823C94.976 114.026 95.019 120.788 99.2 124.927C103.403 129.066 110.144 129.002 114.283 124.842C153.601 85.035 202.582 64 255.979 64C309.59 64 358.635 85.035 397.76 124.821C399.851 126.933 402.603 128 405.355 128C408.043 128 410.752 126.976 412.843 124.928C417.046 120.789 417.11 114.048 412.971 109.845Z"
                    fill="currentColor"
                  />
                  <path
                    className="transition-colors duration-300"
                    d="M266.603 266.197C266.326 260.33 261.718 255.658 255.488 256.021C249.621 256.277 245.056 261.248 245.291 267.136C245.291 267.285 245.888 282.901 241.92 307.584C241.003 313.408 244.971 318.891 250.773 319.829C251.349 319.914 251.925 319.957 252.48 319.957C257.621 319.957 262.165 316.224 262.997 310.997C267.35 283.925 266.646 266.901 266.603 266.197Z"
                    fill="currentColor"
                  />
                  <path
                    className="transition-colors duration-300"
                    d="M255.979 85.333C240.768 85.333 225.664 87.21 211.072 90.922C205.355 92.373 201.899 98.175 203.349 103.893C204.8 109.61 210.645 113.024 216.32 111.594C229.184 108.33 242.539 106.666 255.979 106.666C344.214 106.666 415.979 178.431 415.979 266.666C415.979 272.554 420.758 277.333 426.646 277.333C432.534 277.333 437.313 272.554 437.313 266.666C437.313 166.677 355.969 85.333 255.979 85.333Z"
                    fill="currentColor"
                  />
                  <path
                    className="transition-colors duration-300"
                    d="M360.513 175.637C334.102 145.365 296.001 128 255.979 128C218.774 128 183.894 142.592 157.739 169.067C131.67 195.392 117.334 230.998 117.334 269.846C117.398 292.801 110.23 320.321 97.387 346.753L91.392 357.42C88.512 362.561 90.325 369.047 95.467 371.948C97.131 372.887 98.923 373.335 100.694 373.335C104.427 373.335 108.054 371.372 109.995 367.895L116.288 356.674C131.029 326.338 138.752 296.301 138.667 269.293C138.667 236.632 150.806 206.381 172.886 184.066C195.03 161.666 224.513 149.335 255.979 149.335C289.835 149.335 322.091 164.034 344.427 189.676C348.288 194.113 355.051 194.561 359.488 190.7C363.926 186.816 364.374 180.075 360.513 175.637Z"
                    fill="currentColor"
                  />
                  <path
                    className="transition-colors duration-300"
                    d="M414.486 389.632L402.454 350.272C395.691 319.403 395.115 289.941 394.753 272.32L394.646 266.667C394.646 250.859 391.979 235.328 386.731 220.502C384.768 214.955 378.731 212.054 373.12 214.017C367.573 215.98 364.672 222.06 366.635 227.628C371.072 240.151 373.312 253.292 373.312 266.945L373.44 272.748C373.824 291.137 374.421 321.921 381.845 355.649L394.048 395.841C395.435 400.449 399.68 403.393 404.267 403.393C405.291 403.393 406.336 403.244 407.382 402.945C413.014 401.216 416.193 395.285 414.486 389.632Z"
                    fill="currentColor"
                  />
                  <path
                    className="transition-colors duration-300"
                    d="M383.361 438.912L373.441 407.147C355.841 352.192 352.556 290.411 351.98 266.667C351.98 213.739 308.908 170.667 255.98 170.667C203.052 170.667 160.001 214.4 160.001 268.523C160.044 279.744 157.974 339.03 112.918 404.011C109.547 408.854 110.763 415.51 115.585 418.859C120.406 422.208 127.084 421.014 130.433 416.192C177.921 347.733 181.398 285.803 181.334 268.181C181.334 226.176 214.827 192.021 255.979 192.021C297.152 192.021 330.646 225.514 330.646 266.944C331.414 297.92 335.361 358.165 353.11 413.611L362.966 445.248C364.395 449.813 368.598 452.736 373.163 452.736C374.208 452.736 375.275 452.587 376.342 452.267C381.974 450.496 385.11 444.523 383.361 438.912Z"
                    fill="currentColor"
                  />
                  <path
                    className="transition-colors duration-300"
                    d="M309.313 266.667C309.313 237.27 285.377 213.334 255.98 213.334C226.583 213.334 202.647 237.27 202.647 267.073C202.775 270.593 205.143 354.39 137.388 442.561C133.804 447.233 134.679 453.932 139.351 457.516C144.044 461.121 150.722 460.204 154.306 455.553C226.69 361.345 224.087 270.102 223.959 266.668C223.959 249.025 238.316 234.668 255.959 234.668C273.602 234.668 287.959 249.025 287.98 266.903C288.279 278.85 288.343 386.626 205.057 494.828C201.473 499.5 202.326 506.199 206.998 509.783C208.961 511.276 211.243 512.002 213.505 512.002C216.705 512.002 219.862 510.573 221.953 507.842C309.867 393.664 309.611 279.104 309.313 266.667Z"
                    fill="currentColor"
                  />
                  <path
                    className="transition-colors duration-300"
                    d="M367.126 22.293C334.635 7.509 297.259 0 256.022 0C214.486 0 177.089 7.509 144.897 22.315C139.564 24.768 137.217 31.104 139.67 36.459C142.145 41.792 148.438 44.139 153.814 41.686C183.211 28.182 217.601 21.334 256.022 21.334C294.187 21.334 328.577 28.182 358.273 41.707C359.702 42.368 361.217 42.667 362.689 42.667C366.742 42.667 370.625 40.342 372.417 36.416C374.849 31.061 372.481 24.725 367.126 22.293Z"
                    fill="currentColor"
                  />
                  <path
                    className="transition-colors duration-300"
                    d="M245.675 342.08C240 340.395 234.091 343.637 232.406 349.269C219.073 394.304 196.886 436.416 166.507 474.474C162.838 479.082 163.584 485.781 168.192 489.471C170.155 491.05 172.501 491.796 174.848 491.796C177.984 491.796 181.077 490.431 183.189 487.785C215.296 447.593 238.741 403.028 252.885 355.348C254.55 349.696 251.329 343.744 245.675 342.08Z"
                    fill="currentColor"
                  />
                  <path
                    className="transition-colors duration-300"
                    d="M179.521 113.664C176.577 108.608 170.07 106.88 164.929 109.845C151.318 117.802 138.668 127.637 127.382 139.072C94.166 172.651 75.457 217.899 74.689 266.517C74.604 272.405 79.297 277.248 85.206 277.333C85.249 277.333 85.313 277.333 85.377 277.333C91.18 277.333 95.937 272.682 96.022 266.837C96.705 223.744 113.217 183.701 142.55 154.048C152.534 143.936 163.691 135.275 175.702 128.256C180.779 125.291 182.486 118.763 179.521 113.664Z"
                    fill="currentColor"
                  />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="512" height="512" fill="white" />
                  </clipPath>
                </defs>
              </motion.svg>
            </div>
          </div>
        </div>

        <motion.div
          variants={lockVariants}
          initial="hidden"
          animate={controls}
          className="mt-6"
        >
          <Lock className="w-8 h-8 text-gray-400" />
        </motion.div>
      </motion.div>
    </div>
  );
};

const TermsModal = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="w-full max-w-md mx-auto mt-8 p-6 "
    >
      <div className="flex justify-center mb-3">
        <img src={logo} alt="" className="w-42" />
      </div>

      <p className="text-center text-sm text-gray-600 mb-4 leading-tight">
        Welcome to FGFC. By using our services, you agree to comply with and be
        bound by these Terms and Conditions. Please read them carefully.
      </p>

      <div className="space-y-4">
        <div>
          <p className="text-sm text-gray-600 mt-1">
            <span className="font-medium">Client:</span> The individual or
            entity entering into this agreement with us.
          </p>
          <p className="text-sm text-gray-600 mt-1">
            <span className="font-medium">Services:</span> The forex trading
            services provided by FGFC.
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-600 mt-1">
            The Client must be of legal age and have the legal capacity to enter
            into this agreement.
          </p>
          <p className="text-sm text-gray-600 mt-1">
            The Client must provide accurate and complete information for
            account setup.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default StartAnimation;
