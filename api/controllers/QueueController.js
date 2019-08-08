/**
 * QueueController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const redis = require('redis')
redis.add_command('RPUSH')
redis.add_command('BRPOP')
let client = redis.createClient({
  host: '192.168.1.4'
});

module.exports = {
  put: function(req, res) {
    client.send_command('RPUSH', ['button', '1'], function(redis_err, redis_res) {
      return res.json({
        status: redis_res
      });
    })
  },
  get: function(req, res) {

  }
};
