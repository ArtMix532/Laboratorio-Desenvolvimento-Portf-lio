import CV from "../assets/CVDaviGuimaraesIN.pdf";

const PdfViewer = () => {
  return (
    <div className="flex justify-center items-center h-screen flex-col gap-2">
      <div>
        <button className="lg:w-72 w-40 border-2 border-Neutral-400 font-ubuntu  p-4 bg-gray-300 hover:border-Neutral-400 text-xl font-bold">
          Portuguese
        </button>
        <button className="lg:w-72 w-40 border-2 border-gray-600 font-ubuntu hover:bg-gray-200 transition-colors p-4 bg-Neutral-400 hover:border-Neutral-500 text-xl font-bold">
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
          <a href={CV}>fazer o download do PDF</a>.
        </iframe>
      </div>
    </div>
  );
};

export default PdfViewer;
