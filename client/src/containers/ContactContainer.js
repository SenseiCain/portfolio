import React, { Component } from 'react';
import { connect } from 'react-redux';
import emailjs from 'emailjs-com';

class ContactContainer extends Component {
    constructor() {
        super();
        this.state = {
            address: '',
            subject: '',
            message: '',
            height: 'auto'
        }

        this.updateComponentSize = this.updateComponentSize.bind(this)
    }

    componentDidMount() {
        this.updateComponentSize();
        window.addEventListener('resize', this.updateComponentSize, false);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateComponentSize, false);
    }

    updateComponentSize() {
        const headerHeight = document.getElementById('header').offsetHeight;
        const navHeight = document.getElementById('navbar').offsetHeight;
        const footerHeight = document.getElementsByTagName('footer')[0].offsetHeight;

        const desiredHeight = window.innerHeight - headerHeight - navHeight - footerHeight;

        const contactHeight = document.getElementById('contact-inner').offsetHeight;

        if (contactHeight + headerHeight + navHeight + footerHeight <= window.innerHeight) {
            this.setState({
                height: desiredHeight - 60
            })
        } else {
            this.setState({
                height: 'auto'
            })
        }
    }

    handleChange = ({target: {name, value}}) => {
        this.setState({ ...this.state, [name]: value })
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
            <section id="contact" className="wrapper-inside">
                <div 
                    id="contact-inner"
                    className="page-inner"
                    style={{height: this.state.height}}>
                    <form onSubmit={this.handleSubmit}>
                        <div id="contact-inputs">
                            <input 
                                name="address"
                                type="text" 
                                value={this.state.address}
                                placeholder="Email address"
                                onChange={this.handleChange}/>
                            <input 
                                name="subject"
                                type="text" 
                                value={this.state.subject}
                                placeholder="Subject"
                                onChange={this.handleChange}/>
                            <textarea 
                                name="message"
                                value={this.state.message}
                                placeholder="Message..."
                                rows="10"
                                onChange={this.handleChange}/>
                            </div>
                            <input type="submit" className="clickable" />
                    </form>
                </div>
            </section>
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