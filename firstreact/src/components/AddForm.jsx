import axios from "axios";
import { use } from "react";
import { useState } from "react";

export default function AddForm() {
  const [data, setData] = useState({ title: "", summary: "" });
  const [success, setsuccess] = useState(false);
  const [fail, setfail] = useState(false);


  function Submit(e) {
    const Filled = data["title"] !== "" && data["summary"] !== ""
    if (!Filled){
      e.preventDefault();
      setfail(true)
      setTimeout(() => {
        setfail(false);
      }, 10000);
      
    }
    if (Filled)  {
      e.preventDefault();
      setfail(false)
    setsuccess(true);
    setTimeout(() => {
      setsuccess(false);
    }, 3000);
    axios.post("https://domain.up.railway.app/databasestore", data);
    }
    setData({ title: "", summary: "" })
    
  }
  
  function TitleChange(e) {
    setData((prev) => ({ ...prev, title: e.target.value }));
  }

  function SummaryChange(e) {
    setData((prev) => ({ ...prev, summary: e.target.value }));
  }

  return (
    <>
      <form
        className="flex flex-col items-center justify-center gap-5"
        onSubmit={Submit}
      >
        <div className="flex justify-center items-center">
  <div className="relative flex flex-row items-center">
    <p className={`absolute left-[-2rem] ${fail ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300 ease-in-out  text-red-500 text-2xl`}>*</p>
    <input
      className="rounded-md hover:scale-[1.01] transition-all will-change-transform duration-300 ease-in-out font-medium focus:outline-none placeholder-opacity-40 bg-transparent border-2 placeholder-white text-white text-center shadow appearance-none p-3 
      w-32 sm:w-48 md:w-64 lg:w-80"
      placeholder="Title"
      value={data.title}
      onChange={TitleChange}
      type="text"
    />
  </div>
</div>

<div className="flex justify-center flex-row items-center">
  <div className="relative flex flex-row items-center">
    <p className={`absolute left-[-2rem] ${fail ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300 ease-in-out  text-red-500 text-2xl`}>*</p>
    <input
      className="rounded-md hover:scale-[1.01] transition-all will-change-transform duration-300 ease-in-out focus:outline-none shadow bg-transparent border-2 placeholder-opacity-40 placeholder-white text-white appearance-none p-3 
      w-80 sm:w-[28rem] md:w-[32rem] lg:w-[36rem]"
      placeholder="Summary"
      value={data.summary}
      onChange={SummaryChange}
      type="text"
    />
  </div>
</div>

        

        <div className="gap-4 flex font-medium p-0 m-0 flex-col justify-center items-center">
          <button 
            className={`rounded-full ${success ? "bg-emerald-300" : "bg-transparent"}  text-white font-medium hover:scale-105 border-2 transition-all will-change-transform duration-300 ease-in-out 
            w-20 md:w-24 lg:w-32 p-2`}
            type="submit"
          >
            Submit
          </button>

          <p
            className={`${
              success ? "opacity-100" : "pointer-events-none opacity-0"
            } transition-opacity font-medium duration-300 ease-in-out p-0 m-0 text-emerald-300`}
          >
            Successfully Submitted!
          </p>
        </div>
      </form>
    </>
  );
}
