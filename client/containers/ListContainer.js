import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { List } from '../components/List';
import { selectPlayer } from '../actions'

class ListContainer extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.dispatch = this.props.dispatch;
	}
	
	handleClick(playerId, playerName) {
		if (this.props.selectedId !== playerId) {
			this.dispatch(selectPlayer(playerId, playerName));
		} else {
			this.dispatch(selectPlayer('', ''));
		}
	} 
	render() {
		console.log('props selectedId', this.props.selectedId)
		return <List 
						handleClick={this.handleClick} 
						selectedId={this.props.selectedId}
						players={this.props.players}/>
	}
}

ListContainer.propTypes = {
	handleClick: PropTypes.func,
};

function mapStateToProps(state) {
  return { 
		players: state.list.players,
		selectedId: state.list.selectedPlayerId
	}
}


export default connect(mapStateToProps)(ListContainer);

