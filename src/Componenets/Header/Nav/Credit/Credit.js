import React from 'react';
import CreditLogo from '../../../../images/Saly-credit.svg';
import {headerClasses} from '../../../../store/action/Action';
import {connect} from 'react-redux';

class Credit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showCredit: false
        }

    }

    Credithandler = () => {
        let {headerClasses} = this.props;
        headerClasses(true);
        this.setState({
            showCredit: !this.state.showCredit
        })

    }

    closeClick = () => {
        let {headerClasses} = this.props;
        headerClasses(false);
        this.setState({showCredit: false})

    }

    render() {

        let creditSign = ["credit-sign-show"];
        if (this.state.showCredit) {
            creditSign.push("show-credit");
        }
        return (
            <div className="credit-section">

                <input
                    type="button"
                    value="ԱՊԱՌԻԿ ՈՒՍՈՒՑՈՒՄ"
                    className="btn-credit btn"
                    onClick={this.Credithandler}/>
                <section className={creditSign.join(" ")}>
                    <div className="saly-credit-logo">
                        <img src={CreditLogo} alt="CreditLogo"/>
                    </div>
                    <div className="close" onClick={this.closeClick}>
                        <span className="dir1"></span>
                        <span className="dir2"></span>
                    </div>
                    <form autoComplete="true" className="credit-form">
                        <input
                            type="name"
                            name="name"
                            placeholder="Անուն Ազգանուն"
                            className="nameform"/>
                        <input type="tel" name="tel" placeholder="Հեռախոսահամար" className="telform"/>
                        <div className="doc-form">

                            <select name="document" id="doc" className="selectDoc">
                                <optgroup selected>
                                    <option value="">Փաստաթղթի տեսակ</option>
                                    <option value="">value 1</option>
                                    <option value="">value 2</option>
                                    <option value="">value 3</option>
                                </optgroup>
                            </select>
                            <input type="text" placeholder="Սերիա/համար" className="passport-seria"/>
                        </div>
                        <label>
                            <input type="checkbox"/>
                            Սույնով հաստատում եմ, որ ծանոթացել և համաձայն եմ Առքա Համաձայնագրին։
                        </label>
                        <input type="submit" value="Դիմել" className="apply-doc-form"/>
                    </form>
                </section>

            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        headerClasses: bull => dispatch(headerClasses(bull))
    };
};

export default connect(null, mapDispatchToProps)(Credit);