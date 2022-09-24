const rotateTable = (tableArray) => {
    if (tableArray.length === 1) {
      return tableArray;
    }
  
    const rowLength = Math.sqrt(tableArray.length);
  
    if (!Number.isInteger(rowLength)) {
      return [];
    }
  
    const result = [];
    let currentRow = -1;
    let currentColumn = 0;
  
    for (let i = 0; i < tableArray.length; i++) {
      const currentValue = tableArray[i];
      currentColumn = i % rowLength;
  
      if (currentColumn === 0) {
        currentRow++;
      }
  
      if (currentRow < Math.floor(rowLength / 2)) {
        if (currentColumn < currentRow) {
          const moveIndex = getIndexForMoveUp(i, rowLength);
          if (moveIndex < 0 || moveIndex > tableArray.length) return [];
          result[moveIndex] = currentValue;
          continue;
        } else if (currentColumn >= rowLength - (currentRow + 1)) {
          const moveIndex = getIndexForMoveDown(i, rowLength);
          if (moveIndex < 0 || moveIndex > tableArray.length) return [];
          result[moveIndex] = currentValue;
          continue;
        } else {
          const moveIndex = getIndexForMoveRight(i);
          if (moveIndex < 0 || moveIndex > tableArray.length) return [];
          result[moveIndex] = currentValue;
          continue;
        }
      } else {
        if (
          !Number.isInteger(rowLength / 2) &&
          currentRow === Math.floor(rowLength / 2)
        ) {
          if (currentColumn < Math.floor(rowLength / 2)) {
            const moveIndex = getIndexForMoveUp(i, rowLength);
            if (moveIndex < 0 || moveIndex > tableArray.length) return [];
            result[moveIndex] = currentValue;
            continue;
          } else if (currentColumn === Math.floor(rowLength / 2)) {
            result[i] = currentValue;
            continue;
          } else {
            const moveIndex = getIndexForMoveDown(i, rowLength);
            if (moveIndex < 0 || moveIndex > tableArray.length) return [];
            result[moveIndex] = currentValue;
            continue;
          }
        } else {
          if (currentColumn < rowLength - currentRow) {
            const moveIndex = getIndexForMoveUp(i, rowLength);
            if (moveIndex < 0 || moveIndex > tableArray.length) return [];
            result[moveIndex] = currentValue;
            continue;
          } else if (currentColumn > currentRow) {
            const moveIndex = getIndexForMoveDown(i, rowLength);
            if (moveIndex < 0 || moveIndex > tableArray.length) return [];
            result[moveIndex] = currentValue;
            continue;
          } else {
            const moveIndex = getIndexForMoveLeft(i);
            if (moveIndex < 0 || moveIndex > tableArray.length) return [];
            result[moveIndex] = currentValue;
            continue;
          }
        }
      }
    }
    return result;
  };
  
  const getIndexForMoveUp = (currentIndex, rowLength) => {
    return currentIndex - rowLength;
  };
  
  const getIndexForMoveDown = (currentIndex, rowLength) => {
    return currentIndex + rowLength;
  };
  
  const getIndexForMoveRight = (currentIndex) => {
    return currentIndex + 1;
  };
  
  const getIndexForMoveLeft = (currentIndex) => {
    return currentIndex - 1;
  };

  module.exports = rotateTable;