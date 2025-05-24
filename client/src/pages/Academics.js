import React from "react";
import "./Academics.css";

const Academics = () => {
  return (
    <div className="academics-page">
      <h1>Academics</h1>
      <section className="section black-bg">
        <h1 className="section-title">All Wings</h1>
        <div className="content-block">
          <ul className="sub-section">
            <li>Pre-Primary Wing</li>
            <li>Primary Wing</li>
            <li>Middle Wing</li>
            <li>Senior Secondary Wing</li>
          </ul>
        </div>
        <hr />
      </section>

      <section className="section dark-bg">
        <h1 className="section-title">Teaching Learning Process</h1>
        <div className="content-block">
          <ul className="sub-section">
            <li>Science and Technology</li>
            <li>Engineering and Management Based</li>
            <li>Extra Curricular Activities</li>
            <li>Co-Curricular Activities</li>
          </ul>
        </div>
        <hr />
      </section>

      <section className="section black-bg">
        <h1 className="section-title">Dedicated Classroom Learning</h1>
        <div className="content-block">
          <p className="content-text">
            Our classrooms are designed to support focused, uninterrupted learning through
            advanced teaching aids and a student-centric environment.
          </p>
        </div>
        <hr />
      </section>

      <section className="section dark-bg">
        <h1 className="section-title">STEM Labs</h1>
        <div className="content-block">
          <ul className="sub-section">
            <li>AI Labs</li>
            <li>Robotics Lab</li>
            <li>Innovation Center</li>
            <li>State-of-the-Art Math Lab</li>
            <li>State-of-the-Art Chemistry Lab</li>
            <li>State-of-the-Art Physics Lab</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Academics;
