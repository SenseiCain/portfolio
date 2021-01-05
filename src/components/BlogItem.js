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
            <Link to={`blog/${linkParam}`}>
                <div className="blog-main">
                    <div className="blog-title">
                        
                            <h3>{props.blog.title}</h3>
                    </div>
                    <div className="blog-info">
                        <span className="info">{props.blog.date}</span>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default BlogItem;