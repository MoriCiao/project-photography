const Container_I = ({ children, w, h }) => {
  return (
    <div className={`container_I relative overflow-hidden ${w} ${h}`}>
      {children}
    </div>
  );
};

export default Container_I;
