import axios, { AxiosError } from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "./lib/HTTP/API";
import { AuthState } from "./lib/Atom/Atom";
import { useSetRecoilState } from "recoil";

export const useValidation = () => {
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [password, setPassword] = useState("");
  const [passwodConfirmValue, setPasswordConFirmValue] = useState("");
  const [passwordValid, setPasswordValid] = useState(false);
  const [pwConfrimBoolean, setPwConfrimBoolean] = useState(false);

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);

    const EMAILREG =
      /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

    const checkEmail = value.match(EMAILREG);

    checkEmail ? setEmailValid(true) : setEmailValid(false);
  };
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);

    const PWREG = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const checkPw = value.match(PWREG);

    checkPw ? setPasswordValid(true) : setPasswordValid(false);
  };

  const onChangePasswordConfirm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setPasswordConFirmValue(value);

    const checkpw = value === password;
    console.log(pwConfrimBoolean);
    checkpw ? setPwConfrimBoolean(true) : setPwConfrimBoolean(false);
  };

  return { password, email, onChangeEmail, onChangePassword, passwordValid, emailValid, onChangePasswordConfirm, pwConfrimBoolean };
};

export const useFetch = <T, V>() => {
  const getDate = async (url: string): Promise<T> => {
    const res = await API.get(url);

    return res.data;
  };

  const postData = async (url: string, body: V): Promise<T> => {
    const res = await API.post(url, {
      ...body,
    });

    return res.data;
  };

  return { getDate, postData };
};

interface LoginResI {
  message: string;
  token: string;
}

interface LoginJoinValuesI {
  email: string;
  password: string;
}

export const useLogin = () => {
  const navigate = useNavigate();
  const { postData } = useFetch();
  const setAuthState = useSetRecoilState(AuthState);

  const Login = async (body: LoginJoinValuesI) => {
    return postData(`/users/login`, body)
      .then(() => {
        setAuthState(() => ({ isLogin: true }));

        navigate("/todo");
      })
      .catch((err: Error | AxiosError) => {
        if (axios.isAxiosError(err)) {
          if (err.response?.status === 400) {
            alert("이메일, 비밀번호를 확인해주세요");
          }
          alert("서버연결을 확인해주세요! ");
        }
      });
  };

  return { Login };
};

export const useJoin = () => {
  const navigate = useNavigate();
  const { postData } = useFetch();
  const join = async (body: LoginJoinValuesI) => {
    return postData(`/users/create`, body)
      .then(() => {
        alert("가입해주셔서 감사합니다 환영합니다");
        navigate("/");
      })
      .catch((err: Error | AxiosError) => {
        if (axios.isAxiosError(err)) {
          if (err.response?.status === 400) {
            alert("양식을 다시 한번 확인해주세요");
          } else if (err.response?.status === 409) {
            alert("이미 존재하는 아이디입니다");
          } else {
            alert("서버와의 연결을 확인해주세요");
          }
        }
      });
  };

  return { join };
};
