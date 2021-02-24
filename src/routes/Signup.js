import styled from "styled-components";
import Button from "../components/Button";
import Input from "../components/Input";
import useInput from "../hooks/useInput";
import { authService } from "../myFirebase";

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

const Label = styled.label`
  font-size: 1em;
  margin: 10px 0 8px 3px;
`;

const Signup = () => {
  const email = useInput("");
  const password = useInput("");
  const confirm = useInput("");

  const handleSignup = () => {
    if (email.value)
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

  return (
    <Wrapper>
      <Form>
        <FormTitle>회원가입</FormTitle>
        <Label>이메일</Label>
        <Input
          autoFocus
          value={email.value}
          onChange={email.onChange}
          placeholder={"이메일을 입력해주세요."}
          type={"email"}
        />
        <Label>비밀번호</Label>
        <Input
          value={password.value}
          onChange={password.onChange}
          placeholder={"비밀번호를 입력해주세요."}
          type={"password"}
        />
        <Input
          value={confirm.value}
          onChange={confirm.onChange}
          placeholder={"비밀번호를 다시 입력해주세요."}
          type={"password"}
        />
        <Button text={"로그인"} onClick={handleSignup} />
      </Form>
    </Wrapper>
  );
};

export default Signup;
