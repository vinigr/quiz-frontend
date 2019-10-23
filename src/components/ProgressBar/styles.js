import styled from "styled-components";

export const Container = styled.div`
  float: left;
  height: 40px;
  width: 80%;
  border: 1px solid #aaa;
  border-radius: 6px;
  padding: 1px;

  .bar {
    background: #${((Math.random() * 0xffffff) << 0).toString(16)};
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
