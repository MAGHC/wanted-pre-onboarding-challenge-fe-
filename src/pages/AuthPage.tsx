import { AuthState } from "../lib/Atom/Atom";
import { useRecoilValue } from "recoil";
import { Navigate, useLocation } from "react-router";

const AuthPage = ({ children }: { children: JSX.Element }) => {
  const conformAuthValue = useRecoilValue(AuthState).isLogin;
  const location = useLocation();
  console.log(conformAuthValue);
  if (!conformAuthValue) {
    alert("로그인을해주세요");
    return (
      <>
        <Navigate to="/" state={{ form: location }} replace />
      </>
    );
  } else return children;
};

export default AuthPage;
