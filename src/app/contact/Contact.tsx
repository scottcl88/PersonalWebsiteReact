import axios from 'axios';
import React from 'react';
import { Toast } from 'react-bootstrap';

class Contact extends React.Component {

    state: any = { showErrorToast: false, showSuccessToast: false, disableButton: false, email: "", name: "", subject: "", message: "" };
    constructor(props: any) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event: any) {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
        console.log("Setting state to: ", name, value);
        this.setState({
            [name]: value,
        });
        console.log("Result: ", this.state);
    }
    submitForm = (e: any) => {
        e.preventDefault();
        e.stopPropagation();
        console.log("Submit Form called: ", e, this.state);
        var form = e.currentTarget;
        if (!form || form.checkValidity() === false) {
            e.preventDefault();
            console.log("Form not valid: ", form);
            return;
        }
        this.setState({ disableButton: true });
        var request = {
            FromEmail: this.state?.email,
            Name: this.state?.name,
            Subject: this.state?.subject,
            Message: this.state?.message
        };
        let headers = { 'Content-Type': 'application/json', 'x-functions-key': 'Vv4ApfIJJbMiVsUKRJMVD-A8OUuHlvzkuiWB-56iO-LUAzFum52-Hg==' };
        axios.post("https://scottcl-emailfunction.azurewebsites.net/api/SendEmail", request, { headers: headers }).then(res => {
            console.log("Form submitted: ", res);
            this.setState({ showSuccessToast: true });
        }).catch(err => {
            console.error("Failed to submit form: ", err);
            this.setState({ showErrorToast: true });
        }).finally(() => {
            this.setState({ disableButton: false });
        });
    }
    render() {
        return (
            <div className="contact">
                <div className="container">
                    <section className="contact-section">
                        <h2 className="section-title">Contact</h2>
                        <p className="mb-4">If you'd like to reach me, please send an email or use the form below. I will try to get back to you as soon as possible.
                            <br></br><a href="https://tidycal.com/scottcl" id="tidycal-link" target='_blank'>You may also schedule time with me.</a>
                        </p>
                        <div className="contact-cards-wrapper">
                            <div className="contact-card">
                                <h6 className="contact-card-title">Email</h6>
                                <p className="contact-card-content"><a href="mailto:scottcl@outlook.com" target="_blank">scottcl@outlook.com</a></p>
                            </div>
                        </div>
                        <form onSubmit={this.submitForm} className="contact-form">
                            <div className="form-group form-group-name">
                                <label htmlFor="name" className="sr-only">Your Name</label>
                                <input type="text" name="name" id="name" className="form-control" placeholder="YOUR NAME" required value={this.state?.name} onChange={this.handleInputChange} />
                            </div>
                            <div className="form-group form-group-email">
                                <label htmlFor="email" className="sr-only">Your Email</label>
                                <input type="email" name="email" id="email" className="form-control" placeholder="YOUR EMAIL" required value={this.state?.fromEmail} onChange={this.handleInputChange} />
                            </div>
                            <div className="form-group form-group-subject">
                                <label htmlFor="subject" className="sr-only">Subject</label>
                                <input type="text" name="subject" id="subject" className="form-control" placeholder="SUBJECT" required value={this.state?.subject} onChange={this.handleInputChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message" className="sr-only">Message</label>
                                <textarea name="message" id="message" className="form-control" placeholder="MESSAGE" rows={5} required value={this.state?.message} onChange={this.handleInputChange}></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary form-submit-btn" disabled={this.state.disableButton}><i className="fas fa-paper-plane mr-2"></i>SEND MESSAGE</button>
                        </form>
                    </section>
                    <Toast onClose={() => this.setState({ showErrorToast: false })} bg="danger" show={this.state.showErrorToast} delay={3000} autohide>
                        <Toast.Body>An error occurred sending your message</Toast.Body>
                    </Toast>
                    <Toast onClose={() => this.setState({ showSuccessToast: false })} bg="success" show={this.state.showSuccessToast} delay={3000} autohide>
                        <Toast.Body>Message sent!</Toast.Body>
                    </Toast>

                    {/* <div className="calendly-inline-widget" data-url="https://calendly.com/scottlewis" ></div>
                        <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script> */}
                </div>
            </div>

        );
    }

}

export default Contact;