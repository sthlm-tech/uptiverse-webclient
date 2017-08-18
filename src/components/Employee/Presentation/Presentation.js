import './Presentation.css';
import React from 'react';
import CircularContainer from "./../../CircularContainer";
import Loader from "./../../Loader";

const diameter = 210;
const spacing = 10;

function Presentation({ employee, isLoading}) {
  return (
    <div className="presentationContainer">
      { renderImage(employee, isLoading) }
      { renderName(employee) }
    </div>
  );
}

function renderImage(employee, isLoading){
  var image = (employee) ? (<img src={employee.picture} alt="" style={{width: diameter-spacing, height: diameter-spacing}} />) : ""

  return (
    <CircularContainer width={diameter} height={diameter} spacing={spacing}>
      <div className="imageBackground">
        <Loader isLoading={isLoading}>
          { image }
        </Loader>
      </div>
    </CircularContainer>
  );
}

function renderName(employee){
  var name = (employee && employee.firstname) ? (employee.firstname + " " + employee.lastname) : "";

  return (
    <p className="userName">
      { name }
    </p>
  );
}

export default Presentation;
