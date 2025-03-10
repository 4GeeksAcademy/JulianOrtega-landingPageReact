export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "rgb(51, 56, 63)" }}>
      <div className="container">
        <a className="navbar-brand text-white fw-bold" href="#">Start Bootstrap</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link text-white" href="#">Home</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="#">About</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="#">Services</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="#">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
