import React, { Component } from 'react';
import { connect } from 'react-redux';
import BlogLink from '../components/BlogLink';
import { fetchBlogTitles } from '../actions/fetchBlog';

class BlogContainer extends Component {
    constructor() {
        super();
        this.state = {
            height: 'auto'
        }

        this.updateComponentSize = this.updateComponentSize.bind(this)
    }

    generateBlogItems = () => {
        return this.props.blogs.map((b, i) => {
            return <BlogLink key={i} blog={b} setActiveBlog={this.props.setActiveBlog}/>
        })
    }

    componentDidMount() {
        
        if (this.props.blogs.length === 0) {
            this.props.fetchBlogs();
        }

        this.updateComponentSize();
        window.addEventListener('resize', this.updateComponentSize, false);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateComponentSize, false)
    }

    updateComponentSize() {
        const headerHeight = document.getElementById('header').offsetHeight;
        const navHeight = document.getElementById('navbar').offsetHeight;
        const footerHeight = document.getElementsByTagName('footer')[0].offsetHeight;

        const desiredHeight = window.innerHeight - headerHeight - navHeight - footerHeight;

        const blogHeight = document.getElementById('blog-inner').offsetHeight;

        if (blogHeight + headerHeight + navHeight + footerHeight <= window.innerHeight) {
            this.setState({
                height: desiredHeight - 60
            })
        } else {
            this.setState({
                height: 'auto'
            })
        }
    }
    
    render() {
        return (
            <section id="blog" className="wrapper-inside">
                <div 
                    id="blog-inner"
                    className="page-inner"
                    style={{height: this.state.height}}>
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