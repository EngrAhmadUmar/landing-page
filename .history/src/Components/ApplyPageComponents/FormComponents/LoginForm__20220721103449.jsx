import FormButton from "../FormButton";

const LoginForm_ = ({
  password,
  onChangeEmail,
  email,
  onChangePassword,
  loading,
  onSubmit
}) => {
  return (
    <form
      onSubmit={onSubmit}
      className="pt-6 pb-8 mb-4 mt-[5rem] border-2 rounded-lg shadow-md px-7 border-gray "
    >
      <div className="mb-6">
        <label className="text-lg md:text-xl">Email</label>
        <input
          type="email"
          className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          name="email"
          onChange={onChangeEmail}
          placeholder="Enter Your Email"
          value={email}
        />
      </div>

      <div className="mb-4">
        <label className="text-lg md:text-xl">Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={onChangePassword}
          placeholder="Enter Password"
          className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mt-5 flex justify-center">
        <FormButton buttonInfo={loading ? "Sending" : "Login"} />
      </div>
      <div className="text-sm mt-3 cursor-pointer text-center">
        <Link href="/register">
          <h3 className="hover:text-green">Forgot Password?</h3>
        </Link>

        <Link href="/register">
          <h3 className="hover:text-green mt-3">
            Don&apos;t have an Account? Sign in
          </h3>
        </Link>
      </div>
    </form>
  );
};

export default LoginForm_;
