let raceNumber = Math.floor(Math.random() * 1000);

let isRegistered = true;

let runnerAge = 16;

if (runnerAge > 18 && raceNumber){
    raceNumber += 1000;
}

if(runnerAge > 18 && isRegistered){
  console.log(`Runner number ${raceNumber}, your race will start at 9:30 am.`);
} else if(runnerAge > 18 && !isRegistered){
  console.log(`Runner number ${raceNumber}, your race will start at 11:00 am.`);
} else if(runnerAge < 18){
  console.log(`Runner number ${raceNumber}, Youth registrants run at 12:30 pm.`)
} else{
  console.log(`Runner number ${raceNumber}, go see the registration desk.`)
}