let num=parseInt(prompt("Enter any number"))
switch (true) {
    case (num>0):
        console.log(num+" is positive");
        break;
    case (num<0):
        console.log(num+" is negative");
        break;
    case (num==0):
        console.log(num+" is zero");
        break;

    default:
        console.log("enter valid input:");
        break;
}