import styled from "styled-components";

export const ContentContainer = styled.div`
  position: absolute;
  top: 0;

  width: 300px;
  height: 100%;
  padding: 50px 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-top-right-radius: 80px;
  border-bottom-right-radius: 80px;

  background-color: ${(props) => props.theme.dark.contentBackground};
`;
