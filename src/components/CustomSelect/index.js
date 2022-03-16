import React, { useState, useRef } from 'react';
import { PoseGroup } from 'react-pose';
import {
  StyledSelect,
  StyledInnerSelect,
  StyledList,
  StyledListItem,
} from './styledCustomSelect';
import { H2, H3 } from '../styledComp';
import { useOutsideClick } from '../../hooks';
import { extraSubjectsConfig } from '../../data/extraSubjects';

const CustomSelect = () => {
  const [value, setValue] = useState('Fizyka');
  const [visible, setVisible] = useState(false);

  const handleClick = (e) => {
    const { dataset } = e.target;
    setValue(dataset.value ? dataset.value : value);
    setVisible(!visible);
  };

  const ref = useRef(null);
  useOutsideClick(ref, setVisible);

  return (
    <StyledSelect onClick={handleClick} ref={ref}>
      <StyledInnerSelect start="true">
        <label>Przedmiot dodatkowy</label>
      </StyledInnerSelect>
      <StyledInnerSelect>
        <H2 black>{value}</H2>
        <i className="material-icons">keyboard_arrow_down</i>
      </StyledInnerSelect>
      <PoseGroup>
        {visible ? (
          <StyledList vis={visible} key="124532">
            {extraSubjectsConfig.map(({ id, title }) => (
              <StyledListItem key={id} onClick={handleClick} data-value={title}>
                <H3 pointer>{title}</H3>
              </StyledListItem>
            ))}
          </StyledList>
        ) : null}
      </PoseGroup>
    </StyledSelect>
  );
};

export default CustomSelect;
