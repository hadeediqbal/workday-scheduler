var p = MindFusion.Scheduling;

//create a new calendar instance
var calendar = new p.Calendar(document.getElementById("calendar"));

calendar.theme = "blue";

calendar.selectionEnd.addEventListener(handleSelection);
calendar.headerClick.addEventListener(handleHeaderClick);

//visualize the calendar
calendar.render();
