import './PersonalDevelopment.css';
import React from 'react';
import Link from './../../../components/Link';


class PersonalDevelopment extends React.Component {
  render() {
    if(!this.props.employee){ return null; }
    return (
      <div className="personalDevelopmentContainer">
        <div>
          <h4 className="header"> Personal development</h4>

          {this.renderDevelopmentGoals()}
          {this.developmentGoalsLink()}

        </div>
      </div>
    );
  }

  renderDevelopmentGoals(){
    if(!this.props.employee || !this.props.employee.developmentGoals){ return null; }
    return (
      <p className="text">
        {this.props.employee.developmentGoals}
      </p>
    );
  }

  developmentGoalsLink(){
    if(!this.props.employee || !this.props.employee.developmentGoalsLink){ return null; }
    return (
      <a className="btn" href={this.props.employee.developmentGoalsLink} target="BLANK">Personal development plan</a>
    );
  }
}
/*
<ButtonGroup className={s.button}>
  <Button href={this.state.employee.developmentGoalsLink} target="BLANK"> Full development plan <Glyphicon glyph="menu-right" /></Button>
</ButtonGroup>
*/
export default PersonalDevelopment;
