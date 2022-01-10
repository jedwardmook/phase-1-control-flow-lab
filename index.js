function scuberGreetingForFeet(someNumber){
  // Write your code here!
  if (someNumber < 401){
  return 'This one is on me!'
  } else if (someNumber < 2500){
    return 'I will gladly take your thirty bucks.'
  } else {
    return 'No can do.'
  }
}

function ternaryCheckCity(checkCity){
  // Write your code here!
  return checkCity === 'NYC' ? 'Ok, sounds good.' : 'No go.'
}

function switchOnCharmFromTip(amount){
  // Write your code here!
  switch(amount){
    case 'generous':
      return 'Thank you so much.'
    case 'not as generous' :
      return 'Thank you.'
    default :
      return "Bye."
  }
}