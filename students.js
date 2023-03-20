const studenNameList = [];
const counterUnderAge = [];
const counterOverAge = [];
const studentSize = 25;

for (let index = 0; index < studentSize; index+=1) { //I create a for loop to execute the amount to repeat
    //create two variables, one asks for the name and the other for the age
    let studentName = prompt("Enter the student's name: ");
    let studentAge = parseInt(prompt("Enter the age of student: "));
    if (studentAge < 18) { //Valid if the age is greater than 18 to then make a push in its respective array
        studenNameList.push(studentName)
        counterUnderAge.push(studentAge)
    }else{
        studenNameList.push(studentName)
        counterOverAge.push(studentAge)
    }
    //finally print the values I want to see
    console.log(`Total students ${studenNameList}`);
    console.log(`Underage students ${counterUnderAge}`);
    console.log(`Older students ${counterOverAge}`);
}