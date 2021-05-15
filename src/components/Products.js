import React, { Component } from 'react'
import { NavLink, Route } from 'react-router-dom'
import Product from './product'
export default class Products extends Component {
    render() {
        let products = [
            {
                id: 1,
                name: 'iphone X',
                price: 1234000,
                img: 'https://toptech.news/wp-content/uploads/2020/11/Appleemand2020-11-01001.jpg',
                slug: 'iphonex'
            },
            {
                id: 2,
                name: 'iphone 12',
                price: 1234000,
                img: 'https://viendidong.com/wp-content/uploads/2020/10/iphone-12-pro-max-256gb.jpg',
                slug: 'iphone12'
            },
            {
                id: 3,
                name: 'iphone 11',
                price: 1234000,
                img: 'https://cdn.nguyenkimmall.com/images/detailed/697/10047700-dien-thoai-iphone-12-64gb-do-1.jpg',
                slug: 'iphonex11'
            }
        ]

        let { match } = this.props;
        let url = match.url;
        let product = products.map((item, index) => {
            return (
                <div className="col-lg-4 col-md-6 col-sm-12 mb2" key={index}>

                    <div className="card">
                        <NavLink to={`${url}/${item.slug}`}>
                            <img className="card-img-top" src={item.img} alt="iphone" />
                            <div className="card-body">
                                <h4 className="card-title">{item.name}</h4>
                                <p className="card-text">{item.price}</p>
                            </div>
                        </NavLink>
                    </div>
                </div>
            );
        });
        return (
            <div className="container">
                <div className="row">
                    {product}
                </div>
                <div className="row">
                    <Route path='/products/:plug' component={Product} />
                </div>
            </div>

        )
    }
}
