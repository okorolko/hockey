import React, { Component } from 'react';
import { connect } from 'react-redux';
import TaskList from '../components/TaskList';
import TopBar from '../components/TopBar';
import RaisedButton from 'material-ui/RaisedButton';


class ManageTasksContainer extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div style={{display: "flex", flexDirection: "column", alignItems: 'center'}}>
      <div style={{width: "90%", paddingTop: "30px"}}>
      </div>
      <div>
      <TaskList 
        title={"Активные"}
      />
      <TaskList
        title={"Завершенные"}
      />
      </div>
      </div>
    )
  }
}

export default connect()(ManageTasksContainer);
