import styled from 'styled-components';
import Square from './Square';

const BoardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 6rem);
  place-items: center;
  justify-content: center;
`;

const Board = ({ board, onClick }) => (
  <BoardContainer>
    {board.map((value, idx) => {
      return (
        <Square key={idx} value={value} onClick={() => value === null && onClick(idx)} />
      );
    })}
  </BoardContainer>
);

export default Board;
