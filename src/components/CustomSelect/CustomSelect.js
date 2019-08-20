import React, { useState, useRef } from 'react';
import { PoseGroup } from 'react-pose';
import { StyledSelect, StyledList, StyledListItem } from './styledCustomSelect';
import { H2, H3 } from '../styledComp';
import { useOutsideClick } from '../../hooks';

const CustomSelect = props => {
  const [value, setValue] = useState('Fizyka');
  const [visible, setVisible] = useState(false);

  const handleClick = e => {
    const { dataset } = e.target;
    setValue(dataset.value ? dataset.value : value);
    setVisible(!visible);
  };

  const ref = useRef(null);
  useOutsideClick(ref, setVisible);

  return (
    <StyledSelect onClick={handleClick} ref={ref}>
      <H2 black>{value}</H2>
      <i className="material-icons">keyboard_arrow_down</i>
      <PoseGroup>
        {visible ? (
          <StyledList vis={visible} key="124532">
            {props.extra.map(item => (
              <StyledListItem
                key={item.id}
                onClick={handleClick}
                data-value={item.title}
              >
                <H3 pointer>{item.title}</H3>
              </StyledListItem>
            ))}
          </StyledList>
        ) : null}
      </PoseGroup>
    </StyledSelect>
  );
};

export default CustomSelect;
