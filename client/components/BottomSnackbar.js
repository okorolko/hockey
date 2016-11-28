import React from 'react';
import Snackbar from 'material-ui/Snackbar';

export default class BottomSnackbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Snackbar
          open={this.props.playerEdited}
          message="Данные обновлены"
        />
      </div>
    );
  }
};
