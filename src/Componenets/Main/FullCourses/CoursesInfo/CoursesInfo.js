import React, {Component} from 'react';
import InstructorPhoto from '../../../../images/poxosyan.svg';
import Info from '../../../../Icons/info.svg';
import Dollar from '../../../../Icons/dollar.svg';
import Time from '../../../../Icons/time.svg';
import Login from '../../../Header/Nav/Login/Login';
import LearnCourse from '../LearnCourse/LearnCourse';

export default class CoursesInfo extends Component {



    render() {
        return (
            <section className="courses-info">

                <div className="second-section-courses-page">

                    <div className="text-list-info">
                        <div className="text-lists-desc">

                            <div className="info-img">
                                <img src={Info} alt="Info" />
                            </div>
                            <div className="col">
                                <h3>Դասընթացի մասին</h3>
                                <p>C#-ը համարվում է էլեգանտ ծրագրավորման լեզու: Այն ծրագրավորողներին
                                    հնարավորություն է տալիս ստեղծել անվտանգ և ապահով WEB հավելվածներ, Desktop
                                    հավելվածներ և շատ այլ համակարգեր: Այդ համակարգերը աշխատում են .NET
                                    էկոհամակարգում, որի մեջ մտնում են .NET Core և .NET Framework:</p>
                            </div>
                        </div>
                        <div className="text-lists-desc">

                            <div className="info-img">
                                <img src={Time} alt="Time"/>

                            </div>
                            <div className="col">
                                <h3>Դասընթացի տևողություն</h3>
                                <p>Կուրսի տևողությունը 5 ամիս</p>
                            </div>

                        </div>
                        <div className="text-lists-desc">
                            <div className="info-img">
                                <img src={Dollar} alt="Dollar"/>
                            </div>
                            <div className="col">
                                <h3>Դասընթացի ամսավճար</h3>
                                <p>Դասընթացի ամսավճարը՝ 60․000 դրամ:</p>
                            </div>
                        </div>
                        <div className="text-lists-desc">
                            <div className="info-img">
                                <img src={Info} alt="Danger"/>
                            </div>
                            <div className="col">
                                <h3>Այլ մանրամասներ</h3>
                                <p>Դասընթացի ավարտին կտրվի համապատասխան վկայական և 1 ամիս ԱՆՎՃԱՐ պրակտիկա
                                    անցնելու հնարավորություն մեր ընկերություններից մեկում։
                                </p>
                            </div>
                        </div>
                        <div className="text-lists-desc">
                            <div className="info-img">
                                <img src={Info} alt="Info"/>
                            </div>
                            <div className="col">

                                <h3>Դասընթացի թեմաներ</h3>
                            </div>
                        </div>
                    </div>
                    <div className="sign-block">
                        <div className="sign-comp">
                            <Login/>
                        </div>

                        <div className="instructor">
                            <img src={InstructorPhoto} alt="InstructorPhoto" className="instructur"/>
                            <h2 id="name-insturctor">Նարեկ Պողոսյան ԴԱՍԸՆԹԱՑԱՎԱՐ</h2>
                        </div>
                    </div>

                </div>
                <LearnCourse/>
            </section>

        )
    }
}