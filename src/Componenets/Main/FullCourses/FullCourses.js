import React, {Component} from 'react';
import CoursesInfo from './CoursesInfo/CoursesInfo';
import './FullCourses.css';
import CoursesSaly from '../../../images/courses-saly.svg';
import Grouping from '../../../Icons/user.svg';
import Online from '../../../Icons/online.svg';
import DecorateLine from '../../../Icons/DecorativeLine.svg';
import {connect} from 'react-redux';

class FullCourses extends Component {
    constructor(props) {
        super(props);
        this.state = {
            day: "24 ՀՈԿ"
        }
    }

    render() {
        // let {headerClasses} = this.props;
        return (
            <section className="full-section-courses-page">
                <section className="first-section-courses-page ">
                    <div className="courses-header">
                        <div className="full-header-section">
                            <div className="title-full-courses">
                                <div className="time-day">
                                    <span className="day">{this.state.day}</span>
                                    <h2>
                                        <span>
                                            C#</span>
                                        սկսնակների համար</h2>

                                </div>

                            </div>
                            <div className="logo-full-courses">
                                <img src={CoursesSaly} alt="CoursesSaly"/>
                            </div>

                        </div>

                        <div className="bl-col-block">
                            <span className="bl-col"><img src={Grouping} alt="online"/>Օնլայն</span>
                            <span className="bl-col right"><img src={Online} alt="offline"/>Խմբակային</span>
                        </div>
                    </div>
                    <img src={DecorateLine} alt="DecorativeLine" className="decorateLine"/>
                </section>
                <CoursesInfo/>

            </section>
        )
    }
}

const mapStateToProps = state => {
    return {headerClasses: state.headerClasses}
}

export default connect(mapStateToProps, null)(FullCourses);
