import styled from 'styled-components';

const ResetContainer = styled.button`
  border: none;
  border-radius: 0.5rem;
  color: #fff;
  font-size: 2rem;
  padding: 0.5rem 1rem;
  margin: 2rem auto;
  display: block;
  background-color: ${(props) => props.theme.resetColor};
  &:hover {
    box-shadow: 0 0 8px ${(props) => props.theme.resetColor};
  }
  &:active {
    filter: brightness(85%);
  }
`;

const ResetButton = ({ resetBoard }) => (
  <ResetContainer onClick={resetBoard}>RESET</ResetContainer>
);

export default ResetButton;
