---
layout: log
title: Web Programming Basics Log
category: log
description: Review ticket for web programming basics
type: tangibles
courses: {csp: {week: 5}}
comments: true
---

> HTML
- 
- For the first article, I decided to simply to follow the described hacks but explore more and continue to practice CSS
- Team did not fully decide on path of passion project so I am simply following my own here
    - Add animated title with changing color
    - Used other CSS elements to make it look nice
    - Added a line of JS to make the button link to somewhere else
- Errors
    - Originally did not name div for title
        - Resulted in animation and properties applying to every element on the page (very wonky)
        - Tried setting to headers only, but still applied to too many elements
        - Finally figured out how to name CSS blocks to only apply to one
    - Recommended to remove CSS at top and use inline CSS
        - Was able to do this for nearly all CSS, but keyframes cannot be done inline
            - As a result, style block at the top still exists, resulting to two heads, as the animation could not be done inline
        - Successfully removed second body element, so there is only one body element on the page

> JavaScript
- 
- Continued to follow the provided hacks with modifications to explore more
- Added a form to input two numbers and compare
- Displayed in HTML element
- Errors
    - Would not display any text, with some help realized that I was trying to compare two strings, not two integers
    - Text box would always say that two numbers were equal
        - else statement at the end of the code block always ran, which overrided first two if statements

> Data Types
- 
- Chose to use cities instead of myself, otherwise followed hacks to demonstrate knowledge of content
- Again, chose to display as a text element instead of logging to console
    - After some research learned about pre element, which displayed in a code block to make object clear and easier to distinguish
- Challenge came in attempting to display object in a nice way
    - JSON.Stringify function worked well, but still displayed a mass of text
    - After reading documentation and more research, found the correct parameters to properly display on newlines, and make the object easier to read

> DOM/JavaScript with HTML
- 
- Instead of creating a button to swap the links and changed the text to swapped, I decided to instead alternate through links
    - Keeps with design, demonstrates knowledge of changing text in link
- Challenge was getting code to cycle through all the links, even though in this case it is just two, the code is made so it is easily expandable to more
    - Done with % modulo operation

> JS Debugging
- 
- Already did plenty of debugging in past hacks, but these were also good practice
- Changed all three cells to display arrays in an HTML cell instead of logging to console for convenience and to make output viewable on blog
- Fixed all code in cells
- Took on challenge in first cell of not having to type out the whole alphabet in an array
    - After researching replacements for python ord function found fromCharCode function and successfully did that
- Errors
    - The code would often not show up, and nothing I found online could help, till I realized that errors were being outputted to console
        - Because I was not using console and displaying as an HTML element, I didn't see the error
        - Usage of let statements gave error that the variable was already declared
            - Had to remove let statements and only have each code once, I thought I was supposed to have it multiple times
    - Cells were overriding each other, realized that I could only repeat each cell id once
        - Another instance of not remembering that variables and ids from different cells carry over and I have to use a different ID for each div element