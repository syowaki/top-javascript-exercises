const findTheOldest = function(people) {
  //scoping variables
  let oldestPerson = [];
  let oldestAge = 0;

  //looping through each person
  for(const person of people) {
    //finding the persons age
    let personsAge;
    if(person.yearOfDeath === undefined) {
      let thisYear = new Date().getFullYear()
      personsAge = thisYear - person.yearOfBirth;
    }else {
      personsAge = person.yearOfDeath - person.yearOfBirth;
    }

    //if the current persons age is greater than the current oldest age
    //then reset the oldestPerson array and put the new person into index 0 of oldestPerson array
    if(personsAge > oldestAge) {
      oldestAge = personsAge
      oldestPerson.length = 0;
      oldestPerson.push(person)
    }
  }
  //returning the object of the oldest person
  return oldestPerson[0];
};

// Do not edit below this line
module.exports = findTheOldest;
