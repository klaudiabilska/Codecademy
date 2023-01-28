const getSleepHours = day => {
  day.toLowerCase();

  switch (day) {
    case 'monday':
      return 8;
    case 'tuesday':
      return 6;
    case 'wednesday':
      return 7;
    case 'thursday':
      return 9;
    case 'friday':
      return 5;
    case 'saturday':
      return 10;
    case 'sunday':
      return 11;
    }
};


const getActualSleepHours = () => {
getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
}

const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7;
}

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
    console.log(`You have perfect amount ${actualSleepHours} of sleep`);
  } else if (actualSleepHours > idealSleepHours) {
    console.log(`You slept ${actualSleepHours - idealSleepHours} more hours. You have got more sleep then needed`);
  } else {
    console.log(`You slept ${idealSleepHours - actualSleepHours} less hours. You should get some rest`); 
    }
}

console.log(calculateSleepDebt());