import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const WorkWithUsSection = () => {
  const steps = [
    {
      number: '1',
      title: 'Consultation',
      description: 'Participate in a one-on-one consultation with one of our immigration experts. We can meet in person, by telephone or online.'
    },
    {
      number: '2',
      title: 'Eligibility',
      description: 'Discuss your unique story and discover exactly what applies to your situation: the Canadian immigration process, requirements, outcomes, and timeframes.'
    },
    {
      number: '3',
      title: 'Solution',
      description: 'Get answers to all of your questions — instantly.'
    },
    {
      number: '4',
      title: 'Action',
      description: 'The best part? Your stress disappears when you know exactly what to do and exactly what to expect.'
    }
  ];

  return (
    <section className="work-with-us-section">
      <Container>
        <h2>Work With Us</h2>
        <p className="subtitle">For Simple and Successful Immigration to Canada</p>
        <p className="heres-how">Here's how:</p>
        <Row>
          {steps.map((step, index) => (
            <Col lg={3} md={6} key={index} className="mb-4">
              <div className="process-step">
                <div className="step-number">{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </Col>
          ))}
        </Row>
        <div className="text-center mt-4">
          <a href="#start" className="start-now-btn">
            Start Now
          </a>
        </div>
      </Container>
    </section>
  );
};

export default WorkWithUsSection;
