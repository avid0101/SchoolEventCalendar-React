import React from 'react';
import Header from '../../components/layout/Header';
import './About.css';

const About = () => {
  const features = [
    { title: "Easy Event Management", description: "Create and manage school events with our intuitive platform" },
    { title: "Communication Tools", description: "Connect with students, parents, and staff seamlessly" },
    { title: "Budget Tracking", description: "Monitor expenses and allocate resources efficiently" },
    { title: "Volunteer Coordination", description: "Organize and manage volunteers for every event" },
    { title: "Event Promotion", description: "Market your events to the entire school community" },
    { title: "Calendar Integration", description: "Sync with school calendars and schedules" }
  ];

  const teamMembers = [
    { role: "Education Professionals", description: "Former teachers and administrators with years of experience", color: "#6c63ff" },
    { role: "Software Developers", description: "Tech experts dedicated to educational solutions", color: "#10b981" },
    { role: "Event Planning Experts", description: "Seasoned coordinators who understand school dynamics", color: "#8b5cf6" }
  ];

  const stats = [
    { number: "500+", label: "Schools Trust Us" },
    { number: "2,500+", label: "Events Planned" },
    { number: "50,000+", label: "Users Engaged" },
    { number: "98%", label: "Satisfaction Rate" }
  ];

  return (
    <div className="about-page">
      <Header />
      
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-container">
          <div className="about-hero-content">
            <span className="about-badge">About Our Platform</span>
            <h1 className="about-title">
              Transforming <span className="highlight">School Events</span> with Innovation
            </h1>
            <p className="about-subtitle">
              Empowering educational institutions to create unforgettable events 
              that bring communities together through technology and expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="about-stats">
        <div className="about-container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="about-mission">
        <div className="about-container">
          <div className="mission-card">
            <div className="mission-header">
              <div className="mission-icon">
                <span className="icon-text">🎯</span>
              </div>
              <h2 className="mission-title">Our Mission</h2>
            </div>
            <p className="mission-text">
              To provide schools with intuitive, powerful tools that streamline event organization, 
              enhance communication, and foster stronger community connections through memorable 
              educational experiences.
            </p>
            <div className="mission-quote">
              <p className="quote-text">
                "We believe every school event should be as impactful and stress-free as possible 
                for educators, students, and families alike."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="about-features">
        <div className="about-container">
          <div className="section-header">
            <h2 className="section-title">What We Offer</h2>
            <p className="section-subtitle">
              Comprehensive tools designed specifically for educational event planning
            </p>
          </div>
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon-wrapper">
                  <span className="feature-number">{index + 1}</span>
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
                <div className="feature-link">
                  <span className="link-text">Learn more</span>
                  <span className="link-arrow">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="about-team">
        <div className="about-container">
          <div className="section-header white-header">
            <h2 className="section-title">Our Expert Team</h2>
            <p className="section-subtitle">
              Dedicated professionals who understand your challenges
            </p>
          </div>
          
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card">
                <div 
                  className="team-icon-wrapper"
                  style={{ backgroundColor: `${member.color}15` }} /* Light version of color */
                >
                  <div 
                    className="team-icon-circle"
                    style={{ backgroundColor: member.color }}
                  >
                    <span className="team-icon-text">{index + 1}</span>
                  </div>
                </div>
                <h3 className="team-role">{member.role}</h3>
                <p className="team-description">{member.description}</p>
              </div>
            ))}
          </div>
          
          <div className="team-experience">
            <p className="experience-text">
              Together, we bring <span className="experience-highlight">over 50 years</span> of 
              combined experience in education and technology
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="about-container">
          <div className="cta-card">
            <h2 className="cta-title">Ready to Transform Your School Events?</h2>
            <p className="cta-text">
              Join hundreds of schools already using our platform to create memorable events
            </p>
            <div className="cta-buttons">
              <button className="cta-button primary">
                Start Free Trial
              </button>
              <button className="cta-button secondary">
                Schedule a Demo
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;