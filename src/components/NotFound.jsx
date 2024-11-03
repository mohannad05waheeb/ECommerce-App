import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="h-[calc(100vh-6rem)] gap-10 flex flex-col items-center justify-center">
      <h1 className="text-9xl text-orange-500 font-bold">404</h1>
      <h2 className="text-xl font-medium">
        The Page You Are Looking For Doesn{`'`}t Exist!
      </h2>
      <Link to="/" className="font-bold text-white bg-orange-500 px-14 py-6 rounded-lg">
        Go Home
      </Link>
    </div>
  );
};
export default NotFound;