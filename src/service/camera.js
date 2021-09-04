var bridge = new WebOSServiceBridge();

bridge.call("luna://com.webos.service.", '{"id":"APP_ID"}');

var url = 'luna://com.webos.service.db/putKind';
var params = JSON.stringify({
    "id":"test.db-api:1",
    "owner":"APP_ID"
});

bridge.call(url, params);