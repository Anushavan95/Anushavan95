import React from 'react';
import './Footer.css';
import logosmart from '../../images/Logo.svg';
import Tel from '../../Icons/tel.svg';
import Mail from '../../Icons/mail.svg';
import Location from '../../Icons/location.svg';
import SentEmail from '../../Icons/send.svg';
import SocialLinks from '../Header/SocialLinks/SocialLinks';
import {Link} from "react-router-dom";

export default class Footer extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            navFooter: this.props.nav
        }
    }
    render() {

        return (

            <footer className="footer-section">

                <div className="footer-section-blocks">

                    <div className="footer-blocks-list">
                        <Link to="/"><img src={logosmart} alt="LogoSmart"/></Link>
                        <p className="smart-description">Որակյալ ուսուցում, Անվճար պրակտիկա, Երաշխավորված աշխատանք</p>
                    </div>
                    <div className="card-site footer-blocks-list">
                        <h3>ԿԱՅՔԻ ՔԱՐՏԵԶ
                        </h3>

                        <ul className="footer-menu-list">
                            <li>
                                <Link to="/about" exact>Մեր մասին
                                </Link>

                            </li>
                            <li>

                                <Link to="/cooperation">Համագործակցություն</Link>

                            </li>
                            <li>
                                <Link to="/questions">Հաճախ տրվող հարցեր</Link>

                            </li>
                            <li>
                                <Link to="/courses">Դասընթացներ</Link>
                            </li>
                            <li>
                                <Link to="/blog">Բլոգ</Link>

                            </li>
                        </ul>
                    </div>
                    <div className="contact-info footer-blocks-list">

                        <h3>ԿԱՊ ՄԵԶ ՀԵՏ
                        </h3>

                        <ul className="footer-menu-list cont-top">

                            <li>
                                <a href="tel:+37441435331">
                                    <img src={Tel} alt="Tel"/>
                                    +374 41 435331
                                </a>
                            </li>

                            <li>
                                <a href="mailto:support@smartcode.am">
                                    <img src={Mail} alt="Mail"/>
                                    support@smartcode.am
                                </a>
                            </li>
                            <li>
                                <a href="https://yandex.ru/maps/-/CKukn6IQ" target="_newblank">
                                    <img src={Location} alt="Location"/>
                                    Երվանդ Քոչար 28/2
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="subscribe footer-blocks-list">
                        <h3>ԲԱԺԱՆՈՐԴԱԳՐՎԵԼ</h3>
                        <input type="email" placeholder="Էլ․ ՓՈՍՏ" className="email"/>
                        <img src={SentEmail} alt="SendEmail" className="sent-email"/>
                    </div>

                </div>
                <div className="smart-official">

                    <div className="official-block">
                        <h4 className="footer-txt">Smart Technology LLC | Բոլոր իրավունքները պաշտպանված են</h4>
                    </div>
                    <SocialLinks/>
                </div>

            </footer>

        )
    }
}