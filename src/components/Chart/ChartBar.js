import "./ChartBar.css";

const ChartBar = (props) => {
  let barFilledHeight = "0%";
  // as a text as this will be assigned to a css style
  // 0 for months having no expenses
  if (props.maxValue > 0) {
    barFilledHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFilledHeight }}
        ></div>
        {/* //style wants js object as a value */}
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
