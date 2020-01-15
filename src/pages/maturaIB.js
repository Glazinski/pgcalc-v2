import React from 'react';
import PropTypes from 'prop-types';
import * as config from '../data/ibConfig';
import matura from './matura';

const MaturaIb = ({ children }) => <>{children}</>;

MaturaIb.propTypes = {
  children: PropTypes.node.isRequired,
};

export default matura(MaturaIb, config);

// const MaturaIB = () => (
//   <>
//     {page(MaturaIB, config)}
//   </>
//   <StyledMain>
//     <StyledTitleWrapper>
//       <H2 square medium black regular mb>
//           Matura Międzynarodowa
//       </H2>
//       <i className="material-icons">
//           delete_sweep
//       </i>
//     </StyledTitleWrapper>
//     <SubjectForm
//       subjects={ibConfig}
//       grades={grades}
//       validationSchema={validationSchema}
//     />
//     {/* <Subject
//         handleInputChange={handleInputChange}
//         handleSubmit={handleSubmit}
//         handleItemClick={handleItemClick}
//         lastResult={lastResult}
//         data={ibConfig}
//       /> */}

//     <AddSubject />
//   </StyledMain>
// );

// export default MaturaIB;
