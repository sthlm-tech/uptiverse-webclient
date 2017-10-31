import './details.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import FontAwesome from 'react-fontawesome';
import Layout from './../../../components/Layout';
import Loader from './../../../components/Loader';
import ActionMenu from './../../../components/Action/ActionMenu';
import ActionButton from './../../../components/Action/ActionButton';
import history from './../../../core/history';
import CommentList from './../../../components/Comments/List';
import CommentCreate from './../../../components/Comments/Create';
import CountBadge from './../../../components/Comments/CountBadge';
import ContactInfo from './../../../components/Recruit/ContactInfo';
import { formatLinkedInUrl, formatGithubUrl, formatFacebookUrl, formatEmailUrl } from "../../../helpers/connectionFormatHelper";
import { addComment } from '../../../actions/comments';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { getCommentKey } from './../../../helpers/referenceIdHelper';

class Recruit extends Component {

  handleEditRecruitClicked(){
    history.push("/recruits/"+ this.props.id +"/edit");
  }

  render() {
    return (
      <Layout>
        <Loader isLoading={this.props.isLoading}>
        <div className="recruitContainer">
          {this.renderName()}
          <Tabs>
            <TabList>
              <Tab><h3 className="tabHeader">Contact</h3></Tab>
              <Tab>{this.renderCommentsHeader()}</Tab>
              <Tab><h3 className="tabHeader">History</h3></Tab>
            </TabList>
            <TabPanel>
              <ContactInfo recruit={this.props.recruit} />
            </TabPanel>
            <TabPanel>
              <Loader isLoading={this.props.isCommentsLoading}>
                {this.renderCommentsSection()}
              </Loader>
            </TabPanel>
            <TabPanel>
              Not implemented yet
            </TabPanel>
          </Tabs>
        </div>
        </Loader>

        <ActionMenu>
          { this.renderActionButtonsContianer() }
        </ActionMenu>

      </Layout>
    );
  }

  renderName(){
    if(!this.props.recruit){ return null; }
    return (<h2>{ this.props.recruit.firstname } { this.props.recruit.lastname }</h2>);
  }

  renderConnections(){
    if(!this.props.recruit){ return null; }
    var connections = this.props.recruit.connections;
    var connectionList =[];
    if(connections.linkedIn){connectionList.push({icon:"linkedin-square", text:formatLinkedInUrl(connections.linkedIn), link: formatLinkedInUrl(connections.linkedIn)})};
    if(connections.facebook){connectionList.push({icon:"facebook-square", text: formatFacebookUrl(connections.facebook), link: formatFacebookUrl(connections.facebook)})};
    if(connections.github){connectionList.push({icon:"github-square", text: formatGithubUrl(connections.github), link: formatGithubUrl(connections.github)})};
    if(connections.phone){connectionList.push({icon:"phone-square", text: connections.phone, link: connections.phone})};
    if(connections.mail){connectionList.push({icon:"envelope", text: connections.mail, link: formatEmailUrl(connections.mail)})};

    return (
      <div>
        {connectionList.map((item, index) => (
          <div key={index}>
            <div className="iconContainer"><FontAwesome name={item.icon}/></div>
            <div className="connectionContainer">
              <a className="link" href={item.link} target="BLANK">
                {item.text}
              </a>
            </div>
          </div>
        ))}
      </div>
    );
  }

  renderCommentsHeader(){
    if(!this.props.recruit){ return null; }
    return (
      <h3 className="tabHeader">Comments <span className="commentBadge"><CountBadge comments={this.props.comments}/></span></h3>
    );
  }

  renderCommentsSection(){
    if(!this.props.recruit){ return null; }
    return (
        <div className="commentsSection">
          <CommentList comments={this.props.comments}/>
          <CommentCreate commentKey={getCommentKey(this.props.id)} user={this.props.user} addComment={this.props.addComment}/>
        </div>
    );
  }

  renderActionButtonsContianer() {
    if(!this.props.recruit){ return; };
    return (
      <div>
        <ActionButton text="Edit" icon="pencil" onClick={this.handleEditRecruitClicked.bind(this)}/>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const data = state.comments[getCommentKey(ownProps.id)] || {};
  return {
    recruit: state.recruit.data,
    isLoading: state.recruit.isLoading,
    user: state.user.data,
    comments: data.comments,
    isCommentsLoading: data.isLoading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addComment: (comment) => { dispatch(addComment(comment)); }
  };
};

const ConnectedRecruit = connect(
  mapStateToProps,
  mapDispatchToProps
)(Recruit)

export default ConnectedRecruit;
