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
import InterviewSection from './../../../components/Recruit/InterviewSection';
import { formatLinkedInUrl, formatGithubUrl, formatFacebookUrl, formatEmailUrl } from "../../../helpers/connectionFormatHelper";
import { addComment } from '../../../actions/comments';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { getCommentKey } from './../../../helpers/referenceIdHelper';
import _ from 'underscore';

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
          <InterviewSection recruit={this.props.recruit} isInInteview={this.isInInterview(this.props.comments)} step={this.getStep(this.props.comments)}/>
          <Tabs>
            <TabList>

              <Tab>{this.renderCommentsHeader()}</Tab>
              <Tab><h3 className="tabHeader">Interview</h3></Tab>
              <Tab><h3 className="tabHeader">Contact</h3></Tab>
            </TabList>
            <TabPanel>
              <Loader isLoading={this.props.isCommentsLoading}>
                {this.renderCommentsSection()}
              </Loader>
            </TabPanel>
            <TabPanel>
              <Loader isLoading={this.props.isCommentsLoading}>
                {this.renderInterviewCommentsSection()}
              </Loader>
            </TabPanel>
            <TabPanel>
              <ContactInfo recruit={this.props.recruit} />
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

  renderInterviewCommentsSection(){
    if(!this.props.recruit){ return null; }
    return (
        <div className="commentsSection">
          <h3>Interview 1</h3>
          <div className="interviewCommentSection">
            <CommentList comments={this.props.comments} tag={"interview-step-1"}/>
            <CommentCreate commentKey={getCommentKey(this.props.id)} user={this.props.user} addComment={this.props.addComment} tags={["interview-step-1"]}/>
          </div>
          <h3>Interview 2</h3>
          <div className="interviewCommentSection">
            <CommentList comments={this.props.comments} tag={"interview-step-2"}/>
            <CommentCreate commentKey={getCommentKey(this.props.id)} user={this.props.user} addComment={this.props.addComment} tags={["interview-step-2"]}/>
          </div>
          <h3>Interview 3</h3>
          <div className="interviewCommentSection">
            <CommentList comments={this.props.comments} tag={"interview-step-3"}/>
            <CommentCreate commentKey={getCommentKey(this.props.id)} user={this.props.user} addComment={this.props.addComment} tags={["interview-step-3"]}/>
          </div>
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

  isInInterview(comments){
    var tags = [];
    for(var i = 0; i < comments.length; i++){
      var comment = comments[i];
      if(comment.tags){
        tags = tags.concat(comment.tags);
      }
    }
    return ( _.indexOf(tags,"interview-step-1") >=0 || _.indexOf(tags,"interview-step-2") >= 0 || _.indexOf(tags,"interview-step-3") >= 0)
  }

  getStep(comments){
    var tags = [];
    for(var i = 0; i < comments.length; i++){
      var comment = comments[i];
      if(comment.tags){
        tags = tags.concat(comment.tags);
      }
    }
    if(_.indexOf(tags,"interview-step-3") >= 0){ return 3;}
    if(_.indexOf(tags,"interview-step-2") >= 0){ return 2;}
    if(_.indexOf(tags,"interview-step-1") >= 0){ return 1;}
    return 0;
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
