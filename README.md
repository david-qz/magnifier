# Text Magnifier Tool

Here at Tech Interview Office Hours, we know that accessibility is an area in which we can all improve our skills as engineers. This is an exercise that will test your ability to build a common accessibility tool, a text magnifier.

## Product (The Ask)
As a person who has a hard time reading text on the screen, I want a tool that will allow me to hover my mouse over a part of some given piece of text in order to show a magnified portion of that text. I do not want to resize my text as a whole, as I want to preserve the original layout of the text.

## Engineering (The Task)
Create a sandbox React/Vue/Angular/etc. app that will format a string of text such that, when hovering over a specific character, will display somewhere an enlarged substring of text neighboring that character.

## Deliverables (The Feature)
MVP (Estimated time: 1-2 hours):
* Displays the text that is magnifiable on the screen, formatted to be indistinguishable from non-magnifiable text.
* Hovering over a character will show an h1-sized substring of text of that character plus the surrounding 3 characters on the left and the surrounding 3 characters on the right.

Stretch Goals (Estimated time: 1-2 days):
* Create an input box that will allow you to replace the sample text with an arbitrary string that will be magnifiable.
* Create an input box that will allow you to change the magnification length of the text to between 1-10 neighboring characters on each side of the hovered character.
* Create an input box that will allow you to change the size of the text to an arbitrary font size.
* Make the enlarged text appear either as a tooltip above the hovered character, or enlarge it in-line.
* Change the magnification type so that you can hover based on word and not by character.

## Example
![image](image.png)
https://tiohtextmagnifier.bjamba.repl.co/
