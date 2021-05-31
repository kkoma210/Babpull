import AuthContent from "./AuthContents";
import InputWithLabel from "./inputLabel";
import AuthButton from "./authButton";
import RightLink from "./rightLink";
import React, {useState} from "react";
import axios from "axios";

const RegisterContent = () => {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");

    const onIdHandler = (event) => {
        setId(event.currentTarget.value);
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    }

    const onUsernameHandler = (event) => {
        setUsername(event.currentTarget.value);
    }
    
    const onPasswordConfirmHandler = (event) => {
        setPasswordConfirm(event.currentTarget.value);
    }

    const onRegisterClick = () => {
        // 추가 요청 전송
        console.log("register click");
        if(password !== passwordConfirm){
            console.log("wrong passwordconfirm")
        }
        else{
            axios.post(`/api/login/register`, {
                id: id,
                username: username,
                password: password,
              })
              // 완료 후 목록 조회 요청 전송
              //.then(() => axios.get(`/api/todo`))
              // 응답이 돌아오면 응답 내용으로 목록을 변경
        }
    };

    return(
        <AuthContent title="회원가입">
            <InputWithLabel label="아이디" name="id" placeholder="아이디" value={id} onChange={onIdHandler}/>
                <InputWithLabel label="닉네임" name="username" placeholder="닉네임" value={username} onChange={onUsernameHandler}/>
                <InputWithLabel label="비밀번호" name="password" placeholder="비밀번호" type="password" value={password} onChange={onPasswordHandler}/>
                <InputWithLabel label="비밀번호 확인" name="passwordConfirm" placeholder="비밀번호 확인" type="password" value={passwordConfirm} onChange={onPasswordConfirmHandler}/>
                <AuthButton onClick={() => onRegisterClick()}>회원가입</AuthButton>
                <RightLink to="/login">로그인</RightLink>
        </AuthContent>
    );
};

export default RegisterContent;