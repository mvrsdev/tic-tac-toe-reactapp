import { darken } from 'polished';
import styled, { css } from 'styled-components';

const SquareContainer = styled.button`
  width: 5rem;
  height: 5rem;
  background-color: ${props => props.theme.squareColor};
  border: none;
  border-radius: 10%;
  box-shadow: 0 0 8px ${props => darken(0.5, props.theme.squareColor)};
  margin: 0.5rem;
  font-size: 5em;
  font-weight: bold;
  line-height: 5rem;
  color: ${props => props.theme.oColor};
  perspective: 500px;
  &:hover {
    box-shadow: 4px 4px 16px ${props => darken(0.3, props.theme.squareColor)};
    transform:translateZ(110%);
  }
  &:active {
    filter: brightness(85%);
  }
  ${(props) =>
    props.playerValue === 'X' &&
    css`
      color: ${props => props.theme.xColor};
    `}
`;

const Square = ({ value, onClick }) => (
  <SquareContainer onClick={onClick} playerValue={value}>{value}</SquareContainer>
);

export default Square;
