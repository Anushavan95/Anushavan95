import React, {Component} from 'react';

export default class LearnCourse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            javascript: false,
            react: true,
            showBtnStyleJs: false,
            showBtnStyleRj: false
        }

    }

    onSelect = () => {

        this.setState({javascript: true, react: false, showBtnStyleJs: true, showBtnStyleRj: false})

    }
    onSelectReact = () => {

        this.setState({javascript: false, react: true, showBtnStyleRj: true, showBtnStyleJs: false})

    }
    render() {
        let {javascript, react} = this.state
        let btnStyle = [" btn-style "];
        if (this.state.showBtnStyleJs) {
            btnStyle.push("active-js");

        }
        let btnRj = [" btn-style "]
        if (this.state.showBtnStyleRj) {
            btnRj.push("active-react")

        }

        return (

            <section className="table-section ">
                <button onClick={this.onSelect} className={btnStyle.join(" ")}>
                    JavaScript</button>
                <button onClick={this.onSelectReact} className={btnRj.join(" ")}>
                    React</button>
                {react
                    ? <table className="table-style">

                            <tr>
                                <th>Դաս</th>
                                <th>Թեման</th>
                            </tr>

                            <tr>
                                <td>Դաս 1</td>
                                <td>How React Works | Understanding Virtual DOM</td>
                            </tr>
                            <tr>
                                <td>Դաս 2</td>
                                <td>Base features and syntax | Hello world</td>
                            </tr>
                            <tr>
                                <td>Դաս 3</td>
                                <td>Introducing JSX</td>
                            </tr>
                            <tr>
                                <td>Դաս 4</td>
                                <td>What are components | Creating our First Components</td>
                            </tr>
                        </table>
                    : null}

                {javascript
                    ? <table className="table-style">

                            <tr>
                                <th>Դաս javascript</th>
                                <th>Թեման</th>
                            </tr>

                            <tr>
                                <td>Դաս 1</td>
                                <td>Javascript</td>
                            </tr>
                            <tr>
                                <td>Դաս 2</td>
                                <td>Javascript</td>
                            </tr>
                            <tr>
                                <td>Դաս 3</td>
                                <td>Javascript</td>
                            </tr>
                            <tr>
                                <td>Դաս 4</td>
                                <td>Javascript</td>
                            </tr>
                        </table>
                    : null}

            </section>

        )
    }
}