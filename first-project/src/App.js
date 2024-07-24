import logo from './logo.svg';
import './App.css';
import Homepage from './Homepage.js';
import About from './About.js';
import Contact from './Contact.js';

function App() {
  return (
  <>
  <Homepage text={"I will learn React JS"}></Homepage>
  <About text={"Une jam nga Fushe Kosova"}></About>
  <Contact kontakti={"mund te me kontaktoni mua"} numri={"045-998-218"} email={"via this email:gerbeshierion19@gmail.com"}></Contact>
  </>
  );
}

export default App;
