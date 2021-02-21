import React, {Fragment, Component} from "react";
import Credit from './Credit/Credit';
import Login from './Login/Login';
import Menu from './Menu/Menu';
import logosmart from '../../../images/Logo.svg';
import {Link} from 'react-router-dom';
import SubMenu from './Menu/SubMenu';

class Nav extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <Fragment>
                <div className="nav-lists">
                    <div className="header-nav-section">
                        <div className="logo-page" id="home-page">
                            <Link to="/" onClick={this.props.headerClasses}>
                                <img src={logosmart} alt="SmartCode" title="SmartCode"/>
                            </Link>
                        </div>
                    </div>
                    <Credit/>
                    <Login/>
                    <Menu
                        showMenu={this.props.showMenu}
                        setHeaderState={() => this.props.setHeaderState}/>
                </div>
                <SubMenu
                    setHeaderState={() => this.props.setHeaderState}
                    showMenu={this.props.showMenu}/>
            </Fragment>
        )
    }
};

// const mapDispatchToProps = dispatch => {     return {         headerClasses:
// bull => dispatch(headerClasses(bull))     }; }; export default connect(null,
// mapDispatchToProps)(Nav);
export default Nav;