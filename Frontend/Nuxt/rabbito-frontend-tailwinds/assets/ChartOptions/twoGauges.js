export const chartOption = (dew, temperature) => ({
    tooltip: {
      formatter: "{a} <br/>{c} {b}",
    },
    series: [
      {
        name: "Dew",
        type: "gauge",
        radius: "70%",
        min: 0,
        max: 100,
        startAngle: 315,
        endAngle: 225,
        splitNumber: 2,
        axisLine: {
          lineStyle: {
            color: [
              // [0.29, "rgb(15,164,100)"],
              [0.29, "#ca8a04"],
              // [0.7, "rgb(235,137,52)"],
              [0.7, "#22c55e"],
              [1, "#B388FF"],
            ],
            shadowColor: "rgba(255, 255, 255, 0.7)",
            shadowBlur: 10,
            width: 8,
          },
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          // backgroundColor: 'auto',
          borderRadius: 2,
          color: "auto",
          padding: 3,
        },
        splitLine: {
          length: 15,
          lineStyle: {
            color: "auto",
          },
        },
        pointer: {
          width: 4,
        },
        title: {
          offsetCenter: ["0", "120%"],
          // color: "rgba(255,255, 255, 1)",
          color: dew < 40 ? '#ca8a04' : dew > 70 ? '#B388FF' : '#22c55e'
        },
        detail: {
          show: false,
        },
        data: [{ value: dew, name: "RH (%)" }],
      },
      {
        name: "TMP",
        type: "gauge",
        radius: "70%",
        min: 0,
        max: 100,
        startAngle: 135,
        endAngle: 45,
        splitNumber: 2,
        axisLine: {
          lineStyle: {
            color: [
              // [0.29, "rgb(15,164,100)"],
              [0.29, "#7dd3fc"],
              // [0.7, "rgb(235,137,52)"],
              [0.7, "#22c55e"],
              [1, "rgb(219,58,55)"],
            ],
            shadowColor: "rgba(255, 255, 255, 0.7)",
            shadowBlur: 10,
            width: 8,
          },
        },
        axisTick: {
          splitNumber: 5,
          length: 10, 
          lineStyle: {
            color: "auto",
          },
        },
        title: {
          offsetCenter: ["0", "-120%"],
          color: temperature < 22 ? '#7dd3fc' : temperature > 27 ? '#FF5252' : '#22c55e',
        },
        axisLabel: {
          borderRadius: 2,
          color: "auto",
          padding: 3,
        },
        splitLine: {
          length: 15,
          lineStyle: {
            color: "auto",
          },
        },
        pointer: {
          width: 4,
        },
        detail: {
          show: false,
        },
        data: [{ value: temperature, name: "TMP (°C)" }],
      },
    ],
  });