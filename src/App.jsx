import { useState } from "react";
import { FaExchangeAlt } from "react-icons/fa";

const ConverterApp = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [mode, setMode] = useState("decimal");
  const [error, setError] = useState("");

  const decimalToBinary = (num) => {
    return (parseInt(num, 10) >>> 0).toString(2);
  };

  const binaryToDecimal = (bin) => {
    return parseInt(bin, 2);
  };

  const handleConvert = () => {
    if (mode === "decimal") {
      if (isNaN(input) || input < 0) {
        setError("Input salah, harus memasukkan bilangan desimal non-negatif.");
        setResult("");
      } else {
        setError("");
        setResult(decimalToBinary(input));
      }
    } else {
      if (!/^[01]+$/.test(input)) {
        setError("Input salah, harus memasukkan bilangan biner (0 atau 1).");
        setResult("");
      } else {
        setError("");
        setResult(binaryToDecimal(input));
      }
    }
  };

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "decimal" ? "binary" : "decimal"));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f4f4f4] p-4">
      <h2 className="text-4xl font-bold mb-5 text-[#43507B]">Number Converter</h2>
      <div className="flex flex-col md:flex-row bg-white rounded shadow-md max-w-4xl">
        {/* Bagian Gambar */}
        <div className="flex items-center justify-center">
          <div className="w-100 md:w-75 h-[350px] md:h-100 flex items-end">
            <img
              src="/bgmath.jpg"
              alt="Illustrasi"
              className="object-cover object-bottom md:object-center w-100 h-[350px] md:w-75 md:h-100"
            />
          </div>
        </div>
        {/* Bagian Form Input */}
        <div className="w-100  p-[30px] pt-0 md:pt-[30px]">
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Conversion Mode</label>
            <button
              className="w-full p-2 border border-gray-300 rounded bg-[#ffffff] flex items-center justify-between"
              onClick={toggleMode}
            >
              <span
                className={`text-right w-1/3 font-semibold ${
                  mode === "decimal" ? "text-[#D671A4]" : "text-[#73C1A9]"
                }`}
              >
                {mode === "decimal" ? "Decimal" : "Binary"}
              </span>
              <FaExchangeAlt className="text-[#43507B] w-1/3 text-center" />
              <span
                className={`text-left w-1/3 font-semibold ${
                  mode === "decimal" ? "text-[#73C1A9]" : "text-[#D671A4]"
                }`}
              >
                {mode === "decimal" ? "Binary" : "Decimal"}
              </span>
            </button>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Input</label>
            <input
              className="w-full p-2 border border-gray-300 rounded"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={mode === "decimal" ? "Enter decimal example 23" : "Enter binary example 1010"}
            />
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </div>
          <button
            className="w-full bg-[#43507B] text-white font-bold py-2 px-4 rounded hover:bg-[#43507B]"
            onClick={handleConvert}
          >
            Convert
          </button>
          <h3 className="text-xl font-bold mt-4 bg-gray-100 rounded-sm p-2 text-[#43507B]">Result: <p className="text-[#F4CB4E]" style={{ WebkitTextStroke: "0.1px black" }}>{result}</p></h3>
        </div>
      </div>
      <p className="text-gray-600 font-bold mt-10">
      &copy; 2025 Abu Azwar Anas XII RPL 1.</p>
    </div>
  );
};

export default ConverterApp;