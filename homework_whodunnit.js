const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Library',
  weapon: 'Rope'
};

const declareMurderer = function() {
  return `The murderer is ${scenario.murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

//Nothing has been changed so Miss Scarlet should be the verdict.

EPISODE 2

const murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mrs. Peacock';
}

//***Error as const can't be changed***

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

EPISODE 3

let murderer = 'Professor Plum';

const declareMurderer = function() {
  let murderer = 'Mrs. Peacock'; //updates murderer to Mrs Peacock
  return `The murderer is ${murderer}.`;
}

const firstVerdict = declareMurderer();
console.log('First Verdict: ', firstVerdict); //Mrs Peacock

const secondVerdict = `The murderer is ${murderer}.`;
console.log('Second Verdict: ', secondVerdict); //Prof Plum

EPISODE 4

let suspectOne = 'Miss Scarlet';
let suspectTwo = 'Professor Plum';
let suspectThree = 'Mrs. Peacock';

const declareAllSuspects = function() {
  let suspectThree = 'Colonel Mustard'; //changes suspect3 to Col Mustard
  return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
  //returns Ms Scarlet, Prof Plum & Col Mustard
}

const suspects = declareAllSuspects();
console.log(suspects); //Ms Scarlet, Prof Plum & Col Mustard
console.log(`Suspect three is ${suspectThree}.`);//Mrs Peacock

EPISODE 5

const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Kitchen',
  weapon: 'Candle Stick'
};

const changeWeapon = function(newWeapon) {
  scenario.weapon = newWeapon;
}

const declareWeapon = function() {
  return `The weapon is the ${scenario.weapon}.`; //returns candlestick
}

changeWeapon('Revolver'); //weapon is now revolver
const verdict = declareWeapon();
console.log(verdict); //revolver

EPISODE 6

let murderer = 'Colonel Mustard';

const changeMurderer = function() {
  murderer = 'Mr. Green'; //murderer still a let so can be changed

  const plotTwist = function() {
    murderer = 'Mrs. White'; //murderer still a let so can be changed
  }

  plotTwist();
}

const declareMurderer = function () {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict); //Mrs White

EPISODE 7

let murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mr. Green'; //murderer now const and set to Mr Green

  const plotTwist = function() {
    let murderer = 'Colonel Mustard';//No change

    const unexpectedOutcome = function() {
      murderer = 'Miss Scarlet';//No change
    }

    unexpectedOutcome();
  }

  plotTwist();
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);


#### Episode 8
const scenario = {
  murderer: 'Mrs. Peacock',
  room: 'Conservatory',
  weapon: 'Lead Pipe'
};

const changeScenario = function() {
  scenario.murderer = 'Mrs. Peacock'; //unchanged
  scenario.room = 'Dining Room'; //room updated to Dining Room

  const plotTwist = function(room) //dining room {
    if (scenario.room === room) {
      scenario.murderer = 'Colonel Mustard'; //murderer updated to Col Mustard
    }

    const unexpectedOutcome = function(murderer) //col mustard {
      if (scenario.murderer === murderer) //murderer matches {
        scenario.weapon = 'Candle Stick'; //weapon changed to candle stick
      }
    }

    unexpectedOutcome('Colonel Mustard');
  }

  plotTwist('Dining Room');
}

const declareWeapon = function() {
  return `The weapon is ${scenario.weapon}.` //candle stick
}

changeScenario();
const verdict = declareWeapon();
console.log(verdict);

#### Episode 9


let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);
