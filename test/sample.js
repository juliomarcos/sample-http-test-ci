var chakram = require('chakram'),
    expect = chakram.expect

const HOST = "http://localhost:3000";

describe('Sample CI regression test', function() {
  
  it('Should get a hello world', function () {
    var response = chakram.get(`${HOST}/`);
    expect(response).to.comprise.of.json({
      "motd" : "Hello World!"
    })
    return chakram.wait();
  })
  
})