import Link from "next/link";

export default () => (
  <header className="header content wide">
    <nav className="navbar navbar-dark">
      <a className="navbar-brand" href="/">
        <img className="logo" src="/static/images/logo.svg" />
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsingNavbar"
        data-animate="false"
        aria-controls="navbarsExampleDefault"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div
        className="navbar-collapse collapse"
        id="collapsingNavbar"
        data-toggle="collapse"
        data-target="#collapsingNavbar"
      >
        <ul className="navbar-nav">

          <li className="nav-item">
            <Link href="/why-coldfront">
              <a className="nav-link">Why?</a>
            </Link>
          </li>

          <li className="nav-item">
            <Link href="/call-for-recommendations/">
              <a className="nav-link">CFR</a>
            </Link>
          </li>

          <li className="nav-item">
            <Link href="/program">
              <a className="nav-link">Program</a>
            </Link>
          </li>

          <li className="nav-item">
            <Link href="/venue-and-practical">
              <a className="nav-link">Venue</a>
            </Link>
          </li>

          <li className="nav-item">
            <Link href="/speakers">
              <a className="nav-link">Speakers</a>
            </Link>
          </li>

          <li className="nav-item">
            <Link href="/about">
              <a className="nav-link">About</a>
            </Link>
          </li>

          <li className="nav-item tickets">
            <Link href="/tickets">
              <a className="btn btn-primary">Tickets</a>
            </Link>
          </li>


          {/* <li className="nav-item">
            <Link href="/community-workshop-day">
              <a className="nav-link">Workshops</a>
            </Link>
          </li> */}
          {/*           

          {/* <li className="nav-item">
            <Link href="/prefront">
              <a className="nav-link">Prefront</a>
            </Link>
          </li> */}
          {/* <li className="nav-item">
            <Link href="/diversity-scholarships">
              <a className="nav-link">Diversity</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/student">
              <a className="nav-link">Student</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/social">
              <a className="nav-link">Social</a>
            </Link>
          </li> */}
        </ul>
      </div>
    </nav>

    <style jsx>{`
      .header {
        position: relative;
        z-index: 10;
        padding-top: 20px;
        padding-bottom: 20px;
      }

      .logo {
        width: 200px;
      }

      .navbar-brand {
        z-index: 1000;
      }

      .navbar-dark .navbar-toggler {
        border: 0;
      }
      .navbar-dark .navbar-toggler-icon {
        width: 30px;
        background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255,255,255, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
        position: relative;
        cursor: pointer;
      }

      :global(.navbar-collapse) {
        transition: opacity linear 100ms !important;
        display: block;

        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 1100;
        opacity: 0;

        height: 100vh;
        background-color: #2A4252;
        visibility: hidden;

        text-align: center;
        padding: 100px;
      }

      :global(.navbar-collapse .navbar-nav) {
        transform: translate(0, 25px);
        transition: ease-out 100ms;

        @media (max-width: 600px) {
          position: relative;
          top: 0rem;
        }
      }

      :global(.navbar-collapse.show .navbar-nav) {
        transform: translate(0, 0);
      }

      :global(.navbar-collapse.collapsing .navbar-nav) {
        transform: translate(0, 12px);
      }

      :global(.collapse.show) {
        opacity: 1;
        visibility: visible;
      }

      :global(.collapsing) {
        opacity: 0.5;
        visibility: visible;
      }

      .nav-item {
        font-size: 30px;
      }

      .nav-item a {
        color: #FCB7A0;
      }

      .tickets {
        margin-top: 20px;
      }


      .nav-link {
        color: #fff;
      }


    `}</style>
  </header>
);
