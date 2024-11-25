import FormSubtitle from "../Components/FormSubtitle";
import LoginSection from "../Components/LoginSection";
import WellcomeSection from "../Components/WellcomeSection";

function Login() {
  return (
    <>
      <div className="container">
        <WellcomeSection />
        <LoginSection />
      </div>
      <FormSubtitle page="login" />
    </>
  );
}

export default Login;
