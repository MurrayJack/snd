import styled from "styled-components";

import Header from "./Header";
import Dropdown from "./Dropdown";

export default ({ Items, Placeholder }) => {
  return (
    <>
      <Wrapper>
        {/* Header normal */}
        <Header tabIndex={0} Placeholder={Placeholder} />

        {/* Header populated */}
        <Header
          HasValue
          tabIndex={0}
          Placeholder={Placeholder}
          ValueDescription="Cheque Refunds"
        />

        {/* Dropdown */}
        {/* <Dropdown Items={Items} /> */}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  padding: 1px;
  border: 1px solid transparent;
  color: #566878;

  &:focus-within {
    background: #ffffff;
    border: 1px solid #dce5eb;
    box-sizing: border-box;
    /* Shadow 30px */
    /* box-shadow: 0px 2px 30px rgba(0, 0, 0, 0.1); */
    border-radius: 6px;
  }
`;
