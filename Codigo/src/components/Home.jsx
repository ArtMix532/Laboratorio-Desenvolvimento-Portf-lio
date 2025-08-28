import waveImage from "../assets/wave3.svg";
// import imageHome from "../assets/image.png";

function Home() {
  return (
    <div
      id="Home"
      className="h-[92.5vh] bg-slate-700 w-screen grid grid-rows-2 "
    >
      <div className="flex gap-8 ">
        <div className="mx-auto content-center">
          <h1 className="font-bold font-ubuntu text-3xl md:text-6xl text-gray-300">
            Hello World, I`m{" "}
          </h1>
          <p className="font-bold text-5xl md:text-8xl ">Davi Benjamim</p>
        </div>
        {/* <img src={imageHome} alt="" /> */}
      </div>
      <div className=" flex items-end">
        <img className="" src={waveImage} alt="Wave" />
      </div>
    </div>
  );
}

export default Home;
