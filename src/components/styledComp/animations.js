import posed from 'react-pose';

export const Nav = posed.nav({
  visible: {
    x: 0,
    transition: {
      default: { ease: 'easeInOut', duration: 300 }
    }
  },
  hidden: {
    x: '-100%',
    transition: {
      default: { ease: 'easeInOut', duration: 300 }
    }
  }
});

export const Alink = posed.a({
  visible: {
    y: 0,
    delay: 200,
    transition: {
      default: { ease: 'easeInOut', duration: 300 }
    }
  },
  hidden: {
    y: '100%',
    delay: 500,
    transition: {
      default: { ease: 'easeInOut', duration: 300 }
    }
  }
});

export const List = posed.div({
  enter: {
    opacity: 1,
    transition: {
      default: { ease: 'easeInOut', duration: 300 }
    }
  },
  exit: {
    opacity: 0,
    transition: {
      default: { ease: 'easeInOut', duration: 300 }
    }
  }
});
