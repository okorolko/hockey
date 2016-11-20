import React, { PropTypes } from 'react';
import { Grid } from '../components/Grid';
import { connect } from 'react-redux';
import { assignPlayer, restorePlayer } from '../actions'

class GridContainer extends React.Component {
	constructor(props) {
		super(props)
		this.handleClick = this.handleClick.bind(this);
		this.dispatch = this.props.dispatch;
	}

	handleClick(lineId, fieldId, selectedPlayerId, selectedPlayerName, isEmpty, restoreId, restoreName) {
		if (isEmpty && selectedPlayerName)	this.dispatch(assignPlayer(lineId, fieldId, selectedPlayerId, selectedPlayerName))
		if (!isEmpty) this.dispatch(restorePlayer(lineId, fieldId, restoreId, restoreName))
	}

	render() {
		return (
			<Grid 
			grid={this.props.grid}
			line={this.props.line}
			handleClick={this.handleClick}
			selectedPlayerId={this.props.selectedPlayerId}
			selectedPlayerName={this.props.selectedPlayerName}
			/>
		)
	}
}

function mapStateToProps(state) {
  return { 
		grid: state.grid,
		selectedPlayerId: state.list.selectedPlayerId,
		selectedPlayerName: state.list.selectedPlayerName
	}
}

export default connect(mapStateToProps)(GridContainer);