var $button = $('<button>');
var $display = $('<div>');
var $container = $('.container');
$button.html('Hit the Jackpot!');

$container.append($button);
$container.append($display);

var getRandomNumber = function (max, min) {
    return Math.round(Math.random() * (max - min) + min);
};  

var lottoOutput = function () {
        var numberRow = "";
        numberRow += '<span class="round">' + getRandomNumber(99, 1) + " "; 
        numberRow += '<span class="round">' + getRandomNumber(99, 1) + " "; 
        numberRow += '<span class="round">' + getRandomNumber(99, 1) + " "; 
        numberRow += '<span class="round">' + getRandomNumber(99, 1) + " "; 
        numberRow += '<span class="round">' + getRandomNumber(99, 1) + " "; 
        numberRow += '<span class="round">' + getRandomNumber(49, 1) + " "; 
        numberRow += '<br>';       
        numberRow += '<span class="round">' + getRandomNumber(99, 1) + " "; 
        numberRow += '<span class="round">' + getRandomNumber(99, 1) + " "; 
        numberRow += '<span class="round">' + getRandomNumber(99, 1) + " "; 
        numberRow += '<span class="round">' + getRandomNumber(99, 1) + " "; 
        numberRow += '<span class="round">' + getRandomNumber(99, 1) + " "; 
        numberRow += '<span class="round">' + getRandomNumber(49, 1) + " "; 
        numberRow += '<br>'; 
        numberRow += '<span class="round">' + getRandomNumber(99, 1) + " "; 
        numberRow += '<span class="round">' + getRandomNumber(99, 1) + " "; 
        numberRow += '<span class="round">' + getRandomNumber(99, 1) + " "; 
        numberRow += '<span class="round">' + getRandomNumber(99, 1) + " "; 
        numberRow += '<span class="round">' + getRandomNumber(99, 1) + " "; 
        numberRow += '<span class="round">' + getRandomNumber(49, 1) + " "; 
        numberRow += '<br>'; 
        
       
        $display.html(numberRow);
        
        var arrOfText = $display.text().split(' ');
        $display.html(' ');
        arrOfText.forEach(function (value) {
	        var $span = $('<span class="round"></span>');
	        $span.text(value);
	        $display.append($span);           
        });
    
          
    };


$button.on('click', lottoOutput);


          
               
              








 
    

















        
    

