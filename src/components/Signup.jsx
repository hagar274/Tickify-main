import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useLanguage } from "../context/LanguageContext";
import { useNavigate } from "react-router-dom";
import { useSidebar } from "../context/SidebarContext";
import googleLogo from '../images/google.png';
import facebookLogo from '../images/facebook.png';
import xLogo from '../images/X.png';

const SignupGlobalStyle = createGlobalStyle`
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
  margin:0px;
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
  text-align: start;
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
  text-align: start;
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
    text-align: start;
    margin-left: -1rem;

    @media (max-width: 768px) {
      text-align: start;
      margin-left: 0;
    }
  }

  input {
    width: 100%;
    padding: 10px;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    font-size: 16px;
    transition: border-color 0.3s;
   

    @media (max-width: 768px) {
      padding-right: 12px;
      margin-right: 0;
      font-size: 14px;
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

    @media (max-width: 768px) {
      width: 16px;
      height: 16px;
    }
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
 

  @media (max-width: 768px) {
    margin-right: 2rem;
  }

  @media (max-width: 480px) {
    margin-right: 0;
  }

  label {
    color: #00233d;
    font-size: 14px;

    @media (max-width: 768px) {
      font-size: 13px;
    }
  }

  a {
    color: #0066ff;
    text-decoration: none;
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

  @media (max-width: 768px) {
    padding: 12px;
    font-size: 14px;
  }

  &:hover {
    background: #001a33;
  }
`;

const SocialLoginSection = styled.div`
  margin-top: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    margin-top: 1.5rem;
  }
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1.5rem 0;

  @media (max-width: 768px) {
    margin: 1rem 0;
  }
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

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const SocialButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 1.5rem 0;

  @media (max-width: 768px) {
    gap: 0.8rem;
    margin: 1rem 0;
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

  @media (max-width: 768px) {
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
`;

const SignupLink = styled.div`
  text-align: center;
  margin-top: 1.5rem;
  color: #00233d;

  @media (max-width: 768px) {
    margin-top: 1rem;
    font-size: 0.9rem;
  }

  a {
    color: #0066ff;
    text-decoration: none;
    font-weight: 500;
    margin-right: 0.5rem;

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }

    &:hover {
      text-decoration: underline;
    }
  }
`;

const NameRow = styled.div`
  display: flex;
  gap: 16px;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0;
  }
`;

const Signup = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const { setIsSidebarOpen } = useSidebar();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [termsError, setTermsError] = useState(false);
  const [apiError, setApiError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    let hasError = false;
    if (!firstName) {
      setFirstNameError(
        language === "ar"
          ? "يرجى إدخال الاسم الأول"
          : "Please enter your first name"
      );
      hasError = true;
    } else {
      setFirstNameError("");
    }
    if (!lastName) {
      setLastNameError(
        language === "ar"
          ? "يرجى إدخال الاسم الثاني"
          : "Please enter your last name"
      );
      hasError = true;
    } else {
      setLastNameError("");
    }
    if (!phone) {
      setPhoneError(
        language === "ar"
          ? "يرجى إدخال رقم الهاتف"
          : "Please enter your phone number"
      );
      hasError = true;
    } else {
      setPhoneError("");
    }
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
    if (!confirmPassword) {
      setConfirmPasswordError(
        language === "ar"
          ? "يرجى تأكيد كلمة المرور"
          : "Please confirm your password"
      );
      hasError = true;
    } else if (password !== confirmPassword) {
      setConfirmPasswordError(
        language === "ar" ? "كلمة المرور غير متطابقة" : "Passwords do not match"
      );
      hasError = true;
    } else {
      setConfirmPasswordError("");
    }
    if (!termsAccepted) {
      setTermsError(true);
      hasError = true;
    } else {
      setTermsError(false);
    }
    if (hasError) return;
    setApiError("");
    setLoading(true);
    try {
      const response = await fetch(
        "https://tickifywebsite.runasp.net/Auth/Register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
            firstName,
            lastName,
            phoneNumber: phone,
          }),
        }
      );
      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        setApiError(
          data.message ||
            (language === "ar"
              ? "فشل التسجيل. حاول مرة أخرى."
              : "Registration failed. Please try again.")
        );
        setLoading(false);
        return;
      }
      setIsSidebarOpen(false);
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("firstName", firstName);
      localStorage.setItem("lastName", lastName);
      localStorage.setItem("fullName", firstName + " " + lastName);
      localStorage.setItem("phone", phone);
      localStorage.setItem("email", email);
      setLoading(false);
      navigate("/profile");
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
      <SignupGlobalStyle />
      <LoginCard>
        <LoginTitle>{language === "ar" ? "إنشاء حساب" : "Sign Up"}</LoginTitle>
        <LoginSubtitle>
          {language === "ar"
            ? "انضم إلينا اليوم وابدأ رحلتك"
            : "Join us today and start your journey"}
        </LoginSubtitle>
        <form onSubmit={handleSignup}>
          <NameRow>
            <FormGroup style={{ flex: 1 }}>
              <label>{language === "ar" ? "الاسم الأول" : "First Name"}</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder={
                  language === "ar"
                    ? "أدخل اسمك الأول"
                    : "Enter your first name"
                }
                style={firstNameError ? { borderColor: "red" } : {}}
              />
              {firstNameError && (
                <div
                  style={{
                    color: "red",
                    fontSize: "13px",
                    marginTop: "4px",
                    textAlign: "end",
                  }}
                >
                  {firstNameError}
                </div>
              )}
            </FormGroup>
            <FormGroup style={{ flex: 1 }}>
              <label>{language === "ar" ? "الاسم الثاني" : "Last Name"}</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder={
                  language === "ar"
                    ? "أدخل اسمك الثاني"
                    : "Enter your last name"
                }
                style={lastNameError ? { borderColor: "red" } : {}}
              />
              {lastNameError && (
                <div
                  style={{
                    color: "red",
                    fontSize: "13px",
                    marginTop: "4px",
                    textAlign: "end",
                  }}
                >
                  {lastNameError}
                </div>
              )}
            </FormGroup>
          </NameRow>
          <FormGroup>
            <label>{language === "ar" ? "رقم الهاتف" : "Phone Number"}</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder={
                language === "ar" ? "أدخل رقم هاتفك" : "Enter your phone number"
              }
              style={phoneError ? { borderColor: "red" } : {}}
            />
            {phoneError && (
              <div
                style={{
                  color: "red",
                  fontSize: "13px",
                  marginTop: "4px",
                  textAlign: "end",
                }}
              >
                {phoneError}
              </div>
            )}
          </FormGroup>
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
          <FormGroup>
            <label>
              {language === "ar" ? "تأكيد كلمة المرور" : "Confirm Password"}
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder={
                language === "ar"
                  ? "أعد إدخال كلمة المرور"
                  : "Re-enter your password"
              }
              style={confirmPasswordError ? { borderColor: "red" } : {}}
            />
            {confirmPasswordError && (
              <div
                style={{
                  color: "red",
                  fontSize: "13px",
                  marginTop: "4px",
                  textAlign: "end",
                }}
              >
                {confirmPasswordError}
              </div>
            )}
          </FormGroup>
          <FormOptions>
            <RememberMe>
               <input type="checkbox" id="terms" checked={termsAccepted} onChange={e => setTermsAccepted(e.target.checked)} style={termsError ? { outline: '2px solid red', boxShadow: '0 0 0 2px red' } : {}} />
              <label htmlFor="terms" style={{ cursor: 'pointer' }}>
                {language === 'ar'
                  ? 'أوافق على الشروط والأحكام'
                  : 'I agree to the Terms and Conditions'}
              </label>
            </RememberMe>
          </FormOptions>
          <LoginButton type="submit" disabled={loading}>
            {loading
              ? language === "ar"
                ? "جاري التسجيل..."
                : "Signing Up..."
              : language === "ar"
              ? "إنشاء حساب"
              : "Sign Up"}
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
              {language === "ar" ? "أو سجل باستخدام" : "Or sign up with"}
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
          {language === "ar" ? "لديك حساب بالفعل؟" : "Already have an account?"}
          <a href="/login">{language === "ar" ? "تسجيل الدخول" : "Login"}</a>
        </SignupLink>
      </LoginCard>
    </>
  );
};

export default Signup;
