import React, { Component } from 'react';
import { connect } from 'react-redux';
import BlogLink from '../components/BlogLink';
import Footer from '../components/Footer';
import { fetchBlogTitles } from '../actions/fetchBlog';

class BlogContainer extends Component {
    generateBlogItems = () => {
        return this.props.blogs.map((b, i) => {
            return <BlogLink key={i} title={b.title} />
        })
    }

    componentDidMount() {
        if (this.props.blogs.length === 0) {
            this.props.fetchBlogs();
        }
    }
    
    render() {
        return (

            <div className="wrapper">
                <div className="blog-container">
                    <h1>Blogs</h1>
                    <div id="blog-list">
                        {this.generateBlogItems()}
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = state => ({ blogs: state.blogs });

const mapDispatchToProps = dispatch => {
    return {
        fetchBlogs: () => dispatch(fetchBlogTitles())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogContainer);