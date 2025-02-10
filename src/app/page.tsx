"use client"
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Lock, 
  Mail, 
  User,
  Building,
  ChevronRight,
  Loader2,
} from 'lucide-react';
import LoadingScreen from './components/Loading';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';

interface InputFieldProps {
  icon: React.ReactNode;
  type: string;
  placeholder: string;
}

const NexusLanding = () => {
  const [showLogin, setShowLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useAuth();
  const router = useRouter();
  
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0.5]);


  useEffect(() => {
    if (user) {
      setTimeout(() => {
        router.push('/dashboard');
      }, 1500);
    }
  }, [user, router]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

 

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000);
  };

  const handleLoginSuccess = () => {
    setIsLoading(true);
  };

  const handleLoginError = (error: string) => {
    setIsLoading(false);
    toast.error(error);
  };

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      
      <div className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center">
        {/* Animated Background Gradients */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -inset-[10px] opacity-50">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-purple-500 mix-blend-screen blur-[80px] animate-pulse" />
            <div className="absolute top-1/4 left-1/3 w-[400px] h-[400px] rounded-full bg-blue-500 mix-blend-screen blur-[80px] animate-pulse delay-300" />
            <div className="absolute bottom-1/4 right-1/3 w-[600px] h-[600px] rounded-full bg-violet-500 mix-blend-screen blur-[80px] animate-pulse delay-500" />
          </div>
        </div>

        {/* Background Video with Overlay */}
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: backgroundY, opacity }}
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-[2]" />
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/blackhole.mp4" type="video/mp4" />
          </video>
        </motion.div>

        {/* Main Content */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 py-8 grid grid-cols-3 items-center gap-8">
          {/* Left Side - Title */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-left"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-violet-400 to-blue-500">
                Nexus
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-xl">
              NexzGen&apos;s Internal Operations & Venture Management System
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm text-gray-300">Real-time Analytics</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                <span className="text-sm text-gray-300">Venture Management</span>
              </div>
            </div>
          </motion.div>

          {/* Center - Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.img 
                src="/images/nexzgen.png" 
                alt="Nexus" 
                className="w-48 h-48 rounded-full bg-white/10 backdrop-blur-sm p-4"
                animate={{
                  rotate: 360
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </motion.div>
          </motion.div>

          {/* Right Side - Auth Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <div className="relative">
              <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 shadow-2xl border border-white/20 relative overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl" />
                
                {/* Auth Toggle */}
                <div className="flex mb-8 bg-white/5 rounded-xl p-1">
                  {['Login', 'Register'].map((type) => (
                    <button
                      key={type}
                      onClick={() => setShowLogin(type === 'Login')}
                      className={`
                        w-full py-3 px-6 rounded-lg transition-all duration-300
                        ${type === 'Login' && showLogin || type === 'Register' && !showLogin
                          ? 'bg-purple-500/80 text-white shadow-lg'
                          : 'text-gray-400 hover:text-white'
                        }
                        cursor-pointer select-none
                      `}
                    >
                      {type}
                    </button>
                  ))}
                </div>

                {showLogin ? (
                  <LoginForm 
                    onSuccess={handleLoginSuccess}
                    onError={handleLoginError}
                  />
                ) : (
                  <RegisterForm onSubmit={handleSubmit} />
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

const InputField = ({ icon, type, placeholder }: InputFieldProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="relative"
  >
    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
      {icon}
    </div>
    <input
      type={type}
      className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-12 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition duration-300"
      placeholder={placeholder}
    />
  </motion.div>
);

interface LoginFormProps {
  onSuccess: () => void;
  onError: (error: string) => void;
}

const LoginForm = ({ onSuccess, onError }: LoginFormProps) => {
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      await login(formData.email, formData.password);
      onSuccess();
      await new Promise(resolve => setTimeout(resolve, 1500));
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Login failed';
      setError(message);
      onError(message);
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 text-red-500 text-sm">
          {error}
        </div>
      )}
      
      <div className="relative">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          <Mail className="w-5 h-5" />
        </div>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-12 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition duration-300"
          placeholder="Email"
          required
        />
      </div>

      <div className="relative">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          <Lock className="w-5 h-5" />
        </div>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-12 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition duration-300"
          placeholder="Password"
          required
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-violet-500 to-blue-600 hover:from-violet-700 hover:to-blue-700 text-white rounded-xl py-3 transition duration-300 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Logging in...</span>
          </>
        ) : (
          <>
            <span>Login</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </>
        )}
      </button>
    </form>
  );
};

interface RegisterFormProps {
  onSubmit: (e: React.FormEvent) => void;
}

const RegisterForm = ({ onSubmit }: RegisterFormProps) => (
  <form onSubmit={onSubmit} className="space-y-6">
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      className="space-y-6"
    >
      <InputField
        icon={<User className="w-5 h-5" />}
        type="text"
        placeholder="Full Name"
      />
      <InputField
        icon={<Building className="w-5 h-5" />}
        type="text"
        placeholder="Company"
      />
    </motion.div>
    <InputField
      icon={<Mail className="w-5 h-5" />}
      type="email"
      placeholder="Email"
    />
    <InputField
      icon={<Lock className="w-5 h-5" />}
      type="password"
      placeholder="Password"
    />
    <button
      type="submit"
      className="w-full bg-gradient-to-r from-violet-500 to-blue-600 hover:from-violet-700 hover:to-blue-700 text-white rounded-xl py-3 transition duration-300 flex items-center justify-center gap-2 group"
    >
      <span>Create Account</span>
      <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
    </button>
  </form>
);

export default NexusLanding;