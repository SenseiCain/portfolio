import React from 'react';
import { Link } from 'react-router-dom';

const BlogLink = props => {
    const linkParam = props.blog.title.split(' ').join('-').toLowerCase();

    return (
        <div 
            className="blog-link"
            onClick={() => props.setActiveBlog(props.blog.title)}>
            <Link to={`blog/${linkParam}`}>
                {props.blog.title}
            </Link>
        </div>
    )
}

export default BlogLink;