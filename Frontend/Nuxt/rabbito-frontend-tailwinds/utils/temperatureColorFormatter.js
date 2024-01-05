function formatTemperatureColor(value) {
    return {
        color: value < 22 ? '#84FFFF' : value > 27 ? '#FF5252' : '#22c55e',
    };
  }
  export { formatTemperatureColor };