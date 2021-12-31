import React from 'react';

class Contact extends React.Component {
    render() {
        return (
            <div className="contact">
                <div className="container">
                    <section className="contact-section">
                        <h2 className="section-title">Contact</h2>
                        <p className="mb-4">If you’d like to reach me, please send an email or use the form below. I will try to get back to you as soon as possible.</p>

                        <div className="contact-cards-wrapper">
                            <div className="contact-card">
                                <h6 className="contact-card-title">Email</h6>
                                <p className="contact-card-content"><a href="mailto:scottcl@outlook.com" target="_blank">scottcl@outlook.com</a></p>
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
                </div>
            </div>

        );
    }

}

export default Contact;