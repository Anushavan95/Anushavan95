import React from 'react';
import LoginSal from '../../../../images/loginSaly.svg';
import {connect} from 'react-redux';

import {headerClasses} from '../../../../store/action/Action';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showCreditModal: props.showCredit,
            showLogin: false,
            classAdd: false,
            showCreditLog: props.showCredit
        }
        console.log(this.state.showLogin)
    }

    loginHandler = () => {
        let {headerClasses} = this.props;
        headerClasses(true);
        this.setState({
            showLogin: !this.state.showLogin,
            classAdd: !this.state.clasAdd,
            showCreditModal: !this.state.showCreditModal
        })

    }
    closeModal = () => {
        let {headerClasses} = this.props;
        headerClasses(true);
        this.setState({showLogin: false})

    }

    render() {

        let loginSign = ["login-sign-show"];
        if (this.state.showLogin ) {
            loginSign.push("show-login");

        }

        return (

            <section className="login-section">
                <input
                    type="button"
                    value="ԳՐԱՆՑՎԵԼ"
                    className="btn-login btn"
                    onClick={this.loginHandler}/>
                <div className={loginSign.join(" ")}>
                    <div className="saly-credit-logo">
                        <img src={LoginSal} alt="LoginSal"/>
                    </div>
                    <div className="close" onClick={this.closeModal} id="login-page">
                        <span className="dir1"></span>
                        <span className="dir2"></span>
                    </div>
                    <form autoComplete="true" className="credit-form">
                        <input
                            type="name"
                            name="name"
                            placeholder="Անուն Ազգանուն"
                            className="nameform"/>
                        <input type="email" name="email" placeholder="էլ․փոստ" className="email"/>
                        <input type="tel" name="tel" placeholder="Հեռախոսահամար" className="telform"/>
                        <input type="submit" value="Դիմել" className="apply-doc-form"/>
                    </form>
                </div>
            </section>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        headerClasses: bull => dispatch(headerClasses(bull))
    };
};

export default connect(null, mapDispatchToProps)(Login);