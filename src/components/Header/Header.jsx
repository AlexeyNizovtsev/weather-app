import "./Header.css";
import logo from "../../assets/react.svg";

export default function Header() {
  return (
    <header>
      <h3>Weather app</h3>
      <div className="react-container">
        <img className="logo" src={logo} alt="React logo" />
        <p style={{ margin: "1rem" }}>Made with React</p>
      </div>
    </header>
  );
}
