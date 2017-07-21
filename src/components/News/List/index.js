import './List.css';
import React from 'react';
import Link from './../../Link/Link';
import Date from './../../Date/Date';

class List extends React.Component {
  render() {
    return (
      <div className="newsList">
        { renderNewsItems(this.props.news) }
      </div>
    );
  }
}

function renderNewsItems(news){
  return news.map((item, index) => (
    <div className="newsItem" key={index}>
      <h2 className="newsItemHeading">{item.heading}</h2>
      <p className="newsItemText">{item.text}</p>
      <p className="newsItemPublished"><Date>{item.published}</Date> - <Link to={formatRoute(item.publisherId)} className="link">{item.publisher}</Link></p>
    </div>
  ));
}

function formatRoute(id){
  return "/employee/" + id;
}

export default List;
