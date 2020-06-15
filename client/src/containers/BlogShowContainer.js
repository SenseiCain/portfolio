import React, { Component } from 'react';
import Footer from '../components/Footer';

class BlogShowContainer extends Component {
    componentDidMount() {
        console.log(this.props.match.params.blogId)
    }

    render() {
        return (
            <div className="wrapper">
                <div className="blog-show-container">
                </div>
                <Footer />
            </div>
        )
    }
}

export default BlogShowContainer;