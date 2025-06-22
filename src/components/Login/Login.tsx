import { useState } from "react";
import styled from "styled-components";

const StyledBG = styled.div`
  background-image: url("https://assets.nflxext.com/ffe/siteui/vlv3/8200f588-2e93-4c95-8eab-ebba17821657/web/IN-en-20250616-TRIFECTA-perspective_9cbc87b2-d9bb-4fa8-9f8f-a4fe8fc72545_small.jpg");
  height: 100vh;
`;
const StyledLogo = styled.img`
  height: 100px;
  width: 250px;
  position: absolute;
`;
const StyledContainer = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  color: white;
`;

const StyledSignInText = styled.div`
  display: flex;
  color: white;
  font-weight: bold;
  width: 200px;
  justify-content: start;
  align-items: start;
  font-size: 24px;
`;
const StyledLoginContainer = styled.div`
  background-color: black;
  min-height: 400px;
  min-width: 300px;
  border-radius: 10px;
  opacity: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const StyledInput = styled.input`
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  opacity: 100%;
  background-color: grey;
`;
const StyledButton = styled.button`
  background-color: red;
  color: white;
  margin-top: 10px;
  padding: 10px;
  border-radius: 5px;
  width: 190px;
`;
const StyledSignUpText = styled.button`
  margin-top: 10px;
  text-decoration: underline;
`;

const Login = () => {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSignIn, setIsSignIn] = useState(true);

  const handleSubmit = () => {
    const res: {
      username: string;
      password: string;
      fullName?: string;
    } = {
      username,
      password,
    };

    if (!isSignIn) {
      res.fullName = fullName;
    }

    console.log(res);
  };

  const handleSignInToggle = () => setIsSignIn((prev) => !prev);
  return (
    <StyledBG>
      <StyledLogo
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="nflix"
      />
      <StyledContainer>
        <StyledLoginContainer>
          <StyledSignInText>
            {isSignIn ? "Sign In" : "Sign Up"}
          </StyledSignInText>
          {!isSignIn && (
            <StyledInput
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              type="text"
              placeholder="Full Name"
            />
          )}
          <StyledInput
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Username"
          />
          <StyledInput
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <StyledButton onClick={handleSubmit}>
            {isSignIn ? "Sign In" : "Sign Up"}
          </StyledButton>
          <StyledSignUpText onClick={handleSignInToggle}>
            {isSignIn ? "Sign Up now" : "Already Signed Up? Sign In"}
          </StyledSignUpText>
        </StyledLoginContainer>
      </StyledContainer>
    </StyledBG>
  );
};

export default Login;
