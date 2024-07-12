
const mysym = Symbol("key1")

const juser = {
    name :"jesal",
    [mysym] : "mykey1",
    age : 19 ,
    email : "jesalmer@google.com"
}

// console.log(juser["name"]);
// console.log(juser["mysym"]);

juser.email = "merjesalmicrosoft.com"
// console.log(juser);
// Object.freeze(juser)
juser.email = "jackaddition11@google.com"
// console.log(juser);

juser.greeting = function(){
    // console.log("hello javascript user");
}
// console.log(juser.greeting());

const obj1 = { 1:"a",2:"b"}
const obj2 = { 3:"a",4:"b"}

// const obj3 = {obj1,obj2}

const obj3 = Object.assign({},obj1,obj2)
// console.log(obj3);

const course = {
    name : "jesal",
    courseInstructor : "jesalmer"
}
console.log(course.courseInstructor);
const {courseInstructor : Instructor} = course
console.log(Instructor);
