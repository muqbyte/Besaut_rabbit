function formatTemperatureColor(value) {
    return {
        color: value < 22 ? '#84FFFF' : value > 27 ? '#FF5252' : '#C6FF00',
    };
  }
  export { formatTemperatureColor };