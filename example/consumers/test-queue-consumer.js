'use strict';

const redisSMQ = require('redis-smq');
const Consumer = redisSMQ.Consumer;

class TestQueueConsumer extends Consumer {

    consume(message, cb) {
        //console.log(`Got message to consume: `, JSON.stringify(message));

        //throw new Error('TEST!');

        //cb(new Error('TEST!'));

        //const timeout = parseInt(Math.random() * 100);
        //setTimeout(() => {
        //    cb();
        //}, timeout);

        cb();
    }
}

TestQueueConsumer.queueName = 'test_queue';

module.exports = TestQueueConsumer;