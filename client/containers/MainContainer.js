import React from 'react';
import { connect } from 'react-redux';
import Main from '../components/Main';

class MainContainer extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <Main />
    }
}

const MapStateToProps = (state) => {
  return {
    test: state
  };
};

const MapDispatchToProps = (dispatch) => {
  return {

  };
};

export default connect(MapStateToProps, MapDispatchToProps)(MainContainer);
