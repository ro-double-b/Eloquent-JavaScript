// The sum of a range

// Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.

function range(start, end, step) {
	var result = []
	if(step === undefined) {
		step = 1
	}
	for(var i = start; i <= end; i += step) {
		result.push(i)
	}
	return result
}

// console.log(range(1, 10))

function sum(arr) {
	var result = 0
	for(var i = 0; i < arr.length; i++) {
		result = result + arr[i]
	}
	return result
}

// console.log(sum(range(1, 10)))

// Reversing an array

// The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order.

function reverseArray(arr) {
	var result = []
	for(var i = 0; i < arr.length; i++) {
		result.unshift(arr[i])
	}
	return result
}

// console.log(reverseArray(["A", "B", "C"]))

// The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument in order to reverse its elements

function reverseArrayInPlace(arr) {
	for(var i = 0; i < Math.floor(arr.length / 2); i++) {
		var temp = arr[i]
		arr[i] = arr[arr.length - i - 1]
		arr[arr.length - i - 1] = temp
	}
	return arr
}

// console.log(reverseArrayInPlace([1, 2, 3, 4, 5]))

// A list

// Write a function arrayToList that builds up a data structure like the previous one when given [1, 2, 3] as argument, and write a listToArray function that produces an array from a list. Also write the helper functions prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list, and nth, which takes a list and a number and returns the element at the given position in the list, or undefined when there is no such element.

function arrayToList(arr) {
	var result = {}
	if(arr.length === 1) {
		result.value = arr[0]
		result.rest = null
	} else {
		result.value = arr[0]
		result.rest = arrayToList(arr.splice(1))
	}
	return result
}

// console.log(arrayToList([10, 20]));

function listToArray(obj) {
	var result = []
	while(obj !== null) {
		result.push(obj.value)
		obj = obj.rest
	}
	return result
}

// console.log(listToArray(arrayToList([10, 20, 30])));

function prepend(value, rest) {
	return {
		value: value,
		rest: rest
	}
}

function nth(obj, n) {
	if (!obj) {
		return undefined
	}
	else if( n == 0) {
		return obj.value
	} else {
		return nth(obj.rest, n - 1)
	}
}

// console.log(nth(arrayToList([10, 20, 30]), 0));

// Deep Comparison

// Write a function, deepEqual, that takes two values and returns true only if they are the same value or are objects with the same properties whose values are also equal when compared with a recursive call to deepEqual.

function deepEqual(val1, val2) {
	if(val1 === val2) {
		return true
	}
	if(typeof(val1) === null) {
		if(typeof(val2) === null) {
			return true
		} else {
			return false
		}
	}
	if(typeof(val1) === 'object' && typeof(val2) === 'object') {
		result = true
		for(var key in val1) {
			if(val1[key] == val2[key] && result || deepEqual(val1[key], val2[key])) {
				return true
			} else {
				result = false
				return false
			}
		}
	}
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
