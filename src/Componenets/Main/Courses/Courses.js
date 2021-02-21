import React from 'react';
import Login from '../../Header/Nav/Login/Login';
import CsharpLogo from '../../../Icons/csharp.svg';
import ProgrammingLogo from '../../../Icons/programming.svg';
import JavaLogo from '../../../Icons/JavaCourse.svg';
import Offline from '../../../Icons/media.svg';
import Grouping from '../../../Icons/user.svg';
import Time from '../../../Icons/time.svg';
import Tag from '../../../Icons/tag.svg';
import {NavLink} from "react-router-dom";

export default class Courses extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

            course: [
                {

                    tymeDay: "28 ԴԵԿ",
                    groupTitle: 'Խմբակային',
                    typeCourse: 'Օֆլայն',
                    iconType: Offline,
                    iconGroup: Grouping,
                    key: "C#",
                    img: CsharpLogo,
                    title: "C# սկսնակների համար"
                }, {

                    tymeDay: "14 ՀՆՎ",
                    groupTitle: 'Խմբակային',
                    typeCourse: 'Օնլայն',
                    iconType: Offline,
                    iconGroup: Grouping,
                    key: "WB",
                    img: ProgrammingLogo,
                    title: "Ծրագրավորում 0-ից"
                }, {
                    tymeDay: "18 ՀՆՎ",
                    groupTitle: 'Խմբակային',
                    typeCourse: 'Օֆլայն',
                    iconType: Offline,
                    iconGroup: Grouping,
                    key: "JV",
                    img: JavaLogo,
                    title: "Java դասընթաց"
                }
            ]
        }
    }

    render() {

        return (
            <section className="courses-section">
                <div className="courses-section-body">

                    <div className="title-curses">
                        <h2>Առաջիկա դասընթացներ</h2>
                        <h3>Առաջիկայում մեկնարկվող դասընթաներ</h3>
                    </div>
                    <div className="section-blocks-list " id="section-list">
                        {this
                            .state
                            .course
                            .map((courses) => (<CoursesList {...courses}/>))}
                    </div>
                </div>

            </section>
        )
    }
}

function CoursesList(props) {
    return (

        <div className="courses-list-block">

            <div className="logo-lang">
                <img src={props.img} alt="CsharpLogo" className="lang-icon"/>
            </div>
            <div className="courses-list-desc">
                <div className="courses-list-show-desc">
                    <div className="fr-tit-div">
                        <h2 className="crs-title">{props.title}</h2>
                        <div className="tyme-day">{props.tymeDay}</div>
                    </div>

                    <div className="bl-col-block">
                        <span className="bl-col"><img src={props.iconType} alt="online"/>{props.typeCourse}</span>
                        <span className="bl-col right"><img src={props.iconGroup} alt="offline"/>{props.groupTitle}</span>
                    </div>

                    <div className="time-log-block">
                        <div className="time-tag-block">
                            <span className="time">
                                <img src={Time} alt="Time" className="leftTime"/>2 ամիս</span>
                            <span className="tag">
                                <img src={Tag} alt="Tag" className="rightTag"/>
                                35.000 /ամիս</span>
                        </div>
                        <NavLink to="/courses">
                            <button className="btn-login">ԳՐԱՆՑՎԵԼ</button>
                        </NavLink>

                    </div>

                </div>

            </div>

        </div>

    )
}
