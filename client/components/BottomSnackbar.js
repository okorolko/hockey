import React from 'react';
import { connect } from 'react-redux';
import Snackbar from 'material-ui/Snackbar';
import { hideNotification } from '../actions/notify';

class BottomSnackbar extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidUpdate() {
    setTimeout(() => {
      this.props.dispatch(hideNotification())
    }, 2000)
  }
  render() {
    return (
      <div>
        <Snackbar
          open={this.props.open}
          message={this.props.message}
        />
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    open: state.notify.open,
    message: state.notify.message,
  }
}

export default connect(mapStateToProps)(BottomSnackbar);
