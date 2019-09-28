$(function() {
  var options = {
        connectTimeout: 4000, // 超时时间
        // 认证信息
        clientId: 'smart-websocket'
  }
  var client = mqtt.connect('ws://192.144.190.105:8083/mqtt') // you add a ws:// url here




  client.on('connect', (e) => {
      console.log('成功连接服务器')

      // 订阅一个主题
      client.subscribe('OUT/DEVICE/cupdir/0009/smart', { qos: 1 }, (error) => {
          if (!error) {
              console.log('订阅成功')
          }
      })
  })

  client.on('message',function(topic, message){
    console.log(message.toString())
      // $("body").toggleClass("active");
    // client.end()
  })
  $(".switch-button01 ").click(function() {
    if( $(".switch-button01 input").is(":checked") == false){
      client.publish("OUT/DEVICE/cupdir/0009/smart", '{ "button": "01" ,"cmd":"0" }')
    }else{
      client.publish("OUT/DEVICE/cupdir/0009/smart", '{ "button": "01" ,"cmd":"1" }')
    }
  })

  $(".switch-button02 ").click(function() {
    if( $(".switch-button02 input").is(":checked") == false ){
      client.publish("OUT/DEVICE/cupdir/0009/smart", '{ "button": "02" ,"cmd":"0" }')

    }else{
      client.publish("OUT/DEVICE/cupdir/0009/smart", '{ "button": "02" ,"cmd":"1" }')
    }
  })
});
