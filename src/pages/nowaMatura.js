import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { H2, StyledMain, StyledTitleWrapper } from '../components/styledComp';
// import Subject from '../components/SubjectForm/Subject';
import SubjectForm from '../components/SubjectForm';
import nowaConfig from '../data/nowaConfig';
import { toggleSubject } from '../actions';


import AddSubject from '../components/AddSubject/AddSubject';

const NowaMatura = props => {
  const toggleSubjects = useCallback((id, config) => { props.toggleSubject(id, config); }, [props]);

  useEffect(() => {
    toggleSubjects(nowaConfig.id, nowaConfig);
  }, [props, toggleSubjects]);

  return (
    <StyledMain>
      <StyledTitleWrapper>
        <H2 square medium black regular>
          Nowa Matura
        </H2>
        <i
          className="material-icons"
          data-type="clear"
        >
          delete_sweep
        </i>
      </StyledTitleWrapper>
      <SubjectForm subjects={nowaConfig} />
      {/* <Subject
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        handleItemClick={handleItemClick}
        data={nowaConfig}
        lastResult={lastResult}
        isChecked={isChecked}
        checkboxExist
      /> */}
      <AddSubject />
    </StyledMain>
  );
};

NowaMatura.defaultProps = {
  toggleSubject: null,
};

NowaMatura.propTypes = {
  toggleSubject: PropTypes.func,
};

export default connect(null, { toggleSubject })(NowaMatura);
