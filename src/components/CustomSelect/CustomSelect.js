import React, { useState, useEffect, useRef } from 'react';
import { PoseGroup } from 'react-pose';
import { StyledSelect, StyledList, StyledListItem } from './styledCustomSelect';
import { H2, H3 } from '../styledComp/styles';

const CustomSelect = props => {
  const [value, setValue] = useState('Fizyka');
  const [visible, setVisible] = useState(false);

  const useOutsideAlerter = ref => {
    const handleClickOutside = event => {
      if (ref.current && !ref.current.contains(event.target)) {
        setVisible(false);
      }
    };

    useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    });
  };

  const handleClick = e => {
    const { dataset } = e.target;
    setValue(dataset.value ? dataset.value : value);
    setVisible(!visible);
  };

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, setVisible);

  return (
    <StyledSelect onClick={handleClick} ref={wrapperRef}>
      <H2 black>{value}</H2>
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
