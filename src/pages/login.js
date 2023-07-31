import { Button } from "antd";
import { GoogleOutlined, GithubOutlined } from "@ant-design/icons";
import Head from "next/head";
import styles from "@/styles/Login.module.css";
import { signIn } from "next-auth/react";
const LoginPage = () => {
  return (
    <div>
      <Head>
        <title> Login</title>
      </Head>
      <div className={styles.form}>
        <h3>LOGIN</h3>
        <div className={styles.social_icons}>
          <GoogleOutlined
            onClick={() =>
              signIn("google", {
                callbackUrl: "https://pc-builders-hub.vercel.app/",
              })
            }
          />
          <GithubOutlined
            onClick={() =>
              signIn("github", {
                callbackUrl: "https://pc-builders-hub.vercel.app/",
              })
            }
          />
        </div>
        <hr />
        <form>
          <div>
            <label htmlFor="">Email:</label>
            <input type="email" className="mb-5" />
          </div>
          <div>
            <label htmlFor="">Password : </label>
            <input type="password" />
          </div>
          <Button>Login</Button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
