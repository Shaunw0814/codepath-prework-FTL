# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's FTL Program. 

Submitted by: Shaun Wang

Time spent: 12 hours spent in total

Link to project: https://glitch.com/edit/#!/ash-sugar-resistance (code)
https://ash-sugar-resistance.glitch.me (Live Site)

## Required Functionality

The following **required** functionality is complete:

* [ ] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [ ] "Start" button toggles between "Start" and "Stop" when clicked. 
* [ ] Game buttons each light up and play a sound when clicked. 
* [ ] Computer plays back sequence of clues including sound and visual cue for each button
* [ ] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [ ] User wins the game after guessing a complete pattern
* [ ] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [ ] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [ ] Buttons use a pitch (frequency) other than the ones in the tutorial
* [ ] More than 4 functional game buttons
* [ ] Playback speeds up on each turn
* [ ] Computer picks a different pattern each time the game is played (optional checkmark allowing users to opt for random or not)
* [ ] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)

The following **additional** features are implemented:

- [ ] Introduced indicators that light up for user input (above the keys, light up as green)
- [ ] Added keybinds to the buttons that are also compatible with the game logic (works with the guessing process)
- [ ] Made random patterns an optional feature users can opt in/out of
- [ ] Added hearts that update according to mistakes left
- [ ] Piano keys light up only during game pattern playing the pattern, not user input
- [ ] Alert messages to inform user if they will be challenged against the Fur Elise piano pattern or a randomly generated pattern
- [ ] Defaulted pattern to Fur Elise unless specified by checkbox
- [ ] Checkbox unchecks upon reset (clicking stop, winning, and losing)
- [ ] Added GIF as background with a blur in center to help focus on instructions

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![](https://im.ezgif.com/tmp/ezgif-1-2d71592fc5.gif) 
![](https://im.ezgif.com/tmp/ezgif-1-aa3189588f.gif) 
![](https://im.ezgif.com/tmp/ezgif-1-44bdb5e293.gif) 
![](https://im3.ezgif.com/tmp/ezgif-3-2c95de4481.gif) 
<br/>
Gif captions listed below in order
<br/>
winning example with randomized (of size 3 to make gif short)
<br/>
example of losing with 3 lives
<br/>
example of buttons being clicked (with both mouse and numberkeys above alphabets that are keybinded)
<br/>
showing randomize option
<br/>
example of progressing with the right cues, both with mouse and numberkeys

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

https://stackoverflow.com/questions/6464592/how-to-align-entire-html-body-to-the-center

https://www.w3schools.com/howto/howto_css_center_button.asp

https://stackoverflow.com/questions/4502633/how-to-affect-other-elements-when-one-element-is-hovered

https://stackoverflow.com/questions/69899775/pointerdown-vs-onclick-what-is-the-difference

https://www.nicepng.com/maxp/u2q8y3o0i1a9i1t4/

https://fontmeme.com/pixel-fonts/      Used for pixel start/stop images

https://stackoverflow.com/questions/21590343/how-to-display-a-gif-fullscreen-for-a-webpage-background

https://www.w3schools.com/tags/att_input_type_checkbox.asp

https://www.w3schools.com/tags/att_input_type_checkbox.asp

https://stackoverflow.com/questions/8206565/check-uncheck-checkbox-with-javascript

https://melwinalm.medium.com/crcreating-keyboard-shortcuts-in-javascripteating-keyboard-shortcuts-in-javascript-763ca19beb9e

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
I ran into many challenges when creating this submission. All of them involve not being familiar with javascript and the different features and keywords javascript has to offer. For example, one of my additional features I had wanted to implement was attaching keybinds to my buttons so that it would be easier to use. However, I had no idea how to go about this idea. I overcame it with a lot of googling, trial and error, and testing till I got the rest keywords and commands and then implemented it to all the keys. Another challenge was adding the light indicators for user input and not only making the buttons glow. It was a visual change I wanted to make to improve the overall aesthetics but a problem was how I was gonna change one element when a button was clicked. Stack Overflow, Geeks for Geeks, and the rest of the internet helped me through these problems. There were also some HTML/CSS problems I ran into such as centering the text and stacking different classes/IDs together which sometimes caused unexpected results. Overall the challenges I was met with was because of my inexperience with HTML/CSS/Javascript band the lack of knowledge of what I can do with HTML/CSS/Javascript. Given more time, knowledge, and experience, I am sure I can overcome these challenges. I also did not know of this wonderful opportunity till the 21st so I was met with tight deadlines and so I could not add some of the more advanced ideas I had brewing in the back of my mind. Adding in a menu or more options/mobile view was something I could not pursue due to deadlines.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
With web development, what are the most current and widely used langauges? I have heard a lot about node.js, typescript, react, ruby on rails, and many more but I do not have much experience with any of these. During my development of this pre-work I had also encountered a problem where I wanted to run functions simultaneously but after searching around it had appeared that Javascript did not support this. I would love to learn some more advanced web development skills and techniques so I can make more complex and visually appealing products. Also when it comes to web development, generally how do people go about creating the mobile/vertical view of their websites? Is it something that is brainstormed completely seperate and are there any factors that should be kept in mind when doing so?

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
If I had a few more hours to work on this project, I would work on adding in more visual elements with JS backend attached to them so that the site would become more user friendly and change the alert messages to some extent (instead of a popup at the top of the page, it could be a rectangular message box that appears in the middle and the rest of the screen is sort of blurred so the user must acknowledge the message). Also given the nature of how the web is accessible both on desktop and mobile, implementing the mobile view was something I had wanted to do. With the current designs I have created, the formatting would not look good for mobile users. Another feature I wanted to add was probably more keys and piano key audios to sort of make a virtual piano. On that idea it would have been cool to make some sort of menu and store many piano songs where the user can try to play and memorize while playing my game. I also realized that it was not possible to play multiple tunes at once so the keybind feature I implemented could be something that is paired with chord audio if I had time to implement it.



## Interview Recording URL Link

[My 5-minute Interview Recording](https://www.veed.io/view/2e7cd465-f953-4b3a-bda6-5bb4e8172517)


## License

    Copyright [YOUR NAME]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
