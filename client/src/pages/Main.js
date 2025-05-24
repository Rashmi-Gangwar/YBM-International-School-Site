import React from "react";
import heroImage from "../assests/img1.jpg";
import walkImage from "../assests/img2.jpg";
import "./Main.css"; // Optional separate styling
import { FaGraduationCap, FaBookOpen, FaUsers, FaLaptopCode, FaQuoteRight } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  
  return (
    <div className="container">
      <div className="main-image">
        <img src={heroImage} alt="Students with Headphones" className="hero-img" />
        <div className="sidebar">
          <button className="sidebar-button" onClick={() => navigate("/login")}>Log In</button>
          <button className="sidebar-button" onClick={() => navigate("/academics")}>School Info</button>
          <button className="sidebar-button" onClick={() => navigate("/admission")}>Admissions</button>
          <button className="sidebar-button" onClick={() => navigate("/events")}>News</button>
        </div>
        <div className="center-content">
          <h1>Hello viewers,</h1>
          <h2>Welcome to <b>YBM International Schools</b> — </h2> 
          <h5>where excellence meets opportunity. We are committed to nurturing young minds through innovation, values, and world-class education. Join us as we shape the future of tomorrow’s leaders. Explore, engage, and elevate your learning experience with us. Your journey begins here.</h5>
        </div>
      </div>

      <section className="content">
        <div className="image-box">
          <img src={walkImage} alt="Students walking" className="walk-img" />
        </div>
        <div className="text-box">
          <h2>Welcome</h2>
          <p>
            Welcome to YBM International Schools, where we are proud of our vibrant learning community.
            We aim to develop well-rounded, confident and responsible individuals who aspire to achieve their full potential.
          </p>
          <h3>A Forward Thinking School</h3>
          <p>
            Our facilities, staff and programs are designed to equip students for success in the modern world.
            Join us in shaping the future!
          </p>
          <button className="read-more" onClick={() => navigate("/lifeatYBM")}>Read More</button>
        </div>
      </section>

      {/* Top Icon Grid Section */}
      {/* <section className="top-section">
        <div className="top-grid">
          <div className="top-item">
            <img src="/images/top1.jpg" alt="Why choose NTC" />
            <div className="overlay">
              <FaGraduationCap className="icon" />
              <p>Why choose NTC?</p>
            </div>
          </div>
          <div className="top-item">
            <img src="/images/top2.jpg" alt="Curriculum" />
            <div className="overlay">
              <FaBookOpen className="icon" />
              <p>Curriculum</p>
            </div>
          </div>
          <div className="top-item">
            <img src="/images/top3.jpg" alt="Communities" />
            <div className="overlay">
              <FaUsers className="icon" />
              <p>Communities</p>
            </div>
          </div>
          <div className="top-item">
            <img src="/images/top4.jpg" alt="Tech Path" />
            <div className="overlay">
              <FaLaptopCode className="icon" />
              <p>Tech Path</p>
            </div>
          </div>
        </div>
      </section> */}

       {/* Latest News Section */}
      <section className="news-section">
        <h2 className="news-title">
          Latest News from <span>YBM International Schools</span>
        </h2>
        <div className="news-cards">
          {[
            {
              img: "/images/news1.jpg",
              date: "14 March 2023",
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
            {
              img: "/images/news2.jpg",
              date: "21 March 2023",
              desc: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            },
            {
              img: "/images/news3.jpg",
              date: "15 April 2023",
              desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
            },
            {
              img: "/images/news4.jpg",
              date: "21 April 2023",
              desc: "Duis aute irure dolor in reprehenderit in voluptate velit.",
            },
          ].map((item, i) => (
            <div className="news-card" key={i}>
              <img src={item.img} alt={`News ${i + 1}`} />
              <p className="news-date">{item.date}</p>
              <p className="news-desc">{item.desc}</p>
            </div>
          ))}
        </div>
        <button className="news-button" onClick={() => navigate("/events")}>Read More</button>
      </section>

       {/* Testimonials Section */}
      <section className="testimonial-section">
        <div className="testimonial-left">
          <h3>Testimonials <FaQuoteRight /></h3>
          <p className="testimonial-quote">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean odio nisi, dictum eu convallis id, dictum sed augue. Aenean erat quam et odio malesuada convallis."
          </p>
          <p className="testimonial-author">- Morris, Pupil</p>
          <button className="read-more" onClick={() => navigate("/academics")}>Read More</button>
        </div>
        <div className="testimonial-right">
          <img src="../images/testimonial-img.jpg" alt="Student" className="testimonial-img" />
        </div>
      </section>
    </div>
  );
}

export default Home;
