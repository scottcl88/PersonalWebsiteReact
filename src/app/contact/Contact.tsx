import axios from 'axios';
import React from 'react';

class Contact extends React.Component {

    state: any = { email: "", name: "", subject: "", message: "" };
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
        console.log("Submit Form called: ", e, this.state);
        var form = e.currentTarget;
        if (!form || form.checkValidity() === false) {
          e.preventDefault();
          e.stopPropagation();
          console.log("Form not valid: ", form);
          return;
        }
        (window as any).grecaptcha.ready(() => {
            (window as any).grecaptcha.execute("6Lc6buAdAAAAAPHBGxLQUegsMf_ACveCrUaHqC5O", { action: 'submit' }).then((token: any) => {
                var request = {
                    FromEmail: this.state?.email,
                    Name: this.state?.name,
                    Subject: this.state?.subject,
                    Message: this.state?.message,
                    RecaptchaToken: token
                };
                axios.post("https://foodapi20210616194736.azurewebsites.net/api/Contact/SendToPersonal", request).then(res => {
                    console.log("Form submitted: ", res);
                }).catch(err => {
                    console.error("Failed to submit form: ", err);
                });
            });
        });
    }
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
                        <form onSubmit={this.submitForm} className="contact-form">
                            <div className="form-group form-group-name">
                                <label htmlFor="name" className="sr-only">Name</label>
                                <input type="text" name="name" id="name" className="form-control" placeholder="NAME" required value={this.state?.name} onChange={this.handleInputChange} />
                            </div>
                            <div className="form-group form-group-email">
                                <label htmlFor="email" className="sr-only">Email</label>
                                <input type="email" name="email" id="email" className="form-control" placeholder="EMAIL" required value={this.state?.fromEmail} onChange={this.handleInputChange}/>
                            </div>
                            <div className="form-group form-group-subject">
                                <label htmlFor="subject" className="sr-only">Subject</label>
                                <input type="text" name="subject" id="subject" className="form-control" placeholder="SUBJECT" required value={this.state?.subject} onChange={this.handleInputChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="message" className="sr-only">Message</label>
                                <textarea name="message" id="message" className="form-control" placeholder="MESSAGE" rows={5} required value={this.state?.message} onChange={this.handleInputChange}></textarea>
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