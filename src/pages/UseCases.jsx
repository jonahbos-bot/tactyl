import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function UseCases() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Healthcare', 'Business', 'Retail', 'Education'];

  const useCases = [
    {
      category: 'Healthcare',
      icon: '🏥',
      title: 'Healthcare & Clinics',
      subtitle: 'Every Visit, More Valuable',
      description: 'Educate and calm patients with touchscreen videos, care tips, and dual-purpose screens in exam and waiting rooms.',
      features: [
        'Display rotating wellness tips on heart health, diabetes, nutrition, mental health',
        'Deliver post-visit instructions automatically',
        'Run seasonal campaigns for flu shots or blood pressure checks',
        'Extend your desktop to review charts or imaging with patients',
      ],
      benefits: 'Patients leave with better understanding. Fewer follow-up questions. You create an experience that\'s personal, modern, and proactive.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      category: 'Healthcare',
      icon: '🦷',
      title: 'Dental Practices',
      subtitle: 'Calm. Educate. Build Trust.',
      description: 'Dental visits make many patients anxious—especially kids and first-timers. Tactyl.io helps you put them at ease while delivering valuable oral health education.',
      features: [
        'Play animated explainers of cleanings, fillings, braces, and more',
        'Highlight cosmetic services like whitening or Invisalign',
        'Use QR codes to promote reviews, follow-up care, or appointment booking',
        'Let hygienists and dentists use the screen to show x-rays or discuss care plans',
      ],
      benefits: 'Patients are more relaxed and informed before they ever sit in the chair. Staff save time on repetitive explanations.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      category: 'Healthcare',
      icon: '👶',
      title: 'Pediatric Offices',
      subtitle: 'Happy Kids. Happier Parents.',
      description: 'Waiting is hard for kids—and even harder for their parents. Tactyl.io turns your exam and waiting rooms into calm, engaging spaces that support your care.',
      features: [
        'Play fun, educational videos (with no ads!) to hold attention',
        'Rotate age-appropriate wellness tips (hydration, nutrition, sleep)',
        'Encourage portal use, reviews, or flu shot signups with QR codes',
        'Use the screen as an educational aid for visual learners',
      ],
      benefits: 'Parents appreciate a stress-free visit. Kids are calm and entertained, not climbing the walls. Your clinic runs more smoothly—everyone wins.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      category: 'Business',
      icon: '🏢',
      title: 'Corporate Offices',
      subtitle: 'Connect Teams. Communicate Clearly.',
      description: 'Whether you\'re welcoming clients in the lobby or updating staff in a breakroom, digital displays streamline communication and build a stronger internal culture.',
      features: [
        'Broadcast company news, goals, HR announcements, and internal alerts',
        'Display real-time dashboards, KPIs, or facility metrics',
        'Schedule rotating updates by department, floor, or building',
        'Customize displays to reflect your brand and tone',
      ],
      benefits: 'Employees stay aligned without relying on cluttered inboxes or static posters. Visitors get a polished first impression.',
      color: 'from-indigo-500 to-blue-500',
    },
    {
      category: 'Retail',
      icon: '🛍️',
      title: 'Retail & Showrooms',
      subtitle: 'Engage Customers. Guide Decisions.',
      description: 'Customers want information, not pressure. Tactyl.io helps retail spaces and showrooms deliver helpful, branded content where it matters most.',
      features: [
        'Highlight daily deals, featured products, or how-to guides',
        'Show product demos or customer testimonials',
        'Push customers to loyalty programs or online reviews with QR codes',
        'Keep visuals on-brand with seasonal or campaign-specific updates',
      ],
      benefits: 'Shoppers feel informed and confident. Your sales floor becomes more interactive—without more staff.',
      color: 'from-orange-500 to-red-500',
    },
    {
      category: 'Business',
      icon: '🧘',
      title: 'Hospitality & Wellness',
      subtitle: 'Welcome. Relax. Inspire.',
      description: 'Welcome guests, promote services, and create branded experiences in spas, gyms, and hotels.',
      features: [
        'Display class schedules, spa services, and facility amenities',
        'Promote special offers and membership benefits',
        'Share wellness tips and motivational content',
        'Provide wayfinding and local area information',
      ],
      benefits: 'Guests feel welcomed and informed. Your brand stands out with professional, engaging displays.',
      color: 'from-teal-500 to-cyan-500',
    },
    {
      category: 'Education',
      icon: '📚',
      title: 'Libraries & Public Spaces',
      subtitle: 'Inform. Engage. Connect.',
      description: 'Display community events, news, or tutorials with interactive signage that\'s easy to update and manage.',
      features: [
        'Showcase upcoming events and programs',
        'Display new arrivals and featured collections',
        'Provide interactive maps and directories',
        'Share educational content and resources',
      ],
      benefits: 'Visitors stay informed. Staff save time answering repeated questions. Your space feels modern and accessible.',
      color: 'from-violet-500 to-purple-500',
    },
    {
      category: 'Retail',
      icon: '🚗',
      title: 'Auto Service Centers',
      subtitle: 'Educate. Entertain. Upsell.',
      description: 'Display vehicle features, maintenance tips, and service specials in waiting areas or showrooms—keeping customers informed and engaged.',
      features: [
        'Explain common repairs and maintenance schedules',
        'Promote seasonal services and special offers',
        'Display service progress updates',
        'Entertain customers with relevant automotive content',
      ],
      benefits: 'Customers understand their service needs. Wait time becomes valuable engagement time. Service advisors have more informed conversations.',
      color: 'from-red-500 to-orange-500',
    },
    {
      category: 'Education',
      icon: '🎓',
      title: 'Institutions & Training Centers',
      subtitle: 'Educate. Announce. Inspire.',
      description: 'Share schedules, safety info, or interactive learning content in hallways, lounges, or labs—perfect for both staff and students.',
      features: [
        'Display class schedules and room assignments',
        'Share safety information and emergency procedures',
        'Highlight student achievements and upcoming events',
        'Provide interactive learning modules',
      ],
      benefits: 'Students and staff stay informed. Campus communication becomes efficient. Your institution projects a modern, organized image.',
      color: 'from-pink-500 to-rose-500',
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
                Use Cases
              </span>
            </div>
            <h1 className="heading-1 mb-6">Is Tactyl.io Right for You?</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              From healthcare to hospitality, discover how interactive displays transform 
              spaces and enhance experiences across diverse industries.
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
                      <h4 className="text-lg font-bold text-gray-900 mb-4">How We Help:</h4>
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
                      <h4 className="text-lg font-bold text-gray-900 mb-4">Why It Works:</h4>
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
            <h2 className="heading-2 mb-6">See Your Industry Here?</h2>
            <p className="text-xl mb-8 text-primary-50">
              Let's discuss how Tactyl.io can be customized for your specific needs and space.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-xl"
              >
                Get a Free Consultation
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
