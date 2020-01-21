import React from 'react';
import PropTypes from 'prop-types';
import * as config from '../data/nowaConfig';
import matura from './matura';

const NowaMatura = ({ children }) => <>{children}</>;

NowaMatura.propTypes = {
  children: PropTypes.node.isRequired,
};

export default matura(NowaMatura, config);

// const NowaMatura = () => (
//   <StyledMain>
//     <StyledTitleWrapper>
//       <H2 square medium black regular>
//           Nowa Matura
//       </H2>
//       <i
//         className="material-icons"
//         data-type="clear"
//       >
//           delete_sweep
//       </i>
//     </StyledTitleWrapper>
//     {/* {renderForm()} */}
//     <SubjectForm
//           // subjects={props.subjects[`${nowaConfig.id}`]}
//       subjects={nowaConfig}
//       validationSchema={validationSchema}
//     />
//     {/* <Subject
//         handleInputChange={handleInputChange}
//         handleSubmit={handleSubmit}
//         handleItemClick={handleItemClick}
//         data={nowaConfig}
//         lastResult={lastResult}
//         isChecked={isChecked}
//         checkboxExist
//       /> */}
//     <AddSubject />
//   </StyledMain>
// );

// export default NowaMatura;
