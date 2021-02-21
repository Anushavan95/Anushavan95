import React, {Fragment} from 'react';
import './App.css';
import Header from './Componenets/Header/Header';
import Main from './Componenets/Main/Main';
import Footer from './Componenets/Footer/Footer';
import Nav from './Componenets/Header/Nav/Nav';
import {Redirect, Route, Switch} from 'react-router-dom';
import Aboutus from './Componenets/Main/About-us/About-us';
import Information from './Componenets/Main/Information/Information';
import Join from './Componenets/Main/Join/Join';
import FullCourses from './Componenets/Main/FullCourses/FullCourses';
import Cooporation from './Componenets/Main/Cooporation/Cooporation';
import Questions from './Componenets/Main/Questions/Questions';
import Blog from './Componenets/Main/Blog/Blog';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenu: false,
            scrolling: false
        }

    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    shouldComponentUpdate() {
        return true
    }

    handleScroll = () => {
        this.setState({scrolling: true})
        if (window.scrollY === 0 && this.state.scrolling === true) {
            this.setState({scrolling: false});
        } else if (window.scrollY !== 0 && this.state.scrolling !== true) {
            this.setState({scrolling: true});
        }
    }

    setHeaderState = () => {
        this.setState({
            showMenu: !this.state.showMenu
        })
    }
    
    onScrollTop = () => {
        window.scrollTo({top: 0, behavior: "smooth"})
    }

    addClassListener = () => {
        console.log("addClassListener")
    }

    render() {
        let {showMenu} = this.state;

        return (
            <section className="App">
                <Nav
                    showMenu={showMenu}
                    setHeaderState={this
                    .setHeaderState
                    .bind(this)}/>

                <Switch>

                    <Fragment>
                        <Route path="/" exact render={() => <Header showMenu={showMenu}/>}/>
                        <Route path="/" exact render={() => <Main/>}/>
                        <Route path="/about" exact component={Aboutus}/>
                        <Route
                            onClick={this.handleScroll}
                            path="/courses"
                            exact
                            render={() => <div >
                            <FullCourses/>
                            <Information/>
                            <Join/>
                        </div>}/>
                        <Route path="/cooperation" exact render={() => <Cooporation/>}/>
                        <Route path="/questions" exact render={() => <Questions/>}/>
                        <Route path="/blog" exact render={() => <Blog/>}/>
                        <Redirect to={"/"}/>
                    </Fragment>
                </Switch>

                <Footer/>
                <span
                    onClick={this.onScrollTop}
                    className="scrollbtn"
                    style={{
                    position: this.state.scrolling
                        ? 'fixed'
                        : 'relative'
                }}>
                    <span className="scroll"></span>
                    <span className="scroll"></span>
                </span>
            </section>
        );
    }

}
