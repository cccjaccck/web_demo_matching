import styled from "styled-components";
import Button from "../components/Button";
import Input from "../components/Input";
import useInput from "../hooks/useInput";

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

const Login = () => {
  const id = useInput("");
  const pw = useInput("");

  return (
    <Wrapper>
      <Form>
        <FormTitle>로그인</FormTitle>
        <Input
          autoFocus
          value={id.value}
          onChange={id.onChange}
          placeholder={"이메일을 입력하세요."}
          type={"email"}
        />
        <Input
          value={pw.value}
          onChange={pw.onChange}
          placeholder={"비밀번호를 입력하세요."}
          type={"password"}
        />
        <Button text={"로그인"} />
      </Form>
    </Wrapper>
  );
};

export default Login;
