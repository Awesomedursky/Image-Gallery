import { motion } from 'framer-motion';
import { containerVariants } from '../Variants';

const LandingPage = () => {
  return (
    <motion.div variants={containerVariants} initial={containerVariants.initial} animate={containerVariants.animate} exit={containerVariants.exit} className='flex items-center justify-center h-[80vh]'>
      <p className={`flex flex-col gap-y-1 md:gap-y-6 text-xl md:text-[3rem] font-bold text-center font-serif`}>
        Welcome to <span className={`block font-['Dancing_script',cursive]`}>Awesome Image Gallery</span>
      </p>
    </motion.div>
  );
};

export default LandingPage;
