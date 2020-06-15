import React, { Component } from 'react';
import Footer from '../components/Footer';

class BlogShowContainer extends Component {
    constructor() {
        super();
        this.state = {
            content: []
        }
    }

    componentDidMount() {
        
    }

    render() {
        return (
            <div className="wrapper">
                <div className="blog-show-container">
                    {this.state.content}
                </div>
                <Footer />
            </div>
        )
    }
}

export default BlogShowContainer;