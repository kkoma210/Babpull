import AuthContent from "./AuthContents";
import InputWithLabel from "./inputLabel";
import AuthButton from "./authButton";
import RightLink from "./rightLink";
import RegisterPage from "./registerPage";
import React, {useState} from "react";

const LoginContent = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");



    return(
        <AuthContent title="로그인">
            <InputWithLabel label="이메일" name="email" placeholder="이메일" value={email}/>
            <InputWithLabel label="비밀번호" name="password" placeholder="비밀번호" type="password" value={password}/>
            <AuthButton>로그인</AuthButton>
            <RightLink to="/register">회원가입</RightLink>
        </AuthContent>
    );
};

export default LoginContent;