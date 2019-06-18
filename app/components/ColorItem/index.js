import styled from 'styled-components';
import React from 'react';

const ColorItemStyle = styled.li`
  color: ${props => {
    return props.children
  }};
`;

function ColorItem(props) {
  return <ColorItemStyle>{props.inputColor}</ColorItemStyle>;
}

export default ColorItem;
