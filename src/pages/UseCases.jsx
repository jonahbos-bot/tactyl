import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function UseCases() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Clinical Workflows', 'Patient Engagement', 'Provider Tools', 'Documentation'];

  const useCases = [
    {
      category: 'Clinical Workflows',
      icon: '📋',
      title: 'Standardized Care Protocols',
      subtitle: 'Consistent, Evidence-Based Care',
      description: 'Deliver standardized care across all exam rooms with built-in clinical protocols, checklists, and workflows.',
      features: [
        'Pre-loaded evidence-based care protocols for common conditions',
        'Interactive checklists ensure nothing is missed during exams',
        'Customizable workflows specific to your practice specialties',
        'Real-time guidance for providers on best practices',
        'Audit trails for compliance and quality assurance',
      ],
      benefits: 'Reduces practice variation. Ensures every patient receives consistent, high-quality care. Improves clinical outcomes and reduces liability risk.',
      color: 'from-blue-600 to-cyan-600',
    },
    {
      category: 'Patient Engagement',
      icon: '🫀',
      title: '3D Anatomy & Procedure Visualization',
      subtitle: 'See It. Understand It. Remember It.',
      description: 'Interactive 3D anatomical models help patients truly understand their bodies, conditions, and treatment options.',
      features: [
        'Comprehensive 3D anatomical library (skeletal, muscular, cardiovascular, digestive systems)',
        'Touch to rotate, zoom, and explore structures from any angle',
        'Procedure animations show step-by-step surgical and diagnostic processes',
        'Highlight specific areas to explain pathology or surgical approaches',
        'Side-by-side comparisons of healthy vs. diseased anatomy',
      ],
      benefits: 'Patients understand their conditions better, leading to improved compliance and satisfaction. Visual education reduces anxiety and builds trust.',
      color: 'from-red-600 to-pink-600',
    },
    {
      category: 'Provider Tools',
      icon: '📡',
      title: 'Remote Screen Share & Collaboration',
      subtitle: 'Expert Consults, Instantly',
      description: 'Connect with remote specialists, share screens, and collaborate on diagnosis in real-time without leaving the exam room.',
      features: [
        'One-click screen sharing with remote specialists',
        'Live video consultation with patient present',
        'Share imaging, lab results, and patient records securely',
        'Real-time annotations and markup tools',
        'Recorded sessions for documentation and review',
      ],
      benefits: 'Access specialist expertise immediately. Improved diagnostic accuracy. Reduced referral delays. Patients love seeing collaborative care in action.',
      color: 'from-purple-600 to-indigo-600',
    },
    {
      category: 'Patient Engagement',
      icon: '🎬',
      title: 'Patient Entertainment',
      subtitle: 'Reduce Anxiety, Improve Experience',
      description: 'Calming, engaging content keeps patients comfortable and reduces perceived wait time.',
      features: [
        'Curated content library: nature videos, music, documentaries',
        'Patient-controlled content selection via touchscreen',
        'Age-appropriate content filtering (pediatric vs. adult)',
        'News, weather, and local information',
        'Practice-branded content and welcome messages',
      ],
      benefits: 'Reduced patient anxiety. Shorter perceived wait times. Better patient experience scores. Happier patients are more compliant patients.',
      color: 'from-green-600 to-emerald-600',
    },
    {
      category: 'Patient Engagement',
      icon: '📚',
      title: 'Patient Education',
      subtitle: 'Knowledge Empowers Better Outcomes',
      description: 'Visual guides, videos, and interactive modules educate patients about their conditions and treatment plans.',
      features: [
        'Extensive library of condition-specific educational videos',
        'Interactive modules on medications, lifestyle changes, and self-care',
        'Pre- and post-procedure instructions with visual guides',
        'Multilingual content support',
        'Email or text educational materials directly to patients',
      ],
      benefits: 'Patients better understand their health. Improved medication adherence. Reduced post-visit phone calls. Better health outcomes.',
      color: 'from-orange-600 to-amber-600',
    },
    {
      category: 'Clinical Workflows',
      icon: '📝',
      title: 'Digital Patient Forms',
      subtitle: 'Paperless, Secure, Instant',
      description: 'Patients complete intake forms, medical history, and consent documents directly on the touchscreen.',
      features: [
        'Digital intake forms auto-populate into EMR/EHR',
        'Medical history, current medications, allergies captured',
        'Insurance information and demographic data',
        'Electronic signature capture for consents',
        'HIPAA-compliant data encryption and storage',
      ],
      benefits: 'Eliminates paper forms and manual data entry. Reduces errors. Speeds up check-in process. Data flows directly into your EMR system.',
      color: 'from-teal-600 to-cyan-600',
    },
    {
      category: 'Patient Engagement',
      icon: '⭐',
      title: 'Patient Satisfaction Surveys',
      subtitle: 'Real-Time Feedback, Actionable Insights',
      description: 'Collect patient feedback immediately after visits to identify trends and improve care quality.',
      features: [
        'Post-visit satisfaction surveys delivered automatically',
        'Rating scales for provider interaction, wait time, facility cleanliness',
        'Open-ended feedback for detailed comments',
        'Real-time dashboard showing satisfaction trends',
        'Alert notifications for low scores requiring follow-up',
      ],
      benefits: 'Higher survey completion rates (collected before patient leaves). Identify issues quickly. Improve patient retention. Boost online reviews.',
      color: 'from-yellow-600 to-orange-600',
    },
    {
      category: 'Patient Engagement',
      icon: '🌤️',
      title: 'News, Weather & Local Info',
      subtitle: 'Stay Connected During Your Visit',
      description: 'Keep patients informed and entertained with current news, weather forecasts, and community information.',
      features: [
        'Live local weather forecasts and radar',
        'Curated health news headlines',
        'Community health events and wellness programs',
        'Practice announcements and special offers',
        'Time and date display',
      ],
      benefits: 'Patients feel connected and informed. Reduces boredom during wait times. Displays practice as modern and patient-centered.',
      color: 'from-sky-600 to-blue-600',
    },
    {
      category: 'Documentation',
      icon: '🤖',
      title: 'AI Medical Scribe & Summaries',
      subtitle: 'Give Providers Their Time Back',
      description: 'AI-powered ambient documentation captures visit details automatically, generating clinical notes and summaries.',
      features: [
        'Ambient listening captures patient-provider conversation',
        'Automatic generation of SOAP notes and clinical summaries',
        'Chief complaint, HPI, assessment, and plan documented',
        'Integration with major EMR/EHR systems',
        'Provider review and edit before finalizing',
      ],
      benefits: 'Saves providers 2+ hours daily on documentation. Reduces burnout. Increases face-to-face time with patients. Improves note quality and completeness.',
      color: 'from-violet-600 to-purple-600',
    },
  ];

  const filteredUseCases =
    selectedCategory === 'All'
      ? useCases
      : useCases.filter((useCase) => useCase.category === selectedCategory);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-accent-50 section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
                Clinical Use Cases
              </span>
            </div>
            <h1 className="heading-1 mb-6">9 Technologies, 1 Integrated Platform</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Discover how Tactyl.io transforms every aspect of the exam room experience—from clinical 
              workflows to patient engagement to AI-powered documentation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-white py-8 sticky top-20 z-40 shadow-sm">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid gap-8"
            >
              {filteredUseCases.map((useCase, index) => (
                <motion.div
                  key={useCase.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                >
                  <div className="grid md:grid-cols-3 gap-6 p-8">
                    {/* Left Column - Header */}
                    <div className="md:col-span-1">
                      <div
                        className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${useCase.color} flex items-center justify-center text-4xl mb-4 transform group-hover:scale-110 transition-transform`}
                      >
                        {useCase.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{useCase.title}</h3>
                      <p className="text-primary-600 font-semibold mb-4">{useCase.subtitle}</p>
                      <p className="text-gray-600">{useCase.description}</p>
                    </div>

                    {/* Middle Column - Features */}
                    <div className="md:col-span-1">
                      <h4 className="text-lg font-bold text-gray-900 mb-4">Key Features:</h4>
                      <ul className="space-y-3">
                        {useCase.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-primary-600 mt-1 flex-shrink-0">✓</span>
                            <span className="text-gray-600 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Right Column - Benefits */}
                    <div className="md:col-span-1">
                      <h4 className="text-lg font-bold text-gray-900 mb-4">Clinical Benefits:</h4>
                      <div className={`bg-gradient-to-br ${useCase.color} bg-opacity-10 rounded-xl p-6`}>
                        <p className="text-gray-700 leading-relaxed">{useCase.benefits}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-600 via-accent-600 to-primary-700 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="heading-2 mb-6">Ready to Transform Your Exam Rooms?</h2>
            <p className="text-xl mb-8 text-primary-50">
              Schedule a personalized demo to see how Tactyl.io can enhance your clinical workflows, 
              improve patient satisfaction, and give your providers their time back.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-xl"
              >
                Schedule a Demo
              </a>
              <a
                href="/about"
                className="px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-primary-600 transition-all duration-300"
              >
                Learn More About Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
