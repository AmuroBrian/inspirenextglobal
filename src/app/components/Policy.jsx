import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen text-gray-800 font-sans px-6 py-10 max-w-7xl mx-auto leading-relaxed">
      <h1 className="text-4xl font-bold mb-10 text-center">Privacy Policy</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-base">
        {/* Column 1 */}
        <div className="space-y-6">
          {/* 1 */}
          <div>
            <h2 className="text-xl font-semibold mb-2">1. Purpose of Using Personal Information</h2>
            <p>
              Personal information entrusted by customers will be used for communication from the Company,
              business guidance, responding to inquiries, delivering newsletters related to services provided
              on our website, authentication in the respective services, payment transactions, and statistical
              processing in a form that does not identify individuals.
            </p>
          </div>

          {/* 2 */}
          <div>
            <h2 className="text-xl font-semibold mb-2">2. Security Management of Personal Information</h2>
            <p>
              To prevent unauthorized access, loss, damage, alteration, leakage, etc., the Company will take
              necessary security measures, such as maintaining and managing security systems, establishing a
              management structure, and thoroughly educating employees on security.
            </p>
            <p className="mt-2">
              When handling personal information abroad, the Company will promptly understand the personal
              information protection system of the relevant country, take appropriate security measures, and
              provide information to customers.
            </p>
          </div>

          {/* 3 */}
          <div>
            <h2 className="text-xl font-semibold mb-2">3. Non-Disclosure and Non-Provision to Third Parties</h2>
            <p>
              The Company will appropriately manage personal information entrusted by customers and will not
              disclose or provide it to third parties except in the following cases:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>When there is customer consent</li>
              <li>When disclosure is necessary for providing the desired service through subcontractors</li>
              <li>When providing personal information through joint use</li>
              <li>When personal information is provided due to business succession</li>
              <li>When disclosure is based on laws and regulations</li>
            </ul>
          </div>
        </div>

        {/* Column 2 */}
        <div className="space-y-6">
          {/* 4 */}
          <div>
            <h2 className="text-xl font-semibold mb-2">4. Outsourcing</h2>
            <p>
              To provide better services to customers, the Company may outsource business related to the handling
              of personal information as needed. In such cases, the Company will evaluate and select outsourcing
              partners appropriately and supervise them adequately.
            </p>
          </div>

          {/* 5 */}
          <div>
            <h2 className="text-xl font-semibold mb-2">5. Joint Use</h2>
            <p>The Company may jointly use personal data as follows:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li><strong>Items:</strong> Name, address, email, phone, gender, age, birth date, and all customer info</li>
              <li><strong>Purpose:</strong> As stated in the purpose of use</li>
              <li><strong>Manager:</strong> Inspire Next Global Inc., 26th High Street Corporate Plaza, BGC Taguig</li>
            </ul>
          </div>

          {/* 6 */}
          <div>
            <h2 className="text-xl font-semibold mb-2">6. Disclosure, Correction, Deletion, etc.</h2>
            <p>
              Customers may request disclosure, correction, deletion, or suspension of their personal info by following
              Company procedures. The Company will verify identity and respond per applicable laws.
            </p>
            <p className="mt-2">
              A fee may be charged for requests such as information disclosure or third-party provision records.
            </p>
          </div>
        </div>

        {/* Column 3 */}
        <div className="space-y-6">
          {/* 7 */}
          <div>
            <h2 className="text-xl font-semibold mb-2">7. Compliance with Laws and Review of Privacy Policy</h2>
            <p>
              The Company complies with applicable laws (including foreign laws) and guidelines regarding personal
              information. The Company will review and improve the privacy policy as needed. Updates will be posted
              on the Company's website.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
