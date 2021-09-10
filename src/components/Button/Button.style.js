import styled from 'styled-components';

export const Button = styled.button`
  background-color: ${(props) => props.btnBgColor};
  color: ${(props) => props.btnColor};
  height: 3rem;
  border-radius: 0.8rem;
  outline: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  &:hover {
    background-color: ${(props) => props.hoverBtnBgColor};
    color: ${(props) => props.hoverBtnColor};
  }
`;
