---
layout: post
title: Debugging
type: tangibles
courses: {csp: {week: 25}}
comments: true
---
Summary of debugging lecture and screenshots demonstrating how debugging could've been used to solve CPT project issues last trimester.
> The Issue
 - Our search feature was not displaying certain designs, especially those at the ends and without a value in the content column.
 - Example, after adding three designs to the database, all with the name design X, only two are displayed, and design 3, which doesn't have a value for content, is not. See screenshot below
 ![screenshot](../../../images/debugging_screenshots/screenshot 1.png)
 - What should've been displayed is the following
 ![screenshot](../../../images/debugging_screenshots/screenshot 2.png)

> The Solution, Then
 - This issue took a long time to debug, and involved inspecting both the backend and the frontend code
 - After testing with postman, issue was identified to be with the way frontend iterates through returned designs

## Debugging Issue
The following screenshots demonstrate how debugging could've been used to solve the aforementioned issue in a much quicker fashion
1. Backend
 - Lots of issues stemmed from backend, when debugging must start backend in debugging, variables are shown in the left bar under the fourth tab
![screenshot](../../../images/debugging_screenshots/screenshot 3.png)
2. Breakpoints
 - Breakpoints are set on backend at function that needs to be tested, in this case function that gets designs from database
![screenshot](../../../images/debugging_screenshots/screenshot 4.png)
3. Breakpoints
 - Breakpoints are set at fetch request and all potential outcomes to determine which outcome is entered by program
![screenshot](../../../images/debugging_screenshots/screenshot 5 + 6.png)
4. Run
 - Code is ran and stops at first breakpoint, then continue is pressed to debug backend
![screenshot](../../../images/debugging_screenshots/screenshot 7.png)
5. Backend
 - Backend is now able to be debugged as code stops at breakpoint set in backend
![screenshot](../../../images/debugging_screenshots/screenshot 8.png)
6. Data
 - Step through is repeated until return statement, where we can confirm that the backend has correctly retrieved all three designs
![screenshot](../../../images/debugging_screenshots/screenshot 9 + 10.png)
7. Data in Frontend
 - Data has been returned to frontend properly with all three designs after breakpoint in success logic allows us to view data
 - Confirms that issue is in processing of designs, not with backend or fetch
![screenshot](../../../images/debugging_screenshots/screenshot 11 + 12.png)