type ButtonProps = {
  text: string;
  className?: string;
  onClick?: () => void;
};

const Button = ({ text, className, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`font-semibold tracking-wider transition-all duration-300 ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
