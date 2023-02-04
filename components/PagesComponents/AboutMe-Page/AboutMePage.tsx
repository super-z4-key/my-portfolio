import Image from "next/image";
import AvatarIcons from "../../../assets/AvatarIcons.svg";

const AboutMePage = () => {
   const AboutItems = (icons: string, title: string, classname: string) => {
      return (
         <div className={`${classname} gap-1`}>
            <div>{icons}</div>
            <p>{title}</p>
         </div>
      );
   };
   return (
      <section
         id="about-me"
         className="container-none w-full h-auto border-b border-slate-800"
      >
         <div className="container mx-auto py-20 py-4 w-[98%] md:w-[90%] flex justify-center items-center">
            <div className="flex flex-col md:flex-row justify-center items-center px-1 gap-2">
               <div className="w-[70%] md:w-6/12 flex justify-center items-center box-border">
                  <Image
                     src={AvatarIcons}
                     alt="image"
                     className="md:p-20 mx-4 md:mx-10"
                  />
               </div>
               <div className="md:w-6/12 flex flex-col justify-center items-start text-slate-500 gap-1 mb-4">
                  <h3 className="text-emerald-400">🧐 About me</h3>
                  <h1 className="my-3 md:my-2 text-4xl md:text-5xl font-semibold text-white">
                     Ahmad <br /> Zaky Ubaidillah
                  </h1>
                  {AboutItems(
                     "👋",
                     "My name is Ahmad Zaky Ubaidillah, but you can call me Zaky. Pleasure!",
                     "inline-flex"
                  )}
                  {AboutItems(
                     "💻",
                     "For more than 2 years developing and programming interfaces with JavaScript, React JS and Typescript.",
                     "inline-flex"
                  )}
                  {AboutItems(
                     "🎓",
                     "In the college period of the Informatics Engineering Study Program.",
                     "inline-flex"
                  )}
                  {AboutItems(
                     "💡",
                     "Front-end web development interests with React, Next js, and UX/UI Design.",
                     "inline-flex"
                  )}
                  {AboutItems(
                     "🚀",
                     "Trying to be a little better than yesterday every day.",
                     "inline-flex"
                  )}
               </div>
            </div>
         </div>
      </section>
   );
};

export default AboutMePage;
