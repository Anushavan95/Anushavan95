import {Component} from "react";
import './About.css';
import DecoratelLine from '../../../Icons/DecorativeLine.svg';
import AboutHeaderImg from '../../../images/about-header-img.svg';
import LearnCourse from '../../../images/course.svg';
import NarekCourse from '../../../images/narek.svg';

class Aboutus extends Component {
    render() {

        return (
            <section className="about-section">
                <div className="about-col-header">
                    <div className="about-header">
                        <div className="title-about">
                            <h2 className="ab-txt">Մեր մասին</h2>
                            <h3 className="desc-txt">Որակյալ ուսուցում, Անվճար պրակտիկա, Երաշխավորված աշխատանք</h3>
                        </div>
                        <div className="logo-about-header">
                            <img src={AboutHeaderImg} alt="AboutHeaderImg"/>

                        </div>

                    </div>
                    <img src={DecoratelLine} alt="DecoratelLine" className="decoratelLine"/>
                </div>

                <SmartAbout/>

            </section>
        )
    }

}

function SmartAbout() {
    return (
        <div className="about-smart">
            <div className="about-smart-this">
                <div className="img-smart-code">
                    <img src={NarekCourse} alt="NarekCourse" className="courseNarek"/>
                    <img src={LearnCourse} alt="LearnCourse" className="learncourse"/>

                </div>

                <div className="about-text-info-smart">
                    <p>Մեր ընկերությունը հիմնադրվել է 2017 թվականին և արդեն 3 տարի է իրականացնում է
                        web ծրագրավորման խորացված դասընթացներ ինչպես սկսնակների, այնպես էլ բազային
                        գիտելիքներ ունեցողների համար:
                    </p>

                    <p>
                        Մեր դասընթացներն անցնում են ուրախ միջավայրում, դասընթացների ընթացքում
                        ուսանողները ստանում են ինչպես տեսական, այնպես էլ գործնական գիտելիքներ և
                        յուրաքանչյուր ուսանողի տրամադրվում է անհատական համակարգիչ:</p>

                    <p>SmartCode-ն արդեն հասցրել է աշխատաշուկային տալ գիտելիքներով հարուստ և բարձր
                        որակավորում ունեցող մասնագետներ:
                    </p>

                    <p>
                        Դու էլ միացի՛ր մեզ, դարձի՛ր մրցունակ ծրագրավորման ոլորտում և երաշխավորի՛ր
                        աշխատանքդ SmartCode-ի օգնությամբ:</p>
                </div>
            </div>
        </div>
    )

}
export default Aboutus;