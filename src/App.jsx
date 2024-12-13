import { Routes, Route, Link } from "react-router";

function App() {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home Page</Link>
        </li>
        <li>
          <Link to="about">About Page</Link>
        </li>
        <li>
          <Link to="contacts">Contacts Page</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<HomePage user={"test User"} />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contacts" element={<ContactsPage />} />
      </Routes>
    </>
  );
}

function HomePage({ user }) {
  return <div>Home Page. Hello {user}</div>;
}

function AboutPage() {
  return <div>About Page</div>;
}

function ContactsPage() {
  return <div>Contacts Page</div>;
}

export default App;
