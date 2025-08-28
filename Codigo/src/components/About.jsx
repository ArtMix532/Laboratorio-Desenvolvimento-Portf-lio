import PageTitle from "./PageTitle";
import FotoPerfil from "../assets/imagemTeste.jpg";
import { TimelineWithIcon } from "./TimeLine";

function About() {
  return (
    <div id="About" className=" w-screen bg-slate-300">
      <div className="px-10 lg:px-32">
        <div className="flex flex-row ">
          <PageTitle title="About me" />
        </div>
        <div className="flex flex-col lg:flex-row lg:pb-4 gap-4">
          <img
            src="https://placehold.co/400x500"
            alt=""
            className="border-2 border-Neutral-400"
          />
          <div className="flex  flex-col justify-center gap-4">
            <span className="font-ubuntu font-bold text-slate-700  text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates saepe nam itaque facilis repellendus, repellat
              praesentium, quaerat consectetur similique, dolorem quisquam nihil
              aliquam sequi nesciunt excepturi tempora eligendi quas. Vero.
            </span>
            <TimelineWithIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
