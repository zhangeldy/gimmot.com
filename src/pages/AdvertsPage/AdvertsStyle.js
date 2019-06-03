import styled from "styled-components";

export const Filter = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const AddModal = styled.div`
  padding: ${props => (props.isMobile ? "10px" : "30px")};
`;
