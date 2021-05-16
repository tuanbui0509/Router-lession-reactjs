import React, { Component } from 'react'
import { Prompt } from 'react-router-dom'
export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: false
        }
    }

    onChangePromp = (isChecked) => {
        this.setState({
            isChecked: isChecked
        })
    }

    render() {
        let { isChecked } = this.state;
        return (
            <div>
                <h1>
                    Đây là trang liên hệ contact
            </h1>
                <button type="button" class="btn btn-primary" onClick={() => this.onChangePromp(false)}>Cho phép</button>
                <button type="button" class="btn btn-btn-danger" onClick={() => this.onChangePromp(true)}>Không cho phép</button>
                <Prompt
                    when={isChecked}
                    message={location => (`Bạn có muốn chuyển qua trang ${location.pathname}`)}
                />
            </div>
        )
    }
}
