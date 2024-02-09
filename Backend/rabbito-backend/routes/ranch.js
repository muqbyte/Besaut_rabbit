const express = require('express')
const router = express.Router()
const connection = require("../config/database/database");
const client = require('../config/mqtt/mqtt')

// Data Section
// Today's Recent Data
// http://localhost:7500/api/ranch/now?id=RB-01
router.get("/now", (req, res, next) => {
    const { id } = req.query;
    // Use parameterized query to prevent SQL injection
    // const q = `SELECT * FROM sensor_data WHERE SID = ? AND DATE(timestamp) = CURDATE() ORDER BY timestamp DESC LIMIT 1;`;
    const q = `
        SELECT *, 
        CONVERT_TZ(timestamp, 'UTC', 'Asia/Kuala_Lumpur') AS timestamp 
        FROM 
        sensor_data 
        WHERE SID = '${id}' 
        AND (TYPE LIKE '%TMP%' OR TYPE LIKE '%RH%') 
        AND DATE(timestamp) = CURDATE() ORDER BY timestamp DESC LIMIT 2;`;
         
    
    connection.query(q, [id], function (error, rows, fields) {
        if (error) {
            // Handle the error properly, don't just log it
            console.log(error);
            return res.status(500).json({ error: "An internal server error occurred" });
        }

        // Check if any rows are returned
        if (rows.length === 0) {
            return res.status(404).json({ error: "No data found for the given tid" });
        }

        // rows[0] contains the first row returned by the query
        // const ret = JSON.stringify(rows[0]);
        // let row[0] included in the array
        const ret = JSON.stringify(rows);

        res.header("Content-Type", "application/json; charset=utf-8");
        res.send(ret);
    });
});
// Today's Recent Data
// http://localhost:7500/api/ranch/allnow?id=RB-01
router.get("/allnow", (req, res, next) => {
  const { id } = req.query;
  const q = `
      SELECT *, 
      CONVERT_TZ(timestamp, 'UTC', 'Asia/Kuala_Lumpur') AS timestamp 
      FROM 
      sensor_data 
      WHERE SID = '${id}' 
      AND (TYPE LIKE '%TMP%' OR TYPE LIKE '%RH%' OR TYPE LIKE '%NH3%') 
      AND DATE(timestamp) = CURDATE() ORDER BY timestamp DESC LIMIT 3;`;
  
  connection.query(q, [id], function (error, rows, fields) {
      if (error) {
          // Handle the error properly, don't just log it
          console.log(error);
          return res.status(500).json({ error: "An internal server error occurred" });
      }

      // Check if any rows are returned
      if (rows.length === 0) {
          return res.status(404).json({ error: "No data found for the given tid" });
      }

      // Separate the data into objects based on the type
      const data = { TMP: [], RH: [], NH3: [] };
      rows.forEach(row => {
          if (row.TYPE.includes('TMP')) {
              data.TMP.push(row);
          } else if (row.TYPE.includes('RH')) {
              data.RH.push(row);
          } else if (row.TYPE.includes('NH3')) {
              data.NH3.push(row);
          }
      });

      res.header("Content-Type", "application/json; charset=utf-8");
      res.json(data);
  });
});
// Today's Recent Data
// http://localhost:7500/api/ranch/nh3now?id=RB-01
router.get("/nh3now", (req, res, next) => {
  const { id } = req.query;
  // Use parameterized query to prevent SQL injection
  // const q = `SELECT * FROM sensor_data WHERE SID = ? AND DATE(timestamp) = CURDATE() ORDER BY timestamp DESC LIMIT 1;`;
  const q = `
      SELECT *, 
      CONVERT_TZ(timestamp, 'UTC', 'Asia/Kuala_Lumpur') AS timestamp 
      FROM 
      sensor_data 
      WHERE SID = '${id}' 
      AND (TYPE LIKE '%NH3%') 
      AND DATE(timestamp) = CURDATE() ORDER BY timestamp DESC LIMIT 1;`;
       
  
  connection.query(q, [id], function (error, rows, fields) {
      if (error) {
          // Handle the error properly, don't just log it
          console.log(error);
          return res.status(500).json({ error: "An internal server error occurred" });
      }

      // Check if any rows are returned
      if (rows.length === 0) {
          return res.status(404).json({ error: "No data found for the given tid" });
      }

      // rows[0] contains the first row returned by the query
      // const ret = JSON.stringify(rows[0]);
      // let row[0] included in the array
      const ret = JSON.stringify(rows);

      res.header("Content-Type", "application/json; charset=utf-8");
      res.send(ret);
  });
});
// http://localhost:7500/api/ranch/signalnow?id=RB-01
router.get("/signalnow", (req, res, next) => {
  const { id } = req.query;
  // Use parameterized query to prevent SQL injection
  // const q = `SELECT * FROM sensor_data WHERE SID = ? AND DATE(timestamp) = CURDATE() ORDER BY timestamp DESC LIMIT 1;`;
  const q = `
      SELECT *, 
      CONVERT_TZ(timestamp, 'UTC', 'Asia/Kuala_Lumpur') AS timestamp 
      FROM 
      signal_data 
      WHERE SID = '${id}' 
      AND (TYPE LIKE '%RSSI%' OR TYPE LIKE '%SNR%') 
      AND DATE(timestamp) = CURDATE() ORDER BY timestamp DESC LIMIT 2;`;
       
  
  connection.query(q, [id], function (error, rows, fields) {
      if (error) {
          // Handle the error properly, don't just log it
          console.log(error);
          return res.status(500).json({ error: "An internal server error occurred" });
      }

      // Check if any rows are returned
      if (rows.length === 0) {
          return res.status(404).json({ error: "No data found for the given tid" });
      }

      // rows[0] contains the first row returned by the query
      // const ret = JSON.stringify(rows[0]);
      // let row[0] included in the array
      const ret = JSON.stringify(rows);

      res.header("Content-Type", "application/json; charset=utf-8");
      res.send(ret);
  });
});
// Last seen sensor data
router.get("/lastseen/data", (req, res, next) => {
    const tids = ["RB-01", "RB-02", "RB-03", "RB-04"];
  
    if (tids.length === 0) {
      return res.status(400).json({ error: "The 'tids' array cannot be empty." });
    }
  
    const q = `
      SELECT t1.*, CONVERT_TZ(timestamp, 'UTC', 'Asia/Kuala_Lumpur') AS timestamp
      FROM sensor_data t1
      JOIN (
        SELECT SID, MAX(timestamp) AS max_timestamp
        FROM sensor_data
        WHERE SID IN (?)
        GROUP BY SID
      ) t2 ON t1.SID = t2.SID AND t1.timestamp = t2.max_timestamp;
    `;
  
    connection.query(q, [tids], function (error, rows, fields) {
      if (error) {
        console.log(error);
        return res.status(500).json({ error: "An internal server error occurred" });
      }
  
      if (rows.length === 0) {
        return res.status(404).json({ error: "No data found for the given tids" });
      }
  
      res.header("Content-Type", "application/json; charset=utf-8");
      res.json(rows);
    });
  });

// Last seen control status
router.get("/control/status", (req, res, next) => {
    const tids = ["RC-01", "RC-02", "RC-03", "RC-04"];
  
    if (tids.length === 0) {
      return res.status(400).json({ error: "The 'tids' array cannot be empty." });
    }
  
    const q = `
      SELECT t1.*, CONVERT_TZ(timestamp, 'UTC', 'Asia/Kuala_Lumpur') AS timestamp
      FROM control_data t1
      JOIN (
        SELECT SID, MAX(timestamp) AS max_timestamp
        FROM control_data
        WHERE SID IN (?)
        GROUP BY SID
      ) t2 ON t1.SID = t2.SID AND t1.timestamp = t2.max_timestamp;
    `;
  
    connection.query(q, [tids], function (error, rows, fields) {
      if (error) {
        console.log(error);
        return res.status(500).json({ error: "An internal server error occurred" });
      }
  
      if (rows.length === 0) {
        return res.status(404).json({ error: "No data found for the given tids" });
      }
  
      res.header("Content-Type", "application/json; charset=utf-8");
      res.json(rows);
    });
  });
// Last seen control status by id
// http://localhost:7500/api/ranch/command/status?id=RC-01
router.get("/command/status", (req, res, next) => {
  const { id } = req.query;
  // Use parameterized query to prevent SQL injection
  const q = `
      SELECT *, CONVERT_TZ(timestamp, 'UTC', 'Asia/Kuala_Lumpur') AS timestamp 
      FROM control_data
      WHERE SID = '${id}' 
      ORDER BY timestamp DESC
      LIMIT 1; `;
       
  connection.query(q, [id], function (error, rows, fields) {
      if (error) {
          // Handle the error properly, don't just log it
          console.log(error);
          return res.status(500).json({ error: "An internal server error occurred" });
      }

      // Check if any rows are returned
      if (rows.length === 0) {
          return res.status(404).json({ error: "No data found for the given tid" });
      }

      // rows[0] contains the first row returned by the query
      // const ret = JSON.stringify(rows[0]);
      // let row[0] included in the array
      const ret = JSON.stringify(rows);

      res.header("Content-Type", "application/json; charset=utf-8");
      res.send(ret);
  });
});

// Control Command
router.post('/control/command', (req, res) => {
  const { payload } = req.body;

  console.log('Received payload:', payload);

  client.publish("ea/besout/control", payload);
  res.send(payload);
});

// router.post('/control/command', (req, res) => {
//   let respond;
//   let { payload } = req.body;

//   console.log('Received payload:', payload);

//   switch (payload) {
//     case 'ch1_ON':
//       respond = "ch1_ON";
//       break;
//     case 'ch2_ON':
//       respond = "ch2_ON";
//       break;
//     case 'ch3_ON':
//       respond = "ch3_ON";
//       break;
//     case 'ch4_ON':
//       respond = "ch4_ON";
//       break;
//     case 'ch1_OFF':
//       respond = "ch1_OFF";
//       break;
//     case 'ch2_OFF':
//       respond = "ch2_OFF";
//       break;
//     case 'ch3_OFF':
//       respond = "ch3_OFF";
//       break;
//     case 'ch4_OFF':
//       respond = "ch4_OFF";
//       break;
//     default:
//       respond = "Respond default";
//   }

//   client.publish("debug/testing/api/mqtt", respond);
//   res.send(respond);
// });

// Last seen tranmission strength data
router.get("/signal/data", (req, res, next) => {
    const tids = ["RB-01", "RB-02", "RB-03", "RB-04"];
  
    if (tids.length === 0) {
      return res.status(400).json({ error: "The 'tids' array cannot be empty." });
    }
  
    const q = `
      SELECT t1.*, CONVERT_TZ(timestamp, 'UTC', 'Asia/Kuala_Lumpur') AS timestamp
      FROM signal_data t1
      JOIN (
        SELECT SID, MAX(timestamp) AS max_timestamp
        FROM signal_data
        WHERE SID IN (?)
        GROUP BY SID
      ) t2 ON t1.SID = t2.SID AND t1.timestamp = t2.max_timestamp;
    `;
  
    connection.query(q, [tids], function (error, rows, fields) {
      if (error) {
        console.log(error);
        return res.status(500).json({ error: "An internal server error occurred" });
      }
  
      if (rows.length === 0) {
        return res.status(404).json({ error: "No data found for the given tids" });
      }
  
      res.header("Content-Type", "application/json; charset=utf-8");
      res.json(rows);
    });
  });

// Analytics data
// example query: http://localhost:7500/api/ranch/analytics/today?id=RB-01
router.get("/analytics/today", (req, res, next) => {
    // Extract the parameters from the query string or request body
   const { id, fromDate, untilDate } = req.query;
   // Use parameterized query to prevent SQL injection
   const q = `SELECT 
                CONCAT(DATE(timestamp), ' ', LPAD(HOUR(timestamp), 2, '00'), ':', LPAD(FLOOR(MINUTE(timestamp) / 30) * 30, 2, '00'), ':00') AS ts,
                MIN(CASE WHEN TYPE = 'TMP' THEN VALUE END) AS min_TMP,
                AVG(CASE WHEN TYPE = 'TMP' THEN VALUE END) AS avg_TMP,
                MAX(CASE WHEN TYPE = 'TMP' THEN VALUE END) AS max_TMP,
                MIN(CASE WHEN TYPE = 'RH' THEN VALUE END) AS min_RH,
                AVG(CASE WHEN TYPE = 'RH' THEN VALUE END) AS avg_RH,
                MAX(CASE WHEN TYPE = 'RH' THEN VALUE END) AS max_RH,
                MIN(CASE WHEN TYPE = 'NH3' THEN VALUE END) AS min_NH3,
                AVG(CASE WHEN TYPE = 'NH3' THEN VALUE END) AS avg_NH3,
                MAX(CASE WHEN TYPE = 'NH3' THEN VALUE END) AS max_NH3
                FROM 
                sensor_data
        WHERE SID = '${id}' AND DATE(timestamp) = CURDATE() 
        AND TIME(timestamp) >= '06:00:00' AND TIME(timestamp) <= '18:00:00' 
            GROUP BY 
                CONCAT(DATE(timestamp), ' ', LPAD(HOUR(timestamp), 2, '00'), ':', LPAD(FLOOR(MINUTE(timestamp) / 30) * 30, 2, '00'), ':00')`;
//    console.log(q);
   connection.query(q, [id], function (error, rows, fields) {
       if (error) {
           // Handle the error properly, don't just log it
           console.log(error);
           return res.status(500).json({ error: "An internal server error occurred" });
       }

       // Check if any rows are returned
       if (rows.length === 0) {
           return res.status(404).json({ error: "No data found for the given tid" });
       }

       const ret = JSON.stringify(rows);

       res.header("Content-Type", "application/json; charset=utf-8");
       res.send(ret);
   });
});
// example query: http://localhost:7500/api/ranch/analytics/dailyTrends?id=RB-01&fromDate=2023-12-26&untilDate=2023-12-27
router.get("/analytics/dailyTrends", (req, res, next) => {
    // Extract the parameters from the query string or request body
    const { id, fromDate, untilDate } = req.query;

    // Use parameterized query to prevent SQL injection
    const q = `
        SELECT 
            CONCAT(DATE(timestamp), ' ', LPAD(HOUR(timestamp), 2, '00'), ':', LPAD(FLOOR(MINUTE(timestamp) / 30) * 30, 2, '00'), ':00') AS ts,
            MIN(CASE WHEN TYPE = 'TMP' THEN VALUE END) AS min_TMP,
            AVG(CASE WHEN TYPE = 'TMP' THEN VALUE END) AS avg_TMP,
            MAX(CASE WHEN TYPE = 'TMP' THEN VALUE END) AS max_TMP,
            MIN(CASE WHEN TYPE = 'RH' THEN VALUE END) AS min_RH,
            AVG(CASE WHEN TYPE = 'RH' THEN VALUE END) AS avg_RH,
            MAX(CASE WHEN TYPE = 'RH' THEN VALUE END) AS max_RH,
            MIN(CASE WHEN TYPE = 'NH3' THEN VALUE END) AS min_NH3,
            AVG(CASE WHEN TYPE = 'NH3' THEN VALUE END) AS avg_NH3,
            MAX(CASE WHEN TYPE = 'NH3' THEN VALUE END) AS max_NH3
        FROM 
            sensor_data
        WHERE 
            SID = '${id}' 
            AND DATE(timestamp) BETWEEN '${fromDate}' AND '${untilDate}' 
            AND TIME(timestamp) >= '06:00:00' AND TIME(timestamp) <= '18:00:00' 
        GROUP BY 
            CONCAT(DATE(timestamp), ' ', LPAD(HOUR(timestamp), 2, '00'), ':', LPAD(FLOOR(MINUTE(timestamp) / 30) * 30, 2, '00'), ':00')
    `;

    // console.log(q);

    connection.query(q, [id], function (error, rows, fields) {
        if (error) {
            // Handle the error properly, don't just log it
            console.log(error);
            return res.status(500).json({ error: "An internal server error occurred" });
        }

        // Check if any rows are returned
        if (rows.length === 0) {
            return res.status(404).json({ error: "No data found for the given SID and date range" });
        }

        const ret = JSON.stringify(rows);

        res.header("Content-Type", "application/json; charset=utf-8");
        res.send(ret);
    });
});

router.get("/analytics/weekly", (req, res, next) => {
    // Extract the parameters from the query string or request body
    const { id } = req.query;
    // Use parameterized query to prevent SQL injection
    const q = `
        SELECT 
        DAYNAME(timestamp) as ts, 
        MIN(CASE WHEN TYPE = 'TMP' THEN VALUE END) AS min_TMP,
        AVG(CASE WHEN TYPE = 'TMP' THEN VALUE END) AS avg_TMP,
        MAX(CASE WHEN TYPE = 'TMP' THEN VALUE END) AS max_TMP,
        MIN(CASE WHEN TYPE = 'RH' THEN VALUE END) AS min_RH,
        AVG(CASE WHEN TYPE = 'RH' THEN VALUE END) AS avg_RH,
        MAX(CASE WHEN TYPE = 'RH' THEN VALUE END) AS max_RH,
        MIN(CASE WHEN TYPE = 'NH3' THEN VALUE END) AS min_NH3,
        AVG(CASE WHEN TYPE = 'NH3' THEN VALUE END) AS avg_NH3,
        MAX(CASE WHEN TYPE = 'NH3' THEN VALUE END) AS max_NH3
        FROM sensor_data  
        WHERE 
        SID = '${id}' 
        AND timestamp >= DATE_SUB(CURDATE(), INTERVAL 6 DAY)  
        GROUP BY ts ORDER BY timestamp
        
    `;
    
    console.log(q);
    connection.query(q, function (error, rows, fields) {
        if (error) {
            // Handle the error properly, don't just log it
            console.log(error);
            return res.status(500).json({ error: "An internal server error occurred" });
        }

        // Check if any rows are returned
        if (rows.length === 0) {
            return res.status(404).json({ error: "No data found for the given tid" });
        }

        const ret = JSON.stringify(rows);

        res.header("Content-Type", "application/json; charset=utf-8");
        res.send(ret);
    });
});
router.get("/analytics/all", (req, res, next) => {
    // Extract the parameters from the query string or request body
    const { id } = req.query;
    // Use parameterized query to prevent SQL injection
    const q = `
        SELECT *
        FROM 
            tuahlorawan 
        WHERE 
            SID = '${id}'
            AND TIME(timestamp) >= '06:00:00' AND TIME(timestamp) <= '18:00:00'`;
    console.log(q);
    connection.query(q, function (error, rows, fields) {
        if (error) {
            // Handle the error properly, don't just log it
            console.log(error);
            return res.status(500).json({ error: "An internal server error occurred" });
        }

        // Check if any rows are returned
        if (rows.length === 0) {
            return res.status(404).json({ error: "No data found for the given tid" });
        }

        const ret = JSON.stringify(rows);

        res.header("Content-Type", "application/json; charset=utf-8");
        res.send(ret);
    });
});
  
module.exports = router