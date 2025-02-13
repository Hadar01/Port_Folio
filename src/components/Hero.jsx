import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto flex flex-col justify-center items-center">
  <div className="absolute inset-0 top-[100px] max-w-5xl mx-auto px-4 flex flex-row items-start gap-3">
    <div className="flex flex-col justify-center items-center">
      <div className="w-4 h-4 rounded-full bg-[#915EFF]" />
      <div className="w-1 h-40 sm:h-60 violet-gradient" />
    </div>

    <div>
      <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
        Hi, I'm <span className="text-[#ff0000]">Aarush</span>
      </h1>
      <p className="text-lg sm:text-xl mt-2 text-white-100">
        I am a <span className="text-[#ff0000]">Software Engineer</span>
      </p>
    </div>
  </div>

  <Suspense fallback={<div className="text-center text-white">Loading 3D...</div>}>
    <ComputersCanvas />
  </Suspense>

  <div className="absolute bottom-10 w-full flex justify-center items-center">
    <a href="#about">
      <div className="w-[30px] h-[55px] rounded-3xl border-4 border-secondary flex justify-center items-start p-1">
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
          className="w-3 h-3 rounded-full bg-secondary mb-1"
        />
      </div>
    </a>
  </div>
</section>

  );
};

export default Hero;
