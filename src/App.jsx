import { useState } from "react";

const ConverterApp = () => {
  // Inisialisasi state untuk input pengguna, hasil konversi, dan mode konversi
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [mode, setMode] = useState("decimal");
  const [error, setError] = useState("");

  // Fungsi untuk mengonversi desimal ke biner
  const decimalToBinary = (num) => {
    return (parseInt(num, 10) >>> 0).toString(2); // Konversi desimal ke biner
  };

  // Fungsi untuk mengonversi biner ke desimal
  const binaryToDecimal = (bin) => {
    return parseInt(bin, 2); // Konversi biner ke desimal
  };

  // Fungsi untuk menangani konversi berdasarkan mode yang dipilih
  const handleConvert = () => {
    if (mode === "decimal") {
      if (isNaN(input) || input < 0) {
        setError("Input salah, harus memasukkan bilangan desimal non-negatif.");
        setResult("");
      } else {
        setError("");
        setResult(decimalToBinary(input)); // Konversi desimal ke biner
      }
    } else {
      if (!/^[01]+$/.test(input)) {
        setError("Input salah, harus memasukkan bilangan biner (0 atau 1).");
        setResult("");
      } else {
        setError("");
        setResult(binaryToDecimal(input)); // Konversi biner ke desimal
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <p className="text-gray-600 font-bold">Abu Azwar Anas XII RPL 1</p>
      <h2 className="text-4xl font-bold mb-4 text-blue-600">Number Converter</h2>
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Conversion Mode</label>
          <select
            className="w-full p-2 border border-gray-300 rounded"
            onChange={(e) => setMode(e.target.value)}
            value={mode}
          >
            <option value="decimal">Decimal to Binary</option>
            <option value="binary">Binary to Decimal</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Input</label>
          <input
            className="w-full p-2 border border-gray-300 rounded"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={mode === "decimal" ? "Enter decimal" : "Enter binary"}
          />
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
        <button
          className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
          onClick={handleConvert}
        >
          Convert
        </button>
        <h3 className="text-xl font-bold mt-4 text-green-600">Result: {result}</h3>
      </div>
    </div>
  );
};

export default ConverterApp;