import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = ({author, comments, imgSrc, title}) => {
    return (
        <div className="blogs__wapper_card">
            <Link to="/blog-details">
                <img src={imgSrc} alt={title} className="card__thumb" />
            </Link>
            <div>
                <Link to="/blog-details" className="card__title t__28">{title}</Link>
                <div className="d-flex card__author">
                    <p>
                        <img src="/icons/user-black.svg" alt="author" />
                        <span> {author}</span>
                    </p>
                    <p>
                        <img src="/icons/comments-black.svg" alt="comments" />
                        <span> {comments} Comments</span>
                    </p>
                </div>
            </div>
        </div>

    )
}

export default BlogCard