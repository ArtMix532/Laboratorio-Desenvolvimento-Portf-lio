import CV from "../assets/CVDaviBenjamim.pdf";

const PdfViewer = () => {
  return (
    <div className="flex justify-center items-center h-screen flex-col gap-2">
      <div>
        <button className="lg:w-72 w-40 border-2 border-gray-500  p-4 bg-gray-400 hover:border-slate-500 text-xl font-bold">
          Portuguese
        </button>
        <button className="lg:w-72 w-40 border-2 border-gray-600  p-4 bg-gray-500 hover:border-slate-500 text-xl font-bold">
          English
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
