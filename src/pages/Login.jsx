import Template from "../components/core/Template"
import LoginImg from "../assets/login.png"

function Login() {
  return (
    <Template
      title="Welcome Back"
      description1="Job hunting is a journey of perseverance and self-discovery. "
      description2="The right opportunity will come."
      image={LoginImg}
      formType="login"
    />
  )
}

export default Login
