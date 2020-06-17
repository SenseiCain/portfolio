import React, { Component } from 'react';
import { connect } from 'react-redux';
import Footer from '../components/Footer';
import emailjs from 'emailjs-com';

class ContactContainer extends Component {
    constructor() {
        super();
        this.state = {
            address: '',
            subject: '',
            message: ''
        }
    }

    handleAddressChange = event => {
        this.setState({ ...this.state, address: event.target.value })
    }

    handleSubjectChange = event => {
        this.setState({ ...this.state, subject: event.target.value })
    }

    handleMessageChange = event => {
        this.setState({ ...this.state, message: event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.startAnimation();

        const emailData = {
            number: Math.floor(Math.random() * 1000) + 1 ,
            email: this.state.address,
            subject: this.state.subject,
            message: this.state.message
        };
        
        emailjs.send('default_service', 'contact_me', emailData, 'user_6IfNSpK6uTB8qiBavAHoF')
            .then((result) => {
                console.log(result.text);
                this.props.stopAnimation();
            }, (error) => {
                console.log(error.text);
                this.props.stopAnimation();
            });
    }

    render() {
        return (
            <div className="shadow drop">
                <div className="contact-container">
                    <form onSubmit={this.handleSubmit}>
                        <input 
                            name="email_address"
                            type="text" 
                            value={this.state.address}
                            placeholder="Email address"
                            onChange={this.handleAddressChange}/>
                        <input 
                            name="subject"
                            type="text" 
                            value={this.state.subject}
                            placeholder="Subject"
                            onChange={this.handleSubjectChange}/>
                        <textarea 
                            name="message"
                            value={this.state.message}
                            placeholder="Message..."
                            rows="10"
                            onChange={this.handleMessageChange}/>
                        <input type="submit" />
                    </form>
                </div>
                <Footer />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        startAnimation: () => dispatch({ type: "START_ANIMATION" }),
        stopAnimation: () => dispatch({ type: "STOP_ANIMATION" })
    }
}

export default connect(null, mapDispatchToProps)(ContactContainer);