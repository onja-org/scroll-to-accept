const terms = document.querySelector('.terms-and-conditions');
const button = document.querySelector('.accept');

const obCallback = payload => {
	// when the HR is 100% (1) on the screen, remove the disable attribute
	if (payload[0].intersectionRatio === 1) {
		// make the accept button clickable!
		button.disabled = false;
		ob.unobserve(terms.lastElementChild);
	}
};

// we create the observer, and give it an action
const ob = new IntersectionObserver(obCallback, {
	root: terms,
	threshold: 1,
});

// we say to him/her, if you see the terms.lastElementChild (hr), execture the action/function
ob.observe(terms.lastElementChild);
