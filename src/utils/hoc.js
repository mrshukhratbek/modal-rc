export const hoc = (hook, Component, displayName) => {
  Component.displayName = displayName || Component.name;

  const HocResult = (props) => {
    const hookProps = hook(props);
    return <Component {...hookProps} {...props} />;
  };

  HocResult.hook = hook;
  HocResult.Original = Component;

  return HocResult;
};
