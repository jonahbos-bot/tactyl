import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ExamRoomDemo from '../components/ExamRoomDemo';

export default function Home() {
  const features = [
    {
      icon: '🫀',
      title: '3D Anatomy Visualization',
      description: 'Interactive 3D models help patients understand their anatomy, conditions, and procedures with crystal-clear visual explanations.',
    },
    {
      icon: '📡',
      title: 'Remote Collaboration',
      description: 'Instantly share screens with remote specialists for real-time consultations, second opinions, and collaborative diagnosis.',
    },
    {
      icon: '🤖',
      title: 'AI-Powered Documentation',
      description: 'Automated visit summaries, transcription, and chart notes. Save providers 2+ hours daily on documentation.',
    },
    {
      icon: '📋',
      title: 'Standardized Care Protocols',
      description: 'Deliver consistent, evidence-based care across all exam rooms with built-in clinical workflows and checklists.',
    },
  ];

  const clinicalUseCases = [
    { name: 'Standardized Care', icon: '📋', color: 'from-blue-500 to-cyan-500' },
    { name: '3D Anatomy & Procedures', icon: '🫀', color: 'from-red-500 to-pink-500' },
    { name: 'Remote Screen Share', icon: '📡', color: 'from-purple-500 to-indigo-500' },
    { name: 'Patient Entertainment', icon: '🎬', color: 'from-green-500 to-emerald-500' },
    { name: 'Patient Education', icon: '📚', color: 'from-orange-500 to-amber-500' },
    { name: 'Digital Forms', icon: '📝', color: 'from-teal-500 to-cyan-500' },
    { name: 'Patient Surveys', icon: '⭐', color: 'from-yellow-500 to-orange-500' },
    { name: 'News & Weather', icon: '🌤️', color: 'from-sky-500 to-blue-500' },
    { name: 'AI Scribe & Summary', icon: '🤖', color: 'from-violet-500 to-purple-500' },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 via-white to-accent-50 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container-custom section-padding relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div {...fadeInUp}>
              <div className="inline-block mb-4">
                <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
                  🏥 Revolutionary Exam Room Technology
                </span>
              </div>
              <h1 className="heading-1 mb-6 bg-gradient-to-r from-primary-600 via-accent-600 to-primary-700 bg-clip-text text-transparent">
                Transform Your Exam Rooms with Interactive Touchscreen Technology
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Empower healthcare providers and patients with all-in-one touchscreen solutions. 
                From 3D anatomy visualization to AI-powered documentation, standardize care and 
                enhance every patient interaction.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-primary">
                  Get a Free Demo
                </Link>
                <Link to="/use-cases" className="btn-secondary">
                  Explore Use Cases
                </Link>
              </div>
              <div className="mt-8 flex items-center gap-8">
                <div>
                  <div className="text-3xl font-bold text-primary-600">1000+</div>
                  <div className="text-sm text-gray-600">Exam Rooms</div>
                </div>
                <div className="h-12 w-px bg-gray-300"></div>
                <div>
                  <div className="text-3xl font-bold text-accent-600">9</div>
                  <div className="text-sm text-gray-600">Clinical Use Cases</div>
                </div>
              </div>
            </motion.div>

            {/* Right Content - Exam Room Demo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <ExamRoomDemo />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="heading-2 mb-4">Comprehensive Exam Room Solutions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to modernize patient care, streamline workflows, and enhance clinical outcomes.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1"
              >
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="heading-2 mb-4">9 Clinical Use Cases in One Platform</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From patient education to AI-powered documentation, transform every aspect of the exam room experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {clinicalUseCases.map((useCase, index) => (
              <motion.div
                key={useCase.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${useCase.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <div className="p-6 relative">
                  <div className="text-4xl mb-3">{useCase.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                    {useCase.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Link to="/use-cases" className="btn-primary">
              Explore All 9 Clinical Use Cases
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-600 via-accent-600 to-primary-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="container-custom relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="heading-2 mb-6">Ready to Transform Your Exam Rooms?</h2>
            <p className="text-xl mb-8 text-primary-50">
              Join 1000+ exam rooms using Tactyl.io to enhance patient care, streamline workflows, 
              and empower healthcare providers with cutting-edge interactive technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                Schedule a Demo
              </Link>
              <Link
                to="/about"
                className="px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-primary-600 transition-all duration-300"
              >
                Learn More About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
