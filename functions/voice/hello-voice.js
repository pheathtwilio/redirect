exports.handler = function(context, event, callback) {

  console.log('Outside of the Flow: hello-voice')

  let twiml = new Twilio.twiml.VoiceResponse();

  const gather = twiml.gather({
    numDigits: 4,
    action: 'handle-user-input',
    input: 'dtmf',
  })

  gather.say({
    voice: 'Alice',
    language: 'en-US'
  },'Please enter 4 digits');

  twiml.say('Sorry we couldn\'t understand you');
  twiml.redirect();
  callback(null, twiml);


};
