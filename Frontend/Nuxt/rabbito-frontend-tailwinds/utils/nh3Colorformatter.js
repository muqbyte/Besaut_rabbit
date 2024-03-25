function nh3FormatColorStyle(value) {
    return {
        color: value < 0.5 ? '#FBC02D' : value > 30 ? '#B388FF' : '#22c55e',
    };
  }
  export { nh3FormatColorStyle };