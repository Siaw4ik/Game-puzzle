const areaPlay = document.querySelector('.areaPlay');
const sizes = document.querySelector('.sizes');
const shuffle = document.getElementById('shuffle');
const moves = document.querySelector('.moves span');
const timeShow = document.querySelector('.time span');
const wrapArea = document.querySelector('.wrapperAreaPlay');
const volumeOn = document.querySelector('.volumeOn');
const volumeOut = document.querySelector('.volumeOut');
const volumeOnSvg = document.querySelector('.volumeOn svg');
const volumeOutSvg = document.querySelector('.volumeOut svg');
const shadow = document.querySelector('.shadow');
const result = document.querySelector('.result');
const stops = document.getElementById('stop');
const contin = document.getElementById('continue');
const frameSize = document.querySelector('.frameSize span');
const save = document.getElementById('save');
/* let isSave = true; */

/* window.addEventListener('load', getLocalStorage);  */

let countCell = 3;
let isShaffle = false;
/* let isSave = true; */
let sizeCell = 60;


sizes.addEventListener('click', function(event){
	let target = event.target;
	if(target.tagName === 'SPAN'){
		countCell = Math.sqrt(target.dataset.number);	
		console.log(countCell);
		cleanAreaPlay();
		cleanNumbers(countCell);
		createArea(countCell);
		stopTime();
		shadow.classList.remove('active');
		timeShow.textContent = `00:00`
		isShaffle = false
	}	
})

let emptyCell = {
	value: Math.pow(countCell, 2),
	left: countCell - 1,
	top: countCell - 1,
}

let cells =[];
cells.push(emptyCell)

let numbers = [...Array(Math.pow(countCell, 2) - 1).keys()];
let countMoves = 0;

function createArea(size){
	/* areaPlay.style.width = `${size * oneCellSize}px`;
	areaPlay.style.height = `${size * oneCellSize}px`; */
	/* if(size == 3){
		areaPlay.style.width = '30vw';
		areaPlay.style.height = '30vw';

	} */	

	for (let i = 1; i <= (Math.pow(size,2) - 1); i++) {
		let cell = document.createElement('div');
		const valueCell = numbers[i - 1] + 1;
		cell.className = 'cell';
		cell.setAttribute('data-value', valueCell)
		cell.innerHTML = valueCell;

		const oneCellSize = 100 / size;
		console.log(oneCellSize)
		cell.style.width = 100 / size + '%';
		cell.style.height = 100 / size + '%';

		const left = (i -1) % size;
		const top = ((i - left) - 1) / size
	
		cells.push({
			value: valueCell,
			left: left,
			top: top,
			element: cell
		})

		cell.style.left = `${left * oneCellSize}%`;
		cell.style.top = `${top * oneCellSize}%`

		areaPlay.append(cell)
	}
	countMoves = 0;
	moves.innerHTML = countMoves

	frameSize.innerHTML =`${size}x${size}`;
}
/* if(isSave){
	createArea(countCell, sizeCell);
} */

createArea(countCell);


function shift(index, size){
	const cell = cells[index]
	const differenceLeft = Math.abs(emptyCell.left - cell.left);
  	const differenceTop = Math.abs(emptyCell.top - cell.top);
  	if (differenceLeft + differenceTop > 1) return;	 

	countMoves++;
	moves.innerHTML = countMoves
	deleteAudio();
	audio();
	const oneCellSize = 100 / size;
	cell.element.style.left = `${emptyCell.left * oneCellSize}%`;
	cell.element.style.top = `${emptyCell.top * oneCellSize}%`

	const emptyLeft = emptyCell.left;
	const emptyTop = emptyCell.top;
	emptyCell.left = cell.left;
	emptyCell.top = cell.top;
	cell.left = emptyLeft;
	cell.top = emptyTop;
}

function cleanAreaPlay(){
	cells = []
	let array = document.querySelectorAll('.cell');
	array.forEach(item =>{
		item.remove();
	})
	emptyCell = {value: Math.pow(countCell, 2),left: countCell - 1,top: countCell - 1,}
	cells.push(emptyCell) 
}

function cleanNumbers(size){
	numbers = [];
	numbers = [...Array(Math.pow(size, 2) - 1).keys()];
}


shuffle.addEventListener('click', function(){
	console.log('shuffle')
	numbers = [...Array(Math.pow(countCell, 2) - 1).keys()]/* .sort(() => Math.random() - 0.5) */;

	cleanAreaPlay();
	createArea(countCell);

	let arrayCell = document.querySelectorAll('.cell');
	for(let i = 0; i< arrayCell.length; i++){
		arrayCell[i].dataset.value = i + 1
	}
	isShaffle = true;
	countMoves = 0;
	moves.innerHTML = countMoves
	stopTime();
	startTime();
	shadow.classList.remove('active');
	timeShow.textContent = `00:00`;
})

areaPlay.addEventListener('click', function(event){
	if(isShaffle){
		target = event.target.closest('div');
		if(target.className !== 'cell')return;
		let i = target.dataset.value;
		console.log(i)
		shift(i, countCell/* , sizeCell */);
		const isFinished = cells.every(cell => {
			console.log(cell.value, cell.top, cell.left);
			return cell.value === cell.top * countCell + ((cell.left % countCell) + 1);
		  });
		if (isFinished) {
			console.log('You won!');
			stopTime();
			shadow.classList.add('active');
			resultForShadow()
			arrayResult.push([document.querySelector('.moves span').innerHTML, document.querySelector('.time span').innerHTML ])
		}
	}	  
})

let volumeO = 1;
audio();

function audio(){
	volumeOutSvg.addEventListener('click', function(){
		console.log('out')
		volumeO = 0
		volumeOut.classList.add('active')
		volumeOn.classList.remove('active')
	})
	volumeOnSvg.addEventListener('click', function(){
		console.log('on')
		volumeO = 1
		volumeOut.classList.remove('active')
		volumeOn.classList.add('active')
	})

	let audio = document.createElement('audio');
	audio.className = 'audio';
	audio.setAttribute("autoplay", "false");
	audio.innerHTML = "<source src='../game/assets/audio/knopka-klik-odinochnyii-korotkii-myagkii-priglushennyii.mp3'>";
	audio.volume = volumeO;
	wrapArea.prepend(audio);
}

function deleteAudio(){
	let audiotrack = document.querySelector('.audio');
	audiotrack.remove()
}

let startMoment;
let newInterval;

const startTime = (time) => {
	function callTime(){
		syncTime(time)
	}
	startMoment = new Date().getTime();
	newInterval = setInterval(callTime, 1000);
}

let saveTime; //ms

const stopTime = () => {
	clearInterval(newInterval);
	saveTime = new Date().getTime() - startMoment;
}

const syncTime = (time = 0) => {
	const now = new Date().getTime();
	const diff = (now - startMoment) + time;
	const minutes = roundDigits(Math.floor(diff/ 1000 / 60));
	const seconds = roundDigits(Math.round((diff - (minutes * 60 * 1000)) / 1000));

	timeShow.textContent = `${minutes}:${seconds}`;
}

const roundDigits = (val) => {
	return String(val).length === 1 ? `0${val}` : val;
}

function resultForShadow(){
	document.querySelector('.shadowMoves span').innerHTML = document.querySelector('.moves span').innerHTML
	document.querySelector('.shadowTime span').innerHTML = document.querySelector('.time span').innerHTML
}

let arrayResult = [];

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

 stops.addEventListener('click', function(){
	stopTime();
	isShaffle = false
 })
 contin.addEventListener('click', function(){
	startTime(saveTime);
	isShaffle = true
 })

 save.addEventListener('click', function(){
	/* isSave = false; */
	localStorage.clear();
	localStorage.setItem('storageArrayResult',JSON.stringify(arrayResult));
	/* localStorage.setItem('storageIsSave',JSON.stringify(isSave)); */
	/* localStorage.setItem('storageCells',JSON.stringify(cells));
	localStorage.setItem('storageNumbers',JSON.stringify(numbers));
	localStorage.setItem('storageCountCell',JSON.stringify(countCell));
	localStorage.setItem('storageSizeCell', JSON.stringify(sizeCell)); */

 })
 

 window.addEventListener('load', getLocalStorage);

  function getLocalStorage() {
	let arrNew = JSON.parse(localStorage.getItem('storageArrayResult'));
	console.log(arrNew);
	if(arrNew){
	let showResult = document.querySelector('.showresult');
	for(let i = 0; i < arrNew.slice(-10).length; i++){
		let p = document.createElement('p');
		p.innerHTML = `${i + 1}.  Moves: ${arrNew.slice(-10)[i][0]}   Time: ${arrNew.slice(-10)[i][1]}`;
		showResult.append(p)
	}
}

	/* let storageIsSave = JSON.parse(localStorage.getItem('storageIsSave'));
	let storageCountCell = JSON.parse(localStorage.getItem('storageCountCell'));
	let storageSizeCell = JSON.parse(localStorage.getItem('storageSizeCell'));
	let storageCells = JSON.parse(localStorage.getItem('storageCells'));
	let storageNumbers = JSON.parse(localStorage.getItem('storageNumbers')); */

	
	/* cells = storageCells;
	numbers = storageNumbers;
	console.log(`${typeof storageCountCell}: ${storageCountCell}`);
	console.log(`${typeof storageSizeCell}: ${storageSizeCell}`);
	console.log(storageCells);
	console.log(storageNumbers); */

  }
