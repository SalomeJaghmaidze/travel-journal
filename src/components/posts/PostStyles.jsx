import styled from "styled-components";

export const Container = styled.div`
  margin: auto;
  max-width: 550px;
  align-items: center;
`;

export const PostCard = styled.div`
  border-bottom: 3px solid #f5f5f5;
  display: flex;
  align-items: center;
  margin-top: 20px;
  padding: 10px;
`;
export const Image = styled.div`
  width: 30%;
  img {
    width: 125px;
    height: 160px;
    border-radius: 5px;
  }
`;
export const Description = styled.div`
  width: 70%;

  div {
    display: flex;
    align-items: center;
    gap: 15px;

    div {
      gap: 5px;
    }
  }

  img {
    width: 7px;
    height: 9.55px;
  }

  h2 {
    font-size: 25px;
    margin: 0;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
  }

  h4 {
    text-transform: uppercase;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0.17em;
  }

  a {
    color: #918e9b;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
  }
  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
  }
`;
