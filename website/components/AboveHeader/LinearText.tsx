import { motion } from 'framer-motion'

interface LinearTextProps {
  text: string
}

export const LinearText: React.FC<LinearTextProps> = ({ text }) => {
  return (
    <div className="hidden lg:block overflow-hidden w-96">
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: '-100%' }}
        transition={{
          repeat: Infinity,
          repeatType: 'loop',
          duration: 15,
          ease: 'linear'
        }}
        className="whitespace-nowrap text-lg font-semibold text-blue-600"
      >
        {text}
      </motion.div>
    </div>
  )
}

