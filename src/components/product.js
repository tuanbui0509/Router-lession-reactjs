import React, { Component } from 'react'

export default class product extends Component {
    render() {
    let {match} = this.props;
        console.log(match.params.plug)
        return (
            <div>
                <h1>Đây là trang chi tiết sản phẩm của {match.params.plug}</h1>
            </div>
        )
    }
}
