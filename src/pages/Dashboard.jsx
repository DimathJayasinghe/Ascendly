import MetricCard from "../components/MetricCard";
import "./Dashboard.css";

const Dashboard = () => {
  const advisors = [
    {
      name: "John Keels Holdings PLC",
      rating: "4.8/5",
      image:
        "https://ui-avatars.com/api/?name=JK&background=00D9C9&color=0F1419",
    },
    {
      name: "Gayani de Alwis",
      rating: "4.2/5",
      image:
        "https://ui-avatars.com/api/?name=GA&background=00D9C9&color=0F1419",
    },
    {
      name: "Ajith de Costa",
      rating: "4.0/5",
      image:
        "https://ui-avatars.com/api/?name=AC&background=00D9C9&color=0F1419",
    },
  ];

  return (
    <div className="dashboard-page">
      {/* Metrics Row */}
      <div className="metrics-grid">
        <MetricCard icon="👥" title="Active users" value="1892" />
        <MetricCard icon="📊" title="Monthly Revenue" value="$18,500" />
        <MetricCard icon="⭐" title="Engagement Score" value="81/100" />
        <MetricCard
          icon="📈"
          title="Growth"
          value="+17.4%"
          trend="up"
          trendValue="+17.4%"
          variant="primary"
        />
      </div>

      {/* Main Content Grid */}
      <div className="content-grid">
        {/* AI Forecasting Section */}
        <div className="card forecast-card">
          <div className="card-header">
            <h3 className="card-title">AI Forecasting</h3>
            <select className="period-select">
              <option value="monthly">Monthly</option>
              <option value="weekly">Weekly</option>
              <option value="yearly">Yearly</option>
            </select>
          </div>
          <div className="forecast-content">
            <div className="forecast-stats">
              <div className="forecast-item">
                <span className="forecast-label">After 6 months</span>
                <div className="forecast-value">
                  <span className="value">43.50%</span>
                  <span className="trend up">+2.45%</span>
                </div>
              </div>
              <div className="forecast-item">
                <span className="forecast-label">Before 6 months</span>
                <div className="forecast-value">
                  <span className="value">$52,422</span>
                  <span className="trend down">-4.5%</span>
                </div>
              </div>
            </div>
            <div className="chart-placeholder">
              <svg viewBox="0 0 400 100" className="line-chart">
                <polyline
                  fill="none"
                  stroke="#00D9C9"
                  strokeWidth="2"
                  points="0,80 50,60 100,70 150,45 200,55 250,30 300,40 350,20 400,35"
                />
                <polyline
                  fill="url(#gradient)"
                  stroke="none"
                  points="0,80 50,60 100,70 150,45 200,55 250,30 300,40 350,20 400,35 400,100 0,100"
                  opacity="0.1"
                />
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#00D9C9" />
                    <stop offset="100%" stopColor="transparent" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>

        {/* Top Business Advisors */}
        <div className="card advisors-card">
          <h3 className="card-title">Top Business Advisors</h3>
          <div className="advisors-list">
            {advisors.map((advisor, index) => (
              <div key={index} className="advisor-item">
                <img
                  src={advisor.image}
                  alt={advisor.name}
                  className="advisor-avatar"
                />
                <div className="advisor-info">
                  <span className="advisor-name">{advisor.name}</span>
                </div>
                <span className="advisor-rating">{advisor.rating}</span>
              </div>
            ))}
          </div>
          <button className="view-all-btn">View all →</button>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="content-grid">
        {/* Promotional Card */}
        <div className="promo-card">
          <div className="promo-content">
            <h2>Try Ascendly for free now!</h2>
            <p>"From Idea to Impact. We help you Ascend"</p>
            <div className="promo-actions">
              <button className="btn btn-secondary">Try for free</button>
              <button className="btn-link">Skip</button>
            </div>
          </div>
          <div className="promo-image">
            <div className="promo-graphic">🚀</div>
          </div>
        </div>

        {/* Revenue Trend */}
        <div className="card revenue-card">
          <div className="card-header">
            <h3 className="card-title">Revenue Trend</h3>
            <select className="period-select">
              <option value="monthly">Monthly</option>
            </select>
          </div>
          <div className="revenue-content">
            <div className="revenue-value">$682.5</div>
            <div className="revenue-status">
              <span className="status-dot"></span>
              On track
            </div>
            <div className="revenue-chart">
              <div className="bar-chart">
                {[60, 80, 45, 90, 70, 85, 75].map((height, index) => (
                  <div
                    key={index}
                    className="bar"
                    style={{ height: `${height}%` }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
