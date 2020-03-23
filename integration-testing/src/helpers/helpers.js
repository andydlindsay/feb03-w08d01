export const announceResult = (playerSelection, compSelection) => {
  const lookup = {
    'Axe': 'Tree',
    'Tree': 'Moai',
    'Moai': 'Axe'
  };
  if (!(playerSelection && compSelection)) {
    return 'Waiting';
  }
  if (lookup[playerSelection] === compSelection) {
    return 'Won';
  }
  if (lookup[compSelection] === playerSelection) {
    return 'Lost';
  }
  return 'Tied';
};

export const cpuChoice = (playerSelection, cheating) => {
  const lookup = {
    'Axe': 'Moai',
    'Tree': 'Axe',
    'Moai': 'Tree'
  };
  if (cheating) {
    return lookup[playerSelection];
  } else {
    const options = ['Axe', 'Tree', 'Moai'];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
  }
};

export const statusCheck = (status) => {
  switch(status) {
    case 'Won':
      return 'You won!';
    case 'Lost':
      return 'You lost!';
    case 'Tied':
      return 'You tied!';
    default:
      return 'Waiting for your choice!';
  }
};
