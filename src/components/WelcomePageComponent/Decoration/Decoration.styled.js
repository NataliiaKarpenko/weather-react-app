import styled from "styled-components";

export const StyledDecoration = styled.div`
  background-color: ${(props) => props.theme.dark.contentBackground};

  @media ${(props) => props.theme.media.sx} {
    display: none;
  }

  @media ${(props) => props.theme.media.phone} {
    display: none;
  }
  @media ${(props) => props.theme.media.tab} {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    width: calc(100% / 2);
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  @media ${(props) => props.theme.media.tab} {
    height: 550px;
  }

  @media ${(props) => props.theme.media.desktop} {
    height: 600px;
  }
`;

const Image = styled.img`
  position: absolute;
`;

export const Image1 = styled(Image)`
  width: 140px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media ${(props) => props.theme.media.desktop} {
    width: 160px;
  }
`;

export const Image2 = styled(Image)`
  width: 100px;
  top: 10%;
  left: 10%;
  @media ${(props) => props.theme.media.desktop} {
    width: 140px;
  }
`;

export const Image3 = styled(Image)`
  width: 90px;
  bottom: 0;
  right: 20%;
  @media ${(props) => props.theme.media.desktop} {
    width: 120px;
    bottom: 5%;
  }
`;

export const Image4 = styled(Image)`
  width: 100px;
  bottom: 15%;
  left: 10%;
  @media ${(props) => props.theme.media.desktop} {
    width: 140px;
    left: 5%;
  }
`;

export const Image5 = styled(Image)`
  width: 80px;
  top: 20%;
  right: 10%;
  @media ${(props) => props.theme.media.desktop} {
    width: 100px;
  }
`;
