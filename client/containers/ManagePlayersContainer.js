import React from 'react';
import { connect } from 'react-redux';
import ManagePlayers from '../components/ManagePlayers';

class ManagePlayersContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <ManagePlayers />
  }
}

const MapStateToProps = () => {
  return {
    test: 'test',
  };
};

const MapDispatchToProps = () => {
  return {

  };
};

export default connect(MapStateToProps, MapDispatchToProps)(ManagePlayersContainer);
