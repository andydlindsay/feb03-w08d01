import { announceResult, cpuChoice, statusCheck } from '../helpers'

let fakeState;

beforeEach(() => {
  fakeState = {
    compSelection: null,
    playerSelection: null,
    status: 'Waiting',
    cheating: false
  };
});

describe('announceResult function', () => {
  test('returns "Won" if player is "Axe" and comp is "Tree"', () => {
    fakeState.playerSelection = 'Axe';
    fakeState.compSelection = 'Tree';
    expect(announceResult(fakeState.playerSelection, fakeState.compSelection)).toBe('Won');
  });

  test('returns "Tied" if player is "Axe" and comp is "Axe"', () => {
    fakeState.playerSelection = 'Axe';
    fakeState.compSelection = 'Axe';
    expect(announceResult(fakeState.playerSelection, fakeState.compSelection)).toBe('Tied');
  });

  test('returns "Lost" if player is "Axe" and comp is "Moai"', () => {
    fakeState.playerSelection = 'Axe';
    fakeState.compSelection = 'Moai';
    expect(announceResult(fakeState.playerSelection, fakeState.compSelection)).toBe('Lost');
  });

  test('returns "Waiting" if nothing is passed in', () => {
    expect(announceResult()).toBe('Waiting');
  });
});

describe('cpuChoice function', () => {
  test('given the player choice and cheating is true, returns the winning choice', () => {
    const cheating = true;

    fakeState.playerSelection = 'Tree';
    let result = cpuChoice(fakeState.playerSelection, cheating);
    expect(result).toBe('Axe');

    fakeState.playerSelection = 'Moai';
    result = cpuChoice(fakeState.playerSelection, cheating);
    expect(result).toBe('Tree');

    fakeState.playerSelection = 'Axe';
    result = cpuChoice(fakeState.playerSelection, cheating);
    expect(result).toBe('Moai');
  });

  test('if cheating is false, returns a random choice', () => {
    const cheating = false;
    const options = ['Axe', 'Tree', 'Moai'];

    let result = cpuChoice('', cheating);
    expect(options.includes(result)).toBeTruthy();
  });
});

describe('statusCheck function', () => {
  test('retuns the correct message based on status', () => {
    const win = statusCheck('Won');
    const loss = statusCheck('Lost');
    const tie = statusCheck('Tied');
    const waiting = statusCheck('Waiting');

    expect(win).toEqual('You won!');
    expect(loss).toEqual('You lost!');
    expect(tie).toEqual('You tied!');
    expect(waiting).toEqual('Waiting for your choice!');
  });
});
