import './InterviewSection.css';
import React, { PropTypes } from 'react';
import CircularContainer from '../../CircularContainer';
import FontAwesome from 'react-fontawesome';
const diameter = 80;
const spacing = 5;

const activeStyle = {borderWidth:2};
const inactiveStyle = {borderColor:"#DDDDDD", color:"#AAAAAA"}

export default function({ recruit, stepSelected }) {
  if(!recruit.interview){return null;}
  return (
    <div className="interviewSectionContainer">
    <h3>Interview progress</h3>
      {
        recruit.interview.steps.map((item, index) => {
          const isStepActive = recruit.interview.currentStep >= index;
          const isLineStepActive = recruit.interview.currentStep > index;
          const shouldRenderStepLine = recruit.interview.steps.length != index + 1;
          return (
            <div className="stepContainer" key={index}>
              <StepIndicator step={item} diameter={diameter} active={isStepActive} stepSelected={stepSelected}/>
              { shouldRenderStepLine && <StepConnector active={isLineStepActive}/> }
            </div>)
        })
      }
    </div>
  );
}

const StepIndicator = ({diameter, step, active, stepSelected, contentClassName}) => {
  var className = (contentClassName) ? contentClassName: "interViewStepIndicator";
  var style = (active) ? activeStyle : inactiveStyle;
  var handleClick = (event) => {
    if(stepSelected){
      stepSelected(event, step)
    }
  }
  return (
    <CircularContainer className="stepIndicator" width={diameter} height={diameter} style={style} onClick={handleClick.bind(this)}>
      <div className={className}>
        {step.number}
      </div>
    </CircularContainer>
  )
}

const StepConnector = ({active}) =>{
  var style = (active) ? activeStyle : inactiveStyle;
  return (
      <div className="line" style={style}></div>
  )
}
