import React from 'react';
import { Link } from 'react-router';
import ListContainer from '../containers/ListContainer';
import GridContainer from '../containers/GridContainer';
import RaisedButton from 'material-ui/RaisedButton';
import TopBar from './TopBar'

class App extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
      <div>
        <TopBar
          title={this.props.children.props.route.title}
        />
      {this.props.children}
      </div>
    )

	}
}

export default App;

