
function formatRealTimestamp(timestamp) {
    const utcDate = new Date(timestamp);
    return utcDate.toLocaleString('en-MY', timestampOptions()).toUpperCase();
  }
  
  const timestampOptions = () => {
    return { timeZone: 'Asia/Kuala_Lumpur', timeStyle: 'medium', hour12: false, hourCycle: 'h23' };
    // return { timeZone: 'Asia/Kuala_Lumpur', dateStyle: 'medium' };
    // return { timeZone: 'Asia/Kuala_Lumpur', day: 'numeric', month: 'short', year: '2-digit', hour: 'numeric', minute: 'numeric' }
  };
  
  export { formatRealTimestamp };
  