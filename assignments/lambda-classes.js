// CODE here for your Lambda Classes
class Person {
	constructor(props) {
		this.name = props.name;
		this.age = props.age;
		this.location = props.location;
	}

	speak() { return `Hello my name is ${this.name}, I am from ${this.location}.`; }
}

class Instructor extends Person {
	constructor(props) {
		super(props);
		this.specialty = props.specialty;
		this.favLanguage = props.favLanguage;
		this.catchPhrase = props.catchPhrase;
	}

	demo(subject) { return `Today we are learning about ${subject}.`; }
	grade(student, subject) { return `${student.name} receives a perfect score on ${subject}.`; }
}

class Student extends Person {
	constructor(props) {
		super(props);
		this.previousBackground = props.previousBackground;
		this.className = props.className;
		this.favSubjects = props.favSubjects;
	}

	listsSubjects() { return this.favSubjects.forEach( function(subject) { console.log(subject); }); }
	PRAssignment(subject) { return `${this.name} has submitted a PR for ${subject}.`; }
	sprintChallenge(subject) { return `${this.name} has begun spring challenge on ${subject}.`; }
}


class ProjectManager extends Instructor {
	constructor(props) {
		super(props);
		this.gradClassName = props.gradClassName;
		this.favInstructor = props.favInstructor;
	}

	standUp(channel) { return `${this.name} announces to ${channel} @channel standy times!`; }
	debugsCode(student, subject) { return `${this.name} debugs ${student.name}'s code on ${subject}` }
}

// MARK: -- Person Testing
const peter = new Person({name: "Peter", age: 30, location: "Brooklyn"});
const mary = new Person({name: "Mary Jane", age: 30, location: "Brooklyn"});
const jimmy = new Person({name: "James", age: 31, location: "Manhattan"});

console.log();
console.log("==== 👩‍💻testing person class👨‍💻 ====");
console.log(peter.speak());
console.log(mary.speak());
console.log(jimmy.speak());

if (typeof jimmy.standUp != 'function') {
	console.log(`${jimmy.name} isn't a instructor! He doesn't have permission to call for stand up.`);
}

// MARK: -- Instructor Testing
const lily = new Instructor({name: "Lily", age: "24", location: "London", specialty: "Docker", favLanguage: "Bash", catchPhrase: "Scrubadubba dub dub"});
const phil = new Instructor({name: "Phil", age: "38", location: "Sacramento", specialty: "Database architecture", favLanguage: "SQL", catchPhrase: "Hmmmmm, boom goes the dynamite"});
const maria = new Instructor({name: "Maria", age: "19", location: "Boston", specialty: "iOS", favLanguage: "Objective-C", catchPhrase: "Design for long term"});

console.log();
console.log("==== 👩‍🏫testing instructor class👨‍🏫 ====");
console.log(lily.speak());
console.log(lily.demo(lily.specialty));
console.log(phil.speak());
console.log(phil.demo("SCRUM"));
console.log(maria.speak());
console.log(maria.demo(maria.favLanguage));
console.log(maria.grade(peter, phil.specialty));
console.log(lily.grade({name:"Senor Don Gato"}, lily.catchPhrase));

// MARK: -- Student Testing
const rhett = new Student({name: "Rhett", age: "36", location: "Berlin", previousBackground: "Event Coordinator", className: "Web Dev 400", favSubjects: ["CSS", "HTML", "Redux"]});
const tyler = new Student({name: "Tyler", age: "50", location: "Seattle", previousBackground: "Project Manager", className: "Data Science 21", favSubjects: ["linear algebra", "logic", "data visualization"]});
const gotham = new Student({name: "Gotham", age: "18", location: "Salt Lake City", previousBackground: "Auditor", className: "iOS 31", favSubjects: ["Animation", "Interface Design", "Networking", "Core Data"]});

console.log();
console.log("==== 👨‍🎓testing student class👩‍🎓 ====");
console.log(rhett.speak() + " And I'm in " + rhett.className + "!");
console.log("Tylers's favorite subjects are:")
tyler.listsSubjects();
console.log(gotham.sprintChallenge(gotham.favSubjects[0]));
console.log(rhett.PRAssignment(rhett.favSubjects[2]))

if (typeof rhett.demo != 'function') {
	console.log(`${rhett.name} is a student not a project manager. She doesn't have permission to demo.`);
}

// MARK: -- Project Manager Testing
const marta = new ProjectManager({name: "Marta", age: "28", location: "Palos Verdes", specialty: "Software Architecture", favLanguage: "Rust", catchPhrase: "on fire", gradClassName: "DS 1", favInstructor: lily});
const britney = new ProjectManager({name: "Britney", age: "41", location: "El Segundo", specialty: "Animation Design", favLanguage: "python", catchPhrase: "Actually...", gradClassName: "Web Dev 2", favInstructor: maria});
const nathan = new ProjectManager({name: "Nathan", age: "37", location: "Perth", specialty: "Quality Assurance", favLanguage: "Ruby", catchPhrase: "Refine, refine, refine, and then refine some more!", gradClassName: "iOS 12", favInstructor: phil});


console.log();
console.log("==== 👷‍♀️testing project manager class👷‍♂️ ====");

console.log(marta.speak());
console.log(marta.standUp(marta.gradClassName));
console.log(`${marta.favInstructor.name} from ${marta.favInstructor.location} is '${marta.catchPhrase}!' ${marta.favInstructor.name} says '${marta.favInstructor.catchPhrase}'`);
console.log(britney.speak());
console.log(britney.debugsCode(gotham, gotham.favSubjects[3]));
console.log(nathan.speak());
if (nathan.sprintChallenge != 'function') {
	console.log(`${nathan.name} doesn't have permission to do a sprint challenge, he isn't a student. ${nathan.name} is a project manager for ${nathan.gradClassName}, which is weird because his favorite language is ${nathan.favLanguage}.`);
}
console.log("fin!🍻🍻🍻")