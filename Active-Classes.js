/*
Hey there, I have created this code to automise front-end web development
This code automatically finds if there is two or one navigations with the same id in the project
Checks page URL and matches it with one or two of the button's href tag, then puts active class
for the matched elements.
*/

var found = 0;      //How many buttons href match the page URL
var mode;           //Storing if URL ends with char or just /, for ex "...index.html/"
var mobile;         //Storing first button ID 
var header;         //Storing second button ID

(function () {
    var lastPath = location.pathname.split('/').length;

    if (location.pathname.split('/')[lastPath - 1].length > 0) {
        var current = location.pathname.split('/')[lastPath - 1];
        mode = 1; //If URL ends with characters, not "/"
    } else {
        var current = location.pathname.split('/')[lastPath - 2];
        mode = 2; //If URL ends with "/"
    }

    var menuItems = document.querySelectorAll('#headernavigation li'); //Selecting all li elements that fell under list with id "headernavigation"
    var menuItemsAnchor = document.querySelectorAll('#headernavigation li a');
    for (var i = 0; i < menuItems.length; i++) {
        menuItems[i].classList.remove("active");
        if (menuItemsAnchor[i].getAttribute("href").indexOf(current) > 1) {
            found++;
            if (found == 1) {
                mobile = i;
            } else {
                header = i;
            }
        }
    }
    if (found == 1) { //If there was only one href match
        menuItems[mobile].className = "active";
    }
    if (found == 2) { //If there is two navigations (2 href matched URL)
        menuItems[mobile].className = "active";
        menuItems[header].className = "active";
    }
    if (found > 2) {  //If more than two href matched, for example root directory.
		var checker=menuItems.length/2; //Checking how many buttons were checked.
        if (menuItemsAnchor[0].getAttribute("href") == menuItemsAnchor[Math.floor(checker)].getAttribute("href")) {
            menuItems[0].className = "active"; //By default setting first button as a root button to active
            menuItems[menuItems.length / 2].className = "active"; //Second navigation first button as root - active
        } else {
            menuItems[0].className = "active"; //If there is only one navigation with requested ID - set first button to active.
        }
    }
})();


//SINGLE NAVIGATION

// (function () {
//     var lastPath = location.pathname.split('/').length;
//     if (location.pathname.split('/')[lastPath - 1].length > 0) {
//         var current = location.pathname.split('/')[lastPath - 1];
//     } else {
//         var current = location.pathname.split('/')[lastPath - 2];
//     }
//     var menuItems = document.querySelectorAll('#headernavigation li');
//     var menuItemsAnchor = document.querySelectorAll('#headernavigation li a');
//     for (var i = 0; i < menuItems.length; i++) {
//         menuItems[i].classList.remove("active");
//         if (menuItemsAnchor[i].getAttribute("href").indexOf(current) > 1) {
//             magic = i;
//             found++;
//         }
//     }
//     console.log(found);
//     if (found == 1) {
//         menuItems[magic].className = "active";
//     }
//     if (found > 2) {
//         menuItems[0].className = "active";
//     }
// })();


//DOUBLE NAVIGATION

// var found= 0;
// var mobile;
// var header;

// (function () {
//     var lastPath = location.pathname.split('/').length;

//     if (location.pathname.split('/')[lastPath - 1].length > 0) {
//         var current = location.pathname.split('/')[lastPath - 1];
//     } else {
//         var current = location.pathname.split('/')[lastPath - 2];
//     }

//     var menuItems = document.querySelectorAll('#primary-nav li');
//     var menuItemsAnchor = document.querySelectorAll('#primary-nav li a');
//     for (var i = 0; i < menuItems.length; i++) {
//         menuItems[i].classList.remove("active");
//         if (menuItemsAnchor[i].getAttribute("href").indexOf(current) > 1) {
//             found++;
//             if (found == 1) {
//                 mobile = i;
//             } else {
//                 header = i;
//             }
//         }
//     }
//     if (found == 2) {
//         menuItems[mobile].className = "active";
//         menuItems[header].className = "active";
//     }
//     if (found > 2) {
//         menuItems[0].className = "active";
//         menuItems[menuItems.length / 2].className = "active";
//     }
// })();