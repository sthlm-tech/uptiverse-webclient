import './edit.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Layout from './../../../components/Layout';
import Link from './../../../components/Link';

import ContactInfo from './../../../components/Employee/ContactInfo/Edit';
import Description from './../../../components/Employee/Description/Edit';
import PersonalDevelopment from './../../../components/Employee/PersonalDevelopment/Edit';
import Presentation from './../../../components/Employee/Presentation';

import history from './../../../core/history';

import { editEmployee, saveEmployee } from './../../../actions/employee';

class EmployeeEdit extends Component {

  setProperty(event){
    var property = event.target.dataset["property"];
    if(property){
      var modEmployee = this.props.employee;
      modEmployee[property] = event.target.value;
      this.props.editEmployee({employee: modEmployee, property: property});
    }
  }

  save() {
    var modEmployee = this.props.employee;
    this.props.saveEmployee({data: modEmployee})
    .then(history.push(employeeLink(modEmployee)));
  }

  render() {
    let { employee, isLoading } = this.props;
    return (
      <Layout>
        <div className="editEmployee">
          <div>
            <div className="profileHeader"></div>

              <div className="profileContainer">
                <div className="profilePresentation">
                  <Presentation employee={employee} isLoading={isLoading}/>
                </div>
                <div className="profileSection">
                  <Description employee={employee} onChange={(e)=>{ this.setProperty(e)}} />
                  <PersonalDevelopment employee={employee} onChange={(e)=>{ this.setProperty(e)}} />
                  <ContactInfo employee={employee} onChange={(e)=>{ this.setProperty(e)}} />
                  <div className="actionRow">
                    <Link className="cancel" to={employeeLink(employee)}>Cancel</Link>
                    <span className="save btn" onClick={(e)=>{ this.save(e)}}>Save</span>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </Layout>
    );
  }
}

function employeeLink(employee){
    if(!employee){ return ""; }
    return "/employees/" + employee.username;
}

const mapStateToProps = state => {
  return {
    employee: state.employee.data,
    isLoading: state.employee.isLoading,
    canEdit: state.employee.canEdit
  }
}

function mapDispatchToProps(dispatch) {
  return {
    editEmployee: (input) => dispatch(editEmployee(input)),
    saveEmployee: (input) => dispatch(saveEmployee(input)),
  }
}

const ConnectedEmployeeEdit = connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeeEdit)

export default ConnectedEmployeeEdit;
