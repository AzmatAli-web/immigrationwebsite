import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const BlogSection = () => {
  const blogs = [
    {
      title: 'Am I a Canadian Citizen? Bill C-3 Eligibility & The 1,095-Day Rule (2026 Guide)',
      excerpt: 'Am I a Canadian citizen? Discover how Bill C-3 changes citizenship by descent in 2026. Learn about the 1,095-day rule and how to restore your status today.',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      title: 'Canadian Citizenship New Rules 2025: Bill C-3, First-Generation Limit & Citizenship by Descent Explained',
      excerpt: "Canada's new citizenship rules are here. Learn how Bill C-3 removes the first-generation limit in 2025 and if you qualify for citizenship by descent. Book a consultation.",
      image: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      title: 'What should be included in an employment reference letter for immigration to Canada?',
      excerpt: 'Learn what IRCC requires in an employment reference letter for Canada immigration. Checklist, Express Entry rules, sample format, and common mistakes.',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
  ];

  return (
    <section className="blog-section" id="blog">
      <Container>
        <h2>Canadian Immigration Tips</h2>
        <Row>
          {blogs.map((blog, index) => (
            <Col lg={4} md={6} key={index} className="mb-4">
              <div className="blog-card">
                <img 
                  src={blog.image} 
                  alt={blog.title}
                  className="blog-card-image"
                />
                <div className="blog-card-content">
                  <h3>{blog.title}</h3>
                  <p>{blog.excerpt}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        <div className="text-center">
          <a href="#blog" className="show-more-btn">
            Show More
          </a>
        </div>
      </Container>
    </section>
  );
};

export default BlogSection;
