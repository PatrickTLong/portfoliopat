import React from "react";

export default function Note(props) {
    return(
        <main className="flex p-10 sm:p-16 lg:p-20 justify-center">
            <ul className="flex flex-col justify-center gap-7">
                <li className="flex flex-col sm:flex-col md:flex-col lg:flex-row gap-10 items-center">
                    <img 
                        className="lg:w-[650px] md:w-[500px] sm:w-[300px] w-full flex rounded-lg mb-3 object-cover" 
                        src={props.img} 
                        alt={props.title} 
                    />
                    
                </li>
                <li className="flex text-left underline text-white font-medium opacity-70 text-sm sm:text-base lg:text-lg">
                    {props.date}
                </li>
                <ul className="flex flex-row gap-5 sm:gap-7 lg:gap-10">
                    <li className="flex text-left text-white font-bold text-xl sm:text-2xl lg:text-4xl">
                        <p className="border-2 border-slate-700 border-opacity-40 rounded-lg bg-opacity-10 bg-slate-300 p-3">
                            {props.title}
                        </p>
                    </li>
                    <li className="flex text-left text-white font-bold text-base sm:text-lg lg:text-xl">
                        <p className="border-opacity-40 flex items-center border-2 border-emerald-600 rounded-lg bg-opacity-10 bg-emerald-500 text-green-400 p-3">
                            {props.type}
                        </p>
                    </li>
                </ul>

                <li className="flex text-left text-sm sm:text-base lg:text-md text-white font-medium opacity-70">
                    {props.explanation}
                </li>
                <li className="">
                <code className="w-fit flex flex-col">
                        {props.code && (
                            <>
                                <div className="border-2 border-opacity-40 text-xs border-slate-500 p-2 bg-slate-900 bg-opacity-35 text-white flex text-left font-medium opacity-70 rounded-tr-xl rounded-tl-xl">
                                    {props.file}
                                </div>
                                <pre className="border-2 border-opacity-40 border-t-0 border-slate-500 bg-slate-700 pl-3 pr-3 bg-opacity-35 rounded-bl-xl rounded-br-xl text-white flex text-left font-medium opacity-70 text-sm">
                                    {props.code}
                                </pre>
                            </>
                        )}
                    </code>
                </li>

                <hr className="mt-6 opacity-5 " />
            </ul>
        </main>
    );
}
