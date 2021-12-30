import styled from "styled-components";

export const Option = styled.div<{ selected?: boolean }>`
  margin: 1rem;
  background: ${(props) => props.selected ? "red": "#0069ed"};
  border-radius: 8px;
  transition: background 250ms ease-in-out, transform 150ms ease;

  :hover {
    background: #0053ba;
  }

  :active {
    transform: scale(0.99);
  }
`;

export const Button = styled.button`
  display: inline-block;
  border: none;
  padding: 0.5rem;
  margin: 0;
  text-decoration: none;
  background: inherit;
  color: #ffffff;
  font-family: sans-serif;
  font-size: 1rem;
  cursor: pointer;
  text-align: center;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 100%;

  :hover {
    background: #0053ba;
  }

  // :focus {
  //   outline: 1px solid #fff;
  //   outline-offset: -4px;
  // }

  // :active {
  //   transform: scale(0.99);
  // }
`;
