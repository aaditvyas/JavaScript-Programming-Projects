// Determine how many hours were slept on a given night
const getSleepHours = day => {
  switch (day){
    case "monday":
      return 8;
      break;
    case "tuesday":
      return 7;
      break;
    case "wednesday":
      return 8;
      break;
    case "thursday":
      return 5;
      break;
    case "friday":
      return 8;
      break;
    case "saturday":
      return 8;
      break;
    case "sunday":
      return 6;
      break;
  }
};

// Calculate actual amount of sleep over a week
const getActualSleepHours = () => {
  return getSleepHours("monday") +
    getSleepHours("tuesday") + 
    getSleepHours("wednesday") + 
    getSleepHours("thursday") + 
    getSleepHours("friday") + 
    getSleepHours("saturday") +
    getSleepHours("sunday");
};

// Calculate desired hours slept over a week
const getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours * 7;
}

// Calculate sleep debt based on prescribed values
const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();
  if(actualSleepHours === idealSleepHours){
		console.log("User got the perfect amount of sleep.");
  } else if(actualSleepHours > idealSleepHours){
    let hoursNeeded = actualSleepHours - idealSleepHours;
    console.log(`User got ${hoursNeeded} hours more sleep more than needed.`);
  } else {
    let hoursNeeded = idealSleepHours - actualSleepHours;
    console.log(`User should get ${hoursNeeded} more hours of rest.`);
  }
}

// Output
calculateSleepDebt();