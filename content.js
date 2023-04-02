// Copy paste this script in console.
const hideTweets = () => {
	// Run script on twitter homepage
	if(window.location.href === 'https://twitter.com/home') {
		const cellInnerDivs = document.querySelectorAll("div[data-testid='cellInnerDiv']");
		for (let div = 0; div < cellInnerDivs.length; div++) {
			const linkTag = cellInnerDivs[div].getElementsByTagName('a');
			if(linkTag.length > 0) {
				const hrefValue = linkTag[0].getAttribute("href");
				if(hrefValue.length > 0) {
					const herfTag = "a[href='"+hrefValue+"']";
					const hrefElement = document.querySelectorAll(herfTag);
					// create a new mouseover event
					const mouseoverEvent = new MouseEvent('mouseover', {
						bubbles: true,
					    cancelable: true
					});


					// dispatch the event on the element
					hrefElement[0].dispatchEvent(mouseoverEvent);
					setTimeout(() => {
						const hoverCard = document.querySelectorAll("div[data-testid='HoverCard']");
						if(hoverCard.length > 0) {
							hoverCard.forEach(function(card) {
								const isFollow = card.innerHTML.includes('Click to Follow');
								const isHref = card.innerHTML.includes(hrefValue);
								card.style.display = "none";
								if(isFollow && isHref) {
									cellInnerDivs[div].style.display = "none";
								}
							});
						}
					}, "500");
				}
			}
		}
	}
}

// Hide tweets on page scroll.
window.addEventListener('scroll',(event) => {
	hideTweets();
    console.log('Hiding tweets...');
});
