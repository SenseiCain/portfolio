import React from 'react';

const BlogLink = props => {

    return (
        <div className="blog-item">
            <a 
                href={props.blog.url} 
                target="_blank"
                className="blog-item-link">
                {props.blog.title}
            </a>
        </div>
    )
}

export default BlogLink;