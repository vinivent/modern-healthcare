const Button = ({ styles, onClick,children }) => {
  return (
    <button
      type="button"
      className={`py-2.5 px-6 font-medium font-poppins text-[14px] text-primary outline-none rounded-[50px] ${styles} uppercase font-semibold`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
