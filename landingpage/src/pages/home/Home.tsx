import "../../styles/main.scss";
import logo from "../../assets/logo.png";

const Home = () => {
  return (
    <header className="header">
      <span>
        <img src={logo} />
      </span>
      <h1>Cuidadores & Pacientes</h1>
    </header>
  );
};

export default Home;
