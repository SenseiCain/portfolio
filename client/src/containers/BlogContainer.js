import React, { Component } from 'react';
import { connect } from 'react-redux';
import BlogLink from '../components/BlogLink';
import Footer from '../components/Footer';
import fetchBlogTitles from '../actions/fetchBlogTitles';

class BlogContainer extends Component {
    generateBlogItems = () => {
        return this.props.titles.map((t, i) => {
            return <BlogLink key={i} blog={{title: t}} />
        })
    }

    componentDidMount() {
        if (this.props.titles.length === 0) {
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

const mapStateToProps = state => ({ titles: state.blogs.titles });

const mapDispatchToProps = dispatch => {
    return {
        fetchBlogs: () => dispatch(fetchBlogTitles())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogContainer);