/**
 * WxController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    // 验证服务器token
    token : function( req, res ){
        console.log( req )
        res.ok();
    }

};
