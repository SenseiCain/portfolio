import React from 'react';
import { Link } from 'react-router-dom';

const BlogLink = props => {
    return (
        <div className="blog-item">
            <Link to="/Blog" className="blog-item-link">{props.blog.title}</Link>
        </div>
    )
}

export default BlogLink;