import React, { Component } from 'react';
import Footer from '../components/Footer';

class BlogContainer extends Component {
    render() {
        return (
            <div className="wrapper">
                <div className="blog-container">
                    <h1>Blog</h1>
                </div>
                <Footer />
            </div>
        )
    }
}

export default BlogContainer;