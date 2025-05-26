export const scrollTo = (target) => {
  if (target?.current) {
    target.current.scrollIntoView({ behavior: 'smooth' });
  } else if (target?.scrollIntoView) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
};
