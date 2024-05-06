//your code here



setInterval(()=>{

	const now=new Date();
	
	const hour=now.getHours()%12;
	const min=now.getMinutes()
    const sec=now.getSeconds()

	const hourHand=document.querySelector('.hour-hand')
const minHand=document.querySelector('.min-hand')
const secondHand=document.querySelector('.second-hand')


	const hourAngle=(hour*30)+(0.5*min); // Each hour is 30 degrees, and each minute is 0.5 degrees
    const minAngle=(minute*6)+(0.1*second);//Each minute is 6 degrees, and each second is 0.1 degrees/
	 const secAngle=sec*6;//Each second is 6 degrees

	hourHand.style.transform=`rotate(${hourAngle}deg)`

	minHand.style.transform=`rotate(${minAngle}deg)`

	secondHand.style.transform=`rotate(${secAngle}deg)`
},1000)