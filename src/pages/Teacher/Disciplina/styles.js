import styled from "styled-components";
import { device } from "../../../utils/devices";

export const Container = styled.div`
  padding: 20px;
  width: calc(100% - 40px);

  @media (max-width: ${device.laptop}) {
    padding-top: 10px;
  }

  @media (max-width: 520px) {
    margin-top: 60px;
  }

  @media (max-width: ${device.mobileL}) {
    width: calc(100% - 20px);
    padding: 10px;
  }

  @media (max-width: ${device.mobileM}) {
    width: 100%;
    padding-top: 0;
  }
`;
