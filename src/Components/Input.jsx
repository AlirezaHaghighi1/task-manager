const Input = (props) => {
  const { label, id, placeholder, type } = props;
  return (
    <>
      <div className='input-group'>
        <label htmlFor={id}>{label}</label>
        <input type={type} id={id} placeholder={placeholder} />
      </div>
    </>
  );
};
export default Input;
