import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProductDemo() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const slides = [
    {
      title: 'Healthcare Waiting Room',
      description: 'Display wellness tips, appointment reminders, and educational content',
      icon: '🏥',
      color: 'from-blue-500 to-cyan-500',
      content: [
        { type: 'header', text: 'Welcome to Healthcare Clinic' },
        { type: 'section', text: 'Today\'s Health Tips' },
        { type: 'tip', text: '💧 Stay Hydrated: Drink 8 glasses of water daily' },
        { type: 'tip', text: '🏃 Exercise: 30 minutes of activity per day' },
        { type: 'tip', text: '😴 Sleep: Aim for 7-9 hours each night' },
        { type: 'footer', text: 'Next appointment: Check-in at front desk' },
      ],
    },
    {
      title: 'Retail Showroom',
      description: 'Showcase products, promotions, and customer testimonials',
      icon: '🛍️',
      color: 'from-orange-500 to-red-500',
      content: [
        { type: 'header', text: 'Today\'s Featured Products' },
        { type: 'section', text: '🌟 Special Offers' },
        { type: 'promo', text: '30% OFF Summer Collection' },
        { type: 'promo', text: 'Buy 2 Get 1 Free - Limited Time' },
        { type: 'section', text: 'Customer Reviews ⭐⭐⭐⭐⭐' },
        { type: 'footer', text: 'Ask our staff for personalized recommendations' },
      ],
    },
    {
      title: 'Corporate Lobby',
      description: 'Share company news, metrics, and announcements',
      icon: '🏢',
      color: 'from-indigo-500 to-blue-500',
      content: [
        { type: 'header', text: 'Welcome to Tactyl.io' },
        { type: 'section', text: '📊 This Quarter\'s Achievements' },
        { type: 'metric', text: '500+ Successful Deployments' },
        { type: 'metric', text: '98% Customer Satisfaction' },
        { type: 'section', text: '📢 Company Announcements' },
        { type: 'footer', text: 'Visit tactyl.io for more information' },
      ],
    },
    {
      title: 'Dental Office',
      description: 'Educate patients and reduce anxiety with visual guides',
      icon: '🦷',
      color: 'from-purple-500 to-pink-500',
      content: [
        { type: 'header', text: 'Smile Bright Dental' },
        { type: 'section', text: '🦷 Oral Health Tips' },
        { type: 'tip', text: 'Brush twice daily for 2 minutes' },
        { type: 'tip', text: 'Floss once per day' },
        { type: 'tip', text: 'Schedule cleanings every 6 months' },
        { type: 'footer', text: 'Questions? Ask our dental hygienists' },
      ],
    },
  ];

  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPlaying, slides.length]);

  const currentSlideData = slides[currentSlide];

  return (
    <div className="relative">
      {/* Device Frame */}
      <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-6 shadow-2xl">
        {/* Screen */}
        <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
          {/* Display Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col p-8"
            >
              {/* Header */}
              <div className={`bg-gradient-to-r ${currentSlideData.color} text-white p-6 rounded-xl mb-6 shadow-lg`}>
                <div className="flex items-center gap-4">
                  <span className="text-5xl">{currentSlideData.icon}</span>
                  <div>
                    <h3 className="text-2xl font-bold">{currentSlideData.title}</h3>
                    <p className="text-white/90 text-sm mt-1">{currentSlideData.description}</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-grow space-y-4 overflow-auto">
                {currentSlideData.content.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={
                      item.type === 'header'
                        ? 'text-3xl font-bold text-gray-900 mb-4'
                        : item.type === 'section'
                        ? 'text-xl font-semibold text-gray-700 mt-4 mb-2'
                        : item.type === 'tip' || item.type === 'promo' || item.type === 'metric'
                        ? 'bg-gradient-to-r from-gray-50 to-white p-4 rounded-lg border-l-4 border-primary-500 text-gray-700'
                        : 'text-center text-gray-500 mt-6 pt-4 border-t border-gray-200'
                    }
                  >
                    {item.text}
                  </motion.div>
                ))}
              </div>

              {/* Tactyl.io Branding */}
              <div className="mt-4 text-center text-xs text-gray-400">
                Powered by Tactyl.io
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full blur-2xl opacity-50"></div>
        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-accent-500 to-primary-500 rounded-full blur-2xl opacity-50"></div>
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
          {slides.map((_, index) => (
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
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Current Slide Info */}
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600">
          Example {currentSlide + 1} of {slides.length}: {currentSlideData.title}
        </p>
      </div>

      {/* Floating Badge */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 border border-gray-200"
      >
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
            <span className="text-2xl">✨</span>
          </div>
          <div>
            <div className="text-sm font-semibold text-gray-900">Live Preview</div>
            <div className="text-xs text-gray-600">Auto-rotating</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
