import React, { Component } from 'react';

export class Newsitem extends Component {
  constructor() {
    super();
    console.log("Hello, I am a constructor");
    this.state = {
      articles: this.articles,
      loading: false
    }
  }

  render() {
    let { title, description, imageurl, newsurl } = this.props;

    return (
      <div className='my-3'>
        <div className="card" style={{ width: '18rem' }}>

          <img src={!imageurl?"https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iTcuhlYjAPsY/v0/1200x801.jpg" :imageurl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a rel ="noreferrrer" href={newsurl} target="_blank" className="btn btn-sm btn-dark">Read more</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
