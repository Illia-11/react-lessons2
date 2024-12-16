import { Routes, Route } from "react-router";
import { HomePage } from "./pages/Home";
import { AboutPage } from "./pages/About";
import { ContactsPage } from "./pages/Contacts";
import { LoginPage } from "./pages/LoginPage";
import { RegistrationPage } from "./pages/RegistrationPage";
import { AuthLayout } from "./pages/AuthLayot";
import { Layout } from "./pages/Layouts/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage user={"Test User"} />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contacts" element={<ContactsPage />} />
        </Route>

        <Route path="/abth" element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registraion" element={<RegistrationPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
