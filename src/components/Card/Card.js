import React from 'react'
import "./Card.css"

export const Card = ({ headline, url }) => {
    return (
        <div className="card_wrapper">
            <a target="__blank" rel="noreferrer noopener" href={url}>{headline}</a>
        </div>
    )
}
