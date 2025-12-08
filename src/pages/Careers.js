import React from 'react';
import { motion } from 'framer-motion';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col, Button, Card, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBriefcase,
  faGraduationCap,
  faCalendarDays,
  faEnvelope,
  faLaptopCode,
  faChartLine,
  faMap,
  faCode,
  faCheckCircle
} from '@fortawesome/free-solid-svg-icons';

const Careers = () => {
  return (
    <div>
      {/* Hero Section */}
      <section 
        className="hero-section"
        style={{
          background: 'linear-gradient(rgba(26, 54, 93, 0.9), rgba(26, 54, 93, 0.8)), url(https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)',
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
                Join Our Team
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lead fs-4"
              >
                Build Your Career at ITRC, University of Sri Jayewardenepura
              </motion.p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Main Content Section */}
      <section className="section-padding">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              {/* Job Opening Card */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="border-0 shadow-lg mb-5">
                  <Card.Body className="p-5">
                    <div className="text-center mb-5">
                      <h2 className="fw-bold text-primary-custom mb-3">
                        <FontAwesomeIcon icon={faBriefcase} className="me-2" />
                        Career Opportunity
                      </h2>
                      <Badge bg="warning" className="px-3 py-2 fs-6 mb-3">
                        Now Hiring
                      </Badge>
                    </div>

                    {/* Job Title */}
                    <div className="mb-4">
                      <h3 className="fw-bold text-dark mb-2">
                        Computer Instructor (Temporary)
                      </h3>
                      <p className="text-muted mb-0">
                        Information Technology Resource Centre, Faculty of Management Studies and Commerce, 
                        University of Sri Jayewardenepura
                      </p>
                    </div>

                    {/* Main Content */}
                    <div className="mb-5">
                      <p className="fs-5 mb-4">
                        Applicants are invited for the post of Computer Instructor (Temporary), 
                        Information Technology Resource Centre, Faculty of Management Studies and Commerce, 
                        University of Sri Jayewardenepura.
                      </p>
                    </div>

                    {/* Requirements Section */}
                    <div className="mb-5">
                      <h4 className="fw-bold text-primary-custom mb-4">
                        <FontAwesomeIcon icon={faGraduationCap} className="me-2" />
                        Preliminary Requirements
                      </h4>
                      
                      <div className="ps-4">
                        <div className="d-flex align-items-start mb-3">
                          <FontAwesomeIcon icon={faCheckCircle} className="text-success mt-1 me-3" />
                          <div>
                            <h5 className="fw-bold mb-2">Educational Qualification</h5>
                            <p className="mb-0">
                              Degree from a recognized university (preferably with a class)
                            </p>
                          </div>
                        </div>

                        <div className="d-flex align-items-start">
                          <FontAwesomeIcon icon={faCheckCircle} className="text-success mt-1 me-3" />
                          <div>
                            <h5 className="fw-bold mb-2">Preferred Skills</h5>
                            <p className="mb-0">
                              Preference will be given to candidates who have sound knowledge in:
                            </p>
                            <Row className="mt-3">
                              <Col md={6}>
                                <div className="d-flex align-items-center mb-3">
                                  <FontAwesomeIcon icon={faLaptopCode} className="text-primary me-3" />
                                  <span>Accounting applications</span>
                                </div>
                                <div className="d-flex align-items-center mb-3">
                                  <FontAwesomeIcon icon={faChartLine} className="text-primary me-3" />
                                  <span>Statistical Applications</span>
                                </div>
                              </Col>
                              <Col md={6}>
                                <div className="d-flex align-items-center mb-3">
                                  <FontAwesomeIcon icon={faMap} className="text-primary me-3" />
                                  <span>GIS applications</span>
                                </div>
                                <div className="d-flex align-items-center">
                                  <FontAwesomeIcon icon={faCode} className="text-primary me-3" />
                                  <span>Computer programming</span>
                                </div>
                              </Col>
                            </Row>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Application Deadline */}
                    <div className="mb-5 p-4 bg-light rounded">
                      <div className="d-flex align-items-center justify-content-center">
                        <FontAwesomeIcon icon={faCalendarDays} className="text-warning me-3 fs-4" />
                        <div>
                        {/* <h5 className="fw-bold mb-1">Application Deadline</h5> */}
                        <p className="mb-0 fs-5">
                            Send your CV to <strong>itrc@sjp.ac.lk</strong>
                            {/* on or before <span className="text-danger fw-bold"> 31st August 2022</span> */}
                        </p>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    {/* <Button 
                    variant="primary" 
                    size="lg"
                    href="mailto:itrc@sjp.ac.lk"
                    className="me-3"
                    >
                    <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                    Apply Now
                    </Button> */}
                  </Card.Body>
                </Card>
              </motion.div>

              {/* Additional Information */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-5"
              >
                <Card className="border-0 shadow-sm">
                  <Card.Body className="p-4">
                    <h4 className="fw-bold text-primary-custom mb-3">Why Join ITRC?</h4>
                    <Row>
                      <Col md={4} className="mb-3">
                        <div className="text-center p-3">
                          <div className="bg-primary-custom text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                            <FontAwesomeIcon icon={faGraduationCap} size="lg" />
                          </div>
                          <h6 className="fw-bold">Professional Growth</h6>
                          <p className="small mb-0">Continuous learning and development opportunities</p>
                        </div>
                      </Col>
                      <Col md={4} className="mb-3">
                        <div className="text-center p-3">
                          <div className="bg-primary-custom text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                            <FontAwesomeIcon icon={faUsers} size="lg" />
                          </div>
                          <h6 className="fw-bold">Collaborative Environment</h6>
                          <p className="small mb-0">Work with experienced professionals and academic staff</p>
                        </div>
                      </Col>
                      <Col md={4} className="mb-3">
                        <div className="text-center p-3">
                          <div className="bg-primary-custom text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                            <FontAwesomeIcon icon={faLaptopCode} size="lg" />
                          </div>
                          <h6 className="fw-bold">Modern Infrastructure</h6>
                          <p className="small mb-0">Access to state-of-the-art computer labs and technology</p>
                        </div>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Careers;