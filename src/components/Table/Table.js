import React from "react";
import propTypes from "prop-types";

import styled from "styled-components";
import Cutout from "../Cutout/Cutout";

const StyledTable = styled.table`
  display: table;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
`;
const StyledCutout = styled(Cutout)`
  &:before {
    box-shadow: none;
  }
`;
const Table = ({ className, children, style, ...otherProps }) => {
  return (
    <StyledCutout>
      <StyledTable className={className} style={style} {...otherProps}>
        {children}
      </StyledTable>
    </StyledCutout>
  );
};

Table.defaultProps = {};

Table.propTypes = {
  children: propTypes.node,
  className: propTypes.string,
  style: propTypes.object
};

export default Table;
