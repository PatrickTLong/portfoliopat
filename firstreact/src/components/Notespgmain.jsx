import AddForm from "./AddForm";

export default function NotesPageMain() {
  return (
    <>
      <ul className="gap-20 p-6 sm: mt-9 sm:p-16 lg:p-40 flex flex-col items-center justify-center">
        {/* Background Text */}
        
          
        

        {/* Intro Text */}
        <li className="max-w-4xl text-center text-sm sm:text-base lg:text-md text-white font-medium">
          Hello there! I'm excited to have you here. On this page, I share insights into common and uncommon challenges and concepts I've encountered throughout my journey in web design. If you've faced any issues you'd like me to explore, feel free to type here with a title and detailed explanation, and I'll do my best to include it here.
          
        </li>
        <div className="absolute top-6 opacity-[0.01] pointer-events-none text-[150px] sm:text-[200px] lg:text-[300px] tracking-widest text-white font-medium">
          notes
          </div>
        {/* AddForm Component */}
        <li className="relative">
          <AddForm />
        </li>
      </ul>

      {/* Divider */}
      <hr className="mt-6 opacity-5" />
    </>
  );
}
