import React, { Component } from 'react';
import './Modal.css'

export default class componentName extends Component {

    render() {
        return (
            <div>
                <div className={`modal-overlay ${this.props.modalOpen && `isModalOpen` }`}>
                <div className="modal-container">
                    <h4>Congratulations !!!</h4>
                    <p>You have Successfully Subscribed to {this.props.plan} plan</p>
                    <button className="btn btn--green" onClick={this.props.handleClose}>
                    close
                    </button>
                </div>
                </div>
            </div>
        )
    }
}
