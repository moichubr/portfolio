import Skills from "./Skills";
import Services from "./Services";
import About from "./About";
import Landing from "./Landing";
import Contact from "./Contact";
import Projects from "./Projects";
import Footer from "./Footer";

const Home = () => {
  return (
    <main className="w-full h-screen flex flex-col scroll-smooth">
      <Landing />

      <section className="light-bg dark:bg-body">
        <About />

        <Services />

        <Skills />

        <Projects />

        <Contact />
      </section>
      <Footer />
    </main>
  );
};

export default Home;

//     <main className="w-[100vw] h-screen flex flex-col">
//       <Navigation />
// <div className="lg:grid lg:grid-cols-2 xl:grid xl:grid-cols-2 flex flex-col sm:relative md:relative w-full h-screen">
// <section className="lg:col-span-1 xl:col-span-1 w-full flex flex-col p-4 mt-56 lg:mt-20 xl:mt-20 lg:ml-48 xl:ml-48 h-screen pb-20 sm:z-20 md:z-20 z-0">

//    {/* <p className="text-gray-900  dm-serif font-bold tracking-wide text-5xl sm:text-3xl md:text-3xl lg:text-5xl">
//      {t("about.welcome")}
//    </p> */}
//    {/* <p

//      className=" font-bold text-4xl dm-serif sm:text-5xl md:text-5xl lg:text-5xl mt-2 text-gray-900 "
//    >
//      {t("about.iam")}
//      style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}}
//    </p> */}
//     <p className="poppins-bold text-7xl md:text-[7rem] lg:text-[7rem] xl:text-[7rem] text-stone-100 max-w-[50%] lg:h-[8rem] md:h-[9.5rem] h-[5.5rem] xl:h-[9rem] leading-0 ">Moira</p>
//     <p  className="poppins-bold  text-7xl md:text-[7rem] lg:text-[7rem] xl:text-[7rem] text-stone-400 max-w-[50%] lg:h-[5rem] md:h-[7rem] h-[4.5rem] xl:h-[5rem] leading-3">Brun</p>
//    <p  style={{
//        background: "linear-gradient(90deg, #240046, #ff0072, #ff8c00)",
//        WebkitBackgroundClip: "text",
//        WebkitTextFillColor: "transparent",
//        // textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
//      }}
//    className="dm-serif font-extrabold tracking-wider xl:text-4xl md:text-3xl lg:text-3xl text-2xl max-w-fit mt-[-30px]">
//      {t("about.role")}
//    </p>
//    <p className="text-gray-900 roboto-regular tracking-wide lg:mt-20 xl:mt-20 md:mt-16 mt-12 text-sm lg:text-md xl:text-md  xl:max-w-[60%] lg:max-w-[60%] md:max-w-[90%]">
//      {t("about.description")}
//    </p>

//    <div className="mt-4 gap-6 flex flex-row items-center">
//      <FaLinkedin color="#6A557E" size={30}/>
//      <FaGithub color="#6A557E" size={30} />
//      <FaInstagram color="#6A557E" size={30} />
//    </div>

//  </section>

//  <div className="lg:col-span-1 xl:col-span-1 md:absolute sm:absolute w-full h-screen sm:inset-0 sm:z-0 md:z-0 md:inset-0">
//   <img src={hero} alt="hero img" style={{width: '70%', height:'auto'}}/>

//  </div>

// </div>
