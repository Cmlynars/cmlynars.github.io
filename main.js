function toggleScreen() {
	
	$('#keyboardContainer').removeClass("hide");
	
	var thisTarget = $('header');
	var targetOffset = $(thisTarget).offset().top;

	$('body').animate({
    scrollTop: targetOffset
  }, 600);

	$('#pageContainer').fadeOut(1000);

	// function startFocus() {
	// $( "#text" ).focus();
	// };

	// setTimeout(startFocus, 190);

};



var activeBoard = 'boardname1';
var activeIndex = 0;
var keysLength = boards[activeBoard].keyboard.length;

createKeyboard(activeBoard, activeIndex);

$('li').on('click', function (e) {
	
	e.preventDefault();
	activeBoard = $(this).attr("boardname");
	activeIndex = 0;

	createKeyboard(activeBoard, activeIndex);

	$('a').removeClass("active");
	$(this).find('a').addClass("active");

});



$('#rightArrow').on('click', function() {

	$("#leftArrow").attr('disabled', false);	

	activeIndex++;
	createKeyboard(activeBoard, activeIndex);
	
	if (activeIndex === keysLength-1) {
		$('#rightArrow').attr('disabled', true);	
	}

});



$('#leftArrow').on('click', function () {

	$('#rightArrow').attr('disabled', false);

	activeIndex--;
	createKeyboard(activeBoard, activeIndex);

	if (activeIndex === 0) {
		$('#leftArrow').attr('disabled', true);
	}

});



function createKeyboard(section, keyboardIndex){
	var currentBoard = boards[section].keyboard[keyboardIndex];
	var htmlKeyboard = '';
	//sould be 90
	for(var index = 0; index < 30; index++){
		htmlKeyboard += '<button>'+currentBoard[index]+'</button>';
	}

	$('.keyboard').html(htmlKeyboard);

	registerClickEvent();
}



var input = $('#inputField');
var caretPos = $('#inputField').selectionStart;

function registerClickEvent () {

	$('.active-board button').on('click', function () {

		var textAreaTxt = $('#inputField').val();
		var character = $(this).text();

		// input.val(input.val() + text);
		
    	$('#inputField').val(textAreaTxt.substring(0, caretPos) + character + textAreaTxt.substring(caretPos) );
    	
});

}



$('#clear').on('click', function() {
	$(input).val('');

});


$('#space').on('click', function() {
	$(input).val($(input).val() + ' ');

});

//button hover states
//copy functionality
//cached main page
//keybaord placement indicators
//bug with manual placement of cursor
//nav dropdown for more keyboards
