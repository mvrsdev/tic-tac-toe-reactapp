import styled from 'styled-components';

const BoardContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
width: 20rem;
background-color: #fff;
margin: 2rem auto;
box-shadow: 0 0 8px #888;
border-radius: 0.5rem;
`;

const ScoreContainer = styled.div`
width: 100%;
text-align: center;
padding: 1rem;
font-weight: bold;
font-size: 1.5em;
font-family: 'Fredoka', sans-serif;
`;

const ScoreBoard = ({scores}) => {
  const {xScore, oScore} = scores;
  return (
    <BoardContainer>
      <ScoreContainer>X - {xScore}</ScoreContainer>
      <ScoreContainer>O - {oScore}</ScoreContainer>
    </BoardContainer>
  )
};

export default ScoreBoard;