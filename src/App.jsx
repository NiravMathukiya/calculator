import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState("");

  // Handle button clicks for numbers and operators
  const handleClick = (value) => {
    if (input === "" && (value === "+" || value === "-" || value === "*" || value === "/")) {
      setInput("First input must be a number");
    } else {
      setInput(input + value);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key;
      if (/^[0-9]$/.test(key) || ['+', '-', '*', '/'].includes(key)) {
        handleClick(key);
      } else if (key === 'Enter') {
        handleEqual();
      } else if (key === 'Backspace') {
        handleremove();
      }else if(key === 'Escape')
      {
        handleClear();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown); // Cleanup event listener
    };
  }, [input]);

  // Handle calculation
  const handleEqual = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  // Clear the input field
  const handleClear = () => {
    setInput("");
  };

  // Handle removal of last character or reset on error
  const handleremove = () => {
    if (input === "Error") {
      setInput("");
    } else {
      setInput(input.slice(0, -1));
    }
  };

  return (
    <div className="bg-black h-screen px-20 pt-4">
      <h1 className="text-white text-center text-4xl mb-4">Calculator</h1>
      <div className="grid gap-3 p-4 text-2xl bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-purple-600 via-pink-600 to-blue-600 text-white rounded-2xl">
        <input 
          type="text" 
          value={input} 
          readOnly 
          className="bg-gray-200 mb-3 h-20 px-6 text-black text-right pr-4 rounded-xl text-4xl w-full" 
        />
        <div className="grid gap-3 p-4 grid-cols-4">
          <button onClick={handleClear} className="p-4 bg-white text-black rounded-xl font-bold hover:bg-gray-300">C</button>
          <button onClick={() => handleClick('/')} className="p-4 bg-white text-black rounded-xl hover:bg-gray-300">/</button>
          <button onClick={() => handleClick('*')} className="p-4 bg-white text-black rounded-xl hover:bg-gray-300">*</button>
          <button onClick={handleremove} className="p-4 bg-white text-black rounded-xl hover:bg-gray-300">
            {window.innerWidth < 489 ? "<-" : "Remove"}
          </button>
          {/* Number buttons */}
          {[1, 2, 3].map(num => (
            <button key={num} onClick={() => handleClick(num)} className="p-4 bg-white text-black rounded-xl hover:bg-gray-300">{num}</button>
          ))}
          <button onClick={() => handleClick('-')} className="p-4 bg-white text-black rounded-xl hover:bg-gray-300">-</button>
          {[4, 5, 6].map(num => (
            <button key={num} onClick={() => handleClick(num)} className="p-4 bg-white text-black rounded-xl hover:bg-gray-300">{num}</button>
          ))}
          <button onClick={() => handleClick('+')} className="p-4 bg-white text-black rounded-xl hover:bg-gray-300">+</button>
          {[7, 8, 9].map(num => (
            <button key={num} onClick={() => handleClick(num)} className="p-4 bg-white text-black rounded-xl hover:bg-gray-300">{num}</button>
          ))}
          <button onClick={() => handleClick('0')} className="p-4 bg-white text-black rounded-xl hover:bg-gray-300">0</button>
        </div>
        <div className="grid w-full px-4 gap-4 grid-cols-2">
          <button onClick={() => handleClick('.')} className="p-4 bg-white text-black rounded-xl hover:bg-gray-300">.</button>
          <button onClick={handleEqual} className="p-4 bg-white text-black rounded-xl hover:bg-gray-300">=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
