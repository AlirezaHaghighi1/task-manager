const FormSubtitle = (props) => {
  const page = props;
  return (
    <>
      <p className="form-subtext">
        {page === "login"
          ? "Don't have an account? "
          : "Already have an acoount? "}
        <a href={page === "login" ? "/signup" : "/login"}>
          {page === "login" ? "Signup" : "Login"}
        </a>
      </p>
    </>
  );
};
export default FormSubtitle;
