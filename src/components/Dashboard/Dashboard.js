import React, { Component } from 'react';
import './Dashboard.css';
import Modal from '../Modal/Modal';
import { Link } from 'react-router-dom';

export default class componentName extends Component {
    constructor() {
        super(); 
        this.state = {
            subscribe: {
                main: 'Bronze',
                info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Aperiam sed quis totam saepe mollitia tempore, modi eveniet repellat! Odio, non!'
            },
            subscribe2: {
                main: 'Silver',
                info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Aperiam sed quis totam saepe mollitia tempore, modi eveniet repellat! Odio, non!'
            },
            subscribe3: {
                main: 'Gold',
                info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Aperiam sed quis totam saepe mollitia tempore, modi eveniet repellat! Odio, non!',
                text: 'Subscribe'
            },
            isOpen: false,
            subscribed: false,
            plan: 'Gold'
        }
    }


    handleOpen = () => {
        this.setState({
            isOpen: true
        })
    }

    handleClose = () => {
        this.setState({
            isOpen: false
        })
    }

    handleSub = (text) => {
        this.setState({
            plan: text
        })
    }

    wrapper = (text) => {
        this.handleOpen();
        this.handleSub(text);
    }

    render() {
        return (
            <div>
            <section className="section-features">
            <Link to='/'><button className="logOut">LOG OUT &rarr;</button></Link>
                <h2>Select Your Subscription</h2>
                <div className="row">
                    <div className="col-1-of-3">
                        <div className="feature-box">
                            <h3 className="heading-tertiary u-margin-bottom-small">{this.state.subscribe.main}</h3>
                            <p className="feature-box__text" >{this.state.subscribe.info}</p>
                            <button className="btn btn--green" onClick={() => this.wrapper(this.state.subscribe.main)}>Choose Plan &rarr;</button>
                        </div>
                    </div>

                    <div className="col-1-of-3">
                        <div className="feature-box">
                            <h3 className="heading-tertiary u-margin-bottom-small">{this.state.subscribe2.main}</h3>
                            <p className="feature-box__text">{this.state.subscribe2.info}</p>
                            <button className="btn btn--green" onClick={() => this.wrapper(this.state.subscribe2.main)}>Choose Plan &rarr;</button>
                        </div>
                    </div>

                    <div className="col-1-of-3">
                        <div className="feature-box">
                            <h3 className="heading-tertiary u-margin-bottom-small">{this.state.subscribe3.main}</h3>
                             <p className="feature-box__text">{this.state.subscribe3.info}</p>
                            <button className="btn btn--green" onClick={() => this.wrapper(this.state.subscribe3.main)}>Choose Plan &rarr;</button>
                        </div>
                    </div>
                </div>
            </section>
            <Modal  handleClose={this.handleClose} modalOpen={this.state.isOpen} plan={this.state.plan}/>
            </div>
        )
    }
}

