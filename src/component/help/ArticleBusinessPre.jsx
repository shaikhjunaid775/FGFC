import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import image1 from "../../assets/images/help/help1/1.jpg";
import image2 from "../../assets/images/help/help1/2.jpg";
import image3 from "../../assets/images/help/help1/3.jpg";
import image4 from "../../assets/images/help/help1/4.jpg";
import image5 from "../../assets/images/help/help1/5.jpg";
import image6 from "../../assets/images/help/help1/6.jpg";
import image7 from "../../assets/images/help/help1/7.jpg";
import image8 from "../../assets/images/help/help1/8.jpg";
import image9 from "../../assets/images/help/help1/9.jpg";
import image10 from "../../assets/images/help/help1/10.jpg";
import image11 from "../../assets/images/help/help1/11.jpg";
import image12 from "../../assets/images/help/help1/12.jpg";
import Footer from "../Footer";

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12
];
function ArticleBusinessPre() {
  const navigate = useNavigate();

  const downloadPdf = async () => {
    const response = await fetch("/public/fgfc.pdf"); // Replace with your API URL
    const blob = await response.blob();
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = "BusinessPDF.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className=" pb-20">
        {/* Header (Fixed) */}
        <div className="flex justify-between p-3 text-center shadow-md bg-white sticky top-0 z-10">
          <button onClick={() => navigate(-1)}>
            <ChevronLeft />
          </button>
          <span className="font-semibold text-lg whitespace-nowrap">
            FGFC Business Presentation
          </span>
          <span
            className="text-slate-50 text-sm text-center flex justify-end"
            onClick={downloadPdf}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#000"
              className="size-6 animate-bounce"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
              ></path>
            </svg>
          </span>
        </div>

        <div className="pt-2 ">
          {images.map((src, index) => (
            <div key={index} className="py-1 px-2 ">
              <img src={src} alt={`Image ${index + 1}`} className="w-full rounded-xl" />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ArticleBusinessPre;
