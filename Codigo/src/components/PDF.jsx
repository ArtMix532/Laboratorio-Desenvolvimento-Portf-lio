import CV from "../assets/CVDaviBenjamim.pdf";

const PdfViewer = () => {
  return (
    <div className="flex justify-center items-center h-screen flex-col gap-2">
      <div className="flex gap-5 p-5">
        <button className="font-ubuntu btn btn-accent btn-soft btn-xl w-52">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 448" class="size-[1.2em] rounded-[2px]">
            
            <rect width="640" height="448" fill="#009b3a"/>
            <path fill="#ffdf00" d="M320 48L592 224 320 400 48 224 320 48Z"/>
            <circle cx="320" cy="224" r="96" fill="#002776"/>
            <g transform="rotate(-15 320 224)">
              <path d="M224 224c0-30 43-56 96-56s96 26 96 56" fill="none" stroke="#ffffff" stroke-width="20" stroke-linecap="round"/>
              <path d="M224 236c0-30 43-56 96-56s96 26 96 56" fill="none" stroke="#ffffff" stroke-width="12" stroke-linecap="round" opacity=".9"/>
            </g>
          </svg> <p>Portuguese</p>
        </button>
        <button className="font-ubuntu btn btn-info btn-soft btn-xl w-52">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7410 3900" className="size-[1.2em]">
            <path fill="#b22234" d="M0 0h7410v3900H0z"/>
            <path stroke="#fff" strokeWidth="300" d="M0 450h7410M0 1050h7410M0 1650h7410M0 2250h7410M0 2850h7410M0 3450h7410"/>
            <path fill="#3c3b6e" d="M0 0h2964v2100H0z"/>
          </svg><p>English</p>
        </button>
      </div>
      <div className="w-full max-w-4xl h-full shadow-lg rounded-lg overflow-hidden">
        <iframe
          src={CV}
          title="Visualizador de PDF"
          className="w-full h-full"
          style={{ border: "none" }}
        >
          Este navegador não suporta a incorporação de PDF. Você pode
          <a href="caminho/para/seu/arquivo.pdf">fazer o download do PDF</a>.
        </iframe>
      </div>
    </div>
  );
};

export default PdfViewer;
