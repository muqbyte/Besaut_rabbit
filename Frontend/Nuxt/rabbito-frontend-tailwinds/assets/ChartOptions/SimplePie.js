export const chartOption = (chartData) => ({
  title: {
    text: "Sensor Radar Status",
    left: "center",
    textStyle: {
      color: "deepskyblue", // Specify your desired title color here
    },
  },
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b} : {c} ({d}%)",
  },
  legend: {
    orient: "horizontal",
    data: ["High TMP", "Normal TMP", "Low TMP", "High RH", "Normal RH", "Low RH", "High NH3", "Normal NH3", "Low NH3"],
    bottom: "bottom",
    center: "center",
    textStyle: {
      color: ["#FF0000", "#00FF00", "#0000FF", "#FFA500", "#FFFF00", "#008000", "#800080", "#FF00FF", "#00FFFF"],
    },
  },
  series: [
    {
      name: "Sensor Status",
      type: "pie",
      radius: "55%",
      // center: ["50%", "60%"],
      data: chartData,
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)",
        },
      },
    },
  ],
});
