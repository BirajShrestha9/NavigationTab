export default function Navigation() {
  return (
    <div className="navHeader">
      <div className="navHeader_1">
        <div>
          {" "}
          <img src="/src/assets/images/Menu.png" className="icons" />
          <img className="icons" src="/src/assets/images/github.png" />
          <div className="nav">
            <p>BirajShrestha9 / Navigation</p>
          </div>
        </div>
        <div>
          <input placeholder="Type to search"></input>
          <p>About</p>
          <p>Contact</p>
        </div>
      </div>
      <div className="navHeader_2">
        <a>
          <img src="/src/assets/images/icons8-arrow-24.png" />
          Code
        </a>
        <a>
          <img src="/src/assets/images/icons8-circularDot-16.png" />
          Issues
        </a>
        <a>
          <img src="/src/assets/images/icons8-pull-request-50.png" />
          Pull requests
        </a>

        <a>
          <img src="/src/assets/images/actionArrow.png" />
          Actions
        </a>
        <a>
          <img src="/src/assets/images/Projects.png" />
          Projects
        </a>
        <a>
          <img src="/src/assets/images/insights.png" />
          Insights
        </a>
        <a>
          <img src="/src/assets/images/security.png" />
          Security
        </a>
      </div>
      <div className="nav_line" />
    </div>
  );
}
