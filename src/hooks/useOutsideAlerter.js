// import React, { useEffect } from 'react';

// const useOutsideAlerter = (ref, setVisible) => {
//   console.log(ref);
//   const handleClickOutside = event => {
//     if (ref.current && !ref.current.contains(event.target)) {
//       setVisible(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   });
// };

// export default useOutsideAlerter;
