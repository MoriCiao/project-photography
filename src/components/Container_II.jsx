const Container_II = ({ children, flex, w, h1, h2 }) => {
  return (
    <div className={`container_II ${flex} ${w} ${h1}`}>
      <div
        className={`relative ${h2} w-full overflow-hidden  bg-gradient-to-br from-black/50 via-black/100 to-black/50`}
      >
        {children[0]}
      </div>
      <div
        className={`relative ${h2} w-full overflow-hidden  bg-gradient-to-br from-black/50 via-black/100 to-black/50`}
      >
        {children[1]}
      </div>
    </div>
  );
};

export default Container_II;
