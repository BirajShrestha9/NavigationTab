import { useState } from "react";
import { Codes } from "./Code";
import { Action } from "./Action";
import { Issue } from "./Issue";
import { Pull_Request } from "./Pull_Request";

export default function Navigation() {
  const [activeTab, setActiveTab] = useState("codes");
  return (
    <div>
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
          <button onClick={() => setActiveTab("codes")}>
            <img src="/src/assets/images/icons8-arrow-24.png" />
            Code
            {activeTab === "codes" && <div className="active_Navline" />}
          </button>
          <button onClick={() => setActiveTab("Issue")}>
            <img src="/src/assets/images/icons8-circularDot-16.png" />
            Issues
            {activeTab === "Issue" && <div className="active_Navline" />}
          </button>
          <button onClick={() => setActiveTab("Pull_Request")}>
            <img src="/src/assets/images/icons8-pull-request-50.png" />
            Pull requests
            {activeTab === "Pull_Request" && <div className="active_Navline" />}
          </button>

          <button onClick={() => setActiveTab("Action")}>
            <img src="/src/assets/images/actionArrow.png" />
            Action
            {activeTab === "Action" && <div className="active_Navline" />}
          </button>
          <button onClick={() => setActiveTab("Projects")}>
            <img src="/src/assets/images/Projects.png" />
            Projects
            {activeTab === "Projects" && <div className="active_Navline" />}
          </button>
          <button onClick={() => setActiveTab("Insights")}>
            <img src="/src/assets/images/insights.png" />
            Insights
            {activeTab === "Insights" && <div className="active_Navline" />}
          </button>
          <button onClick={() => setActiveTab("Security")}>
            <img src="/src/assets/images/security.png" />
            Security
            {activeTab === "Security" && <div className="active_Navline" />}
          </button>
        </div>
        <div className="nav_line" />
      </div>
      <div className="content">
        {activeTab === "codes" && <Codes />}
        {activeTab === "Action" && <Action />}
        {activeTab === "Issue" && <Issue />}

        {activeTab === "Pull_Request" && <Pull_Request />}
      </div>
    </div>
  );
}
