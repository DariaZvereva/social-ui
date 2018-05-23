import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './styles.css'

class NavigationNoAuth extends Component {
    render() {
        return (
            <nav class="navigation">
                <Link to='/login'><div className="nav_item">Вход</div></Link>
                <Link to='/signup'><div className="nav_item">Регистрация</div></Link>
            </nav>
        );
    }
}

export default NavigationNoAuth;