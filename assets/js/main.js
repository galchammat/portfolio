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
			"app-url": "https://alchammatg.github.io/visual-sorting-algorithms",
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
			"repo-url": "https://github.com/alchammatg/data-science/blob/master/introduction/ttest-project/recession-housing-ttest.ipynb"
		},
		"temperature-plot": {
			"title": "Temperature Extrema Plot",
			"description": "Using Pandas, detected the temperature extrema by day of the year between 2005 and 20014, and also detected record-breaking highs and lows in 2015. Range data is plotted as lines overlayed by a scatteplot of 2015 data.",
			"repo-url": "https://github.com/alchammatg/data-science/blob/master/data-visualization/plotting-project/temperature-extrema.ipynb"
		},
		"wildfire-plot": {
			"title": "Correlating Wildfires",
			"description": "Found and utilized data sources to answer the question: In British Columbia, is (wildfire size) more closely correlated to (precipitation volume) or (temperature)? Used a Scatter matrix to cross-examine correlations between the questioned variables.",
			"repo-url": "https://github.com/alchammatg/data-science/blob/master/data-visualization/final-project/fire_trends.ipynb"
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


	var images = document.getElementsByClassName("gallery-image");

	function addGalleryLogos(container, weburl, giturl) {
		container = container.childNodes[1];
		let lclass = 'glogo1'
		if (weburl != undefined) {
			//modify gallery look
			var aTag = document.createElement('a');
			aTag.setAttribute('class', lclass + " fas fa-play");
			aTag.setAttribute('target', "_blank");
			aTag.setAttribute('href', weburl);

			lclass = 'glogo2'
			container.appendChild(aTag)
		}
		if (giturl != undefined) {
			//modify gallery look
			var aTag = document.createElement('a');
			aTag.setAttribute('class',lclass + "  icon brands fa-github");
			aTag.setAttribute('target', "_blank");
			aTag.setAttribute('href', giturl);

			container.appendChild(aTag)
		}
	}

	for (x = 0; x < images.length; x++) {
		const container = images[x].parentElement.parentElement;
		const imgData = modal_data[images[x].alt.toString()];
		addGalleryLogos(container, imgData['app-url'], imgData['repo-url']);
		
		images[x].onclick = function(){
			const imgData = modal_data[this.alt.toString()];
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
	}

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() { 
	modal.style.display = "none";
	}

	// When the user clicks anywhere outside of the modal, close it
	var body = document.getElementsByTagName("BODY")[0];
	body.onclick = closeModal;
	body.ontouchend = closeModal;
		
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
} //Setup_Modal()

