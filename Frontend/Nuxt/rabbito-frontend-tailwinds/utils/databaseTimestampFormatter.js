// utils/databaseTimestampFormatter.js

function DBformatTimestamp(timestamp) {
    const utcDate = new Date(timestamp);
    const malaysiaTimezoneOffset = 8;
    const malaysiaDate = new Date(utcDate.getTime() - malaysiaTimezoneOffset * 60 * 60 * 1000);
    return malaysiaDate.toLocaleString('en-MY', timestampOptions()).toUpperCase();
  }
  
  const timestampOptions = () => {
    return { timeZone: 'Asia/Kuala_Lumpur', timeStyle: 'medium', hour12: false, hourCycle: 'h23' };
    // return { timeZone: 'Asia/Kuala_Lumpur', dateStyle: 'short', timeStyle: 'medium', hour12: false, hourCycle: 'h23' };
  };
  
  export { DBformatTimestamp };
  