  function formatColorStyle(value) {
    return {
        color: value < 40 ? '#FBC02D' : value > 70 ? '#B388FF' : '#d9f99d',
    };
  }
  export { formatColorStyle };