let cells = document.querySelectorAll('.row > div');
let currentPlayer = 'X';
let clicking = false;

const wait = (delay) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve();
		}, delay);
	});
};

const cellClicked = e => {
	if(clicking) return;
	clicking = true;
	console.log('User has clicked');
	return wait(2000)
		.then(() => {
			console.log('%ccellClicked function starting ... ', 'background: #eee; padding: 3px;');
			return wait(2000);
		})
		.then(() => {
			console.group('Checking if cell is occupied ... ');
			return wait(2000);
		})
		.then(() => {
			if (e.target.textContent !== '') {
				return Promise.reject('Cell already has something drawn! Abort!')
			} else {
				console.log('%cCell is free and clear big daddy!', 'color: white; background: green; padding: 3px;');
			}
			console.groupEnd();
			return wait(2000);
		})
		.then(() => {
			console.group('Drawing current player ... ');
			return wait(2000);
		})
		.then(() => {
			console.log('Current Player value to draw:  %c' + currentPlayer, 'background: #0091ea; color: white; padding: 3px;');
			console.groupEnd();
			e.target.textContent = currentPlayer;
			return wait(2000);
		})
		.then(() => {
			console.group('Toggling current player ... ');
			return wait(2000);
		})
		.then(() => {
			if (currentPlayer === 'X') {
				console.log('is currentPlayer (' + currentPlayer + ') === "X" ? :  %c' + 'Yes (true)', 'background: black; color: white; padding: 3px;');
			} else {
				console.log('is currentPlayer (' + currentPlayer + ') === "X" ? :  %c' + 'No (false)', 'background: black; color: white; padding: 3px;');
			}
			return wait(2000);
		})
		.then(() => {
			if (currentPlayer === 'X') {
				console.log('Toggling currentPlayer from \'X\' to:  %c' + 'O', 'background: orchid; color: white; padding: 3px;');
				currentPlayer = 'O';
			} else {
				console.log('Toggling currentPlayer from \'O\' to:  %c' + 'X', 'background: orchid; color: white; padding: 3px;');
				currentPlayer = 'X';
			}
			console.groupEnd();
			return wait(2000);
		})
		.then(() => {
			console.log('%ccellClicked function ended', 'background: #eee; padding: 3px;');
			clicking = false;
		})
		.catch(e => {
			console.log('%c' + e, 'color: white; background: red; padding: 3px;');
			console.groupEnd();
			console.log('%ccellClicked function ended', 'background: #eee; padding: 3px;');
			clicking = false;
		});
}

cells.forEach(cell => cell.addEventListener('click', cellClicked));
