import React from 'react'
import "./Header.css"

export const Header = () => {
    return (
        <div className="header_wrapper">
            <div className="header">
                <div className="logo"><a href="/#">NewsLaundry</a></div>
                <div className="menu_list">
                    <div className="hamburger"></div>
                    <div className="list">
                        <ul className="unordered">
                            <li><a href="/#">Video</a></li>
                            <li><a href="/#">Report</a></li>
                            <li><a href="/#">Media</a></li>
                            <li><a href="/#">Opinion</a></li>
                            <li><a href="/#">Podcast</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
