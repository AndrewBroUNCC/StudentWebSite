//2 empty arrays
let person = []; 
let salaries = [];
let displayMessage = undefined;

/*
addSalary(), displayResults(), and displaySalary() and attach them 
to the click events of the buttons. 
*/

window.onload = function() 
{
    document.getElementById("employeeList").focus();
}


//3 functions line 29
function addSalary() 
{
    var personTest = document.getElementById("employeeList").value;
    var personSalary = document.getElementById("salaryInput").value;

    document.getElementById("display_property").innerHTML = ("");

    //test before pushing salary.
    personSalary = parseFloat(personSalary).toFixed(2);

    if (!isNaN(personSalary) && personSalary >= 0) 
    {
        salaries.push(personSalary);
        person.push(personTest);
    }
    else 
    {
        if( isNaN(personSalary) ) 
        {
            displayMessage = " Salary must be a number.";
        }
        else 
        {
            displayMessage = " Salary must not be negative.";
        }
        //================ * Need to displayMessage! * ============
        document.getElementById("display_property").innerHTML = ("<br><br><br><p>" + displayMessage + "</p>");
    }
    document.getElementById("employeeList").focus();
    //alert(personSalary); it WORKS!
}

function displayResults() 
{
    //salaries
    let avg = 0.0
    let highest = 0.0
    for(var i = 0; i < salaries.length; i++)
    {
        avg += parseFloat(salaries[i]);
        if(salaries[i] > highest)
        {
            highest = salaries[i];
        }
    }
    avg = avg / salaries.length;
    document.getElementById("display_property").innerHTML = ("<br><br><br><p>Highest: </p><p>" + highest + "</p><p>Avg: </p><p>" + avg + "</p>");
}

//line 14
function displaySalary() 
{
    document.getElementById("display_table").innerHTML = ("<thead><tr><th>Employee  </th><th>Salary  </th></tr></thead><tbody>");
    
    for(var i = 0; i < person.length; i++) 
    {
        document.getElementById("display_table").innerHTML += ("<tr><td>" + person[i] + '</td><td class="right" colspan="2">' + salaries[i] + "<td></tr>");
    }
    document.getElementById("display_table").innerHTML += ("<tbody>");
}
/*
Write a displayResults function(). It should derive the 
average salary and the highest from the array 
and then display the results in the div 
element with “results” as its id. To display 
the results, you need to add nodes to the
 DOM with the heading as an h2 element and the 
average and highest as <p> elements. The easiest
 way to do that is to use the innerHTML 
property as shown in figure 6-13 in your Murach’s book.
*/