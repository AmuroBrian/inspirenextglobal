import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const AboutInspireNext = () => {
  const [isMounted, setIsMounted] = React.useState(false);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  // Parallax effects
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacityBg = useTransform(scrollYProgress, [0, 0.7], [1, 0.2]);

  return (
    <div ref={ref} className="relative overflow-hidden">
      {/* Animated bridge background symbol */}
      <motion.div
        style={{ y: yBg, opacity: opacityBg }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <svg viewBox="0 0 1440 800" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 400 Q360 200 720 400 Q1080 600 1440 400"
            stroke="url(#gradient)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="10 6"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2F3E46" />
              <stop offset="50%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#2F3E46" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Floating orbs */}
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
        className="hidden sm:block absolute top-[15%] left-[10%] w-40 h-40 sm:w-52 sm:h-52 lg:w-64 lg:h-64 rounded-full bg-[#D4AF37] opacity-20 blur-2xl"
      />
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", delay: 2 }}
        className="hidden sm:block absolute bottom-[20%] right-[10%] w-44 h-44 sm:w-56 sm:h-56 lg:w-72 lg:h-72 rounded-full bg-[#2F3E46] opacity-20 blur-2xl"
      />

      <div className="relative z-10 py-16">
        <motion.div
          className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          variants={{
            hidden: { opacity: 0, y: 60 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
          }}
        >
          {/* Mission Section */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0, y: 60 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
            }}
            className="mb-28"
          >
            <div className="flex flex-col md:flex-row items-start mb-10">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: false }}
                className="hidden md:block w-16 h-1 bg-[#D4AF37] mt-3 mr-6"
              />
              <div>
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.3, ease: "easeOut" }}
                  viewport={{ once: false }}
                  className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2"
                  style={{ color: '#2F3E46' }}
                >
                  Our Mission
                </motion.h2>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.3, ease: "easeOut" }}
                  viewport={{ once: false }}
                  className="text-base sm:text-lg md:text-xl space-y-6 leading-relaxed"
                  style={{ color: '#2F3E46' }}
                >
                  <p>
                    At Inspire Next Global Inc., we're here to open doors—to introduce thoughtful, trusted Japanese solutions that help Filipino businesses and professionals work smarter and live better.
                  </p>
                  <p>
                    Whether it's intuitive IT platforms that make everyday tasks smoother, skincare software that supports beauty experts in understanding and caring for their clients, or practical tools that bring more clarity and flow to the workplace—we're all about making innovation feel personal.
                  </p>
                  <p>
                    We collaborate closely with our Japanese partners to ensure everything we offer is not just high-quality, but also meaningful and relevant here in the Philippines. With a focus on localization and a heart for service, we don't just deliver systems—we build connections that truly inspire what's next.
                  </p>
                </motion.div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.3, ease: "easeOut" }}
              viewport={{ once: false }}
              className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {missionHighlights.map((item, index) => (
                <div key={index} className="p-6 sm:p-8 rounded-xl shadow-sm border border-[#2F3E46] hover:shadow-md transition-shadow bg-[rgba(248,249,250,0.9)]" style={{backdropFilter:'blur(4px)'}}>
                  <div className="mb-3 text-3xl" style={{color:'#D4AF37'}}>{item.icon}</div>
                  <h3 className="font-semibold mb-2 text-xl sm:text-2xl" style={{color:'#2F3E46'}}>{item.title}</h3>
                  <p className="text-base sm:text-lg" style={{color:'#2F3E46'}}>{item.description}</p>
                </div>
              ))}
            </motion.div>
          </motion.section>

          {/* Vision Section */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0, y: 60 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
            }}
            className="py-16"
          >
            <div className="flex flex-col md:flex-row items-start gap-10">
              <div className="md:w-1/2">
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.3, ease: "easeOut" }}
                  viewport={{ once: false }}
                  className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
                  style={{ color: '#2F3E46' }}
                >
                  Our Vision
                </motion.h2>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.3, ease: "easeOut" }}
                  viewport={{ once: false }}
                  className="text-base sm:text-lg md:text-xl space-y-6 leading-relaxed"
                  style={{ color: '#2F3E46' }}
                >
                  <p>
                    At Inspire Next Global Inc., we see ourselves as a bridge—connecting the brilliance of Japanese innovation with the unique needs of the Filipino market.
                  </p>
                  <p>
                    Our vision is to make everyday life simpler, smarter, and more fulfilling by introducing reliable technology and wellness solutions that truly make a difference.
                  </p>
                  <p>
                    Whether it's helping businesses work more efficiently or supporting individuals in caring for themselves better, we believe trusted systems from Japan can uplift the way Filipinos live, work, and connect with one another.
                  </p>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
                viewport={{ once: false }}
                className="md:w-1/2 relative"
              >
                <div className="relative rounded-2xl overflow-hidden aspect-video shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt="Bridge between Japan and Philippines"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <p className="font-medium" style={{color:'#D4AF37'}}>Building Bridges</p>
                    <h3 className="text-xl sm:text-2xl font-semibold">
                      Connecting Japanese Innovation with Filipino Needs
                    </h3>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.section>
        </motion.div>
      </div>
    </div>
  );
};

const missionHighlights = [
  {
    title: "Thoughtful Solutions",
    description: "Carefully selected Japanese innovations tailored for Filipino needs",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    )
  },
  {
    title: "Localized Approach",
    description: "Adapted implementations with Philippine context in mind",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
  {
    title: "Inspiring Connections",
    description: "Building meaningful relationships beyond transactions",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  }
];

export default AboutInspireNext;
