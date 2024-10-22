import "./App.css";

import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import { PrivateRoute } from "./components/Route/PrivateRoute";
import NotFound from "./pages/NotFound/NotFound";
import { RestrictedRoute } from "./components/Route/RestrictedRoute";
import Layout from "./components/Layout/Layout";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "./redux/auth/operations";
import { selectIsLoggedIn, selectIsRefreshing } from "./redux/auth/selectors";
import { fetchContacts } from "./redux/contacts/operations";
import { Toaster } from "react-hot-toast";

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchContacts()); // Витягуємо контакти, якщо користувач залогінений
    }
  }, [dispatch, isLoggedIn]);

  const isRefreshing = useSelector(selectIsRefreshing);

  return isRefreshing ? null : (
    <>
      <Toaster position="top-center" reverseOrder={true} />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                component={<RegistrationPage />}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                component={<LoginPage />}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute component={<ContactsPage />} redirectTo="/login" />
            }
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
