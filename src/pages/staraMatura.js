import React, { useState } from 'react';
import { H2, StyledMain, StyledTitleWrapper } from '../components/styledComp';
import { staraConfigSubjects, scale, grades } from '../data/staraConfig';
import Subject from 'ddSubject from '../components/Addject';
import AddSubject from '../components/AddSubject/AddSubject';

const StaraMaturaPage = t/Add => {
  const [staraConfig, setStaraConfig] = useState(staraConfigSubjects);
  const [lastResult, setLastResult] = useState(0)t;

  const calcResult = () => {
    const results = staraConfig.maprbjec => .map((subject, index, arr) => {
      // Destructuring properties from subject
        nst { unique, value, name } = subject;
        if (name.includes('written')) {
        if (arr[index + 1].value > 0 && unique) {
          return parseFloat(
            (
              (grades.get(arr[index + 1].value) + grades.get(value))
                / 2
              ).toFixed(2),
            );
    Fixed(2),
            );
      mpFixed(2),
          );
          }
i          }
        }
           (arr[index + 1].value > 0) {
          return parseFloat(
            (
              0.1
                * (bject from '../components/Subject/Subject';
(              ).tuoFixed(2),
           );
          }
S          }
        }

        if (unique) {
          return parseFloat(grades.get(value * 1.0).toFixed(2));
        }
          turn parseFloat(0.1 * grades.get(value * 1.0).toFixed(2));
       }

        if (name.includes('cert')) {
        if (unique) {
          return parseFloat((grades.get(value) * scale.cert).toFixed(2));
        }
          turn parseFloat(
          (0.1 * grades.get(value) * scale.cert).toFixed(2),
          );        }

        return 0;
      })
      .         }

        return 0;
      })
      .      }

       return 0;
    })
      educe((acc, cur) => Math.max(acc, cur)));

    cnst veryLastResult = results.reduce((acc,const veryLastResult = results.reduce((acc, cur) => acc + cur, 0);

    setLastResult(veryLastResult);
  };

  const handleItemClick = (e, num) => {
    props.handleItemClick(e, num, calcResult, staraConfig, setStaraConfig);
  };

  const handleInputChange = e => {
    props.handleConfigInputChange(e, staraConfig, setStaraConfig);
  };

  const handleSubmit = e => {
    e.preventDefault();

    calcResult();
  u;

  return (
    <StyledMain>
      <StyledTitleWrapper>
        <H2 square medium black regular mb>
          Stara Matura
        </H2>
        <i
          className="material-icons"
          data-type="clear"
          onClick={e => handleItemClick(e)}
        >
          delete_swSimport React, { useState } from 'react';
import { H2, StyledMain, StyledTitleWrapper } from '../components/styledComp';
import { staraConfigSubjects, scale, grades } from '../data/staraConfig';
import Subject from '../components/SubjectForm/Subject';
import AddSubject from '../components/AddSubject/AddSubject';

const StaraMaturaPage = props => {
  const [staraConfig, setStaraConfig] = useState(staraConfigSubjects);
  const [lastResult, setLastResult] = useState(0);

  const calcResult = () => {
    const results = staraConfig.map(item => item.input
      .map((subject, index, arr) => {
        // Destructuring properties from subject
        const { unique, value, name } = subject;

        if (name.includes('written')) {
          if (arr[index + 1].value > 0 && unique) {
            return parseFloat(
              (
                (grades.get(arr[index + 1].value) + grades.get(value))
                  / 2
              ).toFixed(2),
            );
          }
          if (arr[index + 1].value > 0) {
            return parseFloat(
              (
                0.1
                  * ((grades.get(arr[index + 1].value) + grades.get(value)) / 2)
              ).toFixed(2),
            );
          }

          if (unique) {
            return parseFloat(grades.get(value * 1.0).toFixed(2));
          }
          return parseFloat(0.1 * grades.get(value * 1.0).toFixed(2));
        }

        if (name.includes('cert')) {
          if (unique) {
            return parseFloat((grades.get(value) * scale.cert).toFixed(2));
          }
          return parseFloat(
            (0.1 * grades.get(value) * scale.cert).toFixed(2),
          );
        }

        return 0;
      })
      .reduce((acc, cur) => Math.max(acc, cur)));

    const veryLastResult = results.reduce((acc, cur) => acc + cur, 0);

    setLastResult(veryLastResult);
  };

  const handleItemClick = (e, num) => {
    props.handleItemClick(e, num, calcResult, staraConfig, setStaraConfig);
  };

  const handleInputChange = e => {
    props.handleConfigInputChange(e, staraConfig, setStaraConfig);
  };

  const handleSubmit = e => {
    e.preventDefault();

    calcResult();
  };

  return (
    <StyledMain>
      <StyledTitleWrapper>
        <H2 square medium black regular mb>
          Stara Matura
        </H2>
        <i
          className="material-icons"
          data-type="clear"
          onClick={e => handleItemClick(e)}
        >
          delete_swe