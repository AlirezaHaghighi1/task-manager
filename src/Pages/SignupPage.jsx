import FormSubtitle from "../Components/FormSubtitle";
import WellcomeSection from "../Components/WellcomeSection";
import SignupSection from "../Components/SignupSection";

function Signup() {
  return (
    <>
      <div className="container">
        <WellcomeSection />
        <SignupSection />
      </div>
      <FormSubtitle page="signup" />
    </>
  );
}

export default Signup;
