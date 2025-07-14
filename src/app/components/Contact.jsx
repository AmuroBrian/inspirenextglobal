import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      form.current,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    ).then(
      () => alert("Message sent successfully!"),
      (error) => alert("Failed to send message. Please try again later.")
    );

    e.target.reset();
  };

  return (
    <section className="px-4 py-12 md:px-16 bg-white text-[#1b1f2a]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none text-[#1b1f2a]"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none text-[#1b1f2a]"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg h-32 resize-none focus:outline-none text-[#1b1f2a]"
            ></textarea>
            <button
              type="submit"
              className="bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Address and Map */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Our Offices</h2>
          <div className="space-y-4 text-sm leading-relaxed">
            <div>
              <p className="font-semibold">HEAD OFFICE:</p>
              <p>MAIN OFFICE: 6F Alliance Global Tower, 11th Avenue, corner 36th St, Taguig, Metro Manila</p>
            </div>
            <div>
              <p className="font-semibold">SATELLITE OFFICE (USA):</p>
              <p>1209 Mountain Road PL NE STE N Bernalillo County Albuquerque, NM, 87110, USA</p>
            </div>
            <div>
              <p className="font-semibold">SATELLITE OFFICE (Japan):</p>
              <p>20th floor, Trust Tower Main Building, 1-8-3 Marunouchi, Chiyoda-ku, Tokyo 100-8283</p>
            </div>
          </div>

          <div className="mt-6">
            <iframe
              title="Main Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.636393833782!2d121.05390337506253!3d14.55187997647444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c903c709ecb9%3A0xd1dc3e5a54624a2b!2sAlliance%20Global%20Tower!5e0!3m2!1sen!2sph!4v1720090837007!5m2!1sen!2sph"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;