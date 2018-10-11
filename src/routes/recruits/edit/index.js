import './edit.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Layout from './../../../components/Layout';
import Link from './../../../components/Link';
import Edit from './../../../components/Recruit/ContactInfo/Edit';

import history from './../../../core/history';
import { edit, save } from './../../../actions/recruit';

class RecruitEdit extends Component {

  setProperty(event){
    var property = event.target.dataset["property"];
    if(property){
      var modRecruit = this.props.recruit;
      modRecruit[property] = event.target.value;
      this.props.edit({recruit: modRecruit, property: property});
    }
  }

  setConnectionProperty(event){
    var property = event.target.dataset["property"];
    if(property){
      var modRecruit = {...this.props.recruit};
      modRecruit.connections[property] = event.target.value;
      this.props.edit({recruit: modRecruit, property: property});
    }
  }

  save() {
    var modRecruit = this.props.recruit;
    this.props.save({data: modRecruit})
    .then(history.push(recruitLink(this.props.id)));
  }

  render() {
    if(!this.props.recruit){ return null;}
    let { recruit } = this.props;
    return (
      <Layout>
        <div className="editRecruit">
          {this.renderName()}
          <Edit recruit={this.props.recruit} onChange={(e) => this.setConnectionProperty(e)}/>
          <div className="actionRow">
            <Link className="cancel" to={recruitLink(recruit._id)}>Cancel</Link>
            <span className="save btn" onClick={(e)=>{ this.save(e)}}>Save</span>
          </div>
        </div>
      </Layout>
    );
  }

  renderName(){
    if(!this.props.recruit){ return null; }
    return (<h2>{ this.props.recruit.firstname } { this.props.recruit.lastname }</h2>);
  }
}

function recruitLink(id){
    return "/recruits/" + id;
}

const mapStateToProps = state => {
  return {
    recruit: state.recruit.data,
    isLoading: state.recruit.isLoading
  }
}

function mapDispatchToProps(dispatch) {
  return {
    edit: (input) => dispatch(edit(input)),
    save: (input) => dispatch(save(input)),
  }
}

const ConnectedRecruitEdit = connect(
  mapStateToProps,
  mapDispatchToProps
)(RecruitEdit)

export default ConnectedRecruitEdit;
