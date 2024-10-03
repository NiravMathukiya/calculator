import { useState } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    if((input<0 && value=="+" && value=="-" && value=="*" && value=="/"))
    {
      setInput("first always a number")
    }
    else{
    setInput(input + value);
    }
  };

  const handleEqual = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  const handleClear = () => {
    setInput("");
  };
  const handleremove = () =>{
    if(input=="Error")
    {
      setInput("");
    }else{
    setInput(input.slice(0, -1));
    }
  }

  return (
    <div className='bg-black h-dvh px-20 pt-4 '>
      <h1 className='text-white text-center text-4xl mb-4 '>Calculator</h1>
    <div className="grid gap-3 p-4 text-2xl  bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-purple-600 via-pink-600 to-blue-600 text-white rounded-2xl ">
      <input type="text" value={input} readOnly className='bg-gray-200 mb-3 h-20 px-6 text-black text-right pr-4 rounded-xl text-4xl w-full ' />
      <div className="grid gap-3 p-4 grid-cols-4">
        <button onClick={handleClear} className='p-4 bg-white text-black rounded-xl font-bold hover:bg-gray-300 '>C</button>
        <button onClick={() => handleClick('/')} className='p-4 bg-white text-black rounded-xl  hover:bg-gray-300'>/</button>
        <button onClick={() => handleClick('*')} className='p-4 bg-white text-black rounded-xl  hover:bg-gray-300'>*</button>
        <button onClick={() => handleremove()} className='p-4 bg-white text-black rounded-xl hover:bg-gray-300 overflow-x-hidden text-wrap'>{window.innerWidth < 489 ? "<-" : "remove"}</button>
        <button onClick={() => handleClick('1')} className='p-4 bg-white text-black rounded-xl  hover:bg-gray-300'>1</button>
        <button onClick={() => handleClick('2')} className='p-4 bg-white text-black rounded-xl hover:bg-gray-300 '>2</button>
        <button onClick={() => handleClick('3')} className='p-4 bg-white text-black rounded-xl  hover:bg-gray-300'>3</button>
        <button onClick={() => handleClick('-')} className='p-4 bg-white text-black rounded-xl  hover:bg-gray-300'>-</button>
        <button onClick={() => handleClick('4')} className='p-4 bg-white text-black rounded-xl  hover:bg-gray-300'>4</button>
        <button onClick={() => handleClick('5')} className='p-4 bg-white text-black rounded-xl  hover:bg-gray-300'>5</button>
        <button onClick={() => handleClick('6')} className='p-4 bg-white text-black rounded-xl  hover:bg-gray-300'>6</button>
        <button onClick={() => handleClick('+')} className='p-4 bg-white text-black rounded-xl hover:bg-gray-300 '>+</button>
        <button onClick={() => handleClick('7')} className='p-4 bg-white text-black rounded-xl hover:bg-gray-300 '>7</button>
        <button onClick={() => handleClick('8')} className='p-4 bg-white text-black rounded-xl  hover:bg-gray-300'>8</button>
        <button onClick={() => handleClick('9')} className='p-4 bg-white text-black rounded-xl  hover:bg-gray-300'>9</button>
        <button onClick={() => handleClick('0')} className='p-4 bg-white text-black rounded-xl hover:bg-gray-300 '>0</button>
      </div>
        <div className='grid w-full px-4 gap-4 grid-cols-2'>
        <button onClick={() => handleClick('.')} className='p-4 bg-white text-black rounded-xl  hover:bg-gray-300'>.</button>
        <button onClick={handleEqual} className='p-4 bg-white text-black rounded-xl  hover:bg-gray-300'>=</button>
        </div>
    </div>
    </div>
  );
}

export default App
