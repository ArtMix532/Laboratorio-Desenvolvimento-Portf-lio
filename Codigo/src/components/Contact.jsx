import { Instagram, Github, Linkedin, Mail } from "lucide-react";

export function Contact() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="border-2 border-slate-600 p-2 bg-slate-400 flex gap-1 hover:border-slate-500">
          <div className="border-2 border-slate-600 bg-slate-300 p-2 shadow-md">
            <Mail color="#334155" />
          </div>
          <div>
            <span className="text-slate-700 font-bold text-sm">Email</span>
          </div>
        </div>
        <div className="border-2 border-slate-600 p-2 bg-slate-400 flex gap-1 hover:border-slate-500">
          <div className="border-2 border-slate-600 bg-slate-300 p-2 shadow-md">
            <Mail color="#334155" />
          </div>
          <div>
            <span className="text-slate-700 font-bold text-sm">Location</span>
          </div>
        </div>
        <div className="flex gap-1">
          <div className="bg-slate-400 p-2 border-2 border-slate-600  hover:border-slate-500">
            <Github color="#334155" />
          </div>
          <div className="bg-slate-400 p-2 border-2 border-slate-600  hover:border-slate-500">
            <Github color="#334155" />
          </div>
        </div>
      </div>
    </>
  );
}
