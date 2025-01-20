import { motion } from "framer-motion";

import { AnimatePresence } from "framer-motion";

// LoadingScreen.tsx
const LoadingScreen = ({ isLoading, context = 'landing' }: { isLoading: boolean, context?: 'landing' | 'dashboard' }) => (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 bg-black z-50 flex items-center justify-center"
        >
          <div className="relative w-full h-full flex flex-col items-center justify-center">
            {/* Background Gradient Animation */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-purple-500 mix-blend-screen blur-[80px] animate-pulse" />
                <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] rounded-full bg-blue-500 mix-blend-screen blur-[80px] animate-pulse delay-150" />
                <div className="absolute bottom-1/3 right-1/3 w-[400px] h-[400px] rounded-full bg-violet-500 mix-blend-screen blur-[80px] animate-pulse delay-300" />
              </div>
            </div>
  
            {/* Loading Animation */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.2, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="relative z-10"
            >
              <div className="relative w-32 h-32">
                {/* Outer Ring */}
                <div className="absolute inset-0">
                  <div className="w-full h-full border-4 border-purple-500/30 rounded-full" />
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 border-4 border-purple-500 rounded-full border-t-transparent"
                  />
                </div>
  
                {/* Middle Ring */}
                <div className="absolute inset-2">
                  <div className="w-full h-full border-4 border-blue-500/30 rounded-full" />
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 border-4 border-blue-500 rounded-full border-t-transparent"
                  />
                </div>
  
                {/* Inner Ring */}
                <div className="absolute inset-4">
                  <div className="w-full h-full border-4 border-violet-500/30 rounded-full" />
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 border-4 border-violet-500 rounded-full border-t-transparent"
                  />
                </div>
  
                {/* Logo */}
                <motion.img
                  src="/images/nexzgen.png"
                  alt="Nexus"
                  className="absolute inset-0 w-16 h-16 m-auto"
                  animate={{ 
                    opacity: [0.5, 1, 0.5],
                    scale: [0.95, 1.05, 0.95]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
            </motion.div>
  
            {/* Loading Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-8 text-center"
            >
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
                Welcome to Nexus
              </h2>
              <p className="text-gray-400 mt-2">
                {context === 'dashboard' 
                  ? "Preparing your dashboard..."
                  : "Initializing your workspace..."}
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
  
 export default LoadingScreen;