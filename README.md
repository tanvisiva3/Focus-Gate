## Focus Gate


#### Description:
Focus Gate is a Chrome extension that helps students stay focused by blocking distracting websites until they correctly answer practice questions, transforming studying into a more rewarding and balanced experience.

#### How it works:

Focus Gate blocks websites you choose. Instagram and TikTok are blocked by default.
When you visit a blocked site, you are sent to a quiz.
Pick a subject and answer 5 questions correctly.
Your blocked sites unlock for 15 minutes.
When time is up, the sites are blocked again, including tabs that are still open.

## Getting Started

#### Dependencies
Google Chrome on a computer (desktop or laptop)
No accounts, build tools, or outside libraries are needed. 

#### Installing
Click the green Code button on this page, then Download ZIP.
Unzip the file. Inside is the folder that contains manifest.json.
No changes to the files are needed.

#### Executing program
Open chrome://extensions in Chrome.
Turn on Developer mode (top right).
Click Load unpacked and select the folder that contains manifest.json.
A welcome page opens. Click Open Settings to choose which sites to block.
Visit a blocked site, pick a subject, and answer the questions to unlock it.
Click the puzzle piece icon in the toolbar and pin Focus Gate to see its lock status.

#### Help

Chrome will not load the extension: make sure you selected the folder that directly contains manifest.json, not a folder above it.
Changes to a file do not show up: save the file, then click the reload icon on the Focus Gate card at chrome://extensions.
A site is not being blocked: open Settings and click Save, then try the site in a new tab. Enter sites as plain domains, like youtube.com. If
something seems broken: on the Focus Gate card at chrome://extensions, click service worker to see error messages from the background script.

#### Known limitations:
Works in Chrome on computers only, not on phones or other browsers.
Questions are shuffled, but the app does not remember which questions you have already seen.


## Questions and Content

The practice questions are SAT-style questions generated with Gemini and checked by hand by me. They are not official College Board material, and this project is not affiliated with or endorsed by College Board. The logo was made in Canva.

#### Authors

Tanvi Sivakumar 

#### Version History

1.0


Initial release (Congressional App Challenge submission)

#### License
This project is licensed under the [MIT] License. See the LICENSE file for details. 

#### AI Use Disclosure

This extension was developed with the assistance of two AI tools: Claude and Gemini.

Claude AI: Helped explain concepts related to JSON and Chrome extension development, debug parts of the code, and write the code for the welcome page and relock timer. The ideas behind these features were my own. I tested, debugged, and modified the generated code and fixed bugs in the unlock and relock methods.

Gemini: Generated practice questions, which I manually reviewed for accuracy and coded into the extension myself.

My original contributions: The concept, design, CSS, HTML, most portions of the JavaScript, logo (created in Canva), random question-shuffling functionality, and all testing and debugging were my own work.
