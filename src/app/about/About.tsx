import React from 'react';

class About extends React.Component {
    render() {
        return (
            <div className="about text-center">
                <div className="container">
                    <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">About</h2>
                    <div className="divider-custom">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                        <div className="divider-custom-line"></div>
                    </div>
                    <p>Hello, I am Scott Lewis, a senior full stack developer. I have been programming as a hobby for 12 years and proffessionaly for 6 years.<br />
                        I have a wide range of skills from front-end to back-end technologies including C#, SQL, React, Angular, and more.
                        My professional experiences include a variety of industries from higher education, bankruptcy and insurance. 
                        I have worked for companies ranging from small startup to large coroprations and both small to large development teams.
                        I have experience with customer service positions and team leadership, and have been part of both waterfull and agile scrum methodologies.
                    </p>
                    <p>In my free time I love to code and experiement with new technologies, but outside of that I enjoy traveling, listening to music and watching movies. I am a huge Imagine Dragons fan and currently on my way to visit all 50 states!</p>
                    <p>I love to embrace change and new ideas. I enjoy taking on new challenges and using my technology skills to improve systems and products.</p>
                </div>
            </div>
        );
    }

}

export default About;