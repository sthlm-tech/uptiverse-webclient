import './employees.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Layout from './../../components/Layout';
import Loader from './../../components/Loader';
import PageHeader from './../../components/PageHeader';
import EmployeeList from './../../components/Employee/List';

class Employees extends Component {
  render() {
    return (
      <Layout>
          <div>
            <PageHeader>All of us listed</PageHeader>
            <Loader isLoading={this.props.isLoading}>
              <EmployeeList employees={this.props.employees}/>
            </Loader>
          </div>
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    employees: state.employees.data,
    isLoading: state.employees.isLoading
  }
}

const ConnectedEmployees = connect(
  mapStateToProps
)(Employees)

export default ConnectedEmployees;
