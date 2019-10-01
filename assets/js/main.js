/*
	Miniport by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$nav = $('#nav');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('#nav a, .scrolly').scrolly({
			speed: 1000,
			offset: function() { return $nav.height(); }
		});

	setupModal();

})(jQuery);




function setupModal(){
	//Dictionary of Modal Descriptions and Links - Access ALT text of modal gallery image
	let modal_data = {
		"visual-sorting": {
			"title": "Visual Sorting",
			"description": "Synchronized and animated multiple sorting algorithms inline using generator functions and animation frames in plain Javascript.",
			"app-url": "https://alchammatg.github.io/",
			"repo-url": "https://github.com/alchammatg/visual-sorting-algorithms"
		},
		"lms-migration": {
			"title": "LMS Migration",
			"description": "Automated repetative tasks involved in migration of courses accross LMS platforms. Tasks include URL construction for pages and media, HTML formatting, and module organization and renaming.",
			"repo-url": "https://github.com/alchammatg/connect-canvas-migration-scripts"
		},
		"hypothesis-test": {
			"title": "Hypothesis Test",
			"description": "Using Pandas, detected the recession period in a GDP dataframe, then compared housing prices between university towns and other towns during the recession period.",
			"repo-url": "https://github.com/alchammatg/data-science/blob/master/recession-housing-ttest.ipynb"
		},
		"gateway-upgrade": {
			"title": "IoT Data Exporter Upgrade",
			"description": "Upgraded a Data Exporter which is part of a client’s iEMS by developing and integrating a GUI, automating configuration through the client server’s API, and developing an installable build of the project. Source-code is non-disclosable.",
		},
		"finance-app": {
			"title": "Finance Fullstack App",
			"description": "[No frontend yet // 3rd Party Example Above] * A platform for users to perform analysis on various currency pairs by using built-in functions with tunable variables. ",
			"repo-url": "https://github.com/alchammatg/fullstack-finalysis"
		},
		
	}
	// Modal Portfolio Images
	console.log(modal_data['visual-sorting']['app-url']);

	var modal = document.getElementById("myModal");

	// Get the image and insert it inside the modal - use its "alt" text to locate image data in dict
	var modalImg = document.getElementById("img01");
	var modalTitle = document.getElementById("modal-header-text");
	var modalDescription = document.getElementById("modal-description-text");
	var modalAppLink = document.getElementById("modal-app-link");
	var modalRepoLink = document.getElementById("modal-repo-link");


	var imgages = document.getElementsByClassName("gallery-image");
	for (x = 0; x < imgages.length; x++)
		imgages[x].onclick = function(){
			imgData = modal_data[this.alt.toString()];
			
			modalImg.src = this.src;
			modalTitle.innerHTML = imgData['title']
			modalDescription.innerHTML = imgData['description']
			buildModalLink(modalAppLink, imgData['app-url'])
			buildModalLink(modalRepoLink, imgData['repo-url'])

			function buildModalLink(link, url) {
				if (url != undefined) {
					link.href = url;
					link.style.display = 'inline'
				}
				else { link.style.display = "none"}
			}
			
			modal.style.display = "block";
	}

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() { 
	modal.style.display = "none";
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = closeModal;
		
	$(document).keyup(function(e) {
		if (e.key === "Escape") { // escape key maps to keycode `27`
			modal.style.display = "none";
	   }
   });
	
	function closeModal(event) {
		if (event.target == modal) {
		modal.style.display = "none";
		}
	}
}

