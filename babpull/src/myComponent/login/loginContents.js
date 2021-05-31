import AuthContent from "./AuthContents";
import InputWithLabel from "./inputLabel";
import AuthButton from "./authButton";
import RightLink from "./rightLink";
import React, {useState} from "react";
import axios from "axios"

const LoginContent = () => {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    const onIdHandler = (event) => {
        setId(event.currentTarget.value);
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    }

    const onLoginClick = () => {
        // 추가 요청 전송
        console.log("login click");
        axios.post(`/api/login`, {
          id: id,
          password: password
        })
        // 완료 후 목록 조회 요청 전송
        //.then(() => axios.get(`/api/todo`))
        // 응답이 돌아오면 응답 내용으로 목록을 변경
    };

    return(
        <AuthContent title="로그인">
            <InputWithLabel label="아이디" name="id" placeholder="아이디" value={id} onChange={onIdHandler}/>
            <InputWithLabel label="비밀번호" name="password" placeholder="비밀번호" type="password" value={password} onChange={onPasswordHandler}/>
            <AuthButton onClick={() => onLoginClick()}>로그인</AuthButton>
            <RightLink to="/register">회원가입</RightLink>
        </AuthContent>
    );
};

export default LoginContent;