import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';



export default class PopUpContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.handleTouchTap = this.handleTouchTap.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
  }
  handleTouchTap(event) {
    event.preventDefault();
    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  }
  handleRequestClose() {
    this.setState({
      open: false,
    });
  }
  render() {
    const PopoverStyle = {
      width: '100%',
    };
    const { buttonLabel } = this.props;
    return (
      <div style={{width: '100%'}}>
        <RaisedButton
          fullWidth={true}
          onTouchTap={this.handleTouchTap}
          label={buttonLabel}
        />
        <Popover
          style={PopoverStyle}
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'middle', vertical: 'top'}}
          targetOrigin={{horizontal: 'middle', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
          zDepth={0}
          >      
          {this.props.children}
        </Popover>
      </div>
    );
  }
}