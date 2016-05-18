// Minimum

// The previous chapter introduced the standard function Math.min that returns its smallest argument. We can do that ourselves now. Write a function min that takes two arguments and returns their minimum.

function minNum(num1, num2) {
	if(num1 < num2) {
		return num1
	} else {
		return num2
	}
}

// console.log(minNum(0, -10))

// Recursion

// We’ve seen that % (the remainder operator) can be used to test whether a number is even or odd by using % 2 to check whether it’s divisible by two. Here’s another way to define whether a positive whole number is even or odd:

function isEvenRec(num) {
	num = Math.abs(num)
	if(num === 0) {
		return true
	} 
	else if(num == 1) {
		return false
	} else {
		return isEvenRec(num - 2)
	}
}

// console.log(isEvenRec(-2))

// Bean Counting

// ite a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters are in the string.

function beanCounting(string, char) {
	var result =0
	for(var i = 0; i < string.length; i++) {
		if(char === string.charAt(i)) {
			result = result + 1
		}
	}
	return result
}

// console.log(beanCounting('heeeello', 'e'))




