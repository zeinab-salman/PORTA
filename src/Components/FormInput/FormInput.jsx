import "./FormInput.css";
const FormInput = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  required,
}) => {
  return (
    <div className="div-input w-full">
      {label && <label>{label}</label>}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="form-input w-full rounded-lg py-2  pl-5 gold-border  "
        autoComplete="off"
      />
    </div>
  );
};

export default FormInput;
