import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="bg-blue-300 text-blue-600">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="text-1xl md:text-2xl font-bold mb-4">Smart MedCare</h1>
        </Link>
        <ul className="flex gap-4 font-bold">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/sign-in">
            <li>Sign In</li>
          </Link>
          <li>About</li>
        </ul>
      </div>
    </div>
  );
}
// max-w-3xl w-full p-8 text-black absolute top-0 left-0
