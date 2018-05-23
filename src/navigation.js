import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './styles.css'

class Navigation extends Component {
    render() {
        return (
            <nav class="navigation">
                <Link to='/my_page'><div className="nav_item">Моя страница</div></Link>
                <Link to='/users'><div className="nav_item">Друзья</div></Link>
                <Link to='/feed'><div className="nav_item">Новости</div></Link>
                <Link to='/edit'><div className="nav_item">Редактировать профиль</div></Link>
            </nav>
        );
    }
}

export default Navigation;