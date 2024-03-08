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
1. Start Backend using debugging
 - Lots of issues stemmed from backend, when debugging must start backend in debugging, variables are shown in the left bar under the fourth tab
![screenshot](../../../images/debugging_screenshots/screenshot 3.png)
2. Set break point at the beginning of endpoint code
 - Breakpoints are set on backend at function that needs to be tested, in this case function that gets designs from database
![screenshot](../../../images/debugging_screenshots/screenshot 4.png)
3. Start in frontend with split screen loading source for an API fetch using GET.
4. Set break point on fetch, inside .then, inside .fetch
 - Breakpoints are set at fetch request and all potential outcomes to determine which outcome is entered by program
![screenshot](../../../images/debugging_screenshots/screenshot 5 + 6.png)
5. Run frontend, screen capture break at fetch while examining Body
 - Code is ran and stops at first breakpoint, then continue is pressed to debug backend
 - Debugging GET request, therefore no body is sent to backend
![screenshot](../../../images/debugging_screenshots/screenshot 7.png)
6. Press play on frontend, observe stop inside of backend
 - Backend is now able to be debugged as code stops at breakpoint set in backend
![screenshot](../../../images/debugging_screenshots/screenshot 8.png)
7. Press step over on backend until you have obtained data from database, screen capture Python Object
8. Press play button to end backend debugging session.
 - Step through is repeated until return statement, where we can confirm that the backend has correctly retrieved all three designs
 - Step Through is in blue, repeated from previous screenshot until current
 - Play button is in green
 - Data underscored in blue, see three designs being returned
![screenshot](../../../images/debugging_screenshots/screenshot 9 + 10.png)
9. Return to frontend debug session
10. Step in until you see data, screen capture capturing break point and Data.
 - Data has been returned to frontend properly with all three designs after breakpoint in success logic allows us to view data
 - Confirms that issue is in processing of designs, not with backend or fetch
![screenshot](../../../images/debugging_screenshots/screenshot 11 + 12.png)