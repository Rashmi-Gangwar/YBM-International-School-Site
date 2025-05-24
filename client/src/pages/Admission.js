import React from "react";
import "./Admission.css";

const Admission = () => {
  return (
    <div className="admission-container">
      <h1 className="admission-title">Admissions at YBM: Nurturing Excellence with Values</h1>
      <p className="admission-intro">
        At YBM, we believe in cultivating not just academic brilliance but also instilling strong moral values and holistic development. Our admissions process identifies young minds eager to embark on a journey of learning, character building, and global citizenship.
      </p>

      <div className="admission-section">
        <h2>📅 Academic Session</h2>
        <ul>
          <li><strong>Session Duration:</strong> April 1st to March 31st</li>
          <li><strong>Admissions Open:</strong> November 15th, 2025</li>
          <li><strong>Classes Offered:</strong> Nursery to Grade XII</li>
        </ul>
      </div>

      <div className="admission-section">
        <h2>📝 Admission Process</h2>
        <ul>
          <li><strong>Registration:</strong> Complete the online application form and pay ₹1,200 (non-refundable).</li>
          <li><strong>Entrance Assessment:</strong> For Grade I and above, students take an online test (English, Math, GK) on the first Sunday of January.</li>
          <li><strong>Interaction Session:</strong> Shortlisted candidates meet with our academic panel.</li>
          <li><strong>Admission Confirmation:</strong> Offer sent via email; confirmed upon fee payment and document submission.</li>
        </ul>
      </div>

      <div className="admission-section">
        <h2>📄 Documents Required</h2>
        <ul>
          <li>Attested Birth Certificate</li>
          <li>Previous Academic Records</li>
          <li>Transfer Certificate (for Grade II and above)</li>
          <li>4 Passport-sized Photographs</li>
          <li>Medical Fitness Certificate</li>
          <li>Aadhar Card Copy (for Indian nationals)</li>
        </ul>
      </div>

      <div className="admission-section">
        <h2>💰 Fee Structure Overview</h2>
        <ul>
          <li><strong>Admission Fee:</strong> ₹24,200 (Non-refundable)</li>
          <li><strong>Caution Money:</strong> ₹11,000 (Refundable)</li>
          <li><strong>Annual Tuition Fee:</strong> ₹50,600</li>
          <li><strong>Boarding & Lodging:</strong> ₹1,07,250 (for residential students)</li>
          <li><strong>Additional Fees:</strong> Library, Computer, Games, Imprest charges (as applicable)</li>
        </ul>
        <p className="note">* Detailed fee structure is available upon request or during the admission process.</p>
      </div>

      <div className="admission-section">
        <h2>🏫 Boarding Facilities</h2>
        <p>
          YBM offers state-of-the-art residential facilities for boys and girls from Grade VI onwards. Hostels provide a safe, nurturing, and disciplined environment that fosters independence and camaraderie.
        </p>
      </div>

      <div className="admission-section">
        <h2>🌟 Why Choose YBM?</h2>
        <ul>
          <li>Holistic Education blending academics with moral and spiritual growth</li>
          <li>Modern Infrastructure with smart classrooms and well-equipped labs</li>
          <li>Experienced Faculty dedicated to student success</li>
          <li>Extracurricular Activities in clubs, sports, and cultural programs</li>
          <li>Global Exposure via collaborations and international exchange programs</li>
        </ul>
      </div>

      <div className="admission-section">
        <h2>📞 Contact Us</h2>
        <ul>
          <li><strong>Phone:</strong> +91-XXXXXXXXXX</li>
          <li><strong>Email:</strong> admissions@ybmschool.edu.in</li>
          <li><strong>Address:</strong> [Insert School Address Here]</li>
        </ul>
      </div>
    </div>
  );
};

export default Admission;
