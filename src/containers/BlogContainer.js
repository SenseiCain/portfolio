import React, { Component } from 'react';
import { connect } from 'react-redux';
import BlogItem from '../components/BlogItem';
import { fetchBlogTitles } from '../actions/fetchBlog';

class BlogContainer extends Component {

    generateBlogItems = () => {
        return this.props.blogs.map((b, i) => {
            return <BlogItem key={i} blog={b} setActiveBlog={this.props.setActiveBlog}/>
        })
    }

    componentDidMount() {
        
        if (this.props.blogs.length === 0) {
            this.props.fetchBlogs();
        }

    }
    
    render() {
        return (
            <section id="blog" className="wrapper-inside">
                <div 
                    id="blog-inner"
                    className="page-inner">
                    <h1>Blogs</h1>
                    <div id="blog-list">
                        {this.generateBlogItems()}
                    </div>
                    <div id="medium-link">
                        <h5>Blogs sourced from  
                            <a 
                                href="https://medium.com/@christian24cain" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="link">
                                Medium
                            </a>
                        </h5>
                    </div>
                </div>
            </section>
        )
    }
}

const mapStateToProps = state => ({ blogs: state.blogs.items });

const mapDispatchToProps = dispatch => {
    return {
        fetchBlogs: () => dispatch(fetchBlogTitles()),
        setActiveBlog: title => dispatch({ type: "SET_ACTIVE_BLOG", title })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogContainer);