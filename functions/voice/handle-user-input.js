exports.handler = function (context, event, callback) {

    console.log('Outside of the Flow: hello-voice')

    let userInput = event.Digits || event.SpeechResult;
    let twiml = new Twilio.twiml.VoiceResponse();
  
    if (!userInput) {
      twiml.say('Sorry something went wrong. Please call again');
      return callback(null, twiml);
    }

    // do something with the digits
    console.log('The digits were ' + userInput)

    twiml.redirect({
        method: 'POST'
    }, 'https://webhooks.twilio.com/v1/Accounts/' + context.ACCOUNT_SID + '/Flows/FW8e48233ddb0ebd096d7c1c7fa4906e1f?FlowEvent=return');

    callback(null, twiml);
}