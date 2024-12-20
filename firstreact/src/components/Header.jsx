import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header(props) {
  const [isOpen, setIsOpen] = useState(false);

  const github = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-github"
      viewBox="0 0 16 16"
    >
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
    </svg>
  );

  const twitter = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-twitter-x"
      viewBox="0 0 16 16"
    >
      <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
    </svg>
  );

  const email = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-envelope"
      viewBox="0 0 16 16"
    >
      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
    </svg>
  );

  const downarrow = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={0.5}
      stroke="currentColor"
      className={`size-4 transition-transform duration-200 ease-in-out transform ${
        isOpen ? "rotate-180 translate-y-1" : "rotate-0"
      }`}
      
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m19.5 11.25-7.5 7.5-7.5-7.5"
      />
    </svg>
  );

  function MoreButton() {
    setIsOpen(!isOpen);
  }

  return (
    <main className="flex justify-center items-start p-8">
      <ul className="fixed pr-8 pl-8 border-2 border-opacity-40 border-stone-800 bg-stone-900 bg-opacity-60 font-medium list-none flex flex-row gap-6 p-[0.6rem] justify-center rounded-xl">
        <li>
          <Link
            to="/"
            id="glowymainname"
            className="text-white hover:underline transition-all duration-300 ease-in-out"
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            to="/notes"
            id="glowymainname"
            className="text-white hover:underline transition-all duration-300 ease-in-out"
          >
            Notes
          </Link>
        </li>
        <li className="bg-white w-[1px] opacity-30"></li>
        <li className="relative">
          <button
            id="glowymainname"
            onClick={MoreButton}
            className="text-white flex flex-row gap-1 justify-center items-center hover:underline transition-all duration-500 ease-in-out"
          >
            Contact {downarrow}
          </button>
          <ul
            id="morebuttonbackdrop"
            className={`mt-5 left-11 absolute p-5 ${
              isOpen
                ? "pointer-events-auto opacity-1"
                : "pointer-events-none opacity-0"
            } bg-stone-900  font-medium list-none flex flex-col gap-6 justify-center rounded-lg transition-opacity duration-500 ease-in-out`}
          >
            <li
              id="glowymainname"
              className="text-white flex w-6 justify-center  hover:scale-125 transition-all duration-300 ease-in-out"
            >
              <a href="https://x.com/PatThomasLong">{twitter}</a>
            </li>
            <li
              id="glowymainname"
              className="text-white w-6 flex justify-center  hover:scale-125 transition-all duration-300 ease-in-out"
            >
              <a href="https://github.com/PatrickTLong">{github}</a>
            </li>
            <li
              id="glowymainname"
              className="text-white w-6 flex justify-center  hover:scale-125 transition-all duration-300 ease-in-out"
            >
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=longpatrick3317@gmail.com">
                {email}
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </main>
  );
}
