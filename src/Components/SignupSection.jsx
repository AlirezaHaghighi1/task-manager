import { useState } from "react";
import Button from "./Button";
import Input from "./Input";

const SignupSection = () => {
  const [username, setUserName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <>
      <div className="signup-section">
        <h2>Signup</h2>
        <form action="#">
          <Input
            label={"username"}
            id={"username"}
            placeholder={"Enter your username"}
            type={"text"}
            onChange={(e) => setUserName(e.target.value)}
          />

          <Input
            label={"Email"}
            id={"email"}
            placeholder={"Enter your email"}
            type={"text"}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            label={"Password"}
            id={"password"}
            placeholder={"Enter your password"}
            type={"password"}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button label={"Sign up"} />
        </form>
      </div>
    </>
  );
};
export default SignupSection;
