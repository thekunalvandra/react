import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark d-flex align-items-center">
  <div class="collapse navbar-collapse " id="navbarNav">
    <ul class="navbar-nav ">
      <li class="nav-item active ">
        <Link to="./" className="nav-link  ">Home</Link> &nbsp;
      </li>
      <li class="nav-item">
        <Link to="./employees" className="nav-link  ">All Employees</Link> &nbsp;
      </li>
      <li class="nav-item">
        <Link to="./employees/add" className="nav-link  ">Add Employees</Link> &nbsp;
      </li>
      <li class="nav-item">
        <Link to="./about" className="nav-link">About</Link> &nbsp;
      </li>
    </ul>
  </div>
</nav>
    </>
  );
}

export default Header;