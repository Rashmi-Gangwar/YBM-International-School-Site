import React from 'react';
import './NewsEvents.css';
import img1 from '../assests/event1.jpg';
import img2 from '../assests/event2.jpg';
import img3 from '../assests/event3.jpg';

const events = [
  {
    month: 'April 2026',
    data: [
      { title: 'New Academic Session Begins (Grades I–XII)', desc: 'April 1', img: img1 },
      { title: 'World Health Day – Health Awareness Workshops', desc: 'April 7', img: img2 },
      { title: 'Ambedkar Jayanti – Special Assembly', desc: 'April 14', img: img3 },
      { title: 'Earth Day – Eco Club Initiatives', desc: 'April 22', img: img1 },
    ]
  },
  {
    month: 'May 2026',
    data: [
      { title: 'Labor Day – Career Talks and Workshops', desc: 'May 1', img: img2 },
      { title: 'Mother\'s Day Celebrations', desc: 'May 9', img: img3 },
      { title: 'UPSC CSE Prelims – Awareness Activity', desc: 'May 24', img: img1 },
      { title: 'Summer Camp: Arts, Sports, and STEM', desc: 'May 25–31', img: img2 },
    ]
  },
  {
    month: 'June 2026',
    data: [
      { title: 'World Environment Day', desc: 'Tree Plantation Drive', img: img1 },
      { title: 'International Yoga Day', desc: 'Yoga Sessions', img: img2 },
      { title: 'Parent-Teacher Meeting (PTM)', desc: 'Annual PTM with parents', img: img3 },
    ]
  },
  {
    month: 'July 2026',
    data: [
      { title: 'Unit Test I', desc: 'Grades I–XII', img: img1 },
      { title: 'Guru Purnima', desc: 'Cultural Program', img: img2 },
      { title: 'Science Exhibition', desc: 'Student innovation showcase', img: img3 },
    ]
  },
  {
    month: 'August 2026',
    data: [
      { title: 'Independence Day', desc: 'Flag Hoisting and Cultural Events', img: img1 },
      { title: 'Raksha Bandhan', desc: 'Special Assembly', img: img2 },
      { title: 'Janmashtami', desc: 'Dahi Handi Celebration', img: img3 },
    ]
  },
  {
    month: 'September 2026',
    data: [
      { title: 'Teacher\'s Day', desc: 'Student-Led Classes', img: img1 },
      { title: 'International Literacy Day', desc: 'Reading Sessions', img: img2 },
      { title: 'Hindi Diwas', desc: 'Poetry and Essay Competitions', img: img3 },
      { title: 'Half-Yearly Examinations', desc: 'Sept 21–30', img: img1 },
    ]
  },
  {
    month: 'October 2026',
    data: [
      { title: 'Gandhi Jayanti', desc: 'Cleanliness Drive', img: img2 },
      { title: 'Dussehra', desc: 'Cultural Performances', img: img3 },
      { title: 'United Nations Day', desc: 'Model UN Sessions', img: img1 },
    ]
  },
  {
    month: 'November 2026',
    data: [
      { title: 'Diwali', desc: 'Rangoli and Diya Decoration', img: img2 },
      { title: 'Children\'s Day', desc: 'Fun Fair and Talent Show', img: img3 },
      { title: 'Annual Sports Day', desc: 'Sports competitions', img: img1 },
      { title: 'PTM', desc: 'Parent-Teacher Meeting', img: img2 },
    ]
  },
  {
    month: 'December 2026',
    data: [
      { title: 'Unit Test II', desc: 'Grades I–XII (Dec 1–10)', img: img3 },
      { title: 'Christmas Celebrations', desc: 'School festivities', img: img1 },
      { title: 'Winter Break', desc: 'Dec 25–31', img: img2 },
    ]
  },
  {
    month: 'January 2027',
    data: [
      { title: 'New Year\'s Day', desc: 'School Reopens', img: img3 },
      { title: 'National Youth Day', desc: 'Leadership Workshops', img: img1 },
      { title: 'Netaji Subhas Chandra Bose Jayanti', desc: 'Special Assembly', img: img2 },
      { title: 'Republic Day', desc: 'Parade and Cultural Program', img: img3 },
    ]
  },
  {
    month: 'February 2027',
    data: [
      { title: 'Valentine\'s Day', desc: 'Kindness Week Initiatives', img: img1 },
      { title: 'International Mother Language Day', desc: 'Multilingual Poetry', img: img2 },
      { title: 'National Science Day', desc: 'Science Fair', img: img3 },
    ]
  },
  {
    month: 'March 2027',
    data: [
      { title: 'International Women\'s Day', desc: 'Guest Lectures', img: img1 },
      { title: 'Annual Examinations', desc: 'March 15–25', img: img2 },
      { title: 'Graduation Ceremony', desc: 'Grade XII', img: img3 },
    ]
  }
];

const NewsEvents = () => {
  return (
    <div className="news-events">
      <h1 className="title">YBM Academic & Event Calendar 2026–2027</h1>
      {events.map((section, idx) => (
        <div key={idx} className="month-section">
          <h2 className="month">🗓️ {section.month}</h2>
          <div className="card-container">
            {section.data.map((event, index) => (
              <div key={index} className="event-card">
                <img src={event.img} alt={event.title} className="event-image" />
                <div className="event-info">
                  <h3>{event.title}</h3>
                  <p>{event.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsEvents;