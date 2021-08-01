
const findWordColor = (sentimentScore) => {
  const pureRed = 'F80000';
  const pureWhite = 'FFFFFF';
  const pureGreen = '07E000';
  const numSteps = 100;
  
  var neutral = {
  'Hex'   : pureWhite,
    'R'     : parseInt(pureWhite.slice(0,2), 16),
    'G'     : parseInt(pureWhite.slice(2,4), 16),
    'B'     : parseInt(pureWhite.slice(4,6), 16)
  }
  var positive = {
  'Hex'   : pureGreen,
    'R'     : parseInt(pureGreen.slice(0,2), 16),
    'G'     : parseInt(pureGreen.slice(2,4), 16),
    'B'     : parseInt(pureGreen.slice(4,6), 16)
  }
  var negative = {
  'Hex'   : pureRed,
    'R'     : parseInt(pureRed.slice(0,2), 16),
    'G'     : parseInt(pureRed.slice(2,4), 16),
    'B'     : parseInt(pureRed.slice(4,6), 16)
  }
  var positiveDiff = {
    'R': positive['R'] - neutral['R'],
    'G': positive['G'] - neutral['G'],
    'B': positive['B'] - neutral['B']
  }
  var negativeDiff = {
    'R': negative['R'] - neutral['R'],
    'G': negative['G'] - neutral['G'],
    'B': negative['B'] - neutral['B']
  }
  var r, g, b;
  if(sentimentScore > 0){
    r = neutral['R'] + ((positiveDiff['R'] / numSteps) * (numSteps * sentimentScore));
    g = neutral['G'] + ((positiveDiff['G'] / numSteps) * (numSteps * sentimentScore));
    b = neutral['B'] + ((positiveDiff['B'] / numSteps) * (numSteps * sentimentScore));
  } else {
    r = neutral['R'] + ((negativeDiff['R'] / numSteps) * (numSteps * -sentimentScore));
    g = neutral['G'] + ((negativeDiff['G'] / numSteps) * (numSteps * -sentimentScore));
    b = neutral['B'] + ((negativeDiff['B'] / numSteps) * (numSteps * -sentimentScore));
  }
  console.log("HEX COLOR", '#' + String(Math.round(r).toString(16)).padStart(2, '0') + 
  String(Math.round(g).toString(16)).padStart(2, '0') + 
  String(Math.round(b).toString(16)).padStart(2, '0'))
  return '#' + String(Math.round(r).toString(16)).padStart(2, '0') + 
                String(Math.round(g).toString(16)).padStart(2, '0') + 
                String(Math.round(b).toString(16)).padStart(2, '0');
}  

export default findWordColor;