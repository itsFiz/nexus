import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  FileText,
  Check
} from 'lucide-react';

interface CandidateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CandidateModal = ({ isOpen, onClose }: CandidateModalProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [skillInput, setSkillInput] = useState('');
  const [skills, setSkills] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    role: '',
    department: '',
    experience: '',
    salary: '',
    resumeUrl: '',
    portfolioUrl: '',
    linkedinUrl: '',
    githubUrl: '',
    startDate: ''
  });

  const steps = [
    { number: 1, title: 'Basic Information' },
    { number: 2, title: 'Experience & Skills' },
    { number: 3, title: 'Documents & Links' },
    { number: 4, title: 'Review' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAddSkill = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && skillInput.trim()) {
      setSkills([...skills, skillInput.trim()]);
      setSkillInput('');
    }
  };

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  // const handleSubmit = () => {
  //   // Handle form submission
  //   console.log({ ...formData, skills });
  //   onClose();
  // };

  const renderStepContent = () => {
    return (
      <motion.div
        key={currentStep}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
      >
        {(() => {
          switch (currentStep) {
            case 1:
              return (
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full bg-gray-800 border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet-400/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full bg-gray-800 border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet-400/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-gray-800 border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet-400/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-gray-800 border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet-400/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400">Role</label>
                    <input
                      type="text"
                      name="role"
                      value={formData.role}
                      onChange={handleInputChange}
                      className="w-full bg-gray-800 border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet-400/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400">Department</label>
                    <select
                      name="department"
                      value={formData.department}
                      onChange={handleInputChange}
                      className="w-full bg-gray-800 border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet-400/50"
                    >
                      <option value="">Select Department</option>
                      <option value="engineering">Engineering</option>
                      <option value="design">Design</option>
                      <option value="product">Product</option>
                      <option value="marketing">Marketing</option>
                    </select>
                  </div>
                </div>
              );
            case 2:
              return (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400">Experience (years)</label>
                    <input
                      type="number"
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      className="w-full bg-gray-800 border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet-400/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400">Expected Salary Range</label>
                    <input
                      type="text"
                      name="salary"
                      value={formData.salary}
                      onChange={handleInputChange}
                      placeholder="e.g., 80,000 - 100,000"
                      className="w-full bg-gray-800 border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet-400/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400">Skills</label>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-violet-500/20 text-violet-400 rounded-full text-sm"
                        >
                          {skill}
                          <button
                            onClick={() => setSkills(skills.filter((_, i) => i !== index))}
                            className="ml-2 hover:text-white"
                          >
                            ×
                          </button>
                        </span>
                      ))}
                    </div>
                    <input
                      type="text"
                      value={skillInput}
                      onChange={(e) => setSkillInput(e.target.value)}
                      onKeyPress={handleAddSkill}
                      placeholder="Type a skill and press Enter"
                      className="w-full bg-gray-800 border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet-400/50"
                    />
                  </div>
                </div>
              );
            case 3:
              return (
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="p-4 border border-white/10 rounded-lg">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <FileText className="w-5 h-5 text-violet-400" />
                          <span className="font-medium">Resume</span>
                        </div>
                        <button className="px-4 py-2 bg-violet-500 hover:bg-violet-600 rounded-lg text-sm">
                          Upload
                        </button>
                      </div>
                      <input
                        type="text"
                        name="resumeUrl"
                        value={formData.resumeUrl}
                        onChange={handleInputChange}
                        placeholder="Or paste resume URL"
                        className="w-full bg-gray-800 border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet-400/50"
                      />
                    </div>
                    
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <label className="text-sm text-gray-400">Portfolio URL</label>
                        <input
                          type="url"
                          name="portfolioUrl"
                          value={formData.portfolioUrl}
                          onChange={handleInputChange}
                          className="w-full bg-gray-800 border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet-400/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm text-gray-400">LinkedIn URL</label>
                        <input
                          type="url"
                          name="linkedinUrl"
                          value={formData.linkedinUrl}
                          onChange={handleInputChange}
                          className="w-full bg-gray-800 border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet-400/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm text-gray-400">GitHub URL</label>
                        <input
                          type="url"
                          name="githubUrl"
                          value={formData.githubUrl}
                          onChange={handleInputChange}
                          className="w-full bg-gray-800 border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet-400/50"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            case 4:
              return (
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-lg font-medium mb-4">Personal Information</h3>
                      <div className="space-y-2">
                        <p><span className="text-gray-400">Name:</span> {formData.firstName} {formData.lastName}</p>
                        <p><span className="text-gray-400">Email:</span> {formData.email}</p>
                        <p><span className="text-gray-400">Phone:</span> {formData.phone}</p>
                        <p><span className="text-gray-400">Role:</span> {formData.role}</p>
                        <p><span className="text-gray-400">Department:</span> {formData.department}</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-4">Professional Details</h3>
                      <div className="space-y-2">
                        <p><span className="text-gray-400">Experience:</span> {formData.experience} years</p>
                        <p><span className="text-gray-400">Expected Salary:</span> {formData.salary}</p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {skills.map((skill, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-violet-500/20 text-violet-400 rounded-full text-sm"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-4">Documents & Links</h3>
                    <div className="space-y-2">
                      <p><span className="text-gray-400">Resume:</span> {formData.resumeUrl}</p>
                      <p><span className="text-gray-400">Portfolio:</span> {formData.portfolioUrl}</p>
                      <p><span className="text-gray-400">LinkedIn:</span> {formData.linkedinUrl}</p>
                      <p><span className="text-gray-400">GitHub:</span> {formData.githubUrl}</p>
                    </div>
                  </div>
                </div>
              );
            default:
              return null;
          }
        })()}
      </motion.div>
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="bg-gray-900 border border-white/10 rounded-xl w-full max-w-3xl max-h-[90vh] overflow-hidden"
          >
            {/* Header */}
            <div className="p-6 border-b border-white/10 flex items-center justify-between">
              <h2 className="text-xl font-semibold">Add New Candidate</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/5 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Progress Steps */}
            <div className="px-6 py-4 border-b border-white/10">
              <div className="flex items-center justify-between relative">
                {/* Progress Bar Background */}
                <div className="absolute left-0 top-1/2 h-0.5 bg-white/10 w-full -z-10" />
                
                {/* Animated Progress Bar */}
                <motion.div
                  className="absolute left-0 top-1/2 h-0.5 bg-violet-500 -z-10"
                  initial={{ width: '0%' }}
                  animate={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />

                {/* Step Indicators */}
                {steps.map((step) => (
                  <motion.div
                    key={step.number}
                    className={`flex flex-col items-center ${
                      step.number <= currentStep ? 'text-white' : 'text-gray-500'
                    }`}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.2, delay: step.number * 0.1 }}
                  >
                    <motion.div
                      className={`w-10 h-10 rounded-full flex items-center justify-center relative ${
                        step.number < currentStep
                          ? 'bg-violet-500'
                          : step.number === currentStep
                          ? 'bg-violet-500'
                          : 'bg-gray-800 border border-white/10'
                      }`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {step.number < currentStep ? (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                          <Check className="w-5 h-5" />
                        </motion.div>
                      ) : (
                        <span>{step.number}</span>
                      )}
                      
                      {/* Active Step Pulse Effect */}
                      {step.number === currentStep && (
                        <motion.div
                          className="absolute inset-0 rounded-full border-2 border-violet-400"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: [0, 0.5, 0], scale: [0.8, 1.2, 0.8] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        />
                      )}
                    </motion.div>
                    <motion.span 
                      className="text-sm mt-2 font-medium"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, delay: step.number * 0.1 + 0.2 }}
                    >
                      {step.title}
                    </motion.span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Step Content */}
            <div className="p-6">
              {renderStepContent()}
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-white/10 flex items-center justify-between">
              <button
                onClick={handlePrevious}
                className="px-4 py-2 bg-violet-500 hover:bg-violet-600 rounded-lg text-sm"
              >
                Previous
              </button>
              <button
                onClick={handleNext}
                className="px-4 py-2 bg-violet-500 hover:bg-violet-600 rounded-lg text-sm"
              >
                Next
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CandidateModal;
