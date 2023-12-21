
function formatDateTimestamp(timestamp) {
    const utcDate = new Date(timestamp);
    return utcDate.toLocaleString('en-MY', timestampOptions()).toUpperCase();
  }
  
  const timestampOptions = () => {
    return { timeZone: 'Asia/Kuala_Lumpur', day: 'numeric', month: 'short', year: '2-digit', hour: 'numeric', minute: 'numeric', second: 'numeric' }
  };
  
  export { formatDateTimestamp };
  