/*
 * @author Gaurav Kumar    
*/

import React, {Component} from 'react';
import "../../assets/stylesheet/HelpCenter.css";

class Accordion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expand: false
        };
        this.faqs = [];
    }

    componentWillMount() {
        this.faqs.basics = [
            {
                ques: "Here is question 1",
                ans: "Here is answer for ques 1"
            },
            {
                ques: "Here is question 2",
                ans: "Here is answer for ques 2"
            },
            {
                ques: "Here is question 3",
                ans: "Here is answer for ques 3"
            }
        ];
    }

    render() {
        let {expand} = this.state;
        let {title} = this.props;
        return (
            <div>
                <button className={expand ? "accordion-btn expanded" : "accordion-btn unexpanded"}
                        onClick={() => this.setState({expand: !expand})}>
                    <strong>{title}</strong>
                </button>
                <div className={expand ? "d-block container-fluid faq-list" : "d-none container-fluid faq-list"}>
                    <ol>
                        {this.faqs.basics.map((faq, key) => {
                            return (
                                <li key={key}>
                                    <div className="faq">
                                        <h6><strong>{faq.ques}</strong></h6>
                                        <p>{faq.ans}</p>
                                    </div>
                                </li>
                            );
                        })}
                    </ol>
                </div>
            </div>
        );
    }
}

class HelpCenter extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="categories-list">
                <section className="basic help-item">
                    <Accordion title={"Basics"}/>
                </section>
                <section className="basic help-item">
                    <Accordion title={"Mobile"}/>
                </section>
            </div>
        );
    }


}

export default HelpCenter;