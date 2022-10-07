import styled from 'styled-components';
import { Board } from './index';

const GameContainer = styled.div`
  box-sizing: border-box;
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  background-color: #efefef;
  font-family: 'Fredoka', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Game = () => {
  return (
    <GameContainer>
      <Board />
    </GameContainer>
  );
};

export default Game;
