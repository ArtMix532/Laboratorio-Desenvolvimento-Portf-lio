import { Instagram, Github, Linkedin, Mail } from "lucide-react";
import { Links } from "../constants";
import { USER_INFO } from "../constants";
import PageTitle from "./PageTitle";

export function Contact() {
  return (
    <>
      <div className=" w-screen bg-slate-700">
        <div className="px-10 lg:px-32">
          <div className="flex mb-4">
            <h1 className="text-gray-400 font-bold text-3xl ">Resume</h1>
          </div>

          <div className="flex gap-4 m-auto flex-col lg:flex-row">
            <div className="flex flex-col gap-2">
              <div className="border-2 border-Neutral-400 p-2 bg-gray-300 flex gap-1 hover:border-Neutral-400">
                <div className="border-2 border-Neutral-400 bg-Neutral-300 p-2 shadow-md">
                  <Mail color="#334155" />
                </div>
                <div className="flex flex-col">
                  <span className="text-slate-700 font-bold text-sm">
                    Email
                  </span>
                  <span>{USER_INFO.email}</span>
                </div>
              </div>
              <div className="border-2 border-Neutral-400 p-2 bg-gray-300 flex gap-1 hover:border-Neutral-400">
                <div className="border-2 border-Neutral-400 bg-Neutral-300 p-2 shadow-md">
                  <Mail color="#334155" />
                </div>
                <div className="flex flex-col">
                  <span className="text-slate-700 font-bold text-sm">
                    Location
                  </span>
                  <span>Belo Horizonte, Brasil</span>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="bg-gray-300 p-3 border-2 border-Neutral-400  hover:border-Neutral-400 active:bg-Neutral-200 hover:bg-gray-200">
                  <a href={Links.Github}>
                    {" "}
                    <Github color="#334155" />
                  </a>
                </div>
                <div className="bg-gray-300 p-3 border-2 border-Neutral-400  hover:border-Neutral-400 active:bg-Neutral-200 hover:bg-gray-200">
                  <a href={Links.Email}>
                    <Mail color="#334155" />
                  </a>
                </div>
                <div className="bg-gray-300 p-3 border-2 border-Neutral-400  hover:border-Neutral-400 active:bg-Neutral-200 hover:bg-gray-200">
                  <a href={Links.Instagram}>
                    <Instagram color="#334155" />
                  </a>
                </div>
                <div className="bg-gray-300 p-3 border-2 border-Neutral-400  hover:border-Neutral-400 active:bg-Neutral-200 hover:bg-gray-200">
                  <a href={Links.Linkedin}>
                    {" "}
                    <Linkedin color="#334155" />
                  </a>
                </div>
                <div className="bg-gray-300 p-3 border-2 border-Neutral-400  hover:border-Neutral-400 active:bg-Neutral-200 hover:bg-gray-200">
                  <a href={Links.Linkedin}>
                    {" "}
                    <Linkedin color="#334155" />
                  </a>
                </div>
              </div>
            </div>
            <div className="border-2 border-Neutral-400 p-2 bg-gray-300 ">
              <div className="flex gap-2 flex-col lg:flex-row">
                <div className="flex flex-col">
                  <span className="text-slate-700 font-bold text-sm">Name</span>
                  <input
                    type="text"
                    placeholder="Your full fame"
                    name=""
                    id=""
                    className="border-2 border-Neutral-400 px-2 py-1 text-gray-100 bg-Neutral-200"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-slate-700 font-bold text-sm">
                    Email
                  </span>
                  <input
                    type="text"
                    placeholder="your.email@example.com"
                    name=""
                    id=""
                    className="border-2 border-Neutral-400 px-2 py-1  text-gray-100 bg-Neutral-200"
                  />
                </div>
              </div>
              <div>
                <div className="flex flex-col">
                  <span className="text-slate-700 font-bold text-sm">
                    Subject
                  </span>
                  <input
                    type="text"
                    placeholder="What is this about?"
                    name=""
                    id=""
                    className="border-2 border-Neutral-400 px-2 py-1  text-gray-100 bg-Neutral-200"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-slate-700 font-bold text-sm">
                  Message
                </span>
                <textarea
                  name=""
                  id=""
                  placeholder="Your message..."
                  className="border-2 border-Neutral-400 px-2 py-1  text-gray-100 bg-Neutral-200 h-40"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
