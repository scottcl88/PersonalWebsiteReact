import React from 'react';

class About extends React.Component {
    render() {
        function startHobbyYear() {
            return new Date().getFullYear() - 2011;
        }
        function startProfessionalYear() {
            return new Date().getFullYear() - 2017;
        }
        return (
            <div className="about text-center">
                <div className="container">
                    <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">About</h2>
                    <div className="divider-custom">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                        <div className="divider-custom-line"></div>
                    </div>
                    <p>Hello, I'm Scott Lewis, a senior full-stack developer with a passion for leveraging technology to drive innovation and enhance user experiences. With {startHobbyYear()} years of programming as both a hobby and a profession, I bring a wealth of expertise to the table. My journey in software development spans {startProfessionalYear()} years professionally, during which I've cultivated a diverse skill set encompassing everything from front-end to back-end technologies, including C#, SQL, React, Angular, and more.</p>
                    <p>My professional journey has led me through a variety of industries, from higher education to bankruptcy and insurance. I've had the privilege of working with companies ranging from small startups to large corporations, contributing to both small and large development teams. Throughout my career, I've embraced various methodologies, including waterfall and agile scrum, and have experience in customer service positions and team leadership.</p>
                    <p>Beyond the realm of coding, I'm an avid explorer, constantly seeking new experiences and challenges. When I'm not immersed in technology, you can find me traveling, indulging in music, or catching up on the latest movies. I'm on a quest to visit all 50 states, driven by the same spirit of exploration and adventure that fuels my approach to software development. I thrive on embracing change and leveraging my skills to drive positive transformations in systems and products.</p>
                </div>
            </div>
        );
    }

}

export default About;