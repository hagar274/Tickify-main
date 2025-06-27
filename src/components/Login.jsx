import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useLanguage } from "../context/LanguageContext";
import { useNavigate } from "react-router-dom";
import { useSidebar } from "../context/SidebarContext";
import googleLogo from '../images/google.png';
import facebookLogo from '../images/facebook.png';
import xLogo from '../images/X.png';

const LoginGlobalStyle = createGlobalStyle`
  body {
    padding: 0 !important;
  }
`;

const LoginCard = styled.div`
  background: white;
  padding: 60px;
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 450px;
  margin: 0px;

  @media (max-width: 768px) {
    padding: 30px;
    margin: 0;
    max-width: 100%;
  }
`;

const LoginTitle = styled.h1`
  color: #00233d;
  font-size: 32px;
  margin-bottom: 8px;
 
  font-weight: bold;
  margin-top: -25px;
  margin-left: -15px;

  @media (max-width: 768px) {
    font-size: 28px;
    text-align: center;
    margin: 0 0 8px 0;
  }
`;

const LoginSubtitle = styled.h2`
  color: #00233d;
  font-size: 16px;
  font-weight: normal;
  margin-bottom: 30px;
 
  margin-left: -15px;

  @media (max-width: 768px) {
    text-align: center;
    margin: 0 0 20px 0;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 20px;

  label {
    display: block;
    color: #00233d;
    margin-bottom: 8px;
    font-size: 14px;
   
    margin-left: -1rem;

    @media (max-width: 768px) {
      text-align: start;
      margin-left: 0;
    }
  }

  input {
    width: 100%;
    padding: 12px;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    font-size: 16px;
    transition: border-color 0.3s;
    margin-right: 0px;
    padding-right: 20px;

    @media (max-width: 768px) {
      padding-right: 12px;
      margin-right: 0;
    }

    &:focus {
      border-color: #0066ff;
      outline: none;
    }
  }

  input[type="checkbox"] {
    width: 18px;
    height: 18px;
    border: 2px solid #e0e0e0;
    border-radius: 4px;
    cursor: pointer;
    vertical-align: middle;
    margin-top: -2px;
  }
`;

const FormOptions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
  }
`;

const RememberMe = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: -1rem;

  @media (max-width: 768px) {
    margin-left: 0;
  }

  label {
    color: #00233d;
    font-size: 14px;
  }
`;

const ForgotPassword = styled.a`
  color: #0066ff;
  text-decoration: none;
  font-size: 14px;
  margin-right: 1rem;

  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

const LoginButton = styled.button`
  width: 100%;
  padding: 14px;
  background: #00233d;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background: #001a33;
  }
`;

const SocialLoginSection = styled.div`
  margin-top: 2rem;
  text-align: center;
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1.5rem 0;
`;

const Line = styled.div`
  flex: 1;
  height: 1px;
  background: #e0e0e0;
  margin: 0 1rem;
`;

const DividerText = styled.span`
  color: #00233d;
  font-size: 0.9rem;
  white-space: nowrap;
`;

const SocialButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 1.5rem 0;

  @media (max-width: 480px) {
    gap: 0.5rem;
  }
`;

const SocialButton = styled.button`
  width: 40px;
  height: 40px;
  border: 1px solid #e0e0e0;
  border-radius: 50%;
  background: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  padding: 0;

  @media (max-width: 480px) {
    width: 35px;
    height: 35px;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
  .facebook {
    background: #fff;
    border: 1px solid #e0e0e0;
    padding: 0;
  }
  .facebook img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  facebook:hover {
    background: #f8f8f8;
    border-color: #dadce0;
  }
  .google {
    background: #fff;
    border: 1px solid #e0e0e0;
    padding: 0;
  }
  .google img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .google:hover {
    background: #f8f8f8;
    border-color: #dadce0;
  }
  .twitter {
    background: #fff;
    border: 1px solid #e0e0e0;
    padding: 0;
  }
  .twitter img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .twitter:hover {
    background: #f8f8f8;
    border-color: #dadce0;
  }
`;

const SignupLink = styled.div`
  text-align: center;
  margin-top: 1.5rem;
  color: #00233d;

  a {
    color: #0066ff;
    text-decoration: none;
    font-weight: 500;
    margin-right: 0.5rem;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const ForgotPasswordModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
`;
const ForgotPasswordBox = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 32px 24px;
  min-width: 320px;
  max-width: 90vw;
  box-shadow: 0 4px 16px #0002;
  position: relative;
`;
const CloseBtn = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background: none;
  border: none;
  font-size: 22px;
  cursor: pointer;
  color: #888;
`;

const Login = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const { setIsSidebarOpen } = useSidebar();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [apiError, setApiError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showForgotForm, setShowForgotForm] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");
  const [forgotSent, setForgotSent] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    let hasError = false;
    if (!email) {
      setEmailError(
        language === "ar"
          ? "يرجى إدخال البريد الإلكتروني"
          : "Please enter your email"
      );
      hasError = true;
    } else {
      setEmailError("");
    }
    if (!password) {
      setPasswordError(
        language === "ar"
          ? "يرجى إدخال كلمة المرور"
          : "Please enter your password"
      );
      hasError = true;
    } else {
      setPasswordError("");
    }
    if (hasError) return;
    setApiError("");
    setLoading(true);
    try {
      const response = await fetch("https://tickifywebsite.runasp.net/Auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        setApiError(
          data.message ||
            (language === "ar"
              ? "فشل تسجيل الدخول. حاول مرة أخرى."
              : "Login failed. Please try again.")
        );
        setLoading(false);
        return;
      }
      const data = await response.json();
      localStorage.clear();
      localStorage.setItem("isLoggedIn", "true");
      if (data.token) localStorage.setItem("token", data.token);
      if (data.id) localStorage.setItem("id", data.id);
      if (data.lastName) localStorage.setItem("email", data.lastName);
      if (data.firstName) localStorage.setItem("firstName", data.firstName);
      if (data.email) localStorage.setItem("lastName", data.email);
      if (data.firstName && data.lastName)
        localStorage.setItem("fullName", `${data.firstName} ${data.lastName}`);
      if (data.phone) localStorage.setItem("phone", data.phone);
      if (data.expiresIn)
        localStorage.setItem("expiresIn", data.expiresIn.toString());
      setIsSidebarOpen(false);
      setLoading(false);
      navigate("/");
    } catch {
      setApiError(
        language === "ar"
          ? "حدث خطأ أثناء الاتصال بالخادم."
          : "An error occurred while connecting to the server."
      );
      setLoading(false);
    }
  };

  return (
    <>
      <LoginGlobalStyle />
      <LoginCard>
        <LoginTitle>{language === "ar" ? "تسجيل الدخول" : "Login"}</LoginTitle>
        <LoginSubtitle>
          {language === "ar"
            ? "مرحباً بعودتك! قم بتسجيل الدخول للوصول إلى حسابك"
            : "Welcome back! Sign in to access your account"}
        </LoginSubtitle>
        <form onSubmit={handleLogin}>
          {emailError ||
            (passwordError && (
              <div
                style={{
                  color: "red",
                  marginBottom: "10px",
                  textAlign: "center",
                }}
              >
                {emailError || passwordError}
              </div>
            ))}
          <FormGroup>
            <label>{language === "ar" ? "البريد الإلكتروني" : "Email"}</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={
                language === "ar" ? "أدخل بريدك الإلكتروني" : "Enter your email"
              }
              style={emailError ? { borderColor: "red" } : {}}
            />
            {emailError && (
              <div
                style={{
                  color: "red",
                  fontSize: "13px",
                  marginTop: "4px",
                  textAlign: "end",
                }}
              >
                {emailError}
              </div>
            )}
          </FormGroup>
          <FormGroup>
            <label>{language === "ar" ? "كلمة المرور" : "Password"}</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={
                language === "ar" ? "أدخل كلمة المرور" : "Enter your password"
              }
              style={passwordError ? { borderColor: "red" } : {}}
            />
            {passwordError && (
              <div
                style={{
                  color: "red",
                  fontSize: "13px",
                  marginTop: "4px",
                  textAlign: "end",
                }}
              >
                {passwordError}
              </div>
            )}
          </FormGroup>
          <FormOptions>
            <RememberMe>
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">
                {language === "ar" ? "تذكرني" : "Remember me"}
              </label>
            </RememberMe>
             <ForgotPassword href="#" onClick={e => { e.preventDefault(); setShowForgotForm(true); }}>
              {language === 'ar' ? 'نسيت كلمة المرور؟' : 'Forgot password?'}
            </ForgotPassword>
          </FormOptions>
          <LoginButton type="submit" disabled={loading}>
            {loading
              ? language === "ar"
                ? "جاري تسجيل الدخول..."
                : "Logging in..."
              : language === "ar"
              ? "تسجيل الدخول"
              : "Login"}
          </LoginButton>
          {apiError && (
            <div
              style={{
                color: "red",
                fontSize: "14px",
                marginTop: "10px",
                textAlign: "center",
              }}
            >
              {apiError}
            </div>
          )}
        </form>
        <SocialLoginSection>
          <Divider>
            <Line />
            <DividerText>
              {language === "ar" ? "أو سجل الدخول باستخدام" : "Or login with"}
            </DividerText>
            <Line />
          </Divider>
          <SocialButtonsContainer>
            <SocialButton className="google">
              <img src={googleLogo} alt="Google" />
            </SocialButton>
            <SocialButton className="facebook">
              <img src={facebookLogo} alt="Facebook" />
            </SocialButton>
            <SocialButton className="twitter">
              <img src={xLogo} alt="X" />
            </SocialButton>
          </SocialButtonsContainer>
        </SocialLoginSection>
        <SignupLink>
          {language === "ar" ? "ليس لديك حساب؟" : "Don't have an account?"}
          <a href="/signup">{language === "ar" ? "إنشاء حساب" : "Sign up"}</a>
        </SignupLink>
      </LoginCard>
      {showForgotForm && (
        <ForgotPasswordModal>
          <ForgotPasswordBox>
            <CloseBtn onClick={() => setShowForgotForm(false)}>&times;</CloseBtn>
            <h2 style={{textAlign:'center', color:'#00233d', marginBottom:16}}>
              {language === 'ar' ? 'استعادة كلمة المرور' : 'Reset Password'}
            </h2>
            {forgotSent ? (
              <div style={{color:'#1976d2', textAlign:'center', margin:'16px 0'}}>
                {language === 'ar' ? 'تم إرسال رابط إعادة تعيين كلمة المرور إلى بريدك الإلكتروني ' : 'A reset link has been sent to your email (mock).'}
              </div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); setForgotSent(true); }}>
                <FormGroup>
                 
                  <input
                    type="email"
                    value={forgotEmail}
                    onChange={e => setForgotEmail(e.target.value)}
                    placeholder={language === 'ar' ? 'أدخل بريدك الإلكتروني' : 'Enter your email'}
                    required
                  />
                </FormGroup>
                <LoginButton type="submit" style={{marginTop:8}}>
                  {language === 'ar' ? 'إرسال' : 'Send'}
                </LoginButton>
              </form>
            )}
          </ForgotPasswordBox>
        </ForgotPasswordModal>
      )}
    </>
  );
};

export default Login;
