export default function Main() {
  const underline = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1213 73" fill="white">
      <path d="M1212.41 5.51c3.05 12.87-22.36 11.93-30.26 15.68-94.32 20.51-269.09 32.42-365.48 37.51-77.91 3.82-155.66 9.93-233.67 11.67-57.49 2.56-115.05-.19-172.57 1.58-121.28.91-243.17 1.88-363.69-13.33-12.51-2.64-25.8-2.92-37.77-7.45-30.66-21.42 26.02-21.53 38.52-19.26 359.95 29.05 364.68 27.36 638.24 17.85 121-3.78 241.22-19.21 426.76-41.46 4.72-.65 9.18 3.56 8.45 8.36a941.74 941.74 0 0 0 54.29-9.21c9.33-2.33 18.7-4.56 27.95-7.19a7.59 7.59 0 0 1 9.23 5.24Z"></path>
    </svg>
  );

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 lg:flex-row lg:gap-24">
      {/* Main Content */}
      <div className="flex flex-col text-left lg:items-start ">
        <ul className="flex flex-col items-center justify-center gap-6 p-6">
          <li className="text-white tracking-wide font-bold text-[4rem]  lg:text-[8rem]">
            I'm Patrick
            <div>{underline}</div>
          </li>
          <li className="max-w-3xl text-sm sm:text-base text-center lg:text-md text-white">
            I specialize in using React.js and Node.js to build visually
            appealing and highly functional websites. Through my Notes Page, I
            share key concepts, essential techniques, and practical solutions
            I've discovered for CSS, React, HTML, JavaScript, Tailwind, and
            more, based on my learning journey.
          </li>
        </ul>
      </div>

    
      <ul className="hidden lg:flex gap-5 items-center">
        <ul className="flex space-x-4">
          <li
            id="bounce1"
            className="h-24 w-2 sm:h-48 sm:w-3 lg:h-72 lg:w-6 bg-red-300 border-2 border-opacity-50 border-stone-900 rounded-full"
          ></li>
          <li
            id="bounce2"
            className="h-24 w-2 sm:h-48 sm:w-3 lg:h-72 lg:w-6 bg-orange-300 border-2 border-opacity-50 border-stone-900 rounded-full"
          ></li>
          <li
            id="bounce3"
            className="h-24 w-2 sm:h-48 sm:w-3 lg:h-72 lg:w-6 bg-yellow-300 border-2 border-opacity-50 border-stone-900 rounded-full"
          ></li>
          <li
            id="bounce4"
            className="h-24 w-2 sm:h-48 sm:w-3 lg:h-72 lg:w-6 bg-green-300 border-2 border-opacity-50 border-stone-900 rounded-full"
          ></li>
          <li
            id="bounce5"
            className="h-24 w-2 sm:h-48 sm:w-3 lg:h-72 lg:w-6 bg-blue-300 border-2 border-opacity-50 border-stone-900 rounded-full"
          ></li>
          <li
            id="bounce6"
            className="h-24 w-2 sm:h-48 sm:w-3 lg:h-72 lg:w-6 bg-purple-300 border-2 border-opacity-50 border-stone-900 rounded-full"
          ></li>
        </ul>
      </ul>
    </main>
  );
}
