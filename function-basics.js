function min(a, b) {
    return a < b ? a : b;
}

// same above as below

function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
}

ask(
    "Do you agree",
    function () { alert("You agreed."); },
    function () { alert("You canceled the execution."); }
);

// using arrow function:

ask(
    "Do you agree?",
    () => alert("You agreed."),
    () => alert("You canceled the execution.")
);