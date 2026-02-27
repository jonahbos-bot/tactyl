import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ExamRoomDemo() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const examRoomUseCases = [
    {
      title: 'Standardized Care',
      subtitle: 'Consistent Patient Experience',
      description: 'Deliver consistent, evidence-based care protocols across all exam rooms',
      icon: '📋',
      color: 'from-blue-600 to-cyan-600',
      content: [
        { type: 'header', text: 'Care Protocol: Annual Checkup' },
        { type: 'section', text: '✓ Current Vital Signs' },
        { type: 'item', text: 'Blood Pressure: 120/80 mmHg' },
        { type: 'item', text: 'Heart Rate: 72 bpm' },
        { type: 'item', text: 'Temperature: 98.6°F' },
        { type: 'section', text: '✓ Recommended Screenings' },
        { type: 'item', text: 'Annual blood work - Due today' },
        { type: 'footer', text: 'Protocol ensures quality care every visit' },
      ],
    },
    {
      title: '3D Anatomy & Procedures',
      subtitle: 'Visual Medical Education',
      description: 'Interactive 3D models help patients understand anatomy and procedures',
      icon: '🫀',
      color: 'from-red-600 to-pink-600',
      content: [
        { type: 'header', text: 'Understanding Your Procedure' },
        { type: 'section', text: '🫀 3D Heart Model - Interactive' },
        { type: 'item', text: 'Rotate: View from any angle' },
        { type: 'item', text: 'Zoom: Examine details closely' },
        { type: 'item', text: 'Labels: Identify key structures' },
        { type: 'section', text: 'Procedure Walkthrough' },
        { type: 'item', text: 'Step-by-step visual explanation' },
        { type: 'footer', text: 'Touch to explore anatomy' },
      ],
    },
    {
      title: 'Remote Screen Share',
      subtitle: 'Collaborate with Specialists',
      description: 'Instantly share screen with remote specialists for consultations',
      icon: '📡',
      color: 'from-purple-600 to-indigo-600',
      content: [
        { type: 'header', text: 'Remote Specialist Consultation' },
        { type: 'section', text: '📡 Connected to Dr. Smith (Cardiology)' },
        { type: 'item', text: '✓ Live video stream active' },
        { type: 'item', text: '✓ Sharing patient records' },
        { type: 'item', text: '✓ Real-time annotations' },
        { type: 'section', text: 'Collaborative Diagnosis' },
        { type: 'item', text: 'Expert opinion in real-time' },
        { type: 'footer', text: 'Specialist available remotely' },
      ],
    },
    {
      title: 'Patient Entertainment',
      subtitle: 'Reduce Anxiety & Wait Time',
      description: 'Calming content and entertainment while patients wait',
      icon: '🎬',
      color: 'from-green-600 to-emerald-600',
      content: [
        { type: 'header', text: 'Welcome - Please Relax' },
        { type: 'section', text: '🎬 Entertainment Options' },
        { type: 'item', text: '📺 Streaming: Nature documentaries' },
        { type: 'item', text: '🎵 Music: Calming instrumental' },
        { type: 'item', text: '🎮 Games: Relaxing puzzles' },
        { type: 'section', text: 'Estimated Wait Time' },
        { type: 'item', text: '⏱️ Your provider will be with you in 5 min' },
        { type: 'footer', text: 'Tap to change content' },
      ],
    },
    {
      title: 'Patient Education',
      subtitle: 'Empower with Knowledge',
      description: 'Visual guides, videos, and interactive content about conditions',
      icon: '📚',
      color: 'from-orange-600 to-amber-600',
      content: [
        { type: 'header', text: 'Understanding Hypertension' },
        { type: 'section', text: '📚 Educational Video (3:45)' },
        { type: 'item', text: '▶️ What is high blood pressure?' },
        { type: 'item', text: '🍎 Dietary recommendations' },
        { type: 'item', text: '🏃 Exercise guidelines' },
        { type: 'section', text: 'Take-Home Materials' },
        { type: 'item', text: '📧 Email resources sent to you' },
        { type: 'footer', text: 'Knowledge improves outcomes' },
      ],
    },
    {
      title: 'Patient Forms',
      subtitle: 'Digital Intake & Consent',
      description: 'Complete forms directly on touchscreen - no paper needed',
      icon: '📝',
      color: 'from-teal-600 to-cyan-600',
      content: [
        { type: 'header', text: 'Digital Intake Forms' },
        { type: 'section', text: '📝 Complete on Screen' },
        { type: 'item', text: '✓ Medical history - Complete' },
        { type: 'item', text: '✓ Current medications - Complete' },
        { type: 'item', text: '⏳ Insurance information - In progress' },
        { type: 'section', text: 'Digital Signature' },
        { type: 'item', text: '✍️ Sign consent forms on touchscreen' },
        { type: 'footer', text: 'Paperless, secure, instant' },
      ],
    },
    {
      title: 'Patient Surveys',
      subtitle: 'Real-Time Feedback',
      description: 'Collect satisfaction scores and feedback immediately after visit',
      icon: '⭐',
      color: 'from-yellow-600 to-orange-600',
      content: [
        { type: 'header', text: 'How Was Your Visit Today?' },
        { type: 'section', text: '⭐ Rate Your Experience' },
        { type: 'item', text: 'Provider interaction: ⭐⭐⭐⭐⭐' },
        { type: 'item', text: 'Wait time satisfaction: ⭐⭐⭐⭐' },
        { type: 'item', text: 'Facility cleanliness: ⭐⭐⭐⭐⭐' },
        { type: 'section', text: 'Additional Feedback' },
        { type: 'item', text: '💬 Optional comments' },
        { type: 'footer', text: 'Your feedback improves care' },
      ],
    },
    {
      title: 'News & Weather',
      subtitle: 'Stay Connected',
      description: 'Local news, weather updates, and community information',
      icon: '🌤️',
      color: 'from-sky-600 to-blue-600',
      content: [
        { type: 'header', text: 'Local Updates' },
        { type: 'section', text: '🌤️ Weather Today' },
        { type: 'item', text: '72°F - Partly Cloudy' },
        { type: 'item', text: 'High: 75°F | Low: 58°F' },
        { type: 'item', text: '5-Day Forecast Available' },
        { type: 'section', text: '📰 Health News Headlines' },
        { type: 'item', text: 'New flu vaccine now available' },
        { type: 'footer', text: 'Stay informed during your visit' },
      ],
    },
    {
      title: 'AI Scribe & Summary',
      subtitle: 'Automated Documentation',
      description: 'AI captures visit details and generates summaries automatically',
      icon: '🤖',
      color: 'from-violet-600 to-purple-600',
      content: [
        { type: 'header', text: 'AI-Powered Visit Summary' },
        { type: 'section', text: '🤖 Recording & Transcribing' },
        { type: 'item', text: '✓ Chief complaint documented' },
        { type: 'item', text: '✓ Treatment plan recorded' },
        { type: 'item', text: '✓ Follow-up scheduled' },
        { type: 'section', text: 'Generated Summary' },
        { type: 'item', text: '📄 Chart notes auto-populated' },
        { type: 'footer', text: 'Saves providers 2+ hours daily' },
      ],
    },
  ];

  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % examRoomUseCases.length);
    }, 5000); // 5 seconds per slide

    return () => clearInterval(interval);
  }, [isPlaying, examRoomUseCases.length]);

  const currentUseCase = examRoomUseCases[currentSlide];

  return (
    <div className="relative">
      {/* Device Frame - Tablet Style */}
      <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-6 shadow-2xl">
        {/* Screen */}
        <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
          {/* Display Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 flex flex-col p-6 md:p-8"
            >
              {/* Header */}
              <div className={`bg-gradient-to-r ${currentUseCase.color} text-white p-4 md:p-6 rounded-xl mb-4 md:mb-6 shadow-lg`}>
                <div className="flex items-center gap-3 md:gap-4">
                  <span className="text-4xl md:text-5xl">{currentUseCase.icon}</span>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold">{currentUseCase.title}</h3>
                    <p className="text-white/90 text-xs md:text-sm mt-1">{currentUseCase.subtitle}</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-grow space-y-2 md:space-y-3 overflow-auto">
                {currentUseCase.content.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08 }}
                    className={
                      item.type === 'header'
                        ? 'text-2xl md:text-3xl font-bold text-gray-900 mb-3'
                        : item.type === 'section'
                        ? 'text-lg md:text-xl font-semibold text-gray-700 mt-3 mb-2'
                        : item.type === 'item'
                        ? 'bg-gradient-to-r from-gray-50 to-white p-3 md:p-4 rounded-lg border-l-4 border-primary-500 text-gray-700 text-sm md:text-base'
                        : 'text-center text-gray-500 text-xs md:text-sm mt-4 md:mt-6 pt-3 md:pt-4 border-t border-gray-200'
                    }
                  >
                    {item.text}
                  </motion.div>
                ))}
              </div>

              {/* Tactyl.io Branding */}
              <div className="mt-3 md:mt-4 text-center text-xs text-gray-400">
                Powered by Tactyl.io Exam Room Technology
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Decorative Elements */}
        <div className={`absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br ${currentUseCase.color} rounded-full blur-2xl opacity-50`}></div>
        <div className={`absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br ${currentUseCase.color} rounded-full blur-2xl opacity-50`}></div>
      </div>

      {/* Controls */}
      <div className="mt-6 flex items-center justify-center gap-4">
        {/* Play/Pause */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? (
            <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
            </svg>
          ) : (
            <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>

        {/* Slide Indicators */}
        <div className="flex gap-2">
          {examRoomUseCases.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentSlide(index);
                setIsPlaying(false);
              }}
              className={`h-2 rounded-full transition-all ${
                currentSlide === index
                  ? 'w-8 bg-primary-600'
                  : 'w-2 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to ${examRoomUseCases[index].title}`}
            />
          ))}
        </div>
      </div>

      {/* Current Use Case Info */}
      <div className="mt-4 text-center">
        <p className="text-sm font-semibold text-gray-800">
          {currentUseCase.title}
        </p>
        <p className="text-xs text-gray-600 mt-1">
          Use Case {currentSlide + 1} of {examRoomUseCases.length}: {currentUseCase.description}
        </p>
      </div>

      {/* Floating Badge */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 border border-gray-200"
      >
        <div className="flex items-center gap-3">
          <div className={`w-12 h-12 bg-gradient-to-br ${currentUseCase.color} rounded-full flex items-center justify-center text-2xl`}>
            {currentUseCase.icon}
          </div>
          <div>
            <div className="text-sm font-semibold text-gray-900">Interactive Touchscreen</div>
            <div className="text-xs text-gray-600">Exam Room Technology</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
