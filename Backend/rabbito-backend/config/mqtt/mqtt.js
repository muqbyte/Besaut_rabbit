const mqtt = require("mqtt");
// const client = mqtt.connect("mqtt://lns.txio.live:1982");
const client = mqtt.connect("mqtt://txio.uitm.edu.my:1883");

client.on("connect", () => {
  client.subscribe("presence", (err) => {
    if (!err) {
      client.publish("presence", "Hello mqtt");
    }
  });
  client.subscribe("application/1d01e7bd-9dc3-4bc2-9dd4-a42a77f75299/device/24e124445d276500/event/up", (err) => {
    // Handle subscription error if needed
  });
});

client.on("message", (topic, message) => {
  // message is Buffer
  console.log('topic:', topic);
  console.log('message:', message.toString());
  // client.end();
});

module.exports = client;
