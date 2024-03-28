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
            data: ['TMP (min)', 'TMP (avg)', 'TMP (max)', 'RH (min)', 'RH (avg)', 'RH (max)', 'NH3 (min)', 'NH3 (avg)', 'NH3 (max)'],
            textStyle: {
              color: ["#FF0000", "#00FF00", "#0000FF", "#FFA500", "#FFFF00", "#008000", "#c838fc", "#be38fc", "#fc5de5"],
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
            data: chartData.map(item => item.min_TMP !== null ? Number(item.min_TMP.toFixed(2)) : null),
            },
          {
            name: 'TMP (avg)',
            type: 'line',
            smooth: true,
            data: chartData.map(item => item.avg_TMP !== null ? Number(item.avg_TMP.toFixed(2)) : null),
            },
          {
            name: 'TMP (max)',
            type: 'line',
            smooth: true,
            data: chartData.map(item => item.max_TMP !== null ? Number(item.max_TMP.toFixed(2)) : null),

            },
          {
            name: 'RH (min)',
            type: 'line',
            smooth: true,
            data: chartData.map(item => item.min_RH !== null ? Number(item.min_RH.toFixed(2)) : null),
          },
          {
            name: 'RH (avg)',
            type: 'line',
            smooth: true,
            data: chartData.map(item => item.avg_RH !== null ? Number(item.avg_RH.toFixed(2)) : null),
          },
          {
            name: 'RH (max)',
            type: 'line',
            smooth: true,           
            data: chartData.map(item => item.max_RH !== null ? Number(item.max_RH.toFixed(2)) : null),
          },
          {
            name: 'NH3 (min)',
            type: 'line',
            smooth: true,
            lineStyle: {
              color: '#c838fc', // Set the color for this series
            },
            data: chartData.map(item => item.min_NH3 !== null ? Number(item.min_NH3.toFixed(2)) : null),
          },
          {
            name: 'NH3 (avg)',
            type: 'line',
            smooth: true, 
            lineStyle: {
              color: '#be38fc', // Set the color for this series
            },       
            data: chartData.map(item => item.avg_NH3 !== null ? Number(item.avg_NH3.toFixed(2)) : null),            
          },
          {
            name: 'NH3 (max)',
            type: 'line',
            smooth: true,
            lineStyle: {
              color: '#fc5de5', // Set the color for this series
            },
            data: chartData.map(item => item.max_NH3 !== null ? Number(item.max_NH3.toFixed(2)) : null),
          },

        ]
    });