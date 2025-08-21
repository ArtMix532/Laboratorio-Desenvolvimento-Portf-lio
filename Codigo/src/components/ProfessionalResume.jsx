import PdfViewer from "./PDF";
import Wave from "../assets/waveParteBaixo.svg";

function Resume() {
  return (
    <>
      <div className=" w-screen bg-slate-700">
        <img src={Wave} alt="" />
        <div className="px-10 lg:px-32">
          <div className="flex mb-4">
            <h1 className="text-gray-400 font-bold text-3xl ">Resume</h1>
          </div>
        </div>
        <div className=""></div>
        <PdfViewer />
      </div>
    </>
  );
}

export default Resume;
