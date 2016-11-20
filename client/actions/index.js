export const assignPlayer = (lineId, fieldId, playerId, playerName) => {
  return {
    type: 'ASSIGN_PLAYER',
		lineId,
		fieldId,
		playerId,
		playerName,
  };
};
export const selectPlayer = (playerId, playerName) => {
  return {
    type: 'SELECT_PLAYER',
		playerId,
		playerName,
  };
};
export const restorePlayer = (lineId, fieldId, playerId, playerName) => {
  return {
    type: 'RESTORE_PLAYER',
		lineId,
		fieldId,
		playerId,
		playerName,
  };
};
