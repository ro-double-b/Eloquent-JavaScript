// Looping a Triangle
// Write a loop that makes seven calls to console.log to output the following triangle:

// #
// ##
// ###
// ####
// #####
// ######
// #######

function hashTag() {
	var hashtag = ''
	for(var i = 0; i < 7; i++) {
		hashtag = hashtag + '#'
		console.log(hashtag)
	}
}

// return hashTag()

// FizzBuzz
// Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

function fizzBuzz() {
	for(var i = 1; i < 31; i++) {
		var result = ''
		if(i % 3 === 0) {
			result = 'Fizz'
		}
		if(i % 5 === 0) {
			result = result + 'Buzz'
		} 
		else if(i % 3 !== 0) {
			result = i
		}
		console.log(result)
	}
}

// fizzBuzz()

// Chess board

// Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a “#” character. The characters should form a chess board.

function chessBoard(size) {
	var result = ''
	for(var i = 0; i < size; i ++) {
		for(var j = 0; j < size; j++) {
			if((i + j) % 2 === 0) {
				result = result + ' '
			} else {
				result = result + '#'
			}
		}
		result = result + '\n'
	}
	console.log(result)
}

chessBoard(9)


