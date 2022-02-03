// ANIMATE
let body = document.querySelector('body');
let button = document.querySelector('button');
let arrBackground = ['rgba(255, 0, 0, 1)', 'rgba(0, 0, 255, 1)', 'rgba(0, 255, 0, 1)', 'rgba(255, 242, 0, 1)']

if (button) {
	button.addEventListener('click', function() {
		var i = 0;
		body.style.background = arrBackground[i];

		button.style.display = 'none';

		let timer = setInterval(function() {
			if (i == 4) {
				i = 0;
			} else {
				body.style.background = arrBackground[i];
				i++;
			}
		}, 1500)

		window.onkeydown = function(event) {
			if ( event.keyCode == 27 ) {
				setTimeout(function() {
					clearInterval(timer);
				}, 0);

				body.style.background = 'none';

				button.style.display = 'block';
			}
		};
	})
}
