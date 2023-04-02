# hideUknownTweets

This script is designed to be used on Twitter's homepage to hide tweets from accounts that the user don't follow on scroll.

## Installation Instructions
### Chrome
#### [](https://github.com/sonvir249/hideUknownTweets#manualdevelopment)Manual/Development
1.  Clone this repo.
2.  In Chrome, open the Extensions settings. (Wrench button, Tools, Extensions.)
3.  On the Extensions settings page, click the "Developer Mode" checkbox.
4.  Click the now-visible "Load unpacked extension…" button. Navigate to the directory where you cloned the repo, and select the repo.
5.  The  _hideUknownTweets_  extension should now be visible in your extensions list.

## What does the script do?

The script targets Twitter's homepage and searches for tweets from accounts that the user may not wish to see. It hides these tweets by applying a style of "display: none" to the relevant HTML elements.

## How does the script work?

The script identifies the HTML elements that contain tweets by searching for the "cellInnerDiv" data-testid attribute. It then searches for links within these elements and extracts the href attribute value.

Using the href attribute value, the script creates a CSS selector and uses it to find the corresponding HTML element. It then dispatches a "mouseover" event on the element to trigger the appearance of the hover card.

Once the hover card appears, the script checks whether it contains the "Click to Follow" button and whether the account's href attribute matches the one previously extracted. If both conditions are met, the script applies the `display: none` style to both the hover card and the tweet element.

The script also includes an event listener that runs the function whenever the user scrolls on the page.

  

# Disclaimer

This script is provided for educational purposes only. Use at your own risk. The script may stop working if Twitter changes its HTML structure or if the user's browser is updated.

## Author and Licensing

[sonvir249](https://twitter.com/sonvir249)