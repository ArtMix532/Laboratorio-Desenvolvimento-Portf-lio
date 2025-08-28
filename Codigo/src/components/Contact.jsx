import { Instagram, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Links } from "../data/constants";
import { USER_INFO } from "../data/constants";
import waveImage from "../assets/wave3.svg";

export function Contact() {
  async function enviarMensagem() {
    const endpoint = "https://formspree.io/f/mandnrvo"; // Substitua pelo seu endpoint

    // Dados que você coletou do seu formulário ou de outra fonte
    const dadosDoFormulario = {
      nome: "João da Silva",
      email: "joao.silva@exemplo.com",
      assunto: "Dúvida sobre um produto",
      mensagem: "Olá, gostaria de saber mais detalhes sobre o produto X.",
    };

    try {
      const resposta = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(dadosDoFormulario),
      });

      // O Formspree retorna uma resposta que você pode usar para confirmar o envio
      if (resposta.ok) {
        console.log("Mensagem enviada com sucesso!");
        // Você pode exibir uma mensagem de sucesso para o usuário aqui
      } else {
        console.error("Falha ao enviar a mensagem.");
        const erro = await resposta.json();
        console.error(erro);
        // Exiba uma mensagem de erro para o usuário
      }
    } catch (error) {
      console.error("Ocorreu um erro na requisição:", error);
    }
  }

  return (
    <>
      <div id="Contact" className=" w-screen bg-slate-700 pt-8">
        <div className="px-6 lg:px-32 pb-6">
          <div className="flex mb-4">
            <h1 className="text-gray-400 font-bold text-3xl ">Contact</h1>
          </div>

          <div className="flex gap-4 m-auto flex-col lg:flex-row">
            <div className="flex flex-col gap-6 lg:w-1/2 justify-center">
              <div className="flex flex-col items-center gap-[20px]">
                <div className="border-2 lg:w-[80%] w-full p-2 bg-gray-300 flex gap-1 shadow-md rounded-xl">
                  <div className="p-3 rounded-xl">
                    <Mail color="#334155" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-slate-700 font-bold font-ubuntu text-sm">
                      Email
                    </span>
                    <span className="font-ubuntu ">{USER_INFO.email}</span>
                  </div>
                </div>

                <div className="border-2 lg:w-[80%] w-full   p-2 bg-gray-300 flex gap-1 shadow-md rounded-xl">
                  <div className="p-3">
                    <MapPin color="#334155" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-slate-700 font-bold font-ubuntu text-sm">
                      Location
                    </span>
                    <span className="font-ubuntu">Belo Horizonte, Brasil</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-between lg:gap-4 gap-3 mx-auto lg:w-[80%]">
                <div className="bg-gray-300 p-3 border-2 rounded-xl border-Neutral-400  hover:border-Neutral-400 active:bg-Neutral-200 hover:bg-gray-200">
                  <a href={Links.Github}>
                    {" "}
                    <Github color="#334155" />
                  </a>
                </div>
                <div className="bg-gray-300 p-3 border-2 rounded-xl border-Neutral-400  hover:border-Neutral-400 active:bg-Neutral-200 hover:bg-gray-200">
                  <a href={Links.Email}>
                    <Mail color="#334155" />
                  </a>
                </div>
                <div className="bg-gray-300 p-3 border-2 rounded-xl border-Neutral-400  hover:border-Neutral-400 active:bg-Neutral-200 hover:bg-gray-200">
                  <a href={Links.Instagram}>
                    <Instagram color="#334155" />
                  </a>
                </div>
                <div className="bg-gray-300 p-3 border-2 rounded-xl border-Neutral-400  hover:border-Neutral-400 active:bg-Neutral-200 hover:bg-gray-200">
                  <a href={Links.Linkedin}>
                    {" "}
                    <Linkedin color="#334155" />
                  </a>
                </div>
                <div className="bg-gray-300 p-3 border-2 rounded-xl border-Neutral-400  hover:border-Neutral-400 active:bg-Neutral-200 hover:bg-gray-200">
                  <a href={USER_INFO.phone}>
                    {" "}
                    <Phone color="#334155" />
                  </a>
                </div>
              </div>
              <span className="font-ubuntu text-Neutral-300  text-center">
                You're welcome to write in English or Portuguese. <br />I
                usually reply within a day!
              </span>
            </div>

            <div className="card card-dash bg-neutral-content text-neutral w-full lg:w-1/2 font-ubuntu">
              <div className="card-body justify-between gap-5">
                <div className="grid gap-5">
                  <div className="flex gap-5 justify-between">
                    <fieldset className="fieldset">
                      <legend className="fieldset-legend">Name</legend>
                      <input
                        type="text"
                        className="input"
                        placeholder="Your full name"
                      />
                    </fieldset>

                    <fieldset className="fieldset">
                      <legend className="fieldset-legend">Email</legend>
                      <input
                        type="text"
                        className="input"
                        placeholder="your.email@example.com"
                      />
                    </fieldset>
                  </div>

                  <div className="grid gap-5">
                    <fieldset className="fieldset">
                      <legend className="fieldset-legend">Subject</legend>
                      <input
                        type="text"
                        className="input w-full"
                        placeholder="What is this about?"
                      />
                    </fieldset>
                    <textarea
                      placeholder="Neutral"
                      className="textarea h-36 w-full"
                    ></textarea>
                  </div>
                </div>
                <div className="card-actions justify-end">
                  <button className="btn bg-slate-700 text-neutral-content w-full">
                    Send Message
                  </button>
                </div>
              </div>
            </div>

            {/* <div className="border-2 border-Neutral-400 p-2 bg-gray-300 lg:w-1/2">
              <div className="flex gap-2 flex-col lg:flex-row">
                <div className="flex flex-col lg:w-1/2">
                  <span className="text-slate-700 font-bold text-sm font-ubuntu">
                    Name
                  </span>
                  <input
                    type="text"
                    placeholder="Your full fame"
                    name=""
                    id=""
                    className="border-2 font-ubuntu border-Neutral-400 px-2 py-1 text-gray-100 bg-Neutral-200"
                  />
                </div>
                <div className="flex flex-col lg:w-1/2">
                  <span className="text-slate-700 font-ubuntu font-bold text-sm">
                    Email
                  </span>
                  <input
                    type="text"
                    placeholder="your.email@example.com"
                    name=""
                    id=""
                    className="border-2 font-ubuntu border-Neutral-400 px-2 py-1  text-gray-100 bg-Neutral-200"
                  />
                </div>
              </div>
              <div>
                <div className="flex flex-col">
                  <span className="text-slate-700 font-ubuntu font-bold text-sm">
                    Subject
                  </span>
                  <input
                    type="text"
                    placeholder="What is this about?"
                    name=""
                    id=""
                    className="border-2 font-ubuntu border-Neutral-400 px-2 py-1  text-gray-100 bg-Neutral-200"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-slate-700 font-ubuntu font-bold text-sm">
                  Message
                </span>
                <textarea
                  name=""
                  id=""
                  placeholder="Your message..."
                  className="border-2 font-ubuntu border-Neutral-400 px-2 py-1  text-gray-100 bg-Neutral-200 h-40"
                ></textarea>
              </div>
              <button className="mt-2 border-2 border-Neutral-400 hover:bg-slate-600 transition bg-slate-700 py-2 w-full font-ubuntu font-bold text-slate-300">
                Send Message
              </button>
            </div> */}
          </div>
        </div>
        <div className=" flex items-end">
          <img className="" src={waveImage} alt="Wave" />
        </div>
      </div>
    </>
  );
}
