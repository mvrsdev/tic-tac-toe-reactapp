import styled from 'styled-components';

const SquareContainer = styled.button `
width: 5rem;
height: 5rem;
background-color: #fff;
border: none;
border-radius: 10%;
box-shadow: 0 0 8px #888;
margin: 0.5rem;
font-size: 5em;
font-weight: bold;
font-family: 'Fredoka One', sans-serif;
line-height: 5rem;
  &:hover {
    box-shadow: 0 0 15px #888;
  }
  &:active {
    filter: brightness(85%);
  }
`;

const Square = ({value, onClick}) => (
  <SquareContainer onClick={onClick}>{value}</SquareContainer>
);

export default Square;