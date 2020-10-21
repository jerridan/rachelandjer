import styled from "styled-components";
import theme from "../theme";

export const Form = styled.form`
  text-align: left;
`;

export const Button = styled.button`
  height: 40px;
  color: ${theme.colors.white};
  background-color: ${theme.colors.darkGrey};
  border: none;
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: ${theme.colors.grey};
  }
`;

export const inputStyles = {
  width: "100%",
  padding: "10px",
  boxSizing: "border-box",
  border: `1px solid ${theme.colors.grey}`,
  marginBottom: "10px",
};
