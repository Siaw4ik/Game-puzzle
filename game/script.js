const sizes = document.querySelector('.sizes');
const frameSize = document.querySelector('.frameSize span');
const areaPlay = document.querySelector('.areaPlay');
const shuffle = document.getElementById('shuffle');
const stop = document.getElementById('stop');
const moves = document.querySelector('.moves span')



let countCell = 0;
frameSize.innerHTML = '3x3';
createCell();

sizes.addEventListener('click', function(event){
	let target = event.target;
	if(target.tagName === 'SPAN'){
		frameSize.innerHTML = target.innerHTML;
		countCell = target.dataset.number;
		cleanAreaPlay();
		createCell(countCell);
		arrayFromAreaPlay = areaPlay.children;
	}	
})

function createCell(count = '9'){
	for(let i = 1; i < Number(count); i++) {
		let div = document.createElement('div');
		div.className = `item ${i} delete`;
		div.setAttribute('data-click', 1)
		div.innerHTML = `<p>${i}</p>`;
		areaPlay.append(div);

		if(count === '9'){
			areaPlay.style.gridTemplateColumns = 'repeat(3, auto)'
			areaPlay.style.gridTemplateColumns = 'repeat(3, auto)'
		}
		if(count === '16'){
			areaPlay.style.gridTemplateColumns = 'repeat(4, auto)'
			areaPlay.style.gridTemplateColumns = 'repeat(4, auto)'
		}
		if(count === '25'){
			areaPlay.style.gridTemplateColumns = 'repeat(5, auto)'
			areaPlay.style.gridTemplateColumns = 'repeat(5, auto)'
		}
		if(count === '36'){
			areaPlay.style.gridTemplateColumns = 'repeat(6, auto)'
			areaPlay.style.gridTemplateColumns = 'repeat(6, auto)'
		}
		if(count === '49'){
			areaPlay.style.gridTemplateColumns = 'repeat(7, auto)'
			areaPlay.style.gridTemplateColumns = 'repeat(7, auto)'
		}
		if(count === '64'){
			areaPlay.style.gridTemplateColumns = 'repeat(8, auto)'
			areaPlay.style.gridTemplateColumns = 'repeat(8, auto)'
		}
	}
	let emptyCell = document.createElement('div');
	emptyCell.className = 'empty delete';
	areaPlay.prepend(emptyCell)
}
function cleanAreaPlay(){
	let items = document.querySelectorAll('.delete');
	items.forEach(item =>{
		item.remove();
	})
	
} 

/* ----------------shuffle-------------shuffle-------------------- */


let arrayFromAreaPlay = areaPlay.children;


let newarray = []

function nana(){
	newarray = []
	for(let item of arrayFromAreaPlay){
		newarray.push(item)
	}
	
}

function shuffleArea(){	
	nana();
	for (let a = newarray.length - 1; a > 0; a--) {
		let b = Math.floor(Math.random() * a);
		let temp = newarray[a];
		newarray[a] = newarray[b];
		newarray[b] = temp;
		}
		cleanAreaPlay();
		newarray.forEach(item => {
			areaPlay.append(item)
		})

}


shuffle.addEventListener('click', () => {
	shuffleArea();
	console.log('shuffle');
	count = 0;
	countMoves = 0;
	moves.innerHTML = countMoves;
	/* window.timerID = 0 */
	/* if(window.timerID === 0){ */
		startTime();
	
	
})

/* --------------time--------------time----------- */
const timeShow = document.querySelector('.time span');
let count = 0;
	let minutes = 0; 
/* function changeTime(){	
	let count = 0;
	let minutes = 0; 
	setInterval(function () {
		count++;

		minutes = parseInt(count / 60, 10);
    	seconds = parseInt(count % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
		

        timeShow.textContent = minutes + ":" + seconds;
	}, 1000)
} */
function changeTime(){
	count++;

	minutes = parseInt(count / 60, 10);
	seconds = parseInt(count % 60, 10);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;	

    timeShow.textContent = minutes + ":" + seconds;
}
function startTime(){
	/* if(!window.timerID) {
		window.timerID = window.setInterval(changeTime, 1000)
		console.log(timerID)
	} */
	window.timerID = window.setInterval(changeTime, 1000)
	console.log(timerID)	
}
function stopTime(){
	window.clearTimeout(window.timerID)
}
stop.addEventListener('click', () => {
	stopTime();
	console.log('stop')
	console.log(window.timerID)
})

let emptyElem = document.querySelector('.empty')
let countMoves = 0;

areaPlay.addEventListener('click', function(event){
	let emptyElem = document.querySelector('.empty')
	target = event.target.closest('div');

	if(!target) return;
	if(target.dataset.click === '1'){
		console.log(target)
		countMoves++;
		moves.innerHTML = countMoves
		emptyElem = target;
		
	}
	/* console.log(emptyElem.offsetWidth */
} )
