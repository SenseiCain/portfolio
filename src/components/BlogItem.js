import React from 'react';
import { Link } from 'react-router-dom';

const BlogItem = props => {
    const linkParam = props.blog.title.split(' ').join('-').toLowerCase();

    return (
        <div
            onClick={() => props.setActiveBlog(props.blog.title)}    
            className="blog-card"
            >
            <div className="blog-bar"></div>
            <div className="blog-main">
                <div className="blog-title">
                    <Link to={`blog/${linkParam}`}>
                        <h3>{props.blog.title}</h3>
                    </Link>
                </div>
                <div className="blog-info">
                    <span className="info">{props.blog.date}</span>
                </div>
            </div>
        </div>
    )
}

export default BlogItem;