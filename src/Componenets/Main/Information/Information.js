import React, {Component} from 'react';
import Person from '../../../Icons/profile.svg'
import LearningImg from '../../../images/learning-illustration.svg';
import Check from '../../../Icons/check.svg';
import Cooffe from '../../../Icons/coffee.svg';
import Laptop from '../../../Icons/laptop.svg';
import Clock from '../../../Icons/clock.svg';
import NewInfo from './NewInfo/NewInfo';
import Service from '../../../Service/Service';

export default class Information extends Component {
    constructor(props) {
        super(props);
        this.state = {

            listInfo: [
                {
                    text: "Դասավանդում են փորձառու մասնագետներ, ովքեր կմատուցեն Ձեզ բարդ թվացող ինֆորմացիան" +
                            " բավականին պարզեցված տեսքով: ",
                    icon: Person,
                    titleinfo: "Փորձառու մասնագետներ   ",
                    isChanged: false
                }, {

                    text: "Դասավանդում են փորձառու մասնագետներ",
                    icon: Check,
                    titleinfo: "Փոքր խմբեր",
                    isChanged: false
                }, {
                    text: "Դասավանդում են փորձառու մասնագետներ",
                    icon: Cooffe,
                    titleinfo: "Հարմարավետ կահավորված  լսարան ",
                    isChanged: false
                }, {
                    text: "Դասավանդում են փորձառու մասնագետներ",
                    icon: Laptop,
                    titleinfo: "Անվճար պրակտիկ փուլ",
                    isChanged: false

                }, {
                    text: "Դասավանդում են փորձառու մասնագետներ",
                    icon: Clock,
                    titleinfo: "Ապառիկ ուսուցում ",
                    isChanged: false

                }
            ]
        }

        this.itemCanged = this
            .itemCanged
            .bind(this);
    };

    itemCanged = (index, show) => {
        let {listInfo} = this.state;
        this.setState({
            listInfo: Service.menu(listInfo, index, show)
        });
    };

    render() {

        return (
            <div className="info-learning-section">
                <div className="next-section">
                    <div className="language-title">
                        <h2 className="title-quest">Ի՞նչ լեզուներ ենք դասավանդում</h2>
                        <p className="par-title">Ծրագրավորման դասընթացներ նախատեսված սկսնակների համար</p>
                    </div>
                    <div className="select-languages">

                        <div className="learning-logo">
                            <img src={LearningImg} alt="LearningLogo"/>

                        </div>
                        <ul className="block-info">
                            {this
                                .state
                                .listInfo
                                .map((item, index) => <NewInfo
                                    key={index}
                                    ind={index}
                                    show={item.isChanged}
                                    {...item}
                                    Changed={(index, show) => this.itemCanged(index, show)}/>)
}
                        </ul>

                    </div>
                </div>
            </div>
        )
    }
}