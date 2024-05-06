//your code here

setInterval(()=>{

	

	const now=new Date();

	console.log(now)
	
	const hour=now.getHours()%12;
	console.log(hour)
	const min=now.getMinutes()
	console.log(min)
    const sec=now.getSeconds()

	const hourHand=document.querySelector('.hour-hand')
const minHand=document.querySelector('.min-hand')
const secondHand=document.querySelector('.second-hand')

	 const hourAngle = (hour * 30) + (0.5 * min)+90; // Each hour is 30 degrees, and each minute is 0.5 degrees
	console.log(hourAngle)
  const minuteAngle = (min * 6) + (0.1 * sec)+90; // Each minute is 6 degrees, and each second is 0.1 degrees
  const secAngle = sec * 6+90;



	


	
	hourHand.style.transform=`rotate(${hourAngle}deg)`

	minHand.style.transform=`rotate(${minuteAngle}deg)`

	secondHand.style.transform=`rotate(${secAngle}deg)`
},1000)




