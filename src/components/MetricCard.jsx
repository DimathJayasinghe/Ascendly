import "./MetricCard.css";

const MetricCard = ({
  title,
  value,
  icon,
  trend,
  trendValue,
  variant = "default",
}) => {
  return (
    <div className={`metric-card ${variant}`}>
      {icon && <div className="metric-icon">{icon}</div>}
      <div className="metric-content">
        <h3 className="metric-title">{title}</h3>
        <div className="metric-value">{value}</div>
        {trend && (
          <div className={`metric-trend ${trend}`}>
            <span className="trend-icon">{trend === "up" ? "↑" : "↓"}</span>
            <span className="trend-value">{trendValue}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default MetricCard;
