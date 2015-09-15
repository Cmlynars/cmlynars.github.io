

// HIDE AND SHOW PAGE

$('#keyboardContainer').hide();

function toggleScreen() {
	
	$("#keyboardContainer").fadeIn();
	
	var thisTarget = $('header');
	var targetOffset = $(thisTarget).offset().top;

	$('body').animate({
    scrollTop: targetOffset
  }, 600);

	$('#pageContainer').fadeOut(1000);

};

$('.title').on('click', function () {
	
	$("#pageContainer").fadeIn(1000);

	var thisTarget = $('header');
	var targetOffset = $(thisTarget).offset().top;

	$('body').animate({
		scrollTop: targetOffset
	}, 0);

	function scrollUp() {
		thisTarget = $('#pageContainer');
		targetOffset =(thisTarget).offset().top;

		$('body').animate({
			scrollTop: targetOffset
		}, 600);

		$('#keyboardContainer').fadeOut(1000);
	}

	setTimeout(scrollUp, 1);

	});	


// CONTROL KEYBOARD

var activeBoard = 'Common';
// var activeIndex = 0;
var keysLength = boards[activeBoard].keyboard.length;

var activeIndex = {
	"Common": 0,
	"Shapes": 0,
	"Symbols": 0,
	"Languages": 0,
	"Misc": 0,
};

createKeyboard(activeBoard, activeIndex);

$('li').on('click', function (e) {
	
	e.preventDefault();
	activeBoard = $(this).attr("boardname");
	// activeIndex = 0;

	keysLength = boards[activeBoard].keyboard.length;

	checkArrow();

	createKeyboard(activeBoard, activeIndex);

	$('a').removeClass("active");
	$(this).find('a').addClass("active");

});

function createKeyboard(section, keyboardIndex){
	var currentIndex = keyboardIndex[section];
	var currentBoard = boards[section].keyboard[currentIndex];
	var htmlKeyboard = '';
	var currentBoardLength = currentBoard.length;
	
	for(var index = 0; index < currentBoardLength; index++){
		htmlKeyboard += '<button>'+currentBoard[index]+'</button>';
	}

	$('.keyboard').html(htmlKeyboard);

	registerClickEvent();

}

function checkArrow (){

	if (activeIndex[activeBoard] === keysLength-1) {
		$('.rightArrow').attr('disabled', true);	
	}

	else {
		$('.rightArrow').attr('disabled', false);
	}

	if (activeIndex[activeBoard] === 0) {
		$('.leftArrow').attr('disabled', true);
	}

	else {
		$('.leftArrow').attr('disabled', false);
	}

}

$('.rightArrow').on('click', function() {	

	activeIndex[activeBoard]++;
	createKeyboard(activeBoard, activeIndex);

	checkArrow();

});

$('.leftArrow').on('click', function () {

	activeIndex[activeBoard]--;
	createKeyboard(activeBoard, activeIndex);

	checkArrow();

});


// ADD CHARACTERS

var $input = $('#inputField');
var caretPos = 0;


$input.on('click keyDown', function () {
	var tempCaret = this.selectionStart;
	if (typeof tempCaret === 'undefined') {
		caretPos = 0;
	}

	else {
		caretPos = tempCaret;
	}
	
});


function registerClickEvent () {

	$('.active-board button').on('click', function () {

		var textAreaTxt = $input.val();
		var character = $(this).text();

		var firstPart = textAreaTxt.substring(0, caretPos);
		var middlePart = character;
		var lastPart = textAreaTxt.substring(caretPos);
		
    	$input.val(firstPart + middlePart + lastPart);

    	caretPos ++;

    	lastCharacter = character;
    	
});

}


// ADDITIONAL BUTTONS

$('#clear').on('click', function() {
	
	if ($input.val() === '') {

	}

	else {

	$input.val('');

	$('.clearOverlay').addClass('expanded');

	setTimeout(function() { $('.clearOverlay').removeClass('expanded'); }, 600);
	
	}

	caretPos = 0;

});


$('#select').on('click', function () {

	if ($input.val() === '') {

	}

	else {

	$('.selectOverlay').addClass('showIt');

	$input.select();

	setTimeout(function() { $('.selectOverlay').removeClass('showIt'); }, 1500);

	}

});


$('#space').on('click', function() {

	var textAreaTxt = $input.val();

	var firstPart = textAreaTxt.substring(0, caretPos);
	var space = ' ';
	var lastPart = textAreaTxt.substring(caretPos);
		
    $input.val(firstPart + space + lastPart);

    caretPos ++;

});

var lastCharacter = '';

$('.delete').on('click', function () {
	
 	var textAreaTxt = $input.val();

 	var deleteFirstPart = textAreaTxt.substring(0, caretPos-1);
	var lastPart = textAreaTxt.substring(caretPos);

	$input.val(deleteFirstPart + lastPart);

	caretPos--;
	
});

//reposition delete
//landing page animations and background
//"built and designed" breaks below page in flow of page not absolute pos
//color palette
//greys look deactivated
//left and right arrows should go next to spacebar on break
//hands up moji
//think about the sharing component
//start scaling the keyboard section, then snap the lis to full width
//look into bootstrap for alignement
//blur decreases on click
//popping to bottom when make button clicked
//responsive
//remove questionmark symbol, add dash, add diagonals
//add period to common, reorganize brackets in common
//add backspace button or focus, backspace next to space wrap both in container that is centered
//keep focus when click
//focus on type
//get creative with mojis in animations
//absolute positon span
//copy functionality
//cached main page
//keybaord counter placement indicators
//keyboard slide , can move things off the screen -100%
//expressions/chunks, shapes (circles, rectangles, triangles), kanji, objects, punctuation, misc.
//look at font types
//overall styling
//css animation, fade in text, shadow on pieces, hover brings them all together
//generate random