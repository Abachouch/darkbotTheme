$(document).ready(function () {

	document.getElementById('workSlider').style.width = (document.getElementsByClassName('work_item').length / 2 * 600) + 'px';

	$('#fullpage').fullpage({
		//Navigation
		menu: '#menu',
		lockAnchors: false,
		anchors: ['home', 'about', 'portfolio', 'services', 'team', 'contact'],
		navigation: false,
		navigationPosition: 'left',
		navigationTooltips: ['HOME', 'ABOUT', 'PORTFOLIO', 'SERVICES', 'OURTEAM', 'CONTACTUS'],
		showActiveTooltip: false,
		slidesNavigation: false,
		slidesNavPosition: 'bottom',

		//Scrolling
		css3: true,
		scrollingSpeed: 700,
		autoScrolling: true,
		fitToSection: true,
		fitToSectionDelay: 1000,
		scrollBar: false,
		easing: 'easeInOutCubic',
		easingcss3: 'ease',
		loopBottom: false,
		loopTop: false,
		loopHorizontal: true,
		continuousVertical: false,
		continuousHorizontal: false,
		scrollHorizontally: false,
		interlockedSlides: false,
		dragAndMove: false,
		offsetSections: false,
		resetSliders: false,
		fadingEffect: false,
		normalScrollElements: '',
		scrollOverflow: false,
		scrollOverflowReset: false,
		scrollOverflowOptions: null,
		touchSensitivity: 5,
		normalScrollElementTouchThreshold: 10,
		bigSectionsDestination: null,

		//Accessibility
		keyboardScrolling: true,
		animateAnchor: true,
		recordHistory: true,

		//Design
		controlArrows: true,
		verticalCentered: true,
		sectionsColor: [],
		paddingTop: '0px',
		paddingBottom: '40px',
		fixedElements: '',
		responsiveWidth: 1100,
		responsiveHeight: 0,
		responsiveSlides: false,
		parallax: false,
		parallaxOptions: {
			type: 'reveal',
			percentage: 62,
			property: 'translate'
		},

		//Custom selectors
		sectionSelector: '.section',
		slideSelector: '.slide',

		lazyLoading: true,

		//events
		onLeave: function (index, nextIndex, direction) {
			if (nextIndex == 1) {
				document.getElementById('heroVideo').play();
			}
		},
		afterLoad: function (anchorLink, index) {

			// navigationr
			var nav = document.getElementById('navList');
			$('#navList li').removeClass('active');
			nav.children[index - 1].classList.add('active');


		},
		afterRender: function () {},
		afterResize: function () {},
		afterResponsive: function (isResponsive) {},
		afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {},
		onSlideLeave: function (anchorLink, index, slideIndex, direction, nextSlideIndex) {}
	});

	//nav
	document.getElementById('navToggle').onclick = function () {
		document.getElementById('nav').classList.toggle('in');
	}
	document.querySelectorAll('#nav a').forEach(function(a) {
		a.addEventListener('click', function(){
			document.getElementById('nav').classList.toggle('in');
		});	
	});

	// works
	document.getElementById('myScrollbar').oninput = function () {
		document.getElementById('workWraper').scrollLeft = (document.getElementById('workWraper').scrollWidth - document.getElementById('workWraper').clientWidth) / 100 * this.value;
	}

});

var map;

function initMap() {
	// 33.7276246,-5.0156459
	var myLatLng = {
		lat: 33.7276246,
		lng: -5.0156459
	};
	map = new google.maps.Map(document.getElementById('map'), {
		center: myLatLng,
		zoom: 14
	});

	var marker = new google.maps.Marker({
		position: myLatLng,
		map: map,
		title: 'our agency'
	});
}