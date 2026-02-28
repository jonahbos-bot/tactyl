import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProfessionalExamRoomDemo() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const clinicalScenarios = [
    {
      title: 'Standardized Care Protocols',
      scenario: 'Pre-Visit Clinical Workflow',
      description: 'Dr. Martinez reviews the automated care protocol before entering the exam room',
      icon: '📋',
      color: 'from-blue-700 to-blue-600',
      content: [
        { type: 'header', text: 'Patient: Sarah Johnson, 62' },
        { type: 'label', text: 'Today\'s Visit: Annual Wellness Exam' },
        { type: 'section', text: '✓ Pre-Visit Checklist Complete' },
        { type: 'checklist', text: '☑ Vital signs recorded (BP: 128/82, HR: 74)', status: 'complete' },
        { type: 'checklist', text: '☑ Medications reviewed (5 current)', status: 'complete' },
        { type: 'checklist', text: '☑ Allergies confirmed (Penicillin)', status: 'complete' },
        { type: 'section', text: 'Evidence-Based Recommendations' },
        { type: 'alert', text: '⚠️ Due: Annual mammogram, Colonoscopy (age 62)' },
        { type: 'footer', text: 'Protocol ensures comprehensive, quality care' },
      ],
    },
    {
      title: '3D Anatomy Education',
      scenario: 'Doctor Explaining Cardiac Procedure',
      description: 'Dr. Chen uses interactive 3D heart model to explain angioplasty to Mr. Williams',
      icon: '🫀',
      color: 'from-red-700 to-red-600',
      content: [
        { type: 'header', text: 'Understanding Your Heart Procedure' },
        { type: 'label', text: 'Procedure: Coronary Angioplasty' },
        { type: 'section', text: '🫀 Interactive 3D Heart Model' },
        { type: 'instruction', text: '"Mr. Williams, let me show you exactly where the blockage is located..."' },
        { type: 'demo', text: '👉 Doctor rotates 3D model to show left coronary artery' },
        { type: 'demo', text: '👉 Highlights 70% blockage in LAD artery' },
        { type: 'demo', text: '👉 Animates stent placement procedure step-by-step' },
        { type: 'section', text: 'Patient Understanding' },
        { type: 'feedback', text: '"Now I can see exactly what you\'re going to do. This makes so much more sense!"' },
        { type: 'footer', text: 'Visual education improves informed consent & reduces anxiety' },
      ],
    },
    {
      title: 'Remote Specialist Consultation',
      scenario: 'Real-Time Telehealth Collaboration',
      description: 'Dr. Patel connects with cardiologist Dr. Rodriguez for second opinion during patient visit',
      icon: '📡',
      color: 'from-purple-700 to-purple-600',
      content: [
        { type: 'header', text: 'Live Specialist Consultation' },
        { type: 'label', text: 'Consulting: Dr. Rodriguez (Cardiology, Mass General)' },
        { type: 'section', text: '📡 Secure Video Connection Active' },
        { type: 'status', text: '✓ Sharing: EKG results, Echo imaging, Lab values' },
        { type: 'status', text: '✓ Patient present and consenting' },
        { type: 'instruction', text: 'Dr. Rodriguez: "I\'m seeing the echo now. Let me mark the areas of concern..."' },
        { type: 'demo', text: '👉 Specialist annotates cardiac echo in real-time' },
        { type: 'demo', text: '👉 Both physicians discuss treatment options with patient' },
        { type: 'section', text: 'Clinical Outcome' },
        { type: 'benefit', text: 'Immediate expert opinion • Avoided referral delay • Patient satisfaction ⭐⭐⭐⭐⭐' },
        { type: 'footer', text: 'Collaborative care without leaving the exam room' },
      ],
    },
    {
      title: 'Patient Education',
      scenario: 'Post-Diagnosis Counseling',
      description: 'Dr. Kim educates newly diagnosed Type 2 diabetic patient using visual content library',
      icon: '📚',
      color: 'from-teal-700 to-teal-600',
      content: [
        { type: 'header', text: 'Understanding Type 2 Diabetes' },
        { type: 'label', text: 'Patient: Michael Torres, 54 • New Diagnosis' },
        { type: 'section', text: '📚 Educational Video Library' },
        { type: 'instruction', text: 'Dr. Kim: "Let\'s watch this together. It explains what\'s happening in your body..."' },
        { type: 'video', text: '▶️ Playing: "Type 2 Diabetes - What You Need to Know" (4:30)' },
        { type: 'demo', text: '• Animated explanation of insulin resistance' },
        { type: 'demo', text: '• Visual guide to blood sugar monitoring' },
        { type: 'demo', text: '• Dietary recommendations with examples' },
        { type: 'section', text: 'Take-Home Resources' },
        { type: 'action', text: '📧 Educational materials sent to patient portal' },
        { type: 'action', text: '📱 Glucose tracking app recommendation' },
        { type: 'footer', text: 'Educated patients have better outcomes & medication adherence' },
      ],
    },
    {
      title: 'Digital Patient Forms',
      scenario: 'Streamlined Check-In Process',
      description: 'New patient completes comprehensive intake on touchscreen while waiting',
      icon: '📝',
      color: 'from-blue-700 to-cyan-700',
      content: [
        { type: 'header', text: 'Digital Patient Intake' },
        { type: 'label', text: 'New Patient: Jennifer Adams' },
        { type: 'section', text: '📝 Completing Forms on Touchscreen' },
        { type: 'checklist', text: '☑ Personal Information', status: 'complete' },
        { type: 'checklist', text: '☑ Medical History (12 questions)', status: 'complete' },
        { type: 'checklist', text: '☑ Current Medications (5 listed)', status: 'complete' },
        { type: 'checklist', text: '☑ Allergies & Reactions', status: 'complete' },
        { type: 'checklist', text: '⏳ Insurance Information', status: 'progress' },
        { type: 'section', text: 'Electronic Consent' },
        { type: 'demo', text: '✍️ Touch signature for HIPAA authorization' },
        { type: 'benefit', text: '✓ Data auto-populates EMR • ✓ Zero transcription errors • ✓ 8 min faster check-in' },
        { type: 'footer', text: 'Paperless workflow saves time for staff & patients' },
      ],
    },
    {
      title: 'AI Medical Scribe',
      scenario: 'Automated Clinical Documentation',
      description: 'AI ambient scribe captures Dr. Anderson\'s patient visit, generating comprehensive SOAP note',
      icon: '🤖',
      color: 'from-violet-700 to-violet-600',
      content: [
        { type: 'header', text: 'AI-Powered Visit Documentation' },
        { type: 'label', text: 'Provider: Dr. Anderson • Patient: Robert Chen, 45' },
        { type: 'section', text: '🤖 Ambient AI Listening & Transcribing' },
        { type: 'status', text: '🎙️ Recording conversation: "Can you tell me about your symptoms?"' },
        { type: 'demo', text: '• AI identifies: Chief complaint (chest pain), HPI, ROS' },
        { type: 'demo', text: '• Captures: Physical exam findings, vital signs' },
        { type: 'demo', text: '• Documents: Assessment, treatment plan, follow-up' },
        { type: 'section', text: 'Generated SOAP Note (Draft)' },
        { type: 'document', text: 'CC: Chest pain x 3 days\nHPI: 45yo M presents with substernal chest pressure...' },
        { type: 'action', text: '👨‍⚕️ Dr. Anderson reviews & approves in 30 seconds' },
        { type: 'benefit', text: 'Time saved: 12 min per visit • 2.4 hours daily • Reduced burnout' },
        { type: 'footer', text: 'AI documentation = More face-to-face time with patients' },
      ],
    },
    {
      title: 'Patient Satisfaction Survey',
      scenario: 'Real-Time Feedback Collection',
      description: 'Patient completes experience survey immediately after appointment',
      icon: '⭐',
      color: 'from-amber-700 to-amber-600',
      content: [
        { type: 'header', text: 'How Was Your Visit Today?' },
        { type: 'label', text: 'Post-Visit Survey - Takes 90 seconds' },
        { type: 'section', text: '⭐ Rate Your Experience' },
        { type: 'rating', text: 'Provider explained things clearly: ⭐⭐⭐⭐⭐ (5/5)' },
        { type: 'rating', text: 'Enough time was spent with me: ⭐⭐⭐⭐⭐ (5/5)' },
        { type: 'rating', text: 'Wait time was reasonable: ⭐⭐⭐⭐ (4/5)' },
        { type: 'rating', text: 'Staff was courteous: ⭐⭐⭐⭐⭐ (5/5)' },
        { type: 'section', text: 'Open Feedback' },
        { type: 'feedback', text: '"Dr. Anderson took time to explain everything. The 3D model really helped me understand my condition."' },
        { type: 'benefit', text: '✓ 87% completion rate • ✓ Immediate actionable insights • ✓ Identifies issues same-day' },
        { type: 'footer', text: 'Real-time feedback drives continuous improvement' },
      ],
    },
    {
      title: 'Pre-Procedure Consent',
      scenario: 'Interactive Informed Consent Process',
      description: 'Patient watches procedure video and signs electronic consent for colonoscopy',
      icon: '📄',
      color: 'from-indigo-700 to-indigo-600',
      content: [
        { type: 'header', text: 'Colonoscopy - Informed Consent' },
        { type: 'label', text: 'Patient: David Martinez, 58' },
        { type: 'section', text: '🎬 Procedure Education Video' },
        { type: 'instruction', text: 'Nurse: "Please watch this video explaining the procedure, then we\'ll answer questions..."' },
        { type: 'video', text: '▶️ Playing: "What to Expect: Colonoscopy Procedure" (5:20)' },
        { type: 'demo', text: '• Preparation instructions (day before)' },
        { type: 'demo', text: '• Step-by-step procedure walkthrough' },
        { type: 'demo', text: '• Recovery and post-procedure care' },
        { type: 'section', text: 'Digital Consent' },
        { type: 'checklist', text: '☑ I understand the procedure', status: 'complete' },
        { type: 'checklist', text: '☑ Risks & benefits explained', status: 'complete' },
        { type: 'checklist', text: '☑ Questions answered', status: 'complete' },
        { type: 'action', text: '✍️ Electronic signature captured' },
        { type: 'footer', text: 'Comprehensive education improves patient preparation & reduces no-shows' },
      ],
    },
    {
      title: 'Remote Patient Monitoring',
      scenario: 'Review of Home Health Data',
      description: 'Dr. Thompson reviews patient\'s at-home vitals and adjusts treatment plan',
      icon: '📊',
      color: 'from-green-700 to-green-600',
      content: [
        { type: 'header', text: 'Chronic Disease Management Dashboard' },
        { type: 'label', text: 'Patient: Mary Johnson, 68 • CHF Follow-up' },
        { type: 'section', text: '📊 7-Day Home Monitoring Data' },
        { type: 'chart', text: '📈 Daily weights: Stable (146-148 lbs)' },
        { type: 'chart', text: '📈 Blood pressure: Well controlled (avg 132/78)' },
        { type: 'chart', text: '📈 O2 saturation: Normal range (96-98%)' },
        { type: 'alert', text: '⚠️ Alert: Single episode of SOB on 11/24 (self-resolved)' },
        { type: 'instruction', text: 'Dr. Thompson: "Your numbers look good overall. Let\'s discuss that shortness of breath episode..."' },
        { type: 'section', text: 'Treatment Plan Adjustment' },
        { type: 'action', text: '• Continue current medications' },
        { type: 'action', text: '• Increase Lasix to 40mg if weight ↑ >3 lbs' },
        { type: 'action', text: '• Follow-up in 2 weeks (virtual visit)' },
        { type: 'footer', text: 'RPM enables proactive care & prevents hospitalizations' },
      ],
    },
  ];

  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % clinicalScenarios.length);
    }, 8000); // 8 seconds per slide for more complex content

    return () => clearInterval(interval);
  }, [isPlaying, clinicalScenarios.length]);

  const currentScenario = clinicalScenarios[currentSlide];

  return (
    <div className="relative">
      {/* Professional Medical Device Frame */}
      <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-4 md:p-6 shadow-2xl border border-slate-700">
        {/* Screen with subtle bezel */}
        <div className="relative bg-white rounded-xl overflow-hidden shadow-inner border-4 border-slate-700">
          <div className="aspect-[16/10] bg-gradient-to-br from-slate-50 to-white">
            {/* Display Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 flex flex-col p-4 md:p-6"
              >
                {/* Professional Header with Medical Color */}
                <div className={`bg-gradient-to-r ${currentScenario.color} text-white p-4 md:p-5 rounded-lg mb-4 shadow-md`}>
                  <div className="flex items-start gap-3">
                    <span className="text-3xl md:text-4xl flex-shrink-0">{currentScenario.icon}</span>
                    <div className="flex-grow min-w-0">
                      <h3 className="text-lg md:text-xl font-bold mb-1">{currentScenario.title}</h3>
                      <p className="text-xs md:text-sm text-white/90 font-semibold mb-1">{currentScenario.scenario}</p>
                      <p className="text-xs text-white/80 italic">{currentScenario.description}</p>
                    </div>
                  </div>
                </div>

                {/* Content with Medical UI Styling */}
                <div className="flex-grow overflow-auto space-y-2 md:space-y-3 px-1">
                  {currentScenario.content.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className={
                        item.type === 'header'
                          ? 'text-xl md:text-2xl font-bold text-medical-blue mb-2'
                          : item.type === 'label'
                          ? 'text-xs md:text-sm font-semibold text-gray-600 mb-2 uppercase tracking-wide'
                          : item.type === 'section'
                          ? 'text-base md:text-lg font-bold text-gray-800 mt-3 mb-2 border-l-4 border-medical-blue pl-3'
                          : item.type === 'checklist'
                          ? `flex items-start gap-2 bg-gradient-to-r ${item.status === 'complete' ? 'from-green-50 to-white border-l-4 border-green-500' : 'from-blue-50 to-white border-l-4 border-blue-500'} p-2 md:p-3 rounded text-xs md:text-sm`
                          : item.type === 'instruction'
                          ? 'bg-blue-50 border-l-4 border-blue-600 p-2 md:p-3 rounded text-xs md:text-sm italic text-blue-900'
                          : item.type === 'demo'
                          ? 'bg-purple-50 border-l-4 border-purple-500 p-2 md:p-3 rounded text-xs md:text-sm text-purple-900'
                          : item.type === 'feedback' || item.type === 'document'
                          ? 'bg-teal-50 border-l-4 border-teal-500 p-2 md:p-3 rounded text-xs md:text-sm text-teal-900 italic font-medium'
                          : item.type === 'alert'
                          ? 'bg-yellow-50 border-l-4 border-yellow-500 p-2 md:p-3 rounded text-xs md:text-sm font-semibold text-yellow-900'
                          : item.type === 'benefit' || item.type === 'action'
                          ? 'bg-emerald-50 border-l-4 border-emerald-500 p-2 md:p-3 rounded text-xs md:text-sm text-emerald-900 font-medium'
                          : item.type === 'status'
                          ? 'bg-indigo-50 border-l-4 border-indigo-500 p-2 md:p-3 rounded text-xs md:text-sm text-indigo-900'
                          : item.type === 'rating' || item.type === 'chart' || item.type === 'video'
                          ? 'bg-slate-50 border-l-4 border-slate-500 p-2 md:p-3 rounded text-xs md:text-sm text-slate-900'
                          : 'text-center text-gray-500 text-xs mt-3 pt-2 border-t border-gray-200'
                      }
                    >
                      {item.text}
                    </motion.div>
                  ))}
                </div>

                {/* Professional Medical Branding */}
                <div className="mt-3 pt-3 border-t border-gray-200 flex items-center justify-between">
                  <div className="text-xs text-gray-500">Tactyl.io Clinical Platform</div>
                  <div className="text-xs text-gray-400">HIPAA Compliant • Secure</div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Subtle device indicators */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
          <div className="w-1 h-1 bg-slate-600 rounded-full"></div>
          <div className="w-1 h-1 bg-slate-600 rounded-full"></div>
          <div className="w-1 h-1 bg-slate-600 rounded-full"></div>
        </div>
      </div>

      {/* Professional Controls */}
      <div className="mt-6 flex flex-col gap-4">
        {/* Playback Controls */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-3 bg-medical-blue text-white rounded-full shadow-lg hover:bg-blue-800 transition-all transform hover:scale-105"
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>

          {/* Slide Indicators */}
          <div className="flex gap-2">
            {clinicalScenarios.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentSlide(index);
                  setIsPlaying(false);
                }}
                className={`h-2 rounded-full transition-all ${
                  currentSlide === index
                    ? 'w-8 bg-medical-blue'
                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to scenario ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Current Scenario Info */}
        <div className="text-center">
          <p className="text-sm font-bold text-gray-900">
            Clinical Scenario {currentSlide + 1} of {clinicalScenarios.length}
          </p>
          <p className="text-xs text-gray-600 mt-1">
            {currentScenario.scenario}
          </p>
        </div>
      </div>

      {/* Professional Floating Badge */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-2xl p-3 border border-gray-200"
      >
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-medical-blue to-medical-teal rounded-lg flex items-center justify-center">
            <span className="text-white text-xl">💡</span>
          </div>
          <div>
            <div className="text-xs font-bold text-gray-900">Interactive Demo</div>
            <div className="text-xs text-gray-600">Real Clinical Workflows</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
