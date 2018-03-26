export default () => (
    <header className='header'>

      <div className="container">

        <nav className="navbar navbar-dark">
            <a className="navbar-brand" href="/">
                <img className="logo" src="/static/images/logo.svg" />
            </a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div class="navbar-collapse collapse" id="collapsingNavbar">
                <ul class="navbar-nav">
                    <li className="nav-item"><a className="nav-link" href="/why-coldfront">Why ColdFront?</a></li>
                    <li className="nav-item"><a className="nav-link" href="/tickets">Tickets</a></li>
                    <li className="nav-item"><a className="nav-link" href="/about">About</a></li>
                    <li className="nav-item"><a className="nav-link" href="/call-for-recommendations">CFR</a></li>
                </ul>
            </div>
        </nav>
      </div>
      <style jsx>{`
        .header {
          padding: 20px 0;
          background: #0C0C14;
        }
        .logo {
          width: 200px;
        }

        .navbar-dark .navbar-toggler {
            border: 0;
        }
        .navbar-dark .navbar-toggler-icon {
            width: 30px;
            background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='#193EFF' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
            position: relative;
            z-index: 1000;
            cursor: pointer;
        }

        :global(.navbar-collapse) {
            transition: transform 300ms;
            transform: translate3d(0,-100%,0);

            display: block;

            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 900;

            height: 100vh;
            background-color: rgba(0,0,0,.90);

            text-align: center;
            padding: 40px;
        }

        :global(.collapse.show) {
            transform: translate3d(0,0,0);
        }
        .nav-item {
            font-size: 30px;
        }

        .nav-link {
            color: #fff
        }

        @media (max-width: 1000px) {

            .logo {
                width: 140px;
            }


        }

      `}</style>
    </header>
  )
