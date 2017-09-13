import './details.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Layout from './../../../components/Layout';

import ActionMenu from './../../../components/Action/ActionMenu';
import ActionButton from './../../../components/Action/ActionButton';
import history from './../../../core/history';

class Recruit extends Component {

  handleEditRecruitClicked(){
    history.push("/recruits/"+ this.props.recruit.id +"/edit");
  }

  renderActionButtonsContianer() {
  if(!this.props.recruit){ return; };
  return (
    <div>
      <ActionButton text="Edit" icon="pencil" onClick={this.handleEditRecruitClicked.bind(this)}/>
    </div>);
}

  render() {
    return (
      <Layout>
        <div>
          <div>
            not implemented
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

  }
}

const ConnectedRecruit = connect(
  mapStateToProps
)(Recruit)

export default ConnectedRecruit;
