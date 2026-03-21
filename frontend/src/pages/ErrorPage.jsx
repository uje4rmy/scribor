import { useRouteError } from "react-router";

const ErrorPage = () => {
  const error = useRouteError();
  let message = "An unexpected error occurred.";

  if (error?.response) {
    // Axios backend error
    const status = error.response.status;
    message = `${status} ${error.response.data?.message}`;
  }

  console.error(error);
  return (
    <div className="mx-auto max-w-screen-2xl h-screen flex justify-center items-center">
      <div className="flex justify-center items-center w-[700px] h-[500px] border border-slate-200 rounded-xl shadow-sm p-4">
        Oops. An error has occurred: <br />
        {message}
      </div>
    </div>
  );
};

export default ErrorPage;
