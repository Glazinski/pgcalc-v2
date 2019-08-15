import posed from 'react-pose';

export const Nav = posed.nav({
  visible: {
    x: 0,
    transition: {
      default: { ease: 'easeInOut', duration: 300 }
    }
  },
  hidden: {
    x: -1000,
    transition: {
      default: { ease: 'easeInOut', duration: 300 }
    }
  }
});
