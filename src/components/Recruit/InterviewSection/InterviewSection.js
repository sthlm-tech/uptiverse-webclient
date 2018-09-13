import './InterviewSection.css';
import React, { PropTypes } from 'react';
import CircularContainer from '../..//CircularContainer';
const diameter = 80;
const spacing = 5;
function InterviewSection({ recruit, isInInteview, step }) {
  if(!isInInteview){return null;}
  var step1Style = (step > 0) ? {borderWidth:2} : {borderColor:"#DDDDDD", color:"#AAAAAA"};
  var step2Style = (step > 1) ? {borderWidth:2} : {borderColor:"#DDDDDD", color:"#AAAAAA"};
  var step3Style = (step > 2) ? {borderWidth:2} : {borderColor:"#DDDDDD", color:"#AAAAAA"};
  return (
    <div className="interviewSectionContainer">
    <h3>Interview progress</h3>
      <CircularContainer width={diameter} height={diameter} spacing={spacing} style={step1Style}>
        <div className="interViewStepIndicator">
          1
        </div>
      </CircularContainer>
      <div className="line" style={step2Style}></div>
      <CircularContainer width={diameter} height={diameter} style={step2Style}>
        <div className="interViewStepIndicator">
          2
        </div>
      </CircularContainer>
      <div className="line" style={step3Style}></div>
      <CircularContainer width={diameter} height={diameter} style={step3Style}>
        <div className="interViewStepIndicator">
          3
        </div>
      </CircularContainer>

    </div>
  );
}
//  <CircularContainer>1</CircularContainer>
export default InterviewSection;
