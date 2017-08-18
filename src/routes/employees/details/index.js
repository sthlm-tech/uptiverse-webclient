import './details.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Layout from './../../../components/Layout';

import ContactInfo from './../../../components/Employee/ContactInfo';
import Description from './../../../components/Employee/Description';
import PersonalDevelopment from './../../../components/Employee/PersonalDevelopment';
import Presentation from './../../../components/Employee/Presentation';

import ActionMenu from './../../../components/Action/ActionMenu';
import ActionButton from './../../../components/Action/ActionButton';
import history from './../../../core/history';

class Employee extends Component {

  handleEditEmployeeClicked(){
    history.push("/employees/"+ this.props.employee.username +"/edit");
  }

  renderActionButtonsContianer(){
  if(!this.props.employee){ return; };
  if(!this.props.canEdit){ return; };
  return (
    <div>
      <ActionButton text="Edit" icon="pencil" onClick={this.handleEditEmployeeClicked.bind(this)}/>
    </div>);
}

  render() {
    return (
      <Layout>
        <div>
          <div>
            <div className="profileHeader"></div>

              <div className="profileContainer">
                <div className="profilePresentation">
                  <Presentation employee={this.props.employee} isLoading={this.props.isLoading}/>
                </div>
                <div className="profileSection">
                  <Description employee={this.props.employee} />
                  <PersonalDevelopment employee={this.props.employee} />
                  <ContactInfo employee={this.props.employee} />
                </div>
              </div>

          </div>
        </div>

        <ActionMenu>
          { this.renderActionButtonsContianer() }
        </ActionMenu>

      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    employee: state.employee.data,
    isLoading: state.employee.isLoading,
    canEdit: state.employee.canEdit
  }
}

const ConnectedEmployee = connect(
  mapStateToProps
)(Employee)

export default ConnectedEmployee;
