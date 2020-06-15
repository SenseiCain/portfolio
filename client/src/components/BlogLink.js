import React from 'react';
import { Link } from 'react-router-dom';

const BlogLink = props => {
    const blogParams = props.blog.title.split(' ').join('-');
    const blogUrl = `/blog/${blogParams}`.toLowerCase();

    return (
        <div className="blog-item">
            <Link to={blogUrl} className="blog-item-link">{props.blog.title}</Link>
        </div>
    )
}

export default BlogLink;