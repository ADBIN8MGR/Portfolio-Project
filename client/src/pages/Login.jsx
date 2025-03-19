import { Link, Form, redirect, useNavigate } from "react-router-dom";
import Wrapper from "../assets/wrappers/Login";
import { FormRow, Logo, SubmitBtn } from "../components";
import { toast } from "react-toastify";



const Login = () => {
    return (
        <Wrapper>
            <Form method="post" className="form">
                <Logo />
                <h4>LOGIN</h4>
                <FormRow type="email" name="email" defaultValue="admin@gmail.com" />
                <FormRow type="password" name="password" defaultValue="secret123" />
                <SubmitBtn formBtn />
                <p>
                    Not a Admin?
                    <Link to="/" className="member-btn">
                        Go to Home
                    </Link>
                </p>
            </Form>
        </Wrapper>
    );
};
export default Login;