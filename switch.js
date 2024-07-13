//switch case without break and default
let day = "monday";

switch (day) {
    case "monday": console.log("6 am");
    case "tuesday": console.log("7 am");
    case "wednesday": console.log("7 am");
    case "thursday": console.log("7 am");
    case "friday": console.log("7 am");
    case "saturday": console.log("8 am");
    case "sunday": console.log("8 am");
}

//switch case without break and default
day = "sunday";

switch (day) {
    case "monday": console.log(" 7 am ");

    case "tueday": console.log(" 8 am ");

    case "wednesday": console.log(" 8 am ");

    case "thursday": console.log(" 8 am ");

    case "friday": console.log(" 8 am ");

    case "saturday": console.log(" 10 am ");

    case "sunday": console.log(" 10 am ");
}


//switch case witht break and without default
day = "friday";

switch (day) {
    case "monday":
        console.log(" 7 am ");
        break;

    case "tueday":
        console.log(" 8 am ");
        break;

    case "wednesday":
        console.log(" 8 am ");
        break;

    case "thursday":
        console.log(" 8 am ");
        break;

    case "friday":
        console.log(" in friday i wake up at 12 am ");
        break;

    case "saturday":
        console.log(" 10 am ");
        break;

    case "sunday":
        console.log(" 10 am ");
        break;
}

//switch case witht break and  default
day = "error";

switch (day) {
    case "monday":
        console.log(" 7 am ");
        break;

    case "tueday":
        console.log(" 8 am ");
        break;

    case "wednesday":
        console.log(" 8 am ");
        break;

    case "thursday":
        console.log(" 8 am ");
        break;

    case "friday":
        console.log(" in friday i wake up at 12 am ");
        break;

    case "saturday":
        console.log(" 10 am ");
        break;

    case "sunday":
        console.log(" 10 am ");
        break;

    default: console.log("today is holiday");
}

//in switch case i can also group the cases with same value
day = "wednesday";
switch (day) {
    case "monday":
        console.log(" 7 am");
        break;

    case "tuesday":
    case "wednesday":
    case "thursday":
    case "friday": 
                console.log("all wake up at 8 am ");
                break;

    case "saturday":
        console.log("today is saturday");
        break;
    case "sunday":
        console.log(" today is sunday");
        break;

    default: console.log("holiday");

}