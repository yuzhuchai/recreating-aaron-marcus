console.log("recreating Aaron Marcus's work");



function DisplayText(){


	const inputText = document.getElementById('textInput').value 
	console.log(inputText)

	const textArray = inputText.split('')
	const newTextArray = textArray.filter(char => char !== " ").map(char => {
		if (char == 'a'){
			return "<span id='a'>A</span>"
		} else if (char == 'b'){
			return "<span id='b'>BB</span>"
		} else if (char == 'c'){
			return "<span id='c'>CCC</span>"
		} else if (char == 'd'){
			return "<span id='d'>DDDD</span>"
		} else if (char == 'e'){
			return "<span id='e'>EEEEE</span>"
		} else if (char == 'f'){
			return "<span id='f'>FFFFFF</span>"
		} else if (char == 'g'){
			return "<span id='g'>GGGGGGG</span>"
		} else if (char == 'h'){
			return "<span id='h'>HHHHHHHH</span>"
		} else if (char == 'i'){
			return "<span id='i'>IIIIIIIII</span>"
		} else if (char == 'j'){
			return "<span id='j'>JJJJJJJJJJ</span>"
		} else if (char == 'k'){
			return "<span id='k'>KKKKKKKKKKK</span>"
		} else if (char == 'l'){
			return "<span id='l'>LLLLLLLLLLLL</span>"
		} else if (char == 'm'){
			return "<span id='m'>MMMMMMMMMMMMM</span>"
		} else if (char == 'n'){
			return "<span id='n'>NNNNNNNNNNNNNN</span>"
		} else if (char == 'o'){
			return "<span id='o'>OOOOOOOOOOOOOOO</span>"
		} else if (char == 'p'){
			return "<span id='p'>PPPPPPPPPPPPPPPP</span>"
		} else if (char == 'q'){
			return "<span id='q'>QQQQQQQQQQQQQQQQQ</span>"
		} else if (char == 'r'){
			return "<span id='r'>RRRRRRRRRRRRRRRRRR</span>"
		} else if (char == 's'){
			return "<span id='s'>SSSSSSSSSSSSSSSSSSS</span>"
		} else if (char == 't'){
			return "<span id='t'>TTTTTTTTTTTTTTTTTTTT</span>"
		} else if (char == 'u'){
			return "<span id='u'>UUUUUUUUUUUUUUUUUUUUU</span>"
		} else if (char == 'v'){
			return "<span id='v'>VVVVVVVVVVVVVVVVVVVVVV</span>"
		} else if (char == 'w'){
			return "<span id='w'>WWWWWWWWWWWWWWWWWWWWWWW</span>"
		} else if (char == 'x'){
			return "<span id='x'>XXXXXXXXXXXXXXXXXXXXXXXX</span>"
		} else if (char == 'y'){
			return "<span id='y'>YYYYYYYYYYYYYYYYYYYYYYYYY</span>"
		} else if (char == 'z'){
			return "<span id='z'>ZZZZZZZZZZZZZZZZZZZZZZZZZZ</span>"
		} else {
			return char 
		}
	})

	const newString = newTextArray.join('<br/>')
	console.log(newTextArray);	




	
	document.getElementById('container').innerHTML = newString
}

