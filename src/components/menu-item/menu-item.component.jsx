import React from 'react';
import { withRouter } from 'react-router-dom';
import './menu-item.style.css'

const MenuItem = ({ title, imgUrl, history, linkUrl, match }) => (
    <div onClick = { () => history.push(`${match.url}${linkUrl}`) }
        style = { {
            backgroundImage: `url(${ imgUrl })`
            
        } }
        className = 'menu-item'>
        <div className="content">
            <h1 className="title">{ title }</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
)

export default withRouter(MenuItem);