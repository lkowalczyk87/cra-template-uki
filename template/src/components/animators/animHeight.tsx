import { motion } from 'framer-motion';
import { FC } from 'react';

const AnimHeight: FC = ({ children }) => {
  return (
    <motion.div
      animate={{ height: '100%' }}
      transition={{ duration: 0.5 }}
      style={{ overflow: 'hidden', height: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimHeight;
