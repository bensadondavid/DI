// Instructions

// In this exercise, you will use object oriented programming concepts to define and use a custom object in JavaScript.

// Create a class named Video. The class should be constructed with the following parameters:
// title (a string)
// uploader (a string, the person who uploaded it)
// time (a number, the duration of the video - in seconds)
// Create a method called watch() which displays a string as follows:
// “uploader parameter watched all time parameter of title parameter!”
// Instantiate a new Video instance and call the watch() method.
// Instantiate a second Video instance with different values.
// Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)
// Think of the best data structure to save this information within the array.
// Bonus: Loop through the array to instantiate those instances.


class Video {
    constructor(title, uploader, time){
        this.title = title; 
        this.uploader = uploader;
        this.time = time
    }
    watch(){
       return `${this.uploader} watched all ${this.time} of ${this.title}`
    }
}

const newInst = new Video('Histitle', 'Hisname', 10)

console.log(newInst.watch())

const newInst2 = new Video('Hertitle', 'Hername', 8)

console.log(newInst2.watch())

let arr = [
    new Video ('Video1', 'uploader 1', 1),
    new Video ('Video2', 'uploader 2', 2),
    new Video ('Video3', 'uploader 3', 3),
    new Video ('Video4', 'uploader 4', 4),
    new Video ('Video5', 'uploader 5', 5)
]

for(i = 0; i < arr.length ; i++){
    let inst 
    inst = arr[i]
    console.log(inst)
}
