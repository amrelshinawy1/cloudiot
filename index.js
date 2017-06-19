  const http = require('http');
  const postdata = function (data) {
    var options = {
      host: localhost,
      path: '/api' + '/streams/' + "device name here" + '@' + "owner name here",
      port: 5000,
      method: 'POST',
      headers: {
        'content-type': 'application/javascript',
        'authorization': "token here"
      }
    };
    var req = http.request(options, function(res) {
    var msg = '';

    res.setEncoding('utf8');
    res.on('data', function(chunk) {
      msg += chunk;
    });
    res.on('end', function() {
      console.log(JSON.parse(msg));
    });
   });

    req.write(data);
    req.end();
};
