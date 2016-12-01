import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const style = {
  height: "auto",
  width: "90vw",
  //margin: 20,
  textAlign: 'center',
  display: 'inline-block',
  boxShadow: '0 0px 3px rgba(0,0,0,0.17)'
};

const iconButtonElement = (
  <IconButton
    touch={true}
    tooltip="more"
    tooltipPosition="bottom-left"
  >
    <MoreVertIcon color={grey400} />
  </IconButton>
);

const rightIconMenu = (
  <IconMenu iconButtonElement={iconButtonElement}>
    <MenuItem>Reply</MenuItem>
    <MenuItem>Forward</MenuItem>
    <MenuItem>Delete</MenuItem>
  </IconMenu>
);

const TaskList = (props) => {
  const { title } = props;
  return (
    <div style={{display: "flex", flexDirection: "column"}} >
      <span style={{marginTop: "25px"}}>{title}</span>
      <Paper style={style} zDepth={1}>
        <List>
          <ListItem
            primaryText="Игра с ХК СоюзОптТорг"
            secondaryText={
              <p>
                <span style={{ color: darkBlack }}>28 ноября 2016</span>
                <span style={{ color: "green", display: "block" }}>Статус: Ожидание выбора состава</span>
              </p>
            }
            secondaryTextLines={2}
          />
          <Divider />
          <ListItem
            primaryText="Тренировка"
            secondaryText={
              <p>
                <span style={{ color: darkBlack }}>30 ноября 2016</span>
                <span style={{ color: "gray", display: "block" }}>Статус: Ожидание ответа</span>
              </p>
            }
            secondaryTextLines={2}
          />
        </List>
      </Paper>
    </div>
  );
}
export default TaskList;
