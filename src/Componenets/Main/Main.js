import React, {Component} from 'react';
import '../Main/Main.css';
import Language from './Language/Language';
import Information from './Information/Information';
import Courses from './Courses/Courses';
import Join from './Join/Join';
import WorkLogo from '../../images/illustration.svg';
import Front from '../../Icons/code-slash.svg';
import Backend from '../../Icons/backend.svg';
import Javascrit from '../../Icons/javascript.svg';
import ReactLogo from '../../Icons/react.svg';
import JavaLogo from '../../Icons/java.svg';
import Csharp from '../../Icons/C-sharp.svg';

export default class Main extends Component {
    state = {

        front: Front,
        backend: Backend,
        javascript: Javascrit,
        react: ReactLogo,
        java: JavaLogo,
        csharp: Csharp,
        languages: [
            {
                icon: Front,
                title: "Front-end"
            }, {
                icon: Backend,
                title: "Back-end"
            }, {
                icon: Javascrit,
                title: "Javascript"
            }, {
                icon: ReactLogo,
                title: "React"
            }, {
                icon: JavaLogo,
                title: "Java"
            }, {
                icon: Csharp,
                title: "C#"
            }
        ]
    }

    render() {

        return (
            <main className="main-section">
                <section className="first-section">
                    <div className="select-languages">
                        <div className="language-title">
                            <h2 className="title-quest">Ի՞նչ լեզուներ ենք դասավանդում</h2>
                            <p className="par-title">Ծրագրավորման դասընթացներ նախատեսված սկսնակների համար</p>
                        </div>
                        <div className="blocks-language">

                            {this
                                .state
                                .languages
                                .map((language, index) => {
                                    return (<Language key={index} logo={language.icon} title={language.title}/>)
                                })}
                        </div>

                        <div className="ilustration">
                            <img src={WorkLogo} alt="WorkLogo"/>
                        </div>
                    </div>
                </section>
                <Information/>
                <Courses/>

                <Join ChangeClass={() => this.ChangeClass()} setClass={this.props.setClass}/>
            </main>
        )
    }
}
