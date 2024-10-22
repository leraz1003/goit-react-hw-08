import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const HomePage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();
  return (
    <>
      {isLoggedIn ? (
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">
                Welcome back to ContactSaver!
              </h1>
              <p className="py-6">
                You can now store, edit, and manage your contacts all in one
                place. Click below to view or add new contacts to your list.
              </p>
              <button
                className="btn btn-primary"
                onClick={() => navigate("/contacts")}
              >
                Manage Contacts
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">Welcome to ContactSaver!</h1>
              <p className="py-6">
                Manage your contacts easily and securely. Sign up or log in to
                start organizing your contacts with a few clicks.
              </p>
              <button
                className="btn btn-primary"
                onClick={() => navigate("/login")}
              >
                Log in to get started
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HomePage;
