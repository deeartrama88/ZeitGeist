import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { Link } from 'react-router'

class HeaderMenu extends React.Component{
    render() {
        return (
            <ul>
                <li><Link activeClassName="active" onlyActiveOnIndex={true} to="/">ГЛАВНАЯ</Link></li>
                <li><Link activeClassName="active" to="/news">НОВОСТИ</Link></li>
                <li><Link activeClassName="active" to="/about">О НАС</Link></li>
                <li><Link activeClassName="active" to="/materials">МАТЕРИАЛЫ</Link></li>
                <li><Link activeClassName="active" to="/activity">АКТИВИЗМ</Link></li>
                <li><Link activeClassName="active" to="/projects">ПРОЭКТЫ</Link></li>
                <li><Link activeClassName="active" to="/faq">FAQ</Link></li>
                <li><Link activeClassName="active" to="/contacts">КОНТАКТЫ</Link></li>
            </ul>
        );
    }
}
class Header extends React.Component{
    render() {
        return (
            <header>
                <div className="container">
                    <div className="desctop_menu">
                        {/* <img className="headerLogo" src="../assets/images/logo.png"/> */}
                        <HeaderMenu />
                    </div>
                    <div className="mobile_menu">
                        <div className="mobile_icon">menu</div>
                        <div className="mobile_menu_wrap">
                            <HeaderMenu />
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

function mapStateToProps(state) {
    return {
        
    }
}

function mathDispatchToProps(dispatch) {
    return bindActionCreators({

    }, dispatch);
}

export default connect(mapStateToProps, mathDispatchToProps)(Header);
