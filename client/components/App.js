import React from 'react';
import { Link } from 'react-router';
import ListContainer from '../containers/ListContainer';
import GridContainer from '../containers/GridContainer';

class App extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		let currentLine = this.props.params.line === undefined 
				? 1 
				: parseInt(this.props.params.line, 10);
		let next = `/${currentLine + 1}`;
		let prev = `/${currentLine - 1}`;
		return (
			<div style={{height:"90vh"}}>
				<GridContainer line={currentLine} />
					<ListContainer />
				<ul style={{listStyleType: 'none',
										display: 'flex',
										justifyContent: 'space-between',
										fontSize: '20px'}} role="nav">
								<li>
									<Link to={prev} onClick={(e) => {
										if (currentLine === 1) e.preventDefault();
									}}>
										<div style={{display: 'flex',
																justifyContent: 'center',
																alignItems: 'center',
																width: '45vw',
																	height: '7vh', 
																	background: 'rgb(0%, 58.3%, 92.5%)'}}>
											Prev
										</div>
									</Link>			
								</li>		
								<li>
									<Link to={next} onClick={(e) => {
										if (currentLine === 4) e.preventDefault();
									}}>
										<div style={{display: 'flex',
																justifyContent: 'center',
																alignItems: 'center',
																width: '45vw',
																height: '7vh', 
																background: 'rgb(0%, 58.3%, 92.5%)'}}>
											Next
										</div>
									</Link>	
								</li>

				</ul>
			</div>
		)
	}
}



export default App;

