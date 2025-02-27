import { motion, useMotionValue, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";

function WelcomeLetter() {
  const navigate = useNavigate();

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
      navigate("/dashboard"); // Redirect to the login page when reached the end
    }
  };
  return (
    <>
      <div
        className="relative h-screen w-full overflow-hidden font-sans"
        style={{
          backgroundImage: `url(/welcome-fgfc.png)`,
          backgroundSize: "cover",
          backgroundPositionX: "center"
        }}
      >
        {/* Main Content */}
        <div className="relative py-16 px-8 flex flex-col h-full justify-end">
          <div className="flex flex-col">
            

            {/* Welcome Message */}
            <div className="mb-8">
              <p className="text-gray-700 mb-1 font-semibold">Hi, test12</p>
              <p className="text-gray-700 text-xs leading-tight">
                Welcome to FGFC! Your forex journey starts here. Harness the
                power of technology and AI to navigate the dynamic markets with
                confidence. Lets grow together and achieve your trading goals.
                Happy trading!
              </p>
            </div>

            {/* Login Information Box */}
            <div className="bg-yellow-50 rounded-xl p-4 border border-secondary mb-8">
              <p className="text-gray-700 mb-4 font-semibold text-sm">
                test12 save your login information:
              </p>

              <div className="mb-4">
                <p className="text-gray-600 font-bold mb-1">Username</p>
                <p className="text-gray-800">test12</p>
              </div>

              <div>
                <p className="text-gray-600 font-bold mb-1">Password</p>
                <p className="text-gray-800">Test@123</p>
              </div>
            </div>
          </div>

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
                  Swipe to dashboard
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WelcomeLetter;
