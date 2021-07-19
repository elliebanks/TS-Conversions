"use strict";
var myName = "Ellie Banks";
console.log("Name: " + myName.toUpperCase());
console.log("Career: Full Stack Engineer");
console.log("Description: I live in Birmingham. I like to make mixed-media art and eat snacks.");
console.log("My Interests:");
console.log("*Art");
console.log("*Playing with my dog, Blu");
console.log("*Psychology");
console.log("*Trashy reality tv shows");
console.log("*Reading good books");
console.log("My Previous Experience:");
function displayPosition(companyName, jobTitle, jobDescription) {
    console.log(companyName + jobTitle + jobDescription);
}
displayPosition("*Saws Juke Joint, ", "Server, ", "-I sold overpriced BBQ to rich people");
displayPosition("*Birmingham Breadworks, ", "Baker/Cashier, ", "-Made pizzas, avocado toast, and bread for very rude customers");
displayPosition("*Ambiance, ", "Sales Associate, ", "-I told people they looked good in clothes so they would buy them");
console.log("My Skills:");
function displaySkill(skillName, cool) {
    if (cool == true) {
        console.log("* BAM:" + skillName);
    }
    else {
        console.log("*" + skillName);
    }
}
displaySkill(" french baguette rolling", true);
displaySkill(" punch needling", false);
displaySkill(" drawing", false);
displaySkill(" moonwalking", true);
displaySkill(" rollerskating", false);
displaySkill(" whiteclaw drinking", false);
displaySkill(" play Old Town Road on the recorder", true);
