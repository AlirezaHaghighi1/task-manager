import SignupSection from "./SignupSection";
import LoginSection from "./LoginSection";
import WellcomeSection from "./WellcomeSection";

const Container = (props) => {
  const page = props;
  return (
    <>
      <div className="container">
        <WellcomeSection />
        {page === "login" ? <LoginSection /> : <SignupSection />}
      </div>
    </>
  );
};
export default Container;
