import { useState } from 'react';
import styled from 'styled-components';
import { Board, ResetButton, ScoreBoard } from './index';

const GameContainer = styled.div`
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  background-color: ${props => props.theme.backgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Game = () => {
  const WIN_CONDITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const [board, setBoard] = useState(Array(9).fill(null));
  const [xTurn, setXTurn] = useState(true);
  const [score, setScore] = useState({ xScore: 0, oScore: 0 });
  const [gameOver, setGameOver] = useState(false);

  const onClickHandler = (squareIdx) => {
    const updatedBoard = board.map((value, idx) => {
      if (idx === squareIdx) {
        return xTurn === true ? 'X' : 'O';
      } else {
        return value;
      }
    });

    const winner = checkWinner(updatedBoard);
    if (winner === 'O') {
      let { oScore } = score;
      oScore += 1;
      setScore({ ...score, oScore });
    } else if (winner === 'X') {
      let { xScore } = score;
      xScore += 1;
      setScore({ ...score, xScore });
    }

    setBoard(updatedBoard);
    setXTurn(!xTurn);
  };

  const checkWinner = (board) => {
    for (let i = 0; i < WIN_CONDITIONS.length; i++) {
      const [x, y, z] = WIN_CONDITIONS[i];
      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        setGameOver(true);
        return board[x];
      }
    }
  };

  const resetBoard = () => {
    setGameOver(false);
    setBoard(Array(9).fill(null));
  };

  return (
    <GameContainer>
      <ScoreBoard xTurn={xTurn} scores={score} />
      <Board board={board} onClick={gameOver ? resetBoard : onClickHandler} />
      <ResetButton resetBoard={resetBoard} />
    </GameContainer>
  );
};

export default Game;
