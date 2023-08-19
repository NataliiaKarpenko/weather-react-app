import styled from "styled-components";

export const FormContainer = styled.form`
  width: 100%;
`;

export const InputContainer = styled.div`
  position: relative;
  height: 45px;
  width: 100%;
  padding-left: 20px;
  display: flex;
  border-radius: 30px;

  background-color: ${(props) => props.theme.dark.contentBackground};
  color: ${(props) => props.theme.dark.input};
  border: ${(props) =>
    props.isError
      ? `1px solid ${props.theme.globalColors.error}`
      : "1px solid transparent"};

  @media ${(props) => props.theme.media.tab} {
    height: 50px;
  }
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  background-color: transparent;

  color: ${(props) => props.theme.dark.input};
  font-size: 16px;

  &::placeholder {
    color: ${(props) => props.theme.dark.placeholder};
  }

  @media ${(props) => props.theme.media.tab} {
    font-size: 18px;
  }
`;

export const Button = styled.button`
  width: 17%;
  background-color: transparent;
  border: none;
  outline: none;

  border-left: ${(props) =>
    props.type === "submit" ? `1px solid ${props.theme.dark.placeholder}` : ""};
  transition: ${(props) => props.theme.transition};

  @media ${(props) => props.theme.media.desktop} {
    width: 10%;
  }

  &:hover svg {
    scale: 1.02;
  }
`;

export const ErrorMessage = styled.p`
  position: absolute;
  bottom: -45%;

  color: ${(props) => props.theme.globalColors.error};
  font-size: 14px;

  @media ${(props) => props.theme.media.tab} {
    font-size: 16px;
  }
`;
