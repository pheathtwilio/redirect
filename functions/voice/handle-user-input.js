exports.handler = function (context, event, callback) {

    console.log('Outside of the Flow: hello-voice')

    let userInput = event.Digits || event.SpeechResult;
    let twiml = new Twilio.twiml.VoiceResponse();

    const webhookURL = 'https://webhooks.twilio.com/v1/Accounts/'
    const studioFlow = '/Flows/FW8e48233ddb0ebd096d7c1c7fa4906e1f?FlowEvent=return'
  
    if (!userInput) {
      twiml.say('Sorry something went wrong. Please call again');
      return callback(null, twiml);
    }

    // do something with the digits
    console.log('The digits were ' + userInput)

    twiml.redirect({
        method: 'POST'
    }, webhookURL + context.ACCOUNT_SID + studioFlow);

    callback(null, twiml);
}