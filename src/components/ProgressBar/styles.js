import styled from "styled-components";

export const Container = styled.div`
  float: left;
  height: 40px;
  width: 80%;
  border: 1px solid #aaa;
  border-radius: 6px;
  padding: 1px;

  .bar {
    background: linear-gradient(20deg, hsl(96, 60%, 65%), hsl(-209, 64%, 60%));
    width: ${props => props.percentage};
    height: 40px;
    border-radius: 6px;
    span {
      float: right;
      padding: 10px;
      color: #fff;
      font-size: 1em;
    }
  }
`;
