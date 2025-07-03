import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addUser, UserType } from "../store/slices/userSlice";
import { useNavigate } from "react-router-dom";
import Header from "../Content/Header";

const StyledBG = styled.div`
  background-image: url("https://assets.nflxext.com/ffe/siteui/vlv3/8200f588-2e93-4c95-8eab-ebba17821657/web/IN-en-20250616-TRIFECTA-perspective_9cbc87b2-d9bb-4fa8-9f8f-a4fe8fc72545_small.jpg");
  height: 100vh;
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
const StyledLoginContainer = styled.div<{ $initialHeight: number }>`
  background-color: black;
  padding: 30px 0 40px 0;
  min-height: ${(props) => props.$initialHeight}px;
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
  const [isSignIn, setIsSignIn] = useState(false);
  const [initialHeight, setInitialHeight] = useState(0);
  const loginContainerRef = useRef<any>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = useCallback(() => {
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

    const newUser: UserType = {
      username: "shreyas",
      email: "shreyas@abcd.com",
    };

    dispatch(addUser(newUser));
    navigate("/browse");
  }, [dispatch, fullName, isSignIn, navigate, password, username]);

  useEffect(() => {
    setInitialHeight(loginContainerRef.current?.clientHeight);
    handleSubmit();
  }, [handleSubmit]);

  const handleSignInToggle = () => setIsSignIn((prev) => !prev);

  return (
    <StyledBG>
      <Header />
      <StyledContainer>
        <StyledLoginContainer
          ref={loginContainerRef}
          $initialHeight={initialHeight}
        >
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
