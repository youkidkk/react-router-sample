import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <h1>新規登録ページ</h1>
      <div>
        <Link to={`/`}>ホームに戻る</Link>
      </div>
    </>
  );
};

export default Register;
