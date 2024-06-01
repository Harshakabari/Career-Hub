import signupImg from "../assets/login.png"
import Template from "../components/core/Template"

function Signup() {
  return (
    <Template
      title="Network, tailor your resume, apply strategically, and stay positive"
      description1="Build skills for today, tomorrow, and beyond."
      description2="Secure future-proof your career."
      image={signupImg}
      formType="signup"
    />
  )
}

export default Signup
