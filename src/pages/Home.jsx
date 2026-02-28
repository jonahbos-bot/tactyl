import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ProfessionalMedicalDemo from '../components/ProfessionalMedicalDemo';

export default function Home() {
  const features = [
    {
      icon: '🫀',
      title: '3D Clinical Visualization',
      description: 'Interactive anatomical models and procedure animations. Improve patient comprehension and informed consent with visual education proven to increase understanding by 85%.',
    },
    {
      icon: '📡',
      title: 'Telemedicine Integration',
      description: 'Seamlessly connect with remote specialists for real-time consultations. Share screens, annotate imaging, and collaborate on diagnosis without patient transfers.',
    },
    {
      icon: '🤖',
      title: 'AI Clinical Documentation',
      description: 'Ambient intelligence captures provider-patient conversations and generates comprehensive SOAP notes. Reduces documentation time by 2+ hours daily per provider.',
    },
    {
      icon: '📋',
      title: 'Evidence-Based Protocols',
      description: 'Built-in clinical decision support with standardized care pathways. Ensure consistent, guideline-concordant care across all exam rooms and providers.',
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
                <span className="px-4 py-2 bg-blue-100 text-medical-blue rounded-full text-sm font-semibold">
                  🏥 Enterprise-Grade Clinical Technology
                </span>
              </div>
              <h1 className="heading-1 mb-6 bg-gradient-to-r from-medical-blue via-medical-teal to-medical-blue bg-clip-text text-transparent">
                The Operating System for Modern Exam Rooms
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                A comprehensive clinical platform that integrates 9 essential technologies into a single, 
                HIPAA-compliant touchscreen solution. Improve patient outcomes, reduce provider burnout, 
                and deliver standardized, evidence-based care across your organization.
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
                  <div className="text-3xl font-bold text-medical-blue">2,500+</div>
                  <div className="text-sm text-gray-600">Exam Rooms Deployed</div>
                </div>
                <div className="h-12 w-px bg-gray-300"></div>
                <div>
                  <div className="text-3xl font-bold text-medical-teal">98%</div>
                  <div className="text-sm text-gray-600">Provider Satisfaction</div>
                </div>
              </div>
            </motion.div>

            {/* Right Content - Professional Clinical Demo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <ProfessionalMedicalDemo />
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
            <h2 className="heading-2 mb-4">Enterprise Clinical Platform</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              A complete ecosystem designed specifically for healthcare organizations seeking to modernize clinical workflows, 
              improve quality metrics, and enhance the provider and patient experience.
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
            <h2 className="heading-2 mb-4">9 Integrated Clinical Technologies</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Replace multiple disparate systems with one unified platform. HIPAA-compliant, EMR-integrated, 
              and designed for the realities of modern clinical practice.
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
      <section className="section-padding bg-gradient-to-br from-medical-blue via-blue-700 to-medical-teal text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="container-custom relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="heading-2 mb-6">Ready to Modernize Your Clinical Operations?</h2>
            <p className="text-xl mb-8 text-blue-50">
              Join leading healthcare organizations using Tactyl.io to improve quality metrics, reduce provider burnout, 
              and deliver exceptional patient experiences. Schedule a personalized demonstration with our clinical team.
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
