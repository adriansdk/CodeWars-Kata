function accum(s) {
	let letters = s.toLowerCase().split('')
  for(let i = 0; i < letters.length; i++) {
    letters[i] = letters[i].toUpperCase() + letters[i].repeat(i)
  }
  return letters.join('-')
}

// https://www.codewars.com/kata/mumbling/train/javascript