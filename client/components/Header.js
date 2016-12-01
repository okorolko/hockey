import React, { PropTypes } from 'react';
import wrapper from '../style/common/wrapper';


const Header = ({ title }) => {
  return (
    <div style={wrapper}>
      {/*<h1>Hockey Reminder</h1>*/}
      <h2 style={{textAlign: 'center'}}>{ title }</h2>
    </div>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header;
