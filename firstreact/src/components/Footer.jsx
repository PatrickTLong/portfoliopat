import { Link } from "react-router-dom";

export default function Footer() {
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

  return (
    <>
      <main className="bg-black bg-opacity-10">
        <hr className="mt-6 opacity-5" />
        <ul className="flex items-center justify-center gap-14 d:gap-20 p-10 md:p-20">
          {/* Section 1 */}
          <ul className="flex-col gap-5 flex items-center justify-center text-white">
            <li className="bg-clip-text text-transparent text-white">
              Patrick Long
            </li>
            <ul className="flex gap-5 opacity-50 justify-center text-white">
              <li>
                <a href="https://github.com/PatrickTLong">{github}</a>
              </li>
              <li>
                <a href="https://x.com/PatThomasLong">{twitter}</a>
              </li>
              <li>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=longpatrick3317@gmail.com">
                  {email}
                </a>
              </li>
            </ul>
          </ul>
          {/* Section 2 */}
          <ul className="flex-col gap-5 flex justify-center items-center text-white">
            <li className="text-md bg-clip-text">General</li>
            <li>
              <Link className="opacity-50" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="opacity-50" to="/notes">
                Notes
              </Link>
            </li>
            
          </ul>
          <p className="text-white text-md opacity-20">Copyright © 2024 Patrick Long. All rights reserved.</p>
        </ul>
        
      </main>
    </>
  );
}
