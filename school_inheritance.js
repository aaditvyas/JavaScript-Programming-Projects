class School {
  constructor(name, level, numberOfStudents){
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }
  
  // Getter methods
  get name(){
    return this._name;
  }
  get level(){
    return this._level;
  }
  get numberOfStudents(){
    return this._numberOfStudents
  }
  
  // Setter Methods
  set numberOfStudents(numStudents){
    if(typeof numStudents === "number"){
      this._numberOfStudents = numStudents;
    } else {
      console.log("Invalid input: numberOfStudents must be set to a number.");
    }
  }
  
  // Functional Methods
  quickFacts(){
    console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`);
  }
  
  // Static Methods
  static pickSubstituteTeacher(substituteTeachers){
    let teacherIndex = Math.floor(Math.random() * substituteTeachers.length);
    return substituteTeachers[teacherIndex];
  }
}

// Child class that extends School
class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickupPolicy){
    super(name, "primary", numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }
  
  // Getter Methods
  get pickupPolicy(){
    return this._pickupPolicy;
  }
}

// Child class that extends School
class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeams){
    super(name, "high", numberOfStudents);
    this._sportsTeams = sportsTeams;
  }
  
  // Getter Methods
  get sportsTeams(){
    return this._sportsTeams;
  }
}

// Testing classes
// Primary School
const lorraineHansbury = new PrimarySchool("Lorraine Hansbury", 514, "Students must be picked up by a parent, guardian, or a family member over the age of 13.");
lorraineHansbury.quickFacts();
console.log(School.pickSubstituteTeacher(["Jamal Crawford", "Lou Williams", "J. R. Smith", "James Harden", "Jason Terry", "Many Ginobli"]));

// High School
const alSmith = new HighSchool("Al E. Smith", 415, ["Baseball", "Basketball", "Volleyball", "Track and Field"]);
console.log(alSmith.sportsTeams);
