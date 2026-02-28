import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProfessionalMedicalDemo() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const slides = [
    {
      title: 'Standardized Care Protocols',
      subtitle: 'Ensure consistent, evidence-based patient care',
      scenario: 'Dr. Anderson guides Ms. Chen through her diabetes management plan using interactive clinical pathways',
      icon: '📋',
      color: 'from-medical-blue to-primary-600',
      features: [
        'Step-by-step treatment workflows',
        'Evidence-based clinical guidelines',
        'Real-time protocol updates',
        'Quality metrics tracking'
      ],
      visual: {
        leftPanel: {
          title: 'Today\'s Protocol',
          items: [
            { label: 'Blood glucose check', status: 'completed' },
            { label: 'Review medication list', status: 'in-progress' },
            { label: 'Lifestyle counseling', status: 'pending' },
            { label: 'Schedule follow-up', status: 'pending' }
          ]
        },
        rightPanel: {
          title: 'Patient Vitals',
          metrics: [
            { label: 'Blood Pressure', value: '118/76', status: 'normal' },
            { label: 'Glucose', value: '124 mg/dL', status: 'normal' },
            { label: 'Weight', value: '165 lbs', status: 'stable' }
          ]
        }
      }
    },
    {
      title: '3D Anatomy Visualization',
      subtitle: 'Interactive procedure explanations that patients understand',
      scenario: 'Dr. Martinez uses 3D models to show Mr. Johnson exactly how his knee arthroscopy will be performed',
      icon: '🫀',
      color: 'from-red-500 to-pink-600',
      features: [
        'Rotate and zoom 3D models',
        'Annotate on-screen during consult',
        'Before/after procedure comparison',
        'Export to patient portal'
      ],
      visual: {
        leftPanel: {
          title: 'Procedure Overview',
          items: [
            { label: '3D Anatomical Model', detail: 'Interactive' },
            { label: 'Incision Points', detail: '3 small ports' },
            { label: 'Surgical Instruments', detail: 'Arthroscope view' },
            { label: 'Recovery Timeline', detail: '6-8 weeks' }
          ]
        },
        rightPanel: {
          title: 'Patient Understanding',
          metrics: [
            { label: 'Comprehension Score', value: '95%', status: 'excellent' },
            { label: 'Questions Asked', value: '4', status: 'engaged' },
            { label: 'Consent Status', value: 'Signed', status: 'complete' }
          ]
        }
      }
    },
    {
      title: 'Remote Screen Share',
      subtitle: 'Connect specialists in real-time for collaborative diagnosis',
      scenario: 'Dr. Patel consults with a cardiologist 200 miles away, sharing patient imaging in real-time',
      icon: '💻',
      color: 'from-blue-600 to-indigo-600',
      features: [
        'HIPAA-compliant screen sharing',
        'Multi-party consultations',
        'Record and annotate sessions',
        'Integrated with EHR systems'
      ],
      visual: {
        leftPanel: {
          title: 'Active Consultation',
          items: [
            { label: 'Primary Provider', detail: 'Dr. Patel (Local)' },
            { label: 'Specialist', detail: 'Dr. Kim (Remote)' },
            { label: 'Patient Records', detail: 'Shared view' },
            { label: 'Session Recording', detail: 'Enabled' }
          ]
        },
        rightPanel: {
          title: 'Collaboration Stats',
          metrics: [
            { label: 'Connection Quality', value: 'HD', status: 'stable' },
            { label: 'Response Time', value: '<50ms', status: 'optimal' },
            { label: 'Data Security', value: 'AES-256', status: 'encrypted' }
          ]
        }
      }
    },
    {
      title: 'Patient Education Library',
      subtitle: 'Empower patients with visual learning resources',
      scenario: 'Mrs. Thompson explores interactive videos about her hypertension while waiting for her prescription',
      icon: '📚',
      color: 'from-green-500 to-emerald-600',
      features: [
        'Multi-language support',
        'Age-appropriate content',
        'Printable take-home materials',
        'Track engagement analytics'
      ],
      visual: {
        leftPanel: {
          title: 'Education Topics',
          items: [
            { label: 'Understanding Hypertension', detail: '5 min video' },
            { label: 'Medication Guide', detail: 'Interactive' },
            { label: 'Dietary Recommendations', detail: 'PDF guide' },
            { label: 'Exercise Tips', detail: '3 min video' }
          ]
        },
        rightPanel: {
          title: 'Patient Engagement',
          metrics: [
            { label: 'Time Spent', value: '8 minutes', status: 'engaged' },
            { label: 'Videos Watched', value: '2/2', status: 'complete' },
            { label: 'Materials Sent', value: 'Email', status: 'delivered' }
          ]
        }
      }
    },
    {
      title: 'Digital Forms & Surveys',
      subtitle: 'Streamline intake and reduce wait times',
      scenario: 'New patient Sarah completes her medical history on the touchscreen while checking in',
      icon: '📝',
      color: 'from-purple-500 to-violet-600',
      features: [
        'Electronic signature capture',
        'Auto-populate from EHR',
        'Multi-page form navigation',
        'Real-time validation'
      ],
      visual: {
        leftPanel: {
          title: 'Patient Intake',
          items: [
            { label: 'Personal Information', status: 'completed' },
            { label: 'Medical History', status: 'completed' },
            { label: 'Insurance Details', status: 'in-progress' },
            { label: 'Consent Forms', status: 'pending' }
          ]
        },
        rightPanel: {
          title: 'Process Efficiency',
          metrics: [
            { label: 'Time Saved', value: '12 min', status: 'improved' },
            { label: 'Data Accuracy', value: '99.8%', status: 'excellent' },
            { label: 'Patient Satisfaction', value: '4.9/5', status: 'high' }
          ]
        }
      }
    },
    {
      title: 'AI Medical Scribe & Summary',
      subtitle: 'Automated documentation that gives time back to physicians',
      scenario: 'Dr. Lee speaks naturally with patients while AI captures structured clinical notes in real-time',
      icon: '🤖',
      color: 'from-cyan-500 to-blue-600',
      features: [
        'Real-time transcription',
        'SOAP note generation',
        'ICD-10 code suggestions',
        'Ambient listening (hands-free)'
      ],
      visual: {
        leftPanel: {
          title: 'Live Documentation',
          items: [
            { label: 'Chief Complaint', detail: 'Captured' },
            { label: 'Physical Exam', detail: 'Recording' },
            { label: 'Assessment', detail: 'Auto-generated' },
            { label: 'Plan', detail: 'Pending review' }
          ]
        },
        rightPanel: {
          title: 'Time Savings',
          metrics: [
            { label: 'Documentation Time', value: '-75%', status: 'reduced' },
            { label: 'Accuracy', value: '98.2%', status: 'high' },
            { label: 'Physician Time with Patient', value: '+40%', status: 'increased' }
          ]
        }
      }
    }
  ];

  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000); // Longer duration for reading

    return () => clearInterval(interval);
  }, [isPlaying, slides.length]);

  const currentSlideData = slides[currentSlide];

  return (
    <div className="relative">
      {/* Professional Device Frame */}
      <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-8 shadow-2xl border border-gray-700">
        {/* Screen - Professional Medical Interface */}
        <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-2xl overflow-hidden shadow-2xl aspect-[16/10]">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="absolute inset-0 flex flex-col"
            >
              {/* Top Navigation Bar */}
              <div className="bg-white border-b border-gray-200 px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-medical-blue to-primary-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                      T
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">Tactyl Medical Suite</div>
                      <div className="text-xs text-gray-500">Exam Room Display</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-gray-600">Connected</span>
                  </div>
                </div>
              </div>

              {/* Main Content Area */}
              <div className="flex-grow flex flex-col p-6 bg-gradient-to-br from-gray-50 to-white">
                {/* Header */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className={`bg-gradient-to-r ${currentSlideData.color} text-white p-6 rounded-xl shadow-lg mb-6`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-3xl">
                      {currentSlideData.icon}
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold mb-1">{currentSlideData.title}</h3>
                      <p className="text-white/90 text-sm mb-2">{currentSlideData.subtitle}</p>
                      <p className="text-white/80 text-xs italic bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 inline-block">
                        💡 {currentSlideData.scenario}
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Two-Column Layout */}
                <div className="grid md:grid-cols-2 gap-6 flex-grow">
                  {/* Left Panel */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-white rounded-xl shadow-lg p-5 border border-gray-200"
                  >
                    <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <div className="w-1.5 h-6 bg-gradient-to-b from-medical-blue to-primary-500 rounded-full"></div>
                      {currentSlideData.visual.leftPanel.title}
                    </h4>
                    <div className="space-y-3">
                      {currentSlideData.visual.leftPanel.items.map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 + index * 0.1 }}
                          className="flex items-center justify-between p-3 bg-gradient-to-r from-gray-50 to-white rounded-lg border border-gray-100 hover:border-medical-blue transition-all"
                        >
                          <div>
                            <div className="text-sm font-medium text-gray-900">{item.label}</div>
                            {item.detail && (
                              <div className="text-xs text-gray-600 mt-0.5">{item.detail}</div>
                            )}
                          </div>
                          {item.status && (
                            <div className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                              item.status === 'completed' ? 'bg-green-100 text-green-700' :
                              item.status === 'in-progress' ? 'bg-blue-100 text-blue-700' :
                              'bg-gray-100 text-gray-600'
                            }`}>
                              {item.status === 'completed' ? '✓' : 
                               item.status === 'in-progress' ? '⟳' : '○'}
                            </div>
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Right Panel */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-white rounded-xl shadow-lg p-5 border border-gray-200"
                  >
                    <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <div className="w-1.5 h-6 bg-gradient-to-b from-accent-500 to-green-500 rounded-full"></div>
                      {currentSlideData.visual.rightPanel.title}
                    </h4>
                    <div className="space-y-4">
                      {currentSlideData.visual.rightPanel.metrics.map((metric, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.6 + index * 0.1 }}
                          className="p-4 bg-gradient-to-br from-gray-50 to-white rounded-lg border border-gray-100"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-medium text-gray-600 uppercase tracking-wide">
                              {metric.label}
                            </span>
                            <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                              metric.status === 'normal' || metric.status === 'excellent' || metric.status === 'high' || metric.status === 'optimal' || metric.status === 'stable' || metric.status === 'complete' || metric.status === 'engaged' || metric.status === 'improved' || metric.status === 'encrypted' ? 'bg-green-100 text-green-700' :
                              metric.status === 'in-progress' ? 'bg-blue-100 text-blue-700' :
                              metric.status === 'increased' || metric.status === 'reduced' ? 'bg-purple-100 text-purple-700' :
                              'bg-gray-100 text-gray-600'
                            }`}>
                              {metric.status}
                            </span>
                          </div>
                          <div className="text-2xl font-bold text-gray-900">
                            {metric.value}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Key Features Footer */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="mt-6 bg-white rounded-xl shadow-lg p-4 border border-gray-200"
                >
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {currentSlideData.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-xs">
                        <div className="w-1.5 h-1.5 bg-medical-teal rounded-full"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Bottom Status Bar */}
              <div className="bg-gray-900 px-6 py-3 flex items-center justify-between text-xs">
                <div className="flex items-center gap-6 text-gray-400">
                  <span>Exam Room 3</span>
                  <span>•</span>
                  <span>Provider: Dr. Anderson</span>
                </div>
                <div className="text-gray-500">
                  {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Ambient Lighting Effects */}
        <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-medical-blue to-accent-500 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-gradient-to-br from-accent-500 to-medical-teal rounded-full blur-3xl opacity-40"></div>
      </div>

      {/* Professional Controls */}
      <div className="mt-8 flex items-center justify-center gap-6">
        {/* Play/Pause Button */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="group p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 border border-gray-200"
          aria-label={isPlaying ? 'Pause demo' : 'Play demo'}
        >
          {isPlaying ? (
            <svg className="w-6 h-6 text-gray-700 group-hover:text-medical-blue transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-gray-700 group-hover:text-medical-blue transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>

        {/* Slide Indicators */}
        <div className="flex gap-3 bg-white px-6 py-3 rounded-xl shadow-lg border border-gray-200">
          {slides.map((slide, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentSlide(index);
                setIsPlaying(false);
              }}
              className={`group relative transition-all ${
                currentSlide === index ? 'w-12' : 'w-3'
              }`}
              aria-label={`View ${slide.title}`}
              title={slide.title}
            >
              <div className={`h-3 rounded-full transition-all ${
                currentSlide === index
                  ? 'bg-gradient-to-r from-medical-blue to-primary-600'
                  : 'bg-gray-300 group-hover:bg-gray-400'
              }`}></div>
            </button>
          ))}
        </div>
      </div>

      {/* Current Use Case Label */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-6 text-center"
      >
        <p className="text-sm text-gray-600 font-medium">
          Use Case {currentSlide + 1} of {slides.length}
        </p>
        <p className="text-lg font-semibold text-gray-900 mt-1">
          {currentSlideData.title}
        </p>
      </motion.div>

      {/* Professional Badge */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-2xl p-4 border border-gray-200"
      >
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-medical-blue to-accent-500 rounded-xl flex items-center justify-center shadow-lg">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <div className="text-sm font-bold text-gray-900">Live Demo</div>
            <div className="text-xs text-gray-600">Interactive</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
