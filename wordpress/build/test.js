




function viralAdvertising(n) {


	return numOfLikes;
}

//viralAdvertising( 3 );


function birthday(s, d, m) {
	let numOfWays = 0;
	let tempSum = 0;
	let tempSquaresSum = 0;

	for( let i = 0; i < s.length; i++ ) {
		for( let k = i; k < s.length; k++ ) {
			if ( s[k] + tempSum <= d && tempSquaresSum + 1 <= m  ) {
				tempSum += s[k];
				tempSquaresSum++;
			} else {
				break;
			}
		}

		if ( tempSum === d && tempSquaresSum === m ) {
			numOfWays++;
		}

		tempSum = 0;
		tempSquaresSum = 0;
	}

	return numOfWays;
}

//birthday( [1, 2, 1, 3, 2], 3, 2 );


function cellCompete(states, days) {
	for (let i = 0; i < days; i++) {

		let current = null;
		let tempPrev = null;

		for (let k = 0; k < states.length; k++) {
			let prev = undefined !== states[k - 1] ? states[k - 1] : 0;
			let next = undefined !== states[k + 1] ? states[k + 1] : 0;

			if (tempPrev === 0 || tempPrev === 1) {
				prev = tempPrev;
			}

			if ((prev === 0 && next === 0) || (prev === 1 && next === 1)) {
				current = 0;
			} else {
				current = 1;
			}

			if (current === 0 || current === 1) {
				tempPrev = states[k];
				states[k] = current;
			}
		}
	}

	return states;
}

//cellCompete([1, 0, 0, 0, 0, 1, 0, 0], 1);

function generalizedGCD(num, arr)
{
	let sortedArr = arr.sort(function(a,b){return a-b});
	let gcd = 0;
	let temp = 0;

	for( let i = 1; i <= sortedArr[0]; i++ ) {
		for( let k = 0; k < sortedArr.length; k++ ) {
			if ( sortedArr[k] % i === 0 ) {
				temp++;
			}
		}

		if ( temp === sortedArr.length && gcd < i ) {
			gcd = i;
		}

		temp = 0;
	}

	return gcd;
}

//generalizedGCD(5, [2,4,6,8,10]);

//generalizedGCD( 5, [2,3,4,5,6] );


function pairs(arr) {
	arr = arr.sort(function(a,b){return a-b});

	var i=0,j=1,count=0;

	while(j < arr.length) {
		var diff = arr[j] - arr[i];
		if (diff == k) {
			count++;
			j++;
		} else if (diff > k) {
			i++;
		} else if (diff < k) {
			j++;
		}
	}

	return count;
}

//pairs([1,10,25,35,60]);

function migratoryBirds(arr) {
	let birdsHash = {};
	let highFrequencyType = null;
	let highFrequencyCount = 0;

	for(let i = 0; i < arr.length; i++) {
		if ( ! birdsHash[arr[i]] ) {
			birdsHash[arr[i]] = 0;
		}

		birdsHash[arr[i]]++;

		if ( ! highFrequencyType ) {
			highFrequencyType = arr[i];
			highFrequencyCount++;
		}

		if ( birdsHash[arr[i]] > highFrequencyCount && arr[i] !== highFrequencyType ) {
			highFrequencyType = arr[i];
			highFrequencyCount = birdsHash[arr[i]];
		}

		if ( birdsHash[arr[i]] === highFrequencyCount && arr[i] < highFrequencyType ) {
			highFrequencyType = arr[i];
			highFrequencyCount = birdsHash[arr[i]];
		}

	}

	return highFrequencyType;
}

//migratoryBirds([1,4,4,4,5,3]);




function sockMerchant(n, ar) {
	let sortedSocks = ar.sort(function(a,b){return a-b});
	let numberOfPairs = 0;
	let currentSocksCount = 0;

	for(let i = 0; i < sortedSocks.length; i++ ) {
		if ( i === 0 ) {
			currentSocksCount++;
			continue;
		}

		if ( sortedSocks[i-1] === sortedSocks[i] ) {
			currentSocksCount++;
		} else {
			currentSocksCount = 1;
		}

		if ( currentSocksCount && currentSocksCount % 2 === 0 ) {
			numberOfPairs++;
		} else if( sortedSocks[i] !== sortedSocks[i + 1] ) {
			currentSocksCount = 1;
		}
	}

	return numberOfPairs;
}

function sockMerchantNoSort(n, ar) {
	let numberOfPairs = 0;
	let socksTable = {};

	for(let i = 0; i < ar.length; i++ ) {
		if ( ! socksTable[ar[i]] ) {
			socksTable[ar[i]] = 0;
		}

		socksTable[ar[i]]++;

		if ( socksTable[ar[i]] % 2 === 0 ) {
			numberOfPairs++;
		}
	}

	return numberOfPairs;
}
//sockMerchantNoSort(15, [6,5,2,3,5,2,2,1,1, 5, 1, 3, 3, 3, 5]);


//sockMerchant(15, [6,5,2,3,5,2,2,1,1, 5, 1, 3, 3, 3, 5]);

function IDsOfPackages(truckSpace, packagesSpace)
{
	let result = [];
	let sortedPackagesSpace = packagesSpace.slice(0);
	let bestPackageFound = false;

	sortedPackagesSpace = sortedPackagesSpace.sort(function(a,b){return b-a});

	for( let i = 0; i < sortedPackagesSpace.length; i++ ) {

		if ( bestPackageFound ) {
			break;
		}

		for( let j = 0; j < sortedPackagesSpace.length; j++ ) {
			let packagesSum = sortedPackagesSpace[i] + sortedPackagesSpace[j];
			if ( truckSpace - packagesSum === 30 ) {
				result.push( packagesSpace.indexOf(sortedPackagesSpace[i]), packagesSpace.indexOf(sortedPackagesSpace[j]) );
				bestPackageFound = true;
				break;
			}
		}
	}

	return result;
}

//IDsOfPackages(110, [20,70,90,30,60,110]);



let area = [
	[1,0,0],
	[1,0,0],
	[1,9,1],
];

function minimumDistance(rows, columns, area) {
	let currentRow = 0;
	let currentColumn = 0;
	let delivered = false;
	let distance = 0;

	while( ! delivered ) {

		if ( area[currentRow][currentColumn] === 9 ) {
			delivered = true;
			distance--;
		}

		if ( isValidPlace( undefined !== area[currentRow + 1] && area[currentRow + 1][currentColumn] ) ) {
			currentRow++;
			distance++;
		} else if( undefined !== area[currentRow][currentColumn + 1] && isValidPlace( area[currentRow][currentColumn + 1] ) ) {
			currentColumn++;
			distance++;
		} else if( undefined !== area[currentRow][currentColumn - 1] && isValidPlace( area[currentRow][currentColumn - 1] ) ) {
			currentColumn--;
			distance++;
		} else if( undefined !== area[currentRow - 1] && isValidPlace( area[currentRow - 1][currentColumn] ) ) {
			currentRow--;
			distance++;
		}
	}

	return distance;
}

function isValidPlace( val ) {
	return val === 1 || val === 9;
}

//minimumDistance(3, 3, area);

// Create a 4x4 grid
// Represent the grid as a 2-dimensional array
var gridSize = 4;
var grid = [];
for (var i=0; i<gridSize; i++) {
	grid[i] = [];
	for (var j=0; j<gridSize; j++) {
		grid[i][j] = 'Empty';
	}
}

// Think of the first index as "distance from the top row"
// Think of the second index as "distance from the left-most column"

// This is how we would represent the grid with obstacles above
grid[0][0] = "Start";
grid[2][2] = "Goal";

grid[1][1] = "Obstacle";
grid[1][2] = "Obstacle";
grid[1][3] = "Obstacle";
grid[2][1] = "Obstacle";

// Start location will be in the following format:
// [distanceFromTop, distanceFromLeft]
var findShortestPath = function(startCoordinates, grid) {
	var distanceFromTop = startCoordinates[0];
	var distanceFromLeft = startCoordinates[1];

	// Each "location" will store its coordinates
	// and the shortest path required to arrive there
	var location = {
		distanceFromTop: distanceFromTop,
		distanceFromLeft: distanceFromLeft,
		path: [],
		status: 'Start'
	};

	// Initialize the queue with the start location already inside
	var queue = [location];

	// Loop through the grid searching for the goal
	while (queue.length > 0) {
		// Take the first location off the queue
		var currentLocation = queue.shift();

		// Explore North
		var newLocation = exploreInDirection(currentLocation, 'North', grid);
		if (newLocation.status === 'Goal') {
			return newLocation.path;
		} else if (newLocation.status === 'Valid') {
			queue.push(newLocation);
		}

		// Explore East
		var newLocation = exploreInDirection(currentLocation, 'East', grid);
		if (newLocation.status === 'Goal') {
			return newLocation.path;
		} else if (newLocation.status === 'Valid') {
			queue.push(newLocation);
		}

		// Explore South
		var newLocation = exploreInDirection(currentLocation, 'South', grid);
		if (newLocation.status === 'Goal') {
			return newLocation.path;
		} else if (newLocation.status === 'Valid') {
			queue.push(newLocation);
		}

		// Explore West
		var newLocation = exploreInDirection(currentLocation, 'West', grid);
		if (newLocation.status === 'Goal') {
			return newLocation.path;
		} else if (newLocation.status === 'Valid') {
			queue.push(newLocation);
		}
	}

	// No valid path found
	return false;

};

// This function will check a location's status
// (a location is "valid" if it is on the grid, is not an "obstacle",
// and has not yet been visited by our algorithm)
// Returns "Valid", "Invalid", "Blocked", or "Goal"
var locationStatus = function(location, grid) {
	var gridSize = grid.length;
	var dft = location.distanceFromTop;
	var dfl = location.distanceFromLeft;

	if (location.distanceFromLeft < 0 ||
		location.distanceFromLeft >= gridSize ||
		location.distanceFromTop < 0 ||
		location.distanceFromTop >= gridSize) {

		// location is not on the grid--return false
		return 'Invalid';
	} else if (grid[dft][dfl] === 'Goal') {
		return 'Goal';
	} else if (grid[dft][dfl] !== 'Empty') {
		// location is either an obstacle or has been visited
		return 'Blocked';
	} else {
		return 'Valid';
	}
};


// Explores the grid from the given location in the given
// direction
var exploreInDirection = function(currentLocation, direction, grid) {
	var newPath = currentLocation.path.slice();
	newPath.push(direction);

	var dft = currentLocation.distanceFromTop;
	var dfl = currentLocation.distanceFromLeft;

	if (direction === 'North') {
		dft -= 1;
	} else if (direction === 'East') {
		dfl += 1;
	} else if (direction === 'South') {
		dft += 1;
	} else if (direction === 'West') {
		dfl -= 1;
	}

	var newLocation = {
		distanceFromTop: dft,
		distanceFromLeft: dfl,
		path: newPath,
		status: 'Unknown'
	};
	newLocation.status = locationStatus(newLocation, grid);

	// If this new location is valid, mark it as 'Visited'
	if (newLocation.status === 'Valid') {
		grid[newLocation.distanceFromTop][newLocation.distanceFromLeft] = 'Visited';
	}

	return newLocation;
};


// OK. We have the functions we need--let's run them to get our shortest path!

// Create a 4x4 grid
// Represent the grid as a 2-dimensional array
var gridSize = 4;
var grid = [];
for (var i=0; i<gridSize; i++) {
	grid[i] = [];
	for (var j=0; j<gridSize; j++) {
		grid[i][j] = 'Empty';
	}
}

// Think of the first index as "distance from the top row"
// Think of the second index as "distance from the left-most column"

// This is how we would represent the grid with obstacles above
grid[0][0] = "Start";
grid[2][2] = "Goal";

grid[1][1] = "Obstacle";
grid[1][2] = "Obstacle";
grid[1][3] = "Obstacle";
grid[2][1] = "Obstacle";

//console.log(findShortestPath([0,0], grid));



let date1 = new Date("2018-03-01");
let date2 = new Date("2018-03-31");

