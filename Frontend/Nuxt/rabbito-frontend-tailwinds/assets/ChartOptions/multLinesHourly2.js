export const chartOption = (chartData) => ({
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        legend: {
            data: ['TMP (min)', 'TMP (avg)', 'TMP (max)', 'RH (avg)', 'RH (max)', 'NH3 (avg)', 'NH3 (max)'],
            textStyle: {
              color: ["#FF0000", "#00FF00", "#0000FF", "#FFA500", "#FFFF00", "#008000", "#c838fc"],
            },
          },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            // data: data.map(item => item.ts)
            data: chartData.map(item => {
             const date = new Date(item.ts);
               return date.getHours() + ':00';
            }),
          }
        ],
        yAxis: {
            type: 'value',
            splitLine: {
              show: false // add this line
            },
        },
        series: [
          {
            name: 'TMP (min)',
            type: 'line',
            smooth: true,
            data: chartData.map(item => Number(item.min_TMP.toFixed(2))),
            },
          {
            name: 'TMP (avg)',
            type: 'line',
            smooth: true,
            data: chartData.map(item => Number(item.avg_TMP.toFixed(2))),
            },
          {
            name: 'TMP (max)',
            type: 'line',
            smooth: true,
            data: chartData.map(item => Number(item.max_TMP.toFixed(2))),

            },
          {
            name: 'RH (avg)',
            type: 'line',
            smooth: true,
            data: chartData.map(item => Number(item.avg_RH.toFixed(2))),
          },
          {
            name: 'RH (max)',
            type: 'line',
            smooth: true,           
            data: chartData.map(item => Number(item.max_RH.toFixed(2))),
          },
          {
            name: 'NH3 (avg)',
            type: 'line',
            smooth: true,       
            data: chartData.map(item => Number(item.avg_NH3.toFixed(2))),            
          },
          {
            name: 'NH3 (max)',
            type: 'line',
            smooth: true,
            data: chartData.map(item => Number(item.max_NH3.toFixed(2))),
          },

        ]
    });