import './PersonalDevelopment.css';
import React from 'react';



class PersonalDevelopment extends React.Component {
  render() {
    if(!this.props.employee || !this.props.employee.developmentGoalsLink){ return null; }
    return (
      <div className="personalDevelopmentContainer">
        <div>
          <h4 className="header"> Personal development</h4>
          <p className="text">
            {this.props.employee.developmentGoals}
          </p>

        </div>
      </div>
    );
  }
}
/*
<ButtonGroup className={s.button}>
  <Button href={this.state.employee.developmentGoalsLink} target="BLANK"> Full development plan <Glyphicon glyph="menu-right" /></Button>
</ButtonGroup>
*/
export default PersonalDevelopment;
