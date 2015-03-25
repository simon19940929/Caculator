$(function(){

	var currentText ='';
	var temp ='';
	var operator='';
	var equal='';

	$('#btn1').on('click',function(){
		if (currentText=='0') {
			currentText='';
		}
		if (currentText!=''&&temp==''&&operator==''&&equal!='') {
			// alert('C4');
			equal='';
			currentText='1';
			operator='';
			$('#message').text(currentText);
			currentText='';
		}
		currentText=currentText+'1';
		$('#message').text(currentText);
	})

	$('#btn2').on('click',function(){
		if (currentText=='0') {
			currentText='';
		}
		if (currentText!=''&&temp==''&&operator==''&&equal!='') {
			// alert('C4');
			equal='';
			currentText='2';
			operator='';
			$('#message').text(currentText);
			currentText='';
		}

		currentText=currentText+'2';
		$('#message').text(currentText);
	})
	$('#btn3').on('click',function(){
		if (currentText=='0') {
			currentText='';
		}

		if (currentText!=''&&temp==''&&operator==''&&equal!='') {
			// alert('C4');
			equal='';
			currentText='3';
			operator='';
			$('#message').text(currentText);
			currentText='';
		}
		currentText=currentText+'3';
		$('#message').text(currentText);
	})
	$('#btn4').on('click',function(){
		if (currentText=='0') {
			currentText='';
		}

		if (currentText!=''&&temp==''&&operator==''&&equal!='') {
			// alert('C4');
			equal='';
			currentText='4';
			operator='';
			$('#message').text(currentText);
			currentText='';
		}

		currentText=currentText+'4';
		$('#message').text(currentText);
	})
	$('#btn5').on('click',function(){
		if (currentText=='0') {
			currentText='';
		}

		if (currentText!=''&&temp==''&&operator==''&&equal!='') {
			// alert('C4');
			equal='';
			currentText='5';
			operator='';
			$('#message').text(currentText);
			currentText='';
		}

		currentText=currentText+'5';
		$('#message').text(currentText);
	})
	$('#btn6').on('click',function(){
		if (currentText=='0') {
			currentText='';
		}

		if (currentText!=''&&temp==''&&operator==''&&equal!='') {
			// alert('C4');
			equal='';
			currentText='6';
			operator='';
			$('#message').text(currentText);
			currentText='';
		}

		currentText=currentText+'6';
		$('#message').text(currentText);
	})
	$('#btn7').on('click',function(){
		if (currentText=='0') {
			currentText='';
		}

		if (currentText!=''&&temp==''&&operator==''&&equal!='') {
			// alert('C4');
			equal='';
			currentText='7';
			operator='';
			$('#message').text(currentText);
			currentText='';
		}

		currentText=currentText+'7';
		$('#message').text(currentText);
	})
	$('#btn8').on('click',function(){
		if (currentText=='0') {
			currentText='';
		}

		if (currentText!=''&&temp==''&&operator==''&&equal!='') {
			// alert('C4');
			equal='';
			currentText='8';
			operator='';
			$('#message').text(currentText);
			currentText='';
		}

		currentText=currentText+'8';
		$('#message').text(currentText);
	})
	$('#btn9').on('click',function(){
		if (currentText=='0') {
			currentText='';
		}

		if (currentText!=''&&temp==''&&operator==''&&equal!='') {
			// alert('C4');
			equal='';
			currentText='9';
			operator='';
			$('#message').text(currentText);
			currentText='';
		}

		currentText=currentText+'9';
		$('#message').text(currentText);
	})
	$('#btnc').on('click',function(){
		equal='';
		temp='';
		$('#message').text('0');
		currentText='';
		
	})
	$('#btn0').on('click',function(){
		if(currentText==''&&temp==''&&operator==''&&equal==''||currentText=='0'){
			currentText='0'
			// alert('C1');
		}else if (currentText!=''&&temp==''&&operator==''&&equal=='') {
			// alert('C2');
			currentText += '0';
			$('#message').text(currentText);
		}else if (currentText==''&&temp!=''&&operator!=''&&equal==''){
			// alert('C3');
			currentText += '0';
			$('#message').text(currentText);
		}else if (currentText!=''&&temp==''&&operator==''&&equal!='') {
			// alert('C4');
			equal='';
			currentText='0';
			operator='';
			$('#message').text(currentText);
			currentText='';
		}else if (currentText!=''&&temp!=''&&operator!=''&&equal==''){
			// alert('C5');
			currentText += '0';
			$('#message').text(currentText);
		}else{
			// alert('C6');
			currentText += '0';
			$('#message').text(currentText);

		}
		
			
	})
	$('#btnplus').on('click',function(){
		if(temp&&currentText!=''){
			$('#message').text( calculate(temp,currentText,operator) );
		}
		temp = currentText;
		currentText='';
		operator = '+';
		
	})
	$('#btnminus').on('click',function(){
		if(temp&&currentText!=''){
			$('#message').text( calculate(temp,currentText,operator) );
		}
		temp = currentText;
		currentText='';
		operator = '-';
	})
	$('#btnmul').on('click',function(){
		if(temp&&currentText!=''){
			$('#message').text( calculate(temp,currentText,operator) );
		}
		temp = currentText;
		currentText='';
		operator = '*';
	})
	$('#btndiv').on('click',function(){
		if(temp&&currentText!=''){
			$('#message').text( calculate(temp,currentText,operator) );
		}
		temp = currentText;
		currentText='';
		operator = '/';
	})
	$('#btnequal').on('click',function(){
		equal = 'hi';
		$('#message').text( calculate(temp,currentText,operator) );
		operator = '';
	})

	function calculate(num1,num2,operator){
		var result;
		num1 = parseInt(num1);
		num2 = parseInt(num2);
		switch (operator){
			case '+':
				result=num1+num2;
				break;
			case '-':
			    result=num1-num2;
			    break;
			case '*':
			    result=num1*num2;
			    break;
            case '/':
			    result=num1/num2;
			    break;
			default:
				return;
				break;
		}
		currentText = result;
		temp='';


		return result;

	}

});
