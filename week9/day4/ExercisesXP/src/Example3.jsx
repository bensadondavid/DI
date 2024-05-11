import React from 'react';
import data from './file2.json';

class Example3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Skills: data.Skills,
    };

  }

  render() {


    return (
      <>
      <h3 style={{ color: 'red' }}>Example3 </h3>
      <h4> {this.state.Skills[0].SkillSet[0].Name} </h4>
      </>
    );
  }
}

export default Example3;
