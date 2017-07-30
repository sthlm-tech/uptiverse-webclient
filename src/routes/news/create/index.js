import './create.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Layout from './../../../components/Layout';
import Link from './../../../components/Link';
import Loader from './../../../components/Loader';
import PageHeader from './../../../components/PageHeader';
import { saveNews } from './../../../actions/news';
import history from './../../../core/history';

class CreateNews extends Component {

  constructor(props, context) {
    super(props, context);

    this.state =  {
      createdNews: {
        heading:"",
        text:""
      }
    };
  }

  setHeading(event){
    var modNews = this.state.createdNews;
    modNews.heading = event.target.value;
    this.setState({createdNews: modNews});
  }

  setText(event){
    var modNews = this.state.createdNews;
    modNews.text = event.target.value;
    this.setState({createdNews: modNews});
  }

  save() {
    var createdNews = this.state.createdNews;
    this.props.dispatch(saveNews({data: createdNews, callback: this.saved}));
  }

  saved(){
    history.push("/news");
  }

  render() {
    return (
      <Layout>
          <div className="createNews">
            <PageHeader>What´s the news?</PageHeader>
            <Loader isLoading={this.props.isSaving}>
              <input className="header" placeholder="Write your header here..." value={this.state.createdNews.heading} onChange={(e)=>{ this.setHeading(e)}}/>

              <textarea className="text" placeholder="This is where the content goes..." onChange={(e)=>{ this.setText(e)}}></textarea>
              <div className="actionRow">
                <Link className="cancel" to="/news">Cancel</Link>
                <span className="publish btn" onClick={(e)=>{ this.save(e)}}>Publish</span>
              </div>

            </Loader>
          </div>
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    news: state.news.data,
    isSaving: state.news.isSaving
  }
}

const ConnectedCreateNews = connect(
  mapStateToProps
)(CreateNews)

export default ConnectedCreateNews;
