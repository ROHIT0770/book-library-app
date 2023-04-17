import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <div class="header">
            <Link to="/books-library-app" className="header__logo">
                
                <div className='header__logo-title'>
                    Books library
                </div>
            </Link>
        </div>
    )
}
