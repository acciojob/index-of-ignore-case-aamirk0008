function indexOfIgnoreCase(s1, s2) {
  // write your code here
	if (s2 === '') {
		return 0
	}
	if (s1 === 0 || s2.length > s1.length) {
		return -1
	}

	let lowerStr = s1.toLowerCase()
	let lowerSubStr = s2.toLowerCase()

	return lowerStr.indexOf(lowerSubStr)
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
