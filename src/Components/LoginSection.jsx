import Button from "./Button";
import Input from "./Input";
import PasswordCheckbox from "./PasswordCheckbox";

const LoginSection = () => {
  return (
    <>
      <div className='login-section'>
        <h2>Login</h2>
        <form action='#'>
          <Input
            label={"username"}
            id={"username"}
            placeholder={"Enter your username"}
            type={"text"}
          />

          <Input
            label={"Password"}
            id={"password"}
            placeholder={"Enter your password"}
            type={"password"}
          />

          <PasswordCheckbox />
          <Button label={"Log in"} />
        </form>
      </div>
    </>
  );
};
export default LoginSection;
