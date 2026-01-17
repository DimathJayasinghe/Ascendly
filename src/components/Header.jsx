import "./Header.css";

const Header = ({ userName = "Sanavi" }) => {
  return (
    <div className="header">
      <div className="header-welcome">
        <h2 className="header-title">Welcome, {userName}!</h2>
      </div>

      <div className="header-actions">
        <div className="search-box">
          <span className="search-icon">🔍</span>
          <input type="text" placeholder="Search" className="search-input" />
        </div>

        <button className="icon-button">
          <span>🔔</span>
        </button>

        <button className="icon-button">
          <span>⚙️</span>
        </button>

        <div className="user-avatar">
          <img
            src="https://ui-avatars.com/api/?name=User&background=00D9C9&color=0F1419"
            alt="User"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
