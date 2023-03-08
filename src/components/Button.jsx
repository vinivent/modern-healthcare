const Button = ({ styles, children }) => {
  return (
    <button
      type="button"
      className={`py-2.5 px-6 font-medium font-poppins text-[14px] text-primary outline-none rounded-[50px] ${styles} uppercase font-semibold`}
    >
      {children}
    </button>
  );
};

export default Button;
