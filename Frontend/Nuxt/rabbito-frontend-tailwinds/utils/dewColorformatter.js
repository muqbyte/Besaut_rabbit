  function dewFormatColorStyle(value) {
    return {
        color: value < 50 ? '#FBC02D' : value > 70 ? '#B388FF' : '#22c55e',
    };
  }
  export { dewFormatColorStyle };