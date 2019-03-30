	var app = angular.module("calculator", []);
	app.controller("calculatorCtrl", CalculatorCtrl);

	function CalculatorCtrl(){

		this.result = 0;
		this.buttonClicked = function(button){
			this.selectedOperation = button;
		}

		this.getResult = function(){
			var number1 = parseFloat(this.input1);
			var number2 = parseFloat(this.input2);
			if(this.selectedOperation === '+'){
				this.result = number1 + number2;
			}else if(this.selectedOperation === '-'){
				this.result = number1 - number2;
			}else if(this.selectedOperation === '*'){
				this.result = number1 * number2;
			}else if(this.selectedOperation === '/'){
				this.result = number1 / number2;
			}
		}
	}