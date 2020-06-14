import React, { Component } from 'react';
import Footer from '../components/Footer';

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
        console.log(this.state)
    }

    render() {
        return (
            <div className="wrapper">
                <div className="contact-container">
                    <form onSubmit={this.handleSubmit}>
                        <input 
                            type="text" 
                            value={this.state.address}
                            placeholder="Email address"
                            onChange={this.handleAddressChange}/>
                        <input 
                            type="text" 
                            value={this.state.subject}
                            placeholder="Subject"
                            onChange={this.handleSubjectChange}/>
                        <textarea 
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

export default ContactContainer;