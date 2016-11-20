import React from 'react';

const Field = (props) => {
  const { playerName, positionName, playerSelected } = props;
  let border;
  if (playerName === '' && playerSelected) {
    border = '1px solid rgb(100%, 48.7%, 0%)';
  } else if (playerName === '' && !playerSelected) {
    border = '1px solid rgb(40.2%, 40.2%, 40.2%)';
  } else {
    border = '1px solid rgb(40.2%, 40.2%, 40.2%)';
  }
  return (
    <div
      style={{ display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '42vw',
        height: '8vh',
        border: border,
      }}>
			{playerName || positionName}
		</div>
	)
}

export const Grid = (props) => {	
	const { grid, handleClick, selectedPlayerId, selectedPlayerName, line } = props;
	const currentGrid = grid[line];
	
	let LF = _.find(currentGrid, (elem) => {
		return elem.fieldId === 'LF'
	})
	let RF = _.find(currentGrid, (elem) => {
		return elem.fieldId === 'RF'
	})
	let CF = _.find(currentGrid, (elem) => {
		return elem.fieldId === 'CF'
	})
	let LD = _.find(currentGrid, (elem) => {
		return elem.fieldId === 'LD'
	})
	let RD = _.find(currentGrid, (elem) => {
		return elem.fieldId === 'RD'
	})
	return (
		<div style={{ height: '35vh', background: '#92C6FF', paddingTop: '10px' }}>
		<span style={{fontSize: '18px', paddingLeft: '20px'}}>Пятерка {line}</span>
			<div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '10px'}}>
				<div onClick={() => handleClick(line, 'LF', selectedPlayerId, selectedPlayerName, !LF.playerName, LF.playerId, LF.playerName)} >
					<Field positionName={'Левый Нап'}
								key={'LF'} 
								playerId={LF.playerId} 
								playerName={LF.playerName}
								playerSelected={selectedPlayerName}
								/>
				</div>				
				<div onClick={() => handleClick(line, 'RF', selectedPlayerId, selectedPlayerName, !RF.playerName, RF.playerId, RF.playerName)} >
					<Field positionName={'Правый Нап'}
								key={'RF'} 
								playerId={RF.playerId} 
								playerName={RF.playerName} 
								playerSelected={selectedPlayerName}
								/>
				</div>		
			</div>
			<div style={{display: 'flex', justifyContent: 'center', width: '100%', paddingTop: '10px'}}>
				<div onClick={() => handleClick(line, 'CF', selectedPlayerId, selectedPlayerName, !CF.playerName, CF.playerId, CF.playerName)} >
								<Field positionName={'Центр Нап'}
											key={'CF'} 
											playerId={CF.playerId} 
											playerName={CF.playerName} 
											playerSelected={selectedPlayerName}
											/>
				</div>	
			</div>
			<div style={{display: 'flex', marginTop: 'auto', alignSelf: 'flex-end', justifyContent: 'space-around', width: '100%', paddingTop: '15px'}}>
				<div onClick={() => handleClick(line, 'LD', selectedPlayerId, selectedPlayerName, !LD.playerName, LD.playerId, LD.playerName)} >
								<Field positionName={'Левый Защ'}
											key={'LD'} 
											playerId={LD.playerId} 
											playerName={LD.playerName} 
											playerSelected={selectedPlayerName}
											/>
				</div>
				<div onClick={() => handleClick(line, 'RD', selectedPlayerId, selectedPlayerName, !RD.playerName, RD.playerId, RD.playerName)} >
								<Field positionName={'Правый Защ'}
											key={'RD'} 
											playerId={RD.playerId} 
											playerName={RD.playerName} 
											playerSelected={selectedPlayerName}
											/>
				</div>
			</div>		
		</div>
	)
}


