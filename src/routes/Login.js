import styled from "styled-components";
import Button from "../components/Button";
import { GoogleIcon } from "../components/Icon";
import Input from "../components/Input";
import useInput from "../hooks/useInput";
import { authService, firebaseInstance } from "../myFirebase";

const Wrapper = styled.div``;

const FormTitle = styled.div`
  font-size: 1.3em;
  margin: 0 0 10px 5px;
`;
const Form = styled.form`
  max-width: 300px;
  width: 80vw;
  display: flex;
  flex-direction: column;

  input {
    margin-bottom: 10px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
`;

const OAuthButton = styled.button``;

const Login = () => {
  const email = useInput("");
  const password = useInput("");

  const handleLogin = () => {
    authService
      .createUserWithEmailAndPassword(email.value, password.value)
      .then((user) => {
        // Signed in
        // ...
        console.log(user);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        // ..
      });
  };

  const socialLogin = async () => {
    const provider = new firebaseInstance.auth.GoogleAuthProvider();
    const data = authService.signInWithPopup(provider);
    console.log(data);
  };

  return (
    <Wrapper>
      <Form>
        <FormTitle>로그인</FormTitle>
        <Input
          autoFocus
          value={email.value}
          onChange={email.onChange}
          placeholder={"이메일을 입력하세요."}
          type={"email"}
        />
        <Input
          value={password.value}
          onChange={password.onChange}
          placeholder={"비밀번호를 입력하세요."}
          type={"password"}
        />
        <Button text={"로그인"} onClick={handleLogin} />
      </Form>

      <ButtonContainer>
        <OAuthButton onClick={socialLogin}>
          <GoogleIcon width={30} height={30} />
        </OAuthButton>
      </ButtonContainer>
    </Wrapper>
  );
};

export default Login;
