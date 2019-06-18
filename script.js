window.onload = ()=> {
	

	document.querySelector('.input input[type="text"]').focus();

	let shirtTypes = document.querySelector('.themes select');


	shirtTypes.addEventListener('change', (event)=> {

		if(document.getElementsByClassName('t-shirt-info').length === 2) {

			let t_shirt_color = document.createElement('DIV');

			t_shirt_color.className = "t-shirt-info";

			document.querySelector('.form-container form').appendChild(t_shirt_color);

			let label = document.createElement('label');

			label.innerHTML = "Color:";

			t_shirt_color.appendChild(label);

			// make select input for colors
 		
 		
			let colors_select = document.createElement('SELECT');

			let colors = ['Orange' , 'Blue'];

			for(let i = 0; i < colors.length; i++) {
				let colorOption = document.createElement('OPTION');
				colorOption.textContent = colors[i];
				colors_select.appendChild(colorOption);
			}

			t_shirt_color.appendChild(colors_select);

			document.querySelector('.form-container form').insertBefore(t_shirt_color, document.querySelector('.form-container .t-shirt-info + hr'));
		}

	});


	let checkboxes = document.querySelectorAll('.activities div input');
	let price = 0;
	for(let i = 0; i < checkboxes.length; i++) {
			checkboxes[i].addEventListener('click', function() {
			if(checkboxes[i].checked == true) {
				price += parseInt(document.querySelector("#"+this.id +" + span").textContent);
				let cost = document.querySelector('#cost');
			}else {
				price -= parseInt(document.querySelector("#"+this.id +" + span").textContent);
				let cost = document.querySelector('#cost');
			}
			cost.textContent = price;
		});
	}



	// let paymentForm = document.querySelector('.payment form');

	let paymentSelector = document.querySelector('#paymentSelector');
	
	paymentSelector.addEventListener('change', (event)=> {
		let paymentMessage = document.querySelector('#paymentMessage');
		let optionText = paymentSelector.options[paymentSelector.selectedIndex].textContent ;

		if(optionText === 'Credit Card') {

			document.querySelector('#credit-info').style.display = 'block';
			paymentMessage.textContent = "";

		}else if(optionText === 'Paypal') {
			document.querySelector('#credit-info').style.display = 'none';
			paymentMessage.textContent = "If you selected the PayPal option we'll take you to Paypal's site to set up your billing information, when you click “Register” below.";
		}else {
			document.querySelector('#credit-info').style.display = 'none';
			paymentMessage.textContent = "If you selected the Bitcoin option we'll take you to the Coinbase site to set up your billing information. Due to the nature of exchanging Bitcoin, all Bitcoin transactions will be final.";
		}

	});
};






