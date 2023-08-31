---
title: JavaScript JQuery
layout: post
description: Using JQuery to display a menu for a table.
courses: {csp: {week: 2}}
type: hacks
---
<head>
    <!-- load jQuery and DataTables output style and scripts -->
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.13.4/css/jquery.dataTables.min.css">
    <script type="text/javascript" language="javascript" src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script>var define = null;</script>
    <script type="text/javascript" language="javascript" src="https://cdn.datatables.net/1.13.4/js/jquery.dataTables.min.js"></script>
</head>

> Here is a custom table for the hacks following the JavaScript JQuery article, and a custom table. While markdown tables are easier to input data into and more condense, HTML tables provide more customizability and the potential for JavaScript addition. The usage of JavaScript allows for searching inside large tables and allows large tables to be displayed in a less cluttery manner, as well as for sorting.

<!-- Body contains the contents of the Document -->
<body>
    <table id="demo" class="table">
        <thead>
            <tr>
                <th>State</th>
                <th>Capital</th>
                <th>Population</th>
                <th>Largest City</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>California</td>
                <td>Sacramento</td>
                <td>39,538,223</td>
                <td>Los Angeles</td>
            </tr>
            <tr>
                <td>Texas</td>
                <td>Austin</td>
                <td>29,145,505</td>
                <td>Houston</td>
            </tr>
            <tr>
                <td>Florida</td>
                <td>Tallahassee</td>
                <td>22,244,823</td>
                <td>Miami</td>
            </tr>
            <tr>
                <td>New York</td>
                <td>Albany</td>
                <td>19,677,151</td>
                <td>New York City</td>
            </tr>
            <tr>
                <td>Pennsylvania</td>
                <td>Harrisburg</td>
                <td>12,972,008</td>
                <td>Philadelphia</td>
            </tr>
            <tr>
                <td>Illinois</td>
                <td>Springfield</td>
                <td>12,582,032</td>
                <td>Chicago</td>
            </tr>
            <tr>
                <td>Ohio</td>
                <td>Columbus</td>
                <td>11,756,058</td>
                <td>Columbus</td>
            </tr>
            <tr>
                <td>Georgia</td>
                <td>Atlanta</td>
                <td>10,912,876</td>
                <td>Atlanta</td>
            </tr>
            <tr>
                <td>North Carolina</td>
                <td>Raleigh</td>
                <td>10,698,973</td>
                <td>Charlotte</td>
            </tr>
            <tr>
                <td>Michigan</td>
                <td>Lansing</td>
                <td>10,034,113</td>
                <td>Detroit</td>
            </tr>
            <tr>
                <td>New Jersey</td>
                <td>Trenton</td>
                <td>9,261,699</td>
                <td>Newark</td>
            </tr>
            <tr>
                <td>Virginia</td>
                <td>Richmond</td>
                <td>8,683,619</td>
                <td>Virginia Beach</td>
            </tr>
            <tr>
                <td>Washington</td>
                <td>Olympia</td>
                <td>7,785,786</td>
                <td>Seattle</td>
            </tr>
            <tr>
                <td>Arizona</td>
                <td>Phoenix</td>
                <td>7,359,197</td>
                <td>Phoenix</td>
            </tr>
            <tr>
                <td>Tennessee</td>
                <td>Nashville</td>
                <td>7,051,339</td>
                <td>Memphis</td>
            </tr>
            <tr>
                <td>Massachusetts</td>
                <td>Boston</td>
                <td>6,981,974</td>
                <td>Boston</td>
            </tr>
            <tr>
                <td>Indiana</td>
                <td>Indianapolis</td>
                <td>6,833,037</td>
                <td>Indianapolis</td>
            </tr>
            <tr>
                <td>Missouri</td>
                <td>Springfield</td>
                <td>6,177,957</td>
                <td>Saint Louis</td>
            </tr>
            <tr>
                <td>Maryland</td>
                <td>Annapolis</td>
                <td>6,164,660</td>
                <td>Baltimore</td>
            </tr>
            <tr>
                <td>Wisconsin</td>
                <td>Madison</td>
                <td>5,892,529</td>
                <td>Milwaukee</td>
            </tr>
            <tr>
                <td>Colorado</td>
                <td>Denver</td>
                <td>5,839,926</td>
                <td>Denver</td>
            </tr>
            <tr>
                <td>Minnesota</td>
                <td>Saint Paul</td>
                <td>5,717,184</td>
                <td>Minneapolis</td>
            </tr>
            <tr>
                <td>South Carolina</td>
                <td>Charleston</td>
                <td>5,282,634</td>
                <td>Greenville</td>
            </tr>
            <tr>
                <td>Alabama</td>
                <td>Montgomery</td>
                <td>5,074,296</td>
                <td>Huntsville</td>
            </tr>
            <tr>
                <td>Louisiana</td>
                <td>Baton Rouge</td>
                <td>4,590,241</td>
                <td>New Orleans</td>
            </tr>
            <tr>
                <td>Kentucky</td>
                <td>Frankfort</td>
                <td>4,512,310</td>
                <td>Louisville</td>
            </tr>
            <tr>
                <td>Oregon</td>
                <td>Salem</td>
                <td>4,240,137</td>
                <td>Portland</td>
            </tr>
            <tr>
                <td>Oklahoma</td>
                <td>Oklahoma City</td>
                <td>4,019,800</td>
                <td>Oklahoma City</td>
            </tr>
            <tr>
                <td>Connecticut</td>
                <td>Hartford</td>
                <td>3,626,205</td>
                <td>Bridgeport</td>
            </tr>
            <tr>
                <td>Utah</td>
                <td>Salt Lake City</td>
                <td>3,380,800</td>
                <td>Salt Lake City</td>
            </tr>
            <tr>
                <td>Iowa</td>
                <td>Des Moines</td>
                <td>3,200,517</td>
                <td>Portland</td>
            </tr>
            <tr>
                <td>Nevada</td>
                <td>Carson City</td>
                <td>3,177,172</td>
                <td>Las Vegas</td>
            </tr>
            <tr>
                <td>Arkansas</td>
                <td>Little Rock</td>
                <td>3,045,637</td>
                <td>Little Rock</td>
            </tr>
            <tr>
                <td>Mississippi</td>
                <td>Jackson</td>
                <td>2,940,057</td>
                <td>Jackson</td>
            </tr>
            <tr>
                <td>Kansas</td>
                <td>Topeka</td>
                <td>2,937,150</td>
                <td>Kansas City</td>
            </tr>
            <tr>
                <td>New Mexico</td>
                <td>Santa Fe</td>
                <td>2,113,344</td>
                <td>Albuquerque</td>
            </tr>
            <tr>
                <td>Nebraska</td>
                <td>Lincoln</td>
                <td>1,967,932</td>
                <td>Omaha</td>
            </tr>
            <tr>
                <td>Idaho</td>
                <td>Boise</td>
                <td>1,939,033</td>
                <td>Boise</td>
            </tr>
            <tr>
                <td>West Virginia</td>
                <td>Charleston</td>
                <td>1,775,156</td>
                <td>Charleston</td>
            </tr>
            <tr>
                <td>Hawaii</td>
                <td>Honolulu</td>
                <td>1,440,106</td>
                <td>Honolulu</td>
            </tr>
        </tbody>
    </table>
</body>

<!-- Script is used to embed executable code -->
<script>
    $("#demo").DataTable();
</script>