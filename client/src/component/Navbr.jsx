import "./Navbr.css";
function Navbr() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-secondary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="#">
            <img
              src="./src/assets/logo.jpg"
              alt="Logo"
              className="logo d-inline-block align-text-top"
            />
            CY HOMES
          </a>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-4">
              <li className="nav-item mx-3">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link" href="#">
                  Chats
                </a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link" href="#">
                  Roomie
                </a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
            </ul>
          </div>
          <div className="profile">
            <img
              className="profile-img"
              src="./src/assets/profile-user.png"
              alt="profile-photo"
            />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbr;
