export const chartOption = (chartData) => ({
    title: {
      text: "Parameter Non-Compliance Occurance",
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
      data: ["Low TMP", "High TMP", "Low RH", "High RH", "Low NH3", "High NH3"],
      bottom: "bottom",
      center: "center",
      textStyle: {
        color: ["#FF0000", "#00FF00", "#0000FF", "#FFA500", "#FFFF00", "#008000"],
      },
    },
    series: [
      {
        name: "Non-Compliance Occurance",
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
  