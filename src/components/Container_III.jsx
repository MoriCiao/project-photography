const Container_III = ({ children, w, h, className }) => {
  return (
    <div
      className={`container_III relative flex gap-8 items-center justify-center ${w}  overflow-x-hidden ${className}`}
    >
      <div className={` ${h} py-8`}>{children[0]}</div>
      <div className={` ${h} py-8`}>{children[1]}</div>
      <div className={` ${h} py-8`}>{children[2]}</div>
    </div>
  );
};

export default Container_III;
