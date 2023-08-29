---
layout: post
title: Calculator
description: Basic Calculator using online code following Build A Project Article
type: plans
type: hacks
courses: {csp: {week: 1}}
---

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator</title>
    <style>
        /* Add some basic styling to the calculator */
        body {
            font-family: Arial, sans-serif;
            text-align: center;
        }
        #calculator {
            width: 300px;
            margin: 100px auto;
            border: 3px solid #ccc;
            border-radius: 10px;
            padding: 20px;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
        }
        input[type="text"] {
            width: 100%;
            padding: 10px;
            margin-bottom: 10px;
            background-color: #161682;
            color: white;
        }
        input[type="button"] {
            width: 50px;
            height: 50px;
            font-size: 20px;
            margin: 5px;
            cursor: pointer;
            background-color: #008CBA;
            border-radius: 8px;
            border: 2px solid #008CBA;
            transition-duration: 0.4s;
            color: white;
        }
        input[type="button"]:hover {
            background-color: white; 
            color: black;
    }
    </style>
</head>
<body>
    <div id="calculator">
        <input type="text" id="display" readonly>
        <br>
        <input type="button" value="7" onclick="appendToDisplay('7')">
        <input type="button" value="8" onclick="appendToDisplay('8')">
        <input type="button" value="9" onclick="appendToDisplay('9')">
        <input type="button" value="/" onclick="appendToDisplay('/')">
        <br>
        <input type="button" value="4" onclick="appendToDisplay('4')">
        <input type="button" value="5" onclick="appendToDisplay('5')">
        <input type="button" value="6" onclick="appendToDisplay('6')">
        <input type="button" value="-" onclick="appendToDisplay('-')">
        <br>
        <input type="button" value="1" onclick="appendToDisplay('1')">
        <input type="button" value="2" onclick="appendToDisplay('2')">
        <input type="button" value="3" onclick="appendToDisplay('3')">
        <input type="button" value="+" onclick="appendToDisplay('+')">
        <br>
        <input type="button" value="C" onclick="clearDisplay()">
        <input type="button" value="0" onclick="appendToDisplay('0')">
        <input type="button" value="." onclick="appendToDisplay('.')">
        <input type="button" value="=" onclick="calculate()">
        <input type="button" value="*" onclick="appendToDisplay('*')">
    </div>
    <script>
        function appendToDisplay(value) {
            document.getElementById('display').value += value;
        }
        function clearDisplay() {
            document.getElementById('display').value = '';
        }
        function calculate() {
            const display = document.getElementById('display');
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = 'Error';
            }
        }
    </script>
</body>