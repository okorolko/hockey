import React, { Component } from 'react';
import { connect } from 'react-redux';
import TaskList from '../components/TaskList';
import TopBar from '../components/TopBar';
import RaisedButton from 'material-ui/RaisedButton';
import CreateEventForm from '../components/CreateEventForm';
import PopUpContainer from './PopUpContainer';
import FormNewEventContainer from './/FormNewEventContainer'

class ManageEventsContainer extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div style={{display: "flex", flexDirection: "column", alignItems: 'center'}}>
        <div style={{width: "90%", paddingTop: "30px"}}>
          <PopUpContainer buttonLabel={'Test'}>
            {/*<CreateEventForm />*/}
            <FormNewEventContainer />
          </PopUpContainer>
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

export default connect()(ManageEventsContainer);
