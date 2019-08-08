/**
 * WxController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const sha1 = require('sha1');
module.exports = {

    // 验证服务器token
    token : function( req, res ){
      const token = '79f5845cf694d73b632d3134d4902bed';
      const signature = req.query.signature;
      const nonce = req.query.nonce;
      const timestamp = req.query.timestamp;
      const echostr = req.query.echostr;
      let str = [token, timestamp, nonce].sort().join('');
      let sha = sha1(str);
      console.log(signature,sha, signature);
      if(sha == signature){
        console.log( echostr )
        return res.status(200).send(echostr);
      } else {
        console.log(  'Failed' )
        return res.status(404).send('');
      }
    }

};
