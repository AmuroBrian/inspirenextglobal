import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#18191b] text-[#b0b1b4] pt-12 pb-6 px-6 border-t border-[#232323] mt-auto">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-12">
        {/* Left Block */}
        <div className="md:w-1/3">
          <h2 className="text-white text-2xl font-bold mb-4">INSPIRE NEXT GLOBAL</h2>
          <p className="mb-4">
            A small river named Duden flows by their place and supplies it with the necessary regelialia.
          </p>
          <a href="#" className="text-[#e3b877] font-medium hover:underline inline-flex items-center">
            read more <span className="ml-1">→</span>
          </a>
        </div>
        {/* Right Columns */}
        <div className="flex flex-1 flex-wrap gap-8 justify-between md:justify-end">
          <div>
            <h3 className="text-white font-semibold mb-3">Discover</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Buy &amp; Sell</a></li>
              <li><a href="#" className="hover:underline">Merchant</a></li>
              <li><a href="#" className="hover:underline">Giving back</a></li>
              <li><a href="#" className="hover:underline">Help &amp; Support</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">About</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Staff</a></li>
              <li><a href="#" className="hover:underline">Team</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">Resources</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Security</a></li>
              <li><a href="#" className="hover:underline">Global</a></li>
              <li><a href="#" className="hover:underline">Charts</a></li>
              <li><a href="#" className="hover:underline">Privacy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">Social</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Facebook</a></li>
              <li><a href="#" className="hover:underline">Twitter</a></li>
              <li><a href="#" className="hover:underline">Instagram</a></li>
              <li><a href="#" className="hover:underline">Googleplus</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <div className="max-w-7xl mx-auto mt-10 border-t border-[#232323] pt-6 pb-2">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="mb-2 md:mb-0 flex items-center flex-wrap gap-3">
            <span className="font-medium text-[#b0b1b4]">Our Partner:</span>
            <span className="flex flex-wrap items-center gap-4 text-sm">
              {["Inspire Holdings Inc", "Inspire Alliance Fund Group",].map((name, idx) => (
                <span key={name} className="flex items-center gap-1">
                  <span className="inline-block w-3 h-3 rounded-full border border-[#b0b1b4] mr-1"></span>
                  {name}
                </span>
              ))}
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
        <div className="flex gap-6">
          <a href="#" className="hover:underline">Terms</a>
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Compliances</a>
        </div>
    </footer>
  );
};

export default Footer;