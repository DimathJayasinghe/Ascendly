import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const menuItems = [
    { path: "/dashboard", icon: "📊", label: "Dashboard" },
    { path: "/logistics", icon: "📦", label: "Logistics" },
    { path: "/ai-analytics", icon: "🤖", label: "AI Analytics" },
    { path: "/patent", icon: "📜", label: "Patent" },
    { path: "/marketing-agency", icon: "📢", label: "Marketing Agency" },
    { path: "/investors", icon: "💼", label: "Investors" },
    { path: "/tiers", icon: "⭐", label: "Tiers" },
    { path: "/business-advisors", icon: "👥", label: "Business Advisors" },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h1 className="sidebar-logo">Ascendly</h1>
        <p className="sidebar-tagline">
          STARTUP
          <br />
          MANAGEMENT
        </p>
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `sidebar-item ${isActive ? "active" : ""}`
            }
          >
            <span className="sidebar-icon">{item.icon}</span>
            <span className="sidebar-label">{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="upgrade-card">
          <h3>Upgrade to PRO to get access to all features!</h3>
          <button className="btn btn-primary">Upgrade Now</button>
        </div>
        <button className="help-button">
          <span>❓</span> Help
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
