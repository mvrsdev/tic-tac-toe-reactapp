import { darken } from 'polished';
import  light  from '../themes/light';
import styled, { css } from 'styled-components';

const BoardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 20rem;
  background-color: ${props => props.theme.squareColor};
  margin: 2rem auto;
  box-shadow: 0 0 8px ${props => darken(0.5, props.theme.squareColor)};
  border-radius: 0.5rem;
  overflow: hidden;
`;

const ScoreContainer = styled.div`
  width: 100%;
  text-align: center;
  padding: 1rem;
  font-weight: bold;
  font-size: 1.5em;
  color: ${(props) => props.playerColor};
  ${(props) =>
    props.active &&
    css`
      border-bottom: .3rem solid ${props.playerColor};
    `}
`;

const ScoreBoard = ({ scores: { xScore, oScore }, xTurn }) => {
  return (
    <BoardContainer>
      <ScoreContainer playerColor={light.xColor} active={xTurn}>X - {xScore}</ScoreContainer>
      <ScoreContainer playerColor={light.oColor} active={!xTurn}>O - {oScore}</ScoreContainer>
    </BoardContainer>
  );
};

export default ScoreBoard;
