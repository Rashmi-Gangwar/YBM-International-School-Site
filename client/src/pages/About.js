import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* Section 1: YBM Trust */}
      <section className="ybm-trust-section">
        <h1>YBM Trust</h1>
        <p>
          YBM International School is governed by the esteemed YBM Educational Trust, committed to delivering quality education, character development, and holistic learning. Our mission is to foster a nurturing environment for future leaders, emphasizing academic excellence and moral integrity.
        </p>
      </section>

      {/* Section 2: Chairman & Principal Message */}

      <section style={{
        backgroundColor: '#1a1a1a',
        padding: '60px 20px',
        textAlign: 'center'
      }}>
        <h2 style={{ color: '#e77a00', fontSize: '30px',
          marginBottom: '40px'
         }}>Message from Leadership</h2>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <div style={{
            backgroundColor: '#2a2a2a',
            padding: '20px',
            borderRadius: '10px',
            width: '300px',
            boxShadow: '0 0 10px rgba(0,0,0,0.3)',
          }}>
            <h3 style={{color: '#e77a00', marginBottom: '15px'}}>Chairman's Message</h3>
            <p style={{color: '#ccc', lineHeight: '1.5'}}>At YBM, we believe in empowering students with knowledge and wisdom...</p>
            <p style={{color: '#ccc', marginTop: '15px', fontStyle: 'italic'}}>- Mr. Rakesh Yadav</p>
          </div>
          <div style={{
            backgroundColor: '#2a2a2a',
            padding: '20px',
            borderRadius: '10px',
            width: '300px',
            boxShadow: '0 0 10px rgba(0,0,0,0.3)',
          }}>
            <h3 style={{color: '#e77a00', marginBottom: '15px'}}>Principal's Message</h3>
            <p style={{color: '#ccc', lineHeight: '1.5'}}>We are dedicated to academic excellence, fostering creativity...</p>
            <p style={{color: '#ccc', marginTop: '15px', fontStyle: 'italic'}}>- Mrs. Neha Sharma</p>
          </div>
        </div>
      </section>


      {/* <section className="message-section">
        <h2>Message from Leadership</h2>
        <div className="cards">
          <div className="card">
            <h3>Chairman's Message</h3>
            <p>
              At YBM, we believe in empowering students with knowledge and wisdom. Our goal is to create a future-ready generation that thrives on values, innovation, and discipline.
            </p>
            <p className="author">- Mr. Rakesh Yadav</p>
          </div>
          <div className="card">
            <h3>Principal's Message</h3>
            <p>
              We are dedicated to academic excellence, fostering creativity, and encouraging curiosity. Our school is a haven for growing minds to explore, express, and evolve confidently.
            </p>
            <p className="author">- Mrs. Neha Sharma</p>
          </div>
        </div>
      </section> */}

      {/* Section 3: Meet Our Faculty */}
      <section className="faculty-section">
        <h2>Meet Our Faculty</h2>
        <div className="faculty-grid">
          <div className="faculty-card">
            <img src="/images/faculty1.jpg" alt="Faculty 1" />
            <h4>Ms. Priya Mehta</h4>
            <p>Mathematics Teacher</p>
          </div>
          <div className="faculty-card">
            <img src="/images/faculty2.jpg" alt="Faculty 2" />
            <h4>Mr. Arjun Verma</h4>
            <p>Science Teacher</p>
          </div>
          <div className="faculty-card">
            <img src="/images/faculty3.jpg" alt="Faculty 3" />
            <h4>Ms. Ritu Singh</h4>
            <p>English Teacher</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
