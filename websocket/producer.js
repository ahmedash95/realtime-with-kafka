/**
 * Get a random integer between `min` and `max`.
 *
 * @param {number} min - min number
 * @param {number} max - max number
 * @return {number} a random integer
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


var kafka = require('kafka-node'),
client = new kafka.Client(),
Producer = kafka.Producer,
producer = new Producer(client);

keys = ['click','impression','impression','impression','pageview','pageview','pageview','pageview','pageview','pageview']
payloads = [];
let i = 0
while (i < 3000) {
    payloads.push({ topic: 'test', messages: JSON.stringify({type:"analytics",action: keys[getRandomInt(0,9)] }), partition: 0 })
    i++
}
producer.on('ready', function () {
    producer.send(payloads, function (err, data) {
        console.log(data);
    });
});