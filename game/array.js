const array8 = [['0px', '0px'],['0px', '60px'],['0px', '120px'],['60px', '0px'],['60px', '60px'],['60px', '120px'],['120px', '0px'],['120px', '60px']];
const array8Win = [['0px', '60px'],['0px', '120px'],['60px', '0px'],['60px', '60px'],['60px', '1200px'],['120px', '0px'],['120px', '60px'],['120px', '120px']];

const array15 = [['0px', '0px'],['0px', '60px'],['0px', '120px'],['0px', '180px'],['60px', '0px'],['60px', '60px'],['60px', '120px'],['60px', '180px'],['120px', '0px'],['120px', '60px'],['120px', '120px'],['120px', '180px'],['180px', '0px'],['180px', '60px'],['180px', '120px']];

const array24 = [['0px', '0px'],['0px', '60px'],['0px', '120px'],['0px', '180px'],['0px', '240px'],['60px', '0px'],['60px', '60px'],['60px', '120px'],['60px', '180px'],['60px', '240px'],['120px', '0px'],['120px', '60px'],['120px', '120px'],['120px', '180px'],['120px', '240px'],['180px', '0px'],['180px', '60px'],['180px', '120px'],['180px', '180px'],['180px', '240px'],['240px', '0px'],['240px', '60px'],['240px', '120px'],['240px', '180px']];

const array35 = [['0px', '0px'],['0px', '60px'],['0px', '120px'],['0px', '180px'],['0px', '240px'],['0px', '300px'],['60px', '0px'],['60px', '60px'],['60px', '120px'],['60px', '180px'],['60px', '240px'],['60px', '300px'],['120px', '0px'],['120px', '60px'],['120px', '120px'],['120px', '180px'],['120px', '240px'],['120px', '300px'],['180px', '0px'],['180px', '60px'],['180px', '120px'],['180px', '180px'],['180px', '240px'],['180px', '300px'],['240px', '0px'],['240px', '60px'],['240px', '120px'],['240px', '180px'],['240px', '240px'],['240px', '300px'],['300px', '0px'],['300px', '60px'],['300px', '120px'],['300px', '180px'],['300px', '240px']];

const array48 = [['0px', '0px'],['0px', '60px'],['0px', '120px'],['0px', '180px'],['0px', '240px'],['0px', '300px'],['0px', '360px'],['60px', '0px'],['60px', '60px'],['60px', '120px'],['60px', '180px'],['60px', '240px'],['60px', '300px'],['60px', '360px'],['120px', '0px'],['120px', '60px'],['120px', '120px'],['120px', '180px'],['120px', '240px'],['120px', '300px'],['120px', '360px'],['180px', '0px'],['180px', '60px'],['180px', '120px'],['180px', '180px'],['180px', '240px'],['180px', '300px'],['180px', '360px'],['240px', '0px'],['240px', '60px'],['240px', '120px'],['240px', '180px'],['240px', '240px'],['240px', '300px'],['240px', '360px'],['300px', '0px'],['300px', '60px'],['300px', '120px'],['300px', '180px'],['300px', '240px'],['300px', '300px'],['300px', '360px'],['360px', '0px'],['360px', '60px'],['360px', '120px'],['360px', '180px'],['360px', '240px'],['360px', '300px']];

const array63 = [['0px', '0px'],['0px', '60px'],['0px', '120px'],['0px', '180px'],['0px', '240px'],['0px', '300px'],['0px', '360px'],['0px', '420px'],['60px', '0px'],['60px', '60px'],['60px', '120px'],['60px', '180px'],['60px', '240px'],['60px', '300px'],['60px', '360px'],['60px', '420px'],['120px', '0px'],['120px', '60px'],['120px', '120px'],['120px', '180px'],['120px', '240px'],['120px', '300px'],['120px', '360px'],['120px', '420px'],['180px', '0px'],['180px', '60px'],['180px', '120px'],['180px', '180px'],['180px', '240px'],['180px', '300px'],['180px', '360px'],['180px', '420px'],['240px', '0px'],['240px', '60px'],['240px', '120px'],['240px', '180px'],['240px', '240px'],['240px', '300px'],['240px', '360px'],['240px', '420px'],['300px', '0px'],['300px', '60px'],['300px', '120px'],['300px', '180px'],['300px', '240px'],['300px', '300px'],['300px', '360px'],['300px', '420px'],['360px', '0px'],['360px', '60px'],['360px', '120px'],['360px', '180px'],['360px', '240px'],['360px', '300px'],['360px', '360px'],['360px', '420px'],['420px', '0px'],['420px', '60px'],['420px', '120px'],['420px', '180px'],['420px', '240px'],['420px', '300px'],['420px', '360px']];

/* ------------------------------------------------------------------------------------------- */

const sizes = document.querySelector('.sizes');
const frameSize = document.querySelector('.frameSize span');
const areaPlay = document.querySelector('.areaPlay');
const shuffle = document.getElementById('shuffle');
const stop = document.getElementById('stop');
const moves = document.querySelector('.moves span');
const timeShow = document.querySelector('.time span');
const wrapArea = document.querySelector('.wrapperAreaPlay');
const shadow = document.querySelector('.shadow');
const result = document.querySelector('.result')




let countCell = '9';
frameSize.innerHTML = '3x3';
createField(60)
let arrayAfterSize = areaPlay.querySelectorAll('.cell');

sizes.addEventListener('click', function(event){
	let target = event.target;
	if(target.tagName === 'SPAN'){
		shadow.classList.remove('active');
		frameSize.innerHTML = target.innerHTML;
		countCell = target.dataset.number;
		emptyCellTop = ((Math.sqrt(Number(countCell)) -1) * 60) + 'px';
		emptyCellLeft = ((Math.sqrt(Number(countCell)) - 1) * 60) + 'px';
		cleanAreaPlay();
		createField(60)
		countMoves = 0;
		moves.innerHTML = countMoves;
		arrayAfterSize = areaPlay.querySelectorAll('.cell')
		deleteAudio();
		cleanShowResult();
	}	
})

function createField(oneCellSize){
	let size = Math.sqrt(Number(countCell)); 
	console.log(size)

	areaPlay.style.width = `${size * oneCellSize}px`;
	areaPlay.style.height = `${size * oneCellSize}px`;
  
	for (let i = 1; i <= Number(countCell) -1/* count - 1 */; i++) {
	  let cell = document.createElement('div');
	  cell.className = 'cell';
	  cell.innerHTML = `<p>${i}</p>`;
  
	  const leftCell = (i - 1) % size;
	  const topCell = ((i - leftCell) - 1) / size;

  
  
	  cell.style.top = `${topCell * oneCellSize}px`;
	  cell.style.left = `${leftCell * oneCellSize}px`;
	  cell.style.width = `${oneCellSize}px`;
      cell.style.height = `${oneCellSize}px`;
  
	  areaPlay.append(cell);	
	}
  };

function cleanAreaPlay(){
	let items = document.querySelectorAll('.cell');
	items.forEach(item =>{
		item.remove();
	})
	
} 

/* ----------------shuffle-------------shuffle-------------------- */

function shuffleArea(){
	let topLeftArray = [];

	let size = Math.sqrt(Number(countCell));
	if(size === 3){
		for(let i = 0; i < array8.length; i++){
			let topChild = array8[i][0];
			let leftChild = array8[i][1];	
			topLeftArray.push([topChild, leftChild]);
		}
	}if(size === 4){
		for(let i = 0; i < array15.length; i++){
			let topChild = array15[i][0];
			let leftChild = array15[i][1];	
			topLeftArray.push([topChild, leftChild]);
		}
	}
	if(size === 5){
		for(let i = 0; i < array24.length; i++){
			let topChild = array24[i][0];
			let leftChild = array24[i][1];	
			topLeftArray.push([topChild, leftChild]);
		}
	}
	if(size === 6){
		for(let i = 0; i < array35.length; i++){
			let topChild = array35[i][0];
			let leftChild = array35[i][1];	
			topLeftArray.push([topChild, leftChild]);
		}
	}
	if(size === 7){
		for(let i = 0; i < array48.length; i++){
			let topChild = array48[i][0];
			let leftChild = array48[i][1];	
			topLeftArray.push([topChild, leftChild]);
		}
	}
	if(size === 8){
		for(let i = 0; i < array63.length; i++){
			let topChild = array63[i][0];
			let leftChild = array63[i][1];	
			topLeftArray.push([topChild, leftChild]);
		}
	}

	for (let a = topLeftArray.length - 1; a > 0; a--) {
		let b = Math.floor(Math.random() * a);
		let temp = topLeftArray[a];
		topLeftArray[a] = topLeftArray[b];
		topLeftArray[b] = temp;
	}

	for(let i = 0; i < areaPlay.querySelectorAll('.cell').length; i++){
		areaPlay.querySelectorAll('.cell')[i].style.top = topLeftArray[i][0]
		areaPlay.querySelectorAll('.cell')[i].style.left = topLeftArray[i][1] 		
	}
	emptyCellTop = ((Math.sqrt(Number(countCell)) - 1) * 60) + 'px';
	emptyCellLeft = ((Math.sqrt(Number(countCell)) - 1) * 60) + 'px';
	shift(60);
}

shuffle.addEventListener('click', () => {
	console.log('shuffle'); 
	shadow.classList.remove('active');	
	shuffleArea()
	/* shift(); */
	countSec = 0;
	countMoves = 0;
	moves.innerHTML = countMoves;
/* 	window.timerID = 0  */
	stopTime2()
	startTime2();
	deleteAudio();
})

/* -----------shift---------shift-------------shift---------- */

let countMoves = 0; 
/* let emptyCellTop = '120px';
let emptyCellLeft = '120px'; */
let emptyCellTop = ((Math.sqrt(Number(countCell)) - 1) * 60) + 'px';
let emptyCellLeft = ((Math.sqrt(Number(countCell)) - 1) * 60) + 'px';
function shift(oneCellSize){
	areaPlay.addEventListener('click', function(event){
	target = event.target.closest('div');
	/* console.log(target.className) */
	if(target.className !== 'cell')return;
		
	if(target.className === 'cell'){
		let topTarget = target.style.top;
		let leftTarget = target.style.left;

		const differenceLeft = (Math.abs((Number(emptyCellLeft.replace(/[px]/g, ''))) - (Number(leftTarget.replace(/[px]/g, ''))))) / oneCellSize;
  		const differenceTop = (Math.abs((Number(emptyCellTop.replace(/[px]/g, ''))) - (Number(topTarget.replace(/[px]/g, ''))))) / oneCellSize;
  		if (differenceLeft + differenceTop > 1) return 'are not neighbours';
		
		countMoves++;
		moves.innerHTML = countMoves

		let emptyTop = emptyCellTop;
		let emptyLeft = emptyCellLeft;
		emptyCellTop = topTarget;
		emptyCellLeft = leftTarget;
		target.style.top = emptyTop;
		target.style.left = emptyLeft;
		audio();
		/* let cells = document.querySelectorAll('.cell')
		console.log() */
		/* const isFinished = cells.every((cell,index) => {
			return cell.style.top === array8Win[index][0] && cell.style.left === array8Win[index][1]
		})  */
		
		 if (emptyCellTop === '0px' && emptyCellLeft === '0px'){
			console.log('You Win!!')
			stopTime()
			shadow.classList.add('active');
			document.querySelector('.shadowMoves span').innerHTML = document.querySelector('.moves span').innerHTML
			document.querySelector('.shadowTime span').innerHTML = document.querySelector('.time span').innerHTML
			arrayResult.push([document.querySelector('.moves span').innerHTML, document.querySelector('.time span').innerHTML ])
		};		
	}	
})
}

/* --------------time--------------time----------- */
let countSec = 0;
let minutes = 0; 
let timerID;

function changeTime(){
	countSec++;
	minutes = parseInt(countSec / 60, 10);
	seconds = parseInt(countSec % 60, 10);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;	
    timeShow.textContent = minutes + ":" + seconds;
}

function startTime(){
	timerID = setInterval(changeTime, 1000)
	console.log(timerID)	
}

let startMoment;
let newInterval;
const startTime2 = () => {
	startMoment = new Date().getTime();
	newInterval = setInterval(syncTime, 1000);
}
const stopTime2 = () => {
	timeShow.textContent = `00:00`;
	clearInterval(newInterval);
}
const syncTime = () => {
	const now = new Date().getTime();
	const diff = now - startMoment;
	const minutes = roundDigits(Math.floor(diff/ 1000 / 60));
	const seconds = roundDigits(Math.round((diff - (minutes * 60 * 1000)) / 1000));

	timeShow.textContent = `${minutes}:${seconds}`;
}

const roundDigits = (val) => {
	return String(val).length === 1 ? `0${val}` : val;
}


function stopTime(){
	clearInterval(timerID)
}

stop.addEventListener('click', () => {
	stopTime();
	console.log('stop')
	console.log(timerID)
})


/* const volume = document.querySelector('.volume');

let volumeClick = 'true';
volume.addEventListener('click', function(){
	volume.classList.toggle('active')
	if(document.querySelector('.volume').className === 'volume active'){
		return volumeClick = 'false'	
	}else{
		return volumeClick = 'true'
	}
})*/

 function audio(){
	let audio = document.createElement('audio');
	audio.className = 'audio';
	audio.setAttribute("autoplay", "true");
	audio.innerHTML = "<source src='../game/assets/audio/knopka-klik-odinochnyii-korotkii-myagkii-priglushennyii.mp3'>";
	audio.volume = 1;
	wrapArea.prepend(audio);
} 
function deleteAudio(){
	let audiotr = document.querySelectorAll('.audio');
	audiotr.forEach(audio =>{
	audio.remove();
	})
}
let arrayResult = [];
/* let lastTenElemArray = arrayResult.slice(-10) */
result.addEventListener('click', function(){
cleanShowResult();
let showResult = document.querySelector('.showresult');
for(let i = 0; i < arrayResult.slice(-10).length; i++){
	let p = document.createElement('p');
	p.innerHTML = `${i + 1}.  Moves: ${arrayResult.slice(-10)[i][0]}   Time: ${arrayResult.slice(-10)[i][1]}`;
	showResult.append(p)
}
})
 function cleanShowResult(){
	let elemInDiv = document.querySelectorAll('.showresult p');
	elemInDiv.forEach(elem => {
		elem.remove()
	})
 }