import React from 'react'
import "./AuthorCard.css"

export const AuthorCard = ({ name, pic, date }) => {

    return (
        <div className="author_wrapper">
            <div className="author_image_wrapper"><img alt="authors_profile_pic" className="image" src={pic} /></div>
            <div className="name_time_read_wrap">
                <div className="authors_name">{name}</div>
                <time className="time">
                    {date.toString().slice(4, 21)}
                </time>
            </div>
        </div>
    )
}
