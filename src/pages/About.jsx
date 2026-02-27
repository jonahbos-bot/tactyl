import { motion } from 'framer-motion';

export default function About() {
  const values = [
    {
      icon: '🎯',
      title: 'Turnkey Solutions',
      description: 'We provide everything from screens to content to installation—making it effortless for you to get started.',
    },
    {
      icon: '🌍',
      title: 'Industry Agnostic',
      description: 'From exam rooms to showrooms, our systems adapt to your use case and your brand identity.',
    },
    {
      icon: '🏡',
      title: 'Local Roots, National Reach',
      description: 'We\'re proudly New England-based and ready to travel for hands-on consulting and implementation.',
    },
    {
      icon: '✨',
      title: 'Simplicity First',
      description: 'No IT team? No problem. Our plug-and-play systems just work, right out of the box.',
    },
  ];

  const timeline = [
    {
      year: 'Founded',
      title: 'The Beginning',
      description: 'Started in New England with a mission to help clinics educate patients more effectively.',
    },
    {
      year: 'Growth',
      title: 'Expanding Horizons',
      description: 'Grew beyond healthcare to serve retail, corporate, hospitality, and educational sectors.',
    },
    {
      year: 'Today',
      title: 'Industry Leader',
      description: 'Now serving 9+ industries nationwide with 500+ successful deployments.',
    },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

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
                About Tactyl.io
              </span>
            </div>
            <h1 className="heading-1 mb-6">Making Every Screen Serve a Purpose</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              At Tactyl.io, we believe that every screen should serve a purpose—and every space 
              can become smarter, more engaging, and more informative.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="heading-2 mb-6">Our Mission</h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Founded in New England, Tactyl.io began with a simple goal: to help clinics educate 
                  patients more effectively while they wait. Since then, we've grown into a turnkey 
                  interactive display company serving a wide range of industries—from healthcare to 
                  retail to corporate environments.
                </p>
                <p>
                  Our solution combines modern touchscreen hardware, intuitive content management, 
                  and on-site consulting to deliver beautifully branded experiences that scale.
                </p>
                <p>
                  We work closely with each client to understand their space, their audience, and 
                  their goals—then we bring it all to life with elegant, easy-to-manage technology.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary-500 to-accent-500 rounded-3xl p-8 text-white shadow-2xl">
                <div className="text-6xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold mb-4">Our Goal</h3>
                <p className="text-primary-50 text-lg leading-relaxed">
                  To help businesses engage, educate, and scale through smart, interactive displays 
                  that elevate everyday spaces into memorable experiences.
                </p>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-accent-500 to-primary-500 rounded-full blur-3xl opacity-30"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full blur-3xl opacity-30"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="heading-2 mb-4">What Sets Us Apart</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're not just a display company—we're your partner in creating engaging spaces.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1"
              >
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{value.title}</h3>
                <p className="text-gray-600 text-lg">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="heading-2 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From helping one clinic to serving businesses nationwide.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative pl-8 pb-12 last:pb-0"
              >
                {/* Timeline Line */}
                {index < timeline.length - 1 && (
                  <div className="absolute left-[11px] top-8 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-accent-500"></div>
                )}
                
                {/* Timeline Dot */}
                <div className="absolute left-0 top-2 w-6 h-6 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full border-4 border-white shadow-lg"></div>
                
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="text-sm font-semibold text-primary-600 mb-2">{item.year}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gradient-to-br from-primary-600 via-accent-600 to-primary-700 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Deployments' },
              { number: '9+', label: 'Industries' },
              { number: '100%', label: 'Satisfaction' },
              { number: '24/7', label: 'Support' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-primary-100 text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            {...fadeInUp}
            className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12 text-center shadow-xl border border-gray-100"
          >
            <h2 className="heading-2 mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how Tactyl.io can transform your space and enhance your customer experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary">
                Schedule a Consultation
              </a>
              <a href="/use-cases" className="btn-secondary">
                View Use Cases
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
