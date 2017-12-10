export default () => (
    <header className='header'>

      <div className="container">
        <nav className="navbar navbar-expand-md">
          <a className="navbar-brand" href="/">
            <img className="logo" src="/static/images/logo.svg" />
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <ul className=" navbar-nav flex-row ml-md-auto d-none d-md-flex">
            <li className="nav-item font-bitblox"><a className="nav-link" href="/tickets">Tickets</a></li>
            <li className="nav-item font-bitblox"><a className="nav-link" href="/#theme">Theme</a></li>
            <li className="nav-item font-bitblox"><a className="nav-link" href="#organizers">About</a></li>
          </ul>

        </nav>
      </div>
      <style jsx>{`
        .header {
          padding: 20px 0;
        }

        .logo {
          width: 150px;
        }

        .nav-item > a {
          font-size: 14px;
          color: #eef9f6;
        }
      `}</style>
    </header>
  )
