import { Routes, Route } from "react-router";
import { Layout } from "./pages/Layouts/Layout";
import { AuthLayout } from "./pages/AuthLayot";
import { HomePage } from "./pages/Home";
import { AboutPage } from "./pages/About";
import { ContactsPage } from "./pages/Contacts";
import { LoginPage } from "./pages/LoginPage";
import { RegistrationPage } from "./pages/RegistrationPage";
import ProfilePage from "./pages/ProfilePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { useEffect } from "react";
import { useLocation } from "react-router";

function App() {
  const location = useLocation();

  useEffect(() => {
    console.log(location);
  }, [location]);

  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage user={"Test User"} />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="profiles/:profileName" element={<ProfilePage />} />
          {/* <Route path="profiles" element={<ProfileLayout />} >
            <Route index element={<UserProfile />} />
            <Route path=":profileId" element={<OtherProfile />} />
          </Route> */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>

        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="registration" element={<RegistrationPage />} />
        </Route>
      </Routes>
      {/* <footer>Footer</footer> */}
    </>
  );
}

export default App;
