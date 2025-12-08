import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col, Card, Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faChevronLeft, faChevronRight, faX } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  const [showGallery, setShowGallery] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const values = [
    {
      icon: 'bi-people',
      title: 'Respect & Dignity',
      description: 'Respect the rights, differences, and dignity of our community'
    },
    {
      icon: 'bi-shield-check',
      title: 'Honesty & Integrity',
      description: 'Maintain honesty and integrity in all activities'
    },
    {
      icon: 'bi-award',
      title: 'Excellence',
      description: 'Diligent pursuit of excellence in all our work'
    },
    {
      icon: 'bi-check-circle',
      title: 'Accountability',
      description: 'Accountability for actions and workplace conduct'
    },
    {
      icon: 'bi-lightning',
      title: 'Reliability',
      description: 'Responsive, accessible, and reliable infrastructure'
    },
    {
      icon: 'bi-graph-up',
      title: 'Collaboration',
      description: 'Results through leadership and teamwork'
    }
  ];

  const facilities = [
    { 
      number: '8', 
      label: 'Computer Labs'
    },
    { 
      number: '500+', 
      label: 'Networked Computers'
    },
    { 
      number: '20+', 
      label: 'Qualified Staff'
    },
   
  ];

  const services = [
    {
      icon: 'bi-check-circle-fill',
      title: 'Personal User Accounts',
      description: 'Individual login with personal storage space for academic content'
    },
    {
      icon: 'bi-check-circle-fill',
      title: 'File Management',
      description: 'Take Files-out System for easy data transfer to removable devices'
    },
    {
      icon: 'bi-check-circle-fill',
      title: 'Password Reset',
      description: 'Self-service password reset system for student convenience'
    },
    {
      icon: 'bi-check-circle-fill',
      title: 'Internet Access',
      description: 'Dedicated lab with 50 computers for internet activities'
    },
    {
      icon: 'bi-check-circle-fill',
      title: 'Licensed Software',
      description: 'Free Microsoft software through university partnership'
    },
    {
      icon: 'bi-check-circle-fill',
      title: 'Digital Notice Board',
      description: 'Real-time updates on timetables and activities'
    }
  ];

  // ITRC Gallery Images
  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "ITRC Computer Lab"
    },
    {
      url: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Modern Computer Setup"
    },
    {
      url: "https://images.unsplash.com/photo-1568992688065-536aad8a12f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "ITRC Students Working"
    },
    {
      url: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "IT Infrastructure"
    },
    {
      url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      alt: "Modern Computer Lab"
    },
    {
      url: "https://images.unsplash.com/photo-1568992688065-536aad8a12f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      alt: "Student Learning Zone"
    },
    {
      url: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      alt: "ITRC Infrastructure"
    },
    {
      url: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=450&q=80",
      alt: "Technology Workshop"
    }
  ];

  const openGallery = () => {
    setShowGallery(true);
    setCurrentImageIndex(0);
  };

  const closeGallery = () => {
    setShowGallery(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  // Split services into two arrays for two columns
  const leftColumnServices = services.slice(0, 3);
  const rightColumnServices = services.slice(3, 6);

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="hero-section"
        style={{
          background: 'linear-gradient(rgba(26, 54, 93, 0.9), rgba(26, 54, 93, 0.8)), url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '50vh',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          padding: '120px 0 80px'
        }}
      >
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="display-5 fw-bold mb-4"
              >
                About ITRC
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lead fs-4"
              >
                Gateway for IT Development Among FMSC Students
              </motion.p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Mission Section */}
      <section className="section-padding">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <motion.h2
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="section-title mb-4"
              >
                Our Mission
              </motion.h2>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <p className="lead text-muted mb-4">
                  To develop and maintain <strong>excellence in Information and Communication Systems</strong> through facilitating accessibility to information for our academic community.
                </p>
                
                <p className="mb-4">
                  We provide the latest knowledge and highest quality skills in computing technologies, using innovative and secure technologies to support productivity and wider accessibility to information resources.
                </p>

                <div className="bg-light-custom p-4 rounded">
                  <p className="mb-0 text-primary-custom fw-semibold">
                    <i className="bi bi-info-circle me-2"></i>
                    ITRC serves as the main gateway for IT development among FMSC students and fulfills most IT-related needs of faculty academics.
                  </p>
                </div>
              </motion.div>
            </Col>
            
            <Col lg={6} className="mt-5 mt-lg-0">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                {/* Image Gallery Grid */}
                <Row className="g-3">
                  {galleryImages.slice(0, 4).map((image, index) => (
                    <Col key={index} sm={6}>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                        className="gallery-image-container"
                      >
                        <img 
                          src={image.url}
                          alt={image.alt}
                          className="gallery-image"
                          style={{
                            width: '100%',
                            height: '180px',
                            objectFit: 'cover',
                            borderRadius: '10px',
                            boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                          }}
                        />
                      </motion.div>
                    </Col>
                  ))}
                </Row>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Who We Are Section - Moved from Home */}
      <section className="section-padding">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <motion.h2
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="section-title"
              >
                Who We Are
              </motion.h2>
              
              <motion.h3
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="h4 mb-4 text-primary-custom"
              >
                ITRC | Your Hub for Digital Learning and Innovation
              </motion.h3>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-muted mb-4"
              >
                The ITRC is dedicated to providing state-of-the-art technological support for all students at FMSC. We maintain modern computer labs, high-speed networks, and comprehensive IT services to ensure every student has the tools they need to succeed in the digital economy.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="row text-center mt-4"
              >
                {[
                  { number: '8', label: 'Computer Labs' },
                  { number: '~6000', label: 'Students Served' },
                  { number: '20+', label: 'Dedicated Staff' }
                ].map((stat, index) => (
                  <div key={index} className="col-4">
                    <h4 className="text-primary-custom fw-bold">{stat.number}</h4>
                    <p className="small text-muted">{stat.label}</p>
                  </div>
                ))}
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-4 small text-muted"
              >
                We operate 7 days a week, from 8:00 am to 8:30 pm, providing flexible access to resources.
              </motion.p>
            </Col>
            
            <Col lg={6} className="mt-4 mt-lg-0">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="position-relative"
              >
                {/* Gallery Container */}
                <div 
                  className="gallery-container shadow-lg"
                  style={{
                    height: '400px',
                    borderRadius: '15px',
                    overflow: 'hidden',
                    position: 'relative',
                    backgroundColor: '#f8f9fa',
                    cursor: 'pointer'
                  }}
                  onClick={openGallery}
                >
                  {/* Gallery Grid */}
                  <div 
                    className="gallery-grid"
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(4, 1fr)',
                      gridTemplateRows: 'repeat(4, 1fr)',
                      gap: '4px',
                      height: '100%',
                      width: '100%'
                    }}
                  >
                    {/* Image 1 - Large */}
                    <div 
                      className="gallery-item"
                      style={{
                        gridColumn: '1 / 3',
                        gridRow: '1 / 3',
                        overflow: 'hidden'
                      }}
                    >
                      <img 
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                        alt="Modern Computer Lab"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.3s ease'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                      />
                    </div>
                    
                    {/* Image 2 - Small */}
                    <div 
                      className="gallery-item"
                      style={{
                        gridColumn: '3 / 4',
                        gridRow: '1 / 2',
                        overflow: 'hidden'
                      }}
                    >
                      <img 
                        src="https://images.unsplash.com/photo-1568992688065-536aad8a12f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                        alt="Student Learning Zone"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.3s ease'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                      />
                    </div>
                    
                    {/* Image 3 - Medium */}
                    <div 
                      className="gallery-item"
                      style={{
                        gridColumn: '4 / 5',
                        gridRow: '1 / 3',
                        overflow: 'hidden'
                      }}
                    >
                      <img 
                        src="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                        alt="ITRC Infrastructure"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.3s ease'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                      />
                    </div>
                    
                    {/* Image 4 - Tall */}
                    <div 
                      className="gallery-item"
                      style={{
                        gridColumn: '3 / 4',
                        gridRow: '2 / 4',
                        overflow: 'hidden'
                      }}
                    >
                      <img 
                        src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=450&q=80"
                        alt="Technology Workshop"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.3s ease'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                      />
                    </div>
                    
                    {/* Image 5 - Wide */}
                    <div 
                      className="gallery-item"
                      style={{
                        gridColumn: '1 / 3',
                        gridRow: '3 / 5',
                        overflow: 'hidden'
                      }}
                    >
                      <img 
                        src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                        alt="Collaborative Learning"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.3s ease'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                      />
                    </div>
                    
                    {/* Clickable "20+" Gallery Opener */}
                    <div 
                      className="gallery-item"
                      style={{
                        gridColumn: '4 / 5',
                        gridRow: '3 / 5',
                        backgroundColor: 'var(--primary-blue)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        textAlign: 'center',
                        padding: '10px',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--secondary-blue)';
                        e.currentTarget.style.transform = 'scale(1.02)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--primary-blue)';
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                      onClick={openGallery}
                    >
                      <div>
                        <div style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '5px' }}>
                          20+
                        </div>
                        <div style={{ fontSize: '0.7rem' }}>
                          View Gallery
                        </div>
                        <div style={{ fontSize: '0.6rem', opacity: 0.8, marginTop: '5px' }}>
                          Click to explore
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Facilities Overview - Single Line Design */}
      <section className="py-5 bg-light-custom">
        <Container>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center section-title mb-5"
          >
            Our Facilities
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="facilities-single-line"
          >
            <Row className="g-0 align-items-center justify-content-center">
              {facilities.map((facility, index) => (
                <React.Fragment key={index}>
                  <Col lg={3} md={6} className="text-center">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="facility-item-single"
                    >
                      <h3 className="facility-number-single text-primary-custom fw-bold mb-2">
                        {facility.number}
                      </h3>
                      <p className="facility-label-single text-dark mb-0">
                        {facility.label}
                      </p>
                    </motion.div>
                  </Col>
                  {index < facilities.length - 1 && (
                    <div className="col-auto d-none d-lg-block">
                      <div className="facility-divider-single"></div>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </Row>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-5"
          >
            <div className="bg-primary-custom text-white p-4 rounded">
              <h5 className="mb-2">
                <i className="bi bi-clock me-2"></i>
                Operating Hours
              </h5>
              <p className="mb-1 operating-hours-text">Weekdays: 8:00 AM - 8:30 PM   |    Weekends: 8:00 AM - 6:00 PM</p>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Services Section - 2 Column Layout */}
      <section className="section-padding">
        <Container>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center section-title mb-5"
          >
            Student Services
          </motion.h2>
          
          <Row className="g-5">
            {/* Left Column */}
            <Col lg={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="services-column"
              >
                {leftColumnServices.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    whileHover={{ x: 10 }}
                    className="service-item"
                  >
                    <div className="service-content">
                      <div className="service-icon-container-blue">
                        <FontAwesomeIcon icon={faCheck} className="service-tick-blue" />
                      </div>
                      <div className="service-text">
                        <h5 className="service-title">{service.title}</h5>
                        <p className="service-description">{service.description}</p>
                      </div>
                    </div>
                    {index < leftColumnServices.length - 1 && <hr className="service-divider" />}
                  </motion.div>
                ))}
              </motion.div>
            </Col>

            {/* Right Column */}
            <Col lg={6}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="services-column"
              >
                {rightColumnServices.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                    whileHover={{ x: 10 }}
                    className="service-item"
                  >
                    <div className="service-content">
                      <div className="service-icon-container-blue">
                        <FontAwesomeIcon icon={faCheck} className="service-tick-blue" />
                      </div>
                      <div className="service-text">
                        <h5 className="service-title">{service.title}</h5>
                        <p className="service-description">{service.description}</p>
                      </div>
                    </div>
                    {index < rightColumnServices.length - 1 && <hr className="service-divider" />}
                  </motion.div>
                ))}
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Values Section */}
      <section className="py-5 bg-dark text-white">
        <Container>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center section-title mb-5 text-white"
          >
            Our Values
          </motion.h2>
          
          <Row className="g-4">
            {values.map((value, index) => (
              <Col key={index} md={6} lg={4}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div className="bg-secondary bg-opacity-25 p-4 rounded h-100">
                    <i className={`bi ${value.icon} display-6 text-accent mb-3`}></i>
                    <h5 className="fw-bold mb-3">{value.title}</h5>
                    <p className="text-light mb-0">{value.description}</p>
                  </div>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Additional Info Section */}
      <section className="section-padding">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <h3 className="section-title mb-4">Examination & Learning Support</h3>
                <p className="lead text-muted mb-4">
                  ITRC provides the technological platform for conducting online and computer-based practical examinations 
                  utilizing Learning Management Systems (LMS) and our advanced Exam Management System.
                </p>
                
                <div className="row g-4 mt-4">
                  <div className="col-md-6">
                    <div className="bg-light-custom p-4 rounded">
                      <i className="bi bi-cast display-6 text-accent mb-3"></i>
                      <h5 className="fw-bold">Audio-Visual Facility</h5>
                      <p className="text-muted mb-0">Share lectures across all labs simultaneously</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="bg-light-custom p-4 rounded">
                      <i className="bi bi-laptop display-6 text-accent mb-3"></i>
                      <h5 className="fw-bold">Scheduled Labs</h5>
                      <p className="text-muted mb-0">Labs allocated for lectures and practical classes</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Gallery Modal */}
      <Modal 
        show={showGallery} 
        onHide={closeGallery} 
        size="xl" 
        centered
        className="gallery-modal"
      >
        <Modal.Header className="border-0 pb-0">
          <Modal.Title className="w-100">
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="mb-0">ITRC Gallery</h5>
              <button 
                onClick={closeGallery}
                className="btn btn-sm btn-outline-secondary border-0"
                style={{ fontSize: '1.2rem' }}
              >
                <FontAwesomeIcon icon={faX} />
              </button>
            </div>
          </Modal.Title>
        </Modal.Header>
        
        <Modal.Body className="pt-0">
          {/* Main Image Display */}
          <div className="position-relative mb-4">
            <div 
              style={{
                height: '400px',
                borderRadius: '10px',
                overflow: 'hidden',
                backgroundColor: '#f8f9fa'
              }}
            >
              <img 
                src={galleryImages[currentImageIndex].url}
                alt={galleryImages[currentImageIndex].alt}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain'
                }}
              />
            </div>
            
            {/* Navigation Arrows */}
            <button 
              onClick={prevImage}
              className="btn btn-primary position-absolute"
              style={{
                top: '50%',
                left: '15px',
                transform: 'translateY(-50%)',
                borderRadius: '50%',
                width: '50px',
                height: '50px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            
            <button 
              onClick={nextImage}
              className="btn btn-primary position-absolute"
              style={{
                top: '50%',
                right: '15px',
                transform: 'translateY(-50%)',
                borderRadius: '50%',
                width: '50px',
                height: '50px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
          
          {/* Image Title */}
          <h6 className="text-center mb-3">
            {galleryImages[currentImageIndex].alt}
          </h6>
          
          {/* Thumbnail Strip */}
          <div 
            className="d-flex justify-content-center gap-2"
            style={{
              overflowX: 'auto',
              paddingBottom: '10px'
            }}
          >
            {galleryImages.map((image, index) => (
              <div
                key={index}
                onClick={() => goToImage(index)}
                style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  border: currentImageIndex === index ? '3px solid var(--primary-blue)' : '2px solid #dee2e6',
                  flexShrink: 0
                }}
                className="transition-all"
              >
                <img 
                  src={image.url}
                  alt={image.alt}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
            ))}
          </div>
          
          {/* Image Counter */}
          <div className="text-center mt-3 text-muted small">
            {currentImageIndex + 1} / {galleryImages.length}
          </div>
        </Modal.Body>
      </Modal>

      <style jsx>{`
        .gallery-image-container {
          transition: transform 0.3s ease;
        }
        
        .gallery-image:hover {
          transform: scale(1.02);
        }
        
        .gallery-image {
          transition: transform 0.3s ease;
        }
      `}</style>
    </div>
  );
};

export default About;