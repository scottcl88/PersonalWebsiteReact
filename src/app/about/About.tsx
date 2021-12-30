import React from 'react';

class About extends React.Component {
    render() {
        return (
            <div className="Home">
                   <main>
            <section className="contact-section">
                <h2 className="section-title">GET IN TOUCH</h2>
                <p className="mb-4">If you’d like to talk about a project, our work or anything else then get in touch.</p>
                
                <div className="contact-cards-wrapper">
                    <div className="contact-card">
                        <h6 className="contact-card-title">CALL US</h6>
                        <p className="contact-card-content">+987 654 3210 , +987 654 3210</p>
                    </div>
                    <div className="contact-card">
                        <h6 className="contact-card-title">Email Us</h6>
                        <p className="contact-card-content">hello@liveresume.com</p>
                    </div>
                </div>

                <form action="#!" className="contact-form">
                    <div className="form-group form-group-name">
                      <label htmlFor="name" className="sr-only">Name</label>
                      <input type="text" name="name" id="name" className="form-control" placeholder="NAME" />
                    </div>
                    <div className="form-group form-group-email">
                        <label htmlFor="email" className="sr-only">Email</label>
                        <input type="email" name="email" id="email" className="form-control" placeholder="EMAIL" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message" className="sr-only">Message</label>
                        <textarea name="message" id="message" className="form-control" placeholder="MESSAGE" rows={5}></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary form-submit-btn">SEND MESSAGE</button>
                </form>

            </section>
            <section className="location-section">
                <h5 className="section-title">MY LOCATION</h5>

                <div className="map-wrapper embed-responsive embed-responsive-16by9">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6780.360388122327!2d-73.94920877520023!3d40.64704896956227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25b449a659007%3A0xc4308a4849d49943!2s135%20E%2029th%20St%2C%20Brooklyn%2C%20NY%2011226%2C%20USA!5e0!3m2!1sen!2sin!4v1582520722599!5m2!1sen!2sin" width="600" height="450" className="embed-responsive-item"></iframe>
                </div>
            </section>
            <footer>Live Resume @ <a href="https://www.bootstrapdash.com" target="_blank" rel="noopener noreferrer">BootstrapDash</a>. All Rights Reserved 2020</footer>
        </main>
            </div>

        );
    }

}

export default About;