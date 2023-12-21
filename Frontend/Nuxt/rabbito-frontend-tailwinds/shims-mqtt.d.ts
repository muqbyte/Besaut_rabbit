// declare module 'mqtt/dist/mqtt.min' {
//     import MQTT from mqtt
//     export = MQTT
// }
declare module 'mqtt/dist/mqtt.min' {
    import * as MQTT from 'mqtt'; // Import 'mqtt' with a string literal
    export = MQTT;
}
