import styled from "styled-components";

import Header from "./Header";
import Dropdown from "./Dropdown";

export default ({ Items, Placeholder }) => {
  return (
    <>
      <Wrapper>
        <Header Placeholder={Placeholder} />
        <Dropdown Items={Items} />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div``;
