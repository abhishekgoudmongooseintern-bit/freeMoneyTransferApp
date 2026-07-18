type InputFieldType = {
  type: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  spanText: string;
  placeholder?: string;
};

const InputField = ({
  type,
  value,
  onChange,
  className,
  spanText,
  placeholder,
}: InputFieldType) => {
  return (
    <div className="relative">
      <span className="absolute -top-3 left-5 bg-[#F3F6FD] px-2 text-[15px] text-[#8D94A4]">
        {spanText}
      </span>

      <input
        style={{ paddingLeft: "30px" }}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={className}
      />
    </div>
  );
};

export default InputField;
