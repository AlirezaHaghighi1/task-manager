const PasswordCheckbox = () => {
  return (
    <>
      <div className='input-group'>
        <div className='remember-me'>
          <label>
            <input type='checkbox' />
            <span className='checkmark'></span>
            <span>Remember Password</span>
          </label>
          <span>
            <a href='#'>I can't remember the password</a>
          </span>
        </div>
      </div>
    </>
  );
};
export default PasswordCheckbox;
