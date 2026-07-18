type passwordPropType = {
  content: string | React.ReactNode;
  spanText: string;
  className: string;
  icon?: React.ReactNode;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Password = ({ content, spanText, className, icon }: passwordPropType) => {
  return (
    <div className="relative">
      <span className="absolute -top-3 left-5 bg-[#F3F6FD] px-2 text-[14px] text-[#8D94A4]">
        {spanText}
      </span>

      <div className={className}>
        {content}
        {icon}
      </div>
    </div>
  );
};

export default Password;
