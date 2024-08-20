function onEdit(e) {

  var sheet = e.source.getActiveSheet();
  var range = e.range;
  var cell = range.getA1Notation();
  var sheetUrl = e.source.getUrl()

  var configSheet = e.source.getSheetByName("Config");
  var googleUrl = (configSheet.getRange("B2").getValue())
  var slackUrl = (configSheet.getRange("B3").getValue())






function slackWebhook(message, url) {
    var options = {
    "method" : "post",
    "contentType": "application/json",
    "payload" : JSON.stringify({"text": message})
  };
  const response = UrlFetchApp.fetch(url, options);
  Logger.log(response)
}
function googleWebhook(message, url) {
  const options = {
    "method": "post",
    "headers": {"Content-Type": "application/json; charset=UTF-8"},
    "payload": JSON.stringify({"text": message})
  };
  const response = UrlFetchApp.fetch(url, options);
  Logger.log(response)
}

function sendMessage(triggerSheet, trigger, message, url) {
  let messageSent = false
  if (sheet.getName() === triggerSheet && cell === trigger) {
    if (range.getValue() === true) {
      if (configSheet.getRange("B1").getValue() === "googlechat"){
        if (!messageSent) {
          googleWebhook(message, url)
          messageSent = true
        }
      } else if (configSheet.getRange("B1").getValue() === "slack") {
        if (!messageSent) {
          slackWebhook(message, url)
          messageSent = true
        }
      }
    }
  }
}

sendMessage("Triggers", "A1", "Test message", slackUrl)


}