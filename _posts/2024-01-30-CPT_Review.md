---
layout: log
title: CPT Review
category: log
type: tangibles
courses: {csp: {week: 18}}
comments: true
---

## My Features
Within our CPT project, my main feature was creating an animation helper tool. This tool stored the values of the places where a user clicked on, then turned those positions into CSS animation code that fits wherever the code is pasted into. I also create the backend to store, create, update, and save designs that was later reused by other people's features.

# College Board Requirements
[College Board Requirements - Link](https://apcentral.collegeboard.org/media/pdf/ap-csp-student-task-directions.pdf)
#### I - Instructions for input from the user, a device, an online data stream, or file.
The animation feature created by me allows the user to input locations for the button to animate to. It does this by displaying a canvas that stores where the user clicks when the create animation button is clicked. This input it then used by the program to create an animation.

> 
 ![screenshot](../../../../../screenshot_1.png)

#### II - Use of at least one list (or other collection type) to represent a collection of data that is stored and used to manage program complexity and help fulfill the program’s purpose
The program stores the locations of where the user has clicked inside a list. This list is later used by the program to generate CSS which animates the button.

> 
 ![screenshot](../../../../../screenshot_2.png)

#### III - At least one procedure that contributes to the program’s intended purpose, where you have defined the procedure's name, return type (if necessary), and parameters

The function animationClick used by the program generates a CSS keyframe animation code based off of the provided parameter position, which is a list of the locations that the user has clicked on.

>
 ![screenshot](../../../../../screenshot_3.png)

#### IV - An algorithm that includes sequencing, selection, and iteration that is in the body of the selected procedure
The below procedure iterates through every element in the positions list, selects every other position, then sequences those and generates a keyframe animation.

> 
 ![screenshot](../../../../../screenshot_4.png)

#### V - Calls to your student-developed procedure
The program calls the animationClick function when the Create Animation button is pressed.

> 
 ![screenshot](../../../../../screenshot_5.png)

#### VI -  Instructions for output (tactile, audible, visual, or textual) based on input and program functionality
The program appends the keyframe animation to the existing button object and starts animation the button based upon prior user input. It also displays the keyframe CSS inside a textbox allowing for copy paste of code for use in other websites.

> 
 ![screenshot](../../../../../screenshot_6.png)