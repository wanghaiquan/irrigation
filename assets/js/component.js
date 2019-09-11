$(function() {
  var client = mqtt.connect('ws://192.144.190.105:8083/mqtt') // you add a ws:// url here
  client.subscribe("mqtt/light")
  client.on('message',function(topic, message){
      // $("body").toggleClass("active");
    // client.end()
  })
  $(".power").click(function() {
    if ($("body").hasClass('active')) {
      $("body").removeClass("active");
      client.publish("mqtt/light", '{ "button": "off" }')
      $(".power").text('开灯')

    }else{
        console.log( 'off')
        $(".power").text('关灯')
        client.publish("mqtt/light", '{ "button": "on" }')
        $("body").toggleClass("active");
    }
  });
});
