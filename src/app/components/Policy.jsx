"use client";
import React from "react";

export default function PrivacyPolicy() {
  return (
    <main className="relative min-h-screen bg-[#fcfcfc] flex flex-col items-center justify-center py-12 px-2">
      {/* Decorative pastel circles */}
      <div className="pointer-events-none select-none absolute left-[13%] top-24 w-[120px] h-[120px] rounded-full bg-[#e2f3ec] z-0 opacity-50" />
      <div className="pointer-events-none select-none absolute right-[16%] top-10 w-[80px] h-[80px] rounded-full bg-[#fbedec] z-0 opacity-40" />
      <div className="pointer-events-none select-none absolute left-[20%] bottom-[8%] w-[180px] h-[180px] rounded-full bg-[#f0f2fb] z-0 opacity-50" />
      <div className="pointer-events-none select-none absolute right-[13%] bottom-[12%] w-[70px] h-[70px] rounded-full bg-[#e6f7fa] z-0 opacity-40" />

      <section className="relative z-10 max-w-4xl w-full mx-auto bg-white rounded-xl shadow-lg px-4 sm:px-12 py-12">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-10 text-green-700 text-center tracking-tight">
          Privacy Policy
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {/* Left Column */}
          <div className="space-y-10">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-green-700 mb-1 text-center md:text-left">
                1. Purpose of Using Personal Information
              </h2>
              <p className="text-base md:text-lg text-center md:text-left">
                Personal information entrusted by customers will be used for communication from the Company, business guidance, responding to inquiries, delivering newsletters related to services provided on our website, authentication in the respective services, payment transactions, and statistical processing in a form that does not identify individuals.
              </p>
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-green-700 mb-1 text-center md:text-left">
                2. Security Management of Personal Information
              </h2>
              <p className="text-base md:text-lg text-center md:text-left">
                To prevent unauthorized access, loss, damage, alteration, leakage, etc., the Company will take necessary security measures, such as maintaining and managing security systems, establishing a management structure, and thoroughly educating employees on security.
              </p>
              <p className="text-base md:text-lg text-center md:text-left mt-2">
                When handling personal information abroad, the Company will promptly understand the personal information protection system of the relevant country, take appropriate security measures, and provide information to customers.
              </p>
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-green-700 mb-1 text-center md:text-left">
                3. Non-Disclosure and Non-Provision of Personal Information to Third Parties
              </h2>
              <p className="text-base md:text-lg text-center md:text-left">
                The Company will appropriately manage personal information entrusted by customers and will not disclose or provide it to third parties except in the following cases:
              </p>
              <ol className="list-[lower-alpha] pl-7 mt-2 space-y-1 text-center md:text-left">
                <li>When there is customer consent</li>
                <li>When disclosure is necessary for providing the desired service to customers through outsourcing business to subcontractors</li>
                <li>When providing personal information through joint use</li>
                <li>When personal information is provided due to business succession</li>
                <li>When disclosure is based on laws and regulations</li>
              </ol>
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-green-700 mb-1 text-center md:text-left">
                4. Outsourcing
              </h2>
              <p className="text-base md:text-lg text-center md:text-left">
                To provide better services to customers, the Company may outsource business related to the handling of personal information as needed. In such cases, the Company will evaluate and select outsourcing partners appropriately and supervise them adequately.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-10 mt-10 md:mt-0">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-green-700 mb-1 text-center md:text-left">
                5. Joint Use
              </h2>
              <ul className="list-disc pl-6 mt-2 text-center md:text-left">
                <li>
                  <span className="font-medium">Items of personal information to be jointly used:</span> Name, address, email address, phone number, gender, age, date of birth, and all information provided by customers to the Company
                </li>
                <li>
                  <span className="font-medium">Purpose of using jointly used personal data:</span> As stated in the purpose of use
                </li>
                <li>
                  <span className="font-medium">Manager responsible for joint use:</span> The Company (Inspire Next Global Inc., 26th High Street Corporate Plaza, Bonifacio High Street, BGC Taguig City)
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-green-700 mb-1 text-center md:text-left">
                6. Disclosure, Correction, Deletion, etc. of Personal Information
              </h2>
              <p className="text-base md:text-lg text-center md:text-left mb-2">
                If a customer wishes to disclose, correct, add, delete, suspend the use, or suspend the provision to third parties of their personal information, they can make such a request following the Company's prescribed procedures. The Company will respond after confirming the customer's identity and in accordance with applicable laws.
              </p>
              <p className="text-center md:text-left text-base md:text-lg italic">
                Note that if a customer requests the disclosure of personal information or third-party provision records, the Company may charge a disclosure fee in accordance with the prescribed procedures.
              </p>
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-green-700 mb-1 text-center md:text-left">
                7. Compliance with Laws and Review of Privacy Policy
              </h2>
              <p className="text-base md:text-lg text-center md:text-left">
                The Company complies with applicable laws (including foreign laws) and related guidelines regarding the handling of personal information. The Company will review the contents of the privacy policy as needed and strive for improvement. If there are changes to the privacy policy, the revised policy will be posted on the Company's website for confirmation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}