const Button = (props) => {
  const { label } = props;
  return (
    <>
      <button className='btn btn-submit'>{label}</button>
    </>
  );
};
export default Button;
