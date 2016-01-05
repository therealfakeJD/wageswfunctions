"use strict"

/*var hours = window.prompt("Hours Worked");
var rate = window.prompt("Hourly Pay");
var specot1 = (hours - 40)
var specot2 = (rate * 1.5)
var weekhours = 40
var shortw;
shortw = sweek(hours,rate);
var regular;
regular = weekpay(weekhours , rate);
var special;
special = otPay(specot1, specot2)

if (hours > 40){
	console.log("weekpay","$",regular);
	console.log("overtime","$",special);
	}
if (hours <= 40){
	console.log("shortweek","$",shortw);
}
	
function sweek(hours,rate){
	var shortweek;
	shortweek = hours * rate;
	return shortweek
}

function weekpay(weekhours, rate){
	var weekpay;
	weekpay = weekhours * rate;
	return weekpay;
}

function otPay(specot1, specot2){
	var overtime;
	overtime = (specot1* specot2);
	return overtime;
		
}*/

function weeklyPay(hours, wage){
	var weekpay;
	weekpay = hours * wage;
	return weekpay;
	
}

function overtimePay(othours, otwage){
	var overtime;
	overtime = othours * otwage;
	return overtime;
}

console.log("Weekly Pay:" + " " + "$" + weeklyPay(40, 23.43));
console.log("Overtime Pay:" + " " + "$" + overtimePay(7, 35.15))

