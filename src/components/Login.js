import React from "react";

const Login = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="card-auth p-4">
        <div
          style={{ fontSize: "36px", lineHeight: "49px", fontWeight: "700" }}
          className="mb-3"
        >
          Login
        </div>
        <form>
          <div className="mt-3 form">
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="px-3 py-2 mt-3"
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="px-3 py-2 mt-3"
            />
          </div>
          <div className="d-grid gap-2 mt-5">
            <button className="btn btn-login">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
