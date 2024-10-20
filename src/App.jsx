import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";

import { useEffect } from "react";
import { fetchContacts } from "./redux/contacts/operations";
import { selectLoading } from "./redux/contacts/selectors";
import SearchBox from "./components/SearchBox/SearchBox";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import { PrivateRoute } from "./components/Route/PrivateRoute";
import NotFound from "./pages/NotFound/NotFound";
import { RestrictedRoute } from "./components/Route/RestrictedRoute";
import Layout from "./components/Layout/Layout";

function App() {
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
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

      <h1>PhoneBook</h1>
      <ContactForm />
      <SearchBox />
      {loading && <h2>Loading ...</h2>}
      <ContactList />
    </>
  );
}

export default App;
