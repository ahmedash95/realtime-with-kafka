var io = require('socket.io').listen(8123);
var kafka = require('kafka-node'),
Consumer = kafka.Consumer,
client = new kafka.Client(),
consumer = new Consumer(
	client,
	[
		{ topic: 'test' }
	],
	{
		autoCommit: false
	}
);

consumer.on('message', function (message) {
	console.log(message)
});

io.sockets.on('connection', function (socket) {
	consumer.on('message', function (message) {
		socket.emit('news', { data: message });
	});
});

console.log("Running on port :8123");
