import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ProductDemo from '../components/ProductDemo';

export default function Home() {
  const features = [
    {
      icon: '🎯',
      title: 'Turnkey Solutions',
      description: 'Complete hardware, software, and installation. We handle everything from screens to content to setup.',
    },
    {
      icon: '✨',
      title: 'Easy Content Management',
      description: 'Update your displays anytime, anywhere with our intuitive CMS. No IT team required.',
    },
    {
      icon: '🚀',
      title: 'Plug & Play',
      description: 'Our systems work right out of the box. Simple setup, powerful results.',
    },
    {
      icon: '📈',
      title: 'Scalable Platform',
      description: 'Start with one screen or deploy across multiple locations. We grow with you.',
    },
  ];

  const industries = [
    { name: 'Healthcare & Clinics', icon: '🏥', color: 'from-blue-500 to-cyan-500' },
    { name: 'Dental Practices', icon: '🦷', color: 'from-purple-500 to-pink-500' },
    { name: 'Pediatric Offices', icon: '👶', color: 'from-green-500 to-emerald-500' },
    { name: 'Corporate Offices', icon: '🏢', color: 'from-indigo-500 to-blue-500' },
    { name: 'Retail & Showrooms', icon: '🛍️', color: 'from-orange-500 to-red-500' },
    { name: 'Hospitality & Wellness', icon: '🧘', color: 'from-teal-500 to-cyan-500' },
    { name: 'Libraries & Public Spaces', icon: '📚', color: 'from-violet-500 to-purple-500' },
    { name: 'Auto Service Centers', icon: '🚗', color: 'from-red-500 to-orange-500' },
    { name: 'Institutions & Training', icon: '🎓', color: 'from-pink-500 to-rose-500' },
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
                  🚀 Transforming Spaces with Smart Displays
                </span>
              </div>
              <h1 className="heading-1 mb-6 bg-gradient-to-r from-primary-600 via-accent-600 to-primary-700 bg-clip-text text-transparent">
                Engage. Educate. Scale.
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Turnkey interactive display solutions that transform waiting rooms, lobbies, 
                and showrooms into engaging experiences. From healthcare to retail, we bring 
                your space to life.
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
                  <div className="text-3xl font-bold text-primary-600">500+</div>
                  <div className="text-sm text-gray-600">Deployments</div>
                </div>
                <div className="h-12 w-px bg-gray-300"></div>
                <div>
                  <div className="text-3xl font-bold text-accent-600">9+</div>
                  <div className="text-sm text-gray-600">Industries Served</div>
                </div>
              </div>
            </motion.div>

            {/* Right Content - Product Demo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <ProductDemo />
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
            <h2 className="heading-2 mb-4">Why Choose Tactyl.io?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We make interactive displays simple, powerful, and effective for any space.
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
            <h2 className="heading-2 mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From healthcare to hospitality, we create engaging experiences across diverse sectors.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <div className="p-6 relative">
                  <div className="text-4xl mb-3">{industry.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                    {industry.name}
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
              View All Use Cases
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
            <h2 className="heading-2 mb-6">Ready to Transform Your Space?</h2>
            <p className="text-xl mb-8 text-primary-50">
              Get a free consultation and see how Tactyl.io can enhance your customer experience, 
              educate your audience, and modernize your brand.
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
