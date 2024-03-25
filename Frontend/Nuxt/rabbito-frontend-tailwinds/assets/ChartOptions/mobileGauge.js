export const chartOption = (data, unit, max) => ({
    tooltip: {
      // formatter: '{a} <br/>{b} : {c} %'
    },
    series: [
      {
        name: "Temperature",
        type: "gauge",
        // center: ["50%", "50%"],
        detail: {
          valueAnimation: true,
          formatter: "{value}",
          color: 'inherit',
        },
        title: {
          offsetCenter: ["0", "90%"],
          color: 'inherit',
        },
        data: [{ value: data, name: unit }],
        max: max,
        axisLine: {
          lineStyle: {
            color: [
              [0.55, "#f5e838"],
              [0.75, "#22c55e"],
              // [0.65, "#ff5e00"],
              [1.0, "#ff2600"],
            ],
            width: 10,
          },
        },
        splitLine: {
          distance: -10,
          length: 10,
          lineStyle: {
            color: "#102a63",
            width: 4,
          },
        },
        axisLabel: {
          color: "inherit",
          distance: 25,
          fontSize: 8,
        },
      },
    ],
  });
  