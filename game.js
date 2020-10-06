var num = Number(prompt("Guess a number"));

while(num!=10)
{
	var num = Number(prompt("Guess a number"));
	if(num < 10)
		alert("Oops! Number is too low");
	if(num > 10)
		alert("Oops! Number is too high");
	if(num < 0)
		alert("Enter a no greater than 0");
}
if(num === 10)
	alert("Congrats! You guessed it right");

