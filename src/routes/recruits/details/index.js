import './details.css';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import FontAwesome from 'react-fontawesome';
import Collapsible from 'react-collapsible';
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';
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
import { setRecruit, setInterviewInprogress, save } from '../../../actions/recruit';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { getCommentKey } from './../../../helpers/referenceIdHelper';
import { isInInterview, getStep } from './interview-helper';

class Recruit extends Component {
  constructor() {
    super();
    this.state = { tabIndex: 0 };
  }
  handleEditRecruitClicked(){
    history.push("/recruits/"+ this.props.id +"/edit");
  }

  startInterview(){
    this.props.startInterview(this.props.recruit)
  }

  moveForwardInProcess(){
    var modRecruit = { ... this.props.recruit};
    modRecruit.interview.steps[modRecruit.interview.currentStepIndex].status = "ACCEPTED";

    if(modRecruit.interview.currentStepIndex + 1 >= modRecruit.interview.steps.length){
      modRecruit.interview.status = "ACCEPTED"
      modRecruit.interview.currentStep = null;
    }else{
      modRecruit.interview.currentStepIndex = modRecruit.interview.currentStepIndex + 1 ;
      var step = modRecruit.interview.steps[modRecruit.interview.currentStepIndex];
      modRecruit.interview.currentStep = step.id;
      step.status = "ONGOING";

    }
    this.props.moveForwardInProcess(modRecruit)

  }

  rejectInProcess(){
    var modRecruit = { ... this.props.recruit};
    modRecruit.interview.steps[modRecruit.interview.currentStepIndex].status = "REJECTED";
    modRecruit.interview.status = "REJECTED"
    modRecruit.interview.currentStep = null;
    this.props.rejectInProcess(modRecruit)
  }

  postponeInProcess(){
    var modRecruit = { ... this.props.recruit};
    modRecruit.interview.steps[modRecruit.interview.currentStepIndex].status = "RECONTACT";
    modRecruit.interview.status = "RECONTACT"
    modRecruit.interview.currentStep = null;
    this.props.postponeInProcess(modRecruit)
  }

  stepSelected(e, step){
    this.setState({ tabIndex: 1, scrollToStep: step.id});
  }

  render() {
    return (
      <Layout>
        <Loader isLoading={this.props.isLoading}>
        <div className="recruitContainer">
          <Name recruit={this.props.recruit} />
          <InterviewSection recruit={this.props.recruit} stepSelected={this.stepSelected.bind(this)} isInInteview={isInInterview(this.props.comments)} step={getStep(this.props.comments)}/>
          <Tabs selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>
            <TabList>
              <Tab><div className="tabHeader"><CommentsHeader comments={this.props.comments}/></div></Tab>
              <Tab><h3 className="tabHeader">Interview</h3></Tab>
              <Tab><h3 className="tabHeader">Contact</h3></Tab>
            </TabList>
            <TabPanel>
              <Loader isLoading={this.props.isCommentsLoading}>
                <CommentsSection
                  recruit={this.props.recruit}
                  comments={this.props.comments}
                  id={this.props.id}
                  user={this.props.user}
                  addComment={this.props.addComment}
                />
              </Loader>
            </TabPanel>
            <TabPanel>
              <Loader isLoading={this.props.isCommentsLoading}>
                {this.renderInterviewSection(this.props.recruit, this.startInterview.bind(this), this.moveForwardInProcess.bind(this), this.rejectInProcess.bind(this), this.postponeInProcess.bind(this) )}
              </Loader>
            </TabPanel>
            <TabPanel>
              <ContactInfo recruit={this.props.recruit} />
            </TabPanel>
          </Tabs>
        </div>
        </Loader>
        <ActionButtonContainer
          recruit={this.props.recruit}
          edit={this.handleEditRecruitClicked.bind(this)}
          startInterview={this.startInterview.bind(this)}/>
      </Layout>
    );
  }

  componentDidUpdate(nextProps, nextState){
    const stepNode = ReactDOM.findDOMNode(this.refs[this.state.scrollToStep])
    if(stepNode){
     window.scrollTo(0, stepNode.offsetTop);
    }
  }

  renderInterviewSection(recruit, startInterview, moveForwardInProcess, rejectInProcess, postponeInProcess){
    if(!recruit ){ return null; }
    if(!recruit.interview || !recruit.interview.steps){ return (<div className="interviewSection"><p className="btn" onClick={startInterview}>Start Interview</p></div>); }
    return (
        <div className="commentsSection">
        {
          recruit.interview.steps.map((item, index) => {
            const isCurrentStep = recruit.interview.currentStepIndex == index;
            const isOngoing = recruit.interview.status == "ONGOING";
            const canTakeAction = isCurrentStep && isOngoing;
            return (
              <Collapsible
                ref={item.id}
                open={this.state.scrollToStep == item.id}
                trigger={<div className="interviewHeader"><FontAwesome className="expanderIcon" name='angle-down'/> <CommentsHeader text={item.name} comments={this.props.comments} tag={item.id}/></div>}
                triggerWhenOpen={<div className="interviewHeader"><FontAwesome className="expanderIcon" name='angle-up'/><CommentsHeader text={item.name} comments={this.props.comments} tag={item.id}/></div>}
                transitionTime={200}
                key={index}>

                <div className="interviewDetailsSection">
                  {canTakeAction && <ActionButton text="Approve" icon="check" alwaysShow className="btn" onClick={moveForwardInProcess}/>}
                  {canTakeAction && <ActionButton text="Reject" icon="close" alwaysShow className="btn rejectButton" onClick={rejectInProcess}/>}
                  {canTakeAction && <ActionButton text="Contact later" icon="bookmark" alwaysShow className="btn postponeButton" onClick={postponeInProcess}/>}
                  {/*<div><h4>Interviewer</h4> <i>comming soon</i></div>
                  <div><h4>Date</h4> <i>comming soon</i></div> */}
                </div>
                <div className="interviewCommentSection">
                  <h3 className="CommentsHeader">Comments</h3>
                  <CommentList comments={this.props.comments} tag={item.id}/>
                  <CommentCreate commentKey={getCommentKey(this.props.id)} user={this.props.user} addComment={this.props.addComment} tags={[item.id]}/>
                </div>
              </Collapsible>
            )
          })
        }
        </div>
    );
  }
}
/*components*/
const ActionButtonContainer = ({recruit, edit, startInterview}) => {
  if(!recruit){ return null; };
  return (
    <ActionMenu>
      { (!recruit.interview || !recruit.interview.steps) && <ActionButton text="Start interview" icon="rocket" onClick={startInterview}/> }
      <ActionButton text="Edit recruit info" icon="pencil" onClick={edit}/>
    </ActionMenu>
  );
}

const Name = ({recruit}) => {
  if(!recruit){ return null; }
  return (<h2>{ recruit.firstname } { recruit.lastname }</h2>);
}

const CommentsHeader = ({comments, tag, text}) => {
  const headerText = text ? text : "All Comments";
  return (
    <h3 className="CommentsHeader">{headerText} <span className="commentBadge"><CountBadge comments={comments} tag={tag}/></span></h3>
  );
}

const CommentsSection = ({recruit, comments, id, user, addComment}) => {
  if(!recruit){ return null; }
  return (
      <div className="commentsSection">
        <CommentList comments={comments}/>
        <CommentCreate commentKey={getCommentKey(id)} user={user} addComment={addComment}/>
      </div>
  );
}
/**/

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
    addComment: (comment) => { dispatch(addComment(comment)); },
    moveForwardInProcess: (recruit) => { dispatch(save({data:recruit})); },
    rejectInProcess: (recruit) => { dispatch(save({data:recruit})); },
    postponeInProcess: (recruit) => { dispatch(save({data:recruit})); },
    startInterview: (recruit) => { dispatch(setInterviewInprogress(recruit)); }
  };
};

const ConnectedRecruit = connect(
  mapStateToProps,
  mapDispatchToProps
)(Recruit)

export default ConnectedRecruit;
