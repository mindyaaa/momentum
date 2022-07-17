// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/

const h2 = document.querySelector("body h2");
const superEventHandler = {
  handleMouseOver: function () {
    h2.style.color = "#1abc9c";
    h2.innerText = "Mouse is here!";
  }

//   handleMouseLeave: function () {
//     h2.style.color = "#3498db";
//     h2.innerText = "Mouse is gone!";
//   },

//   handleResize: function () {
//     h2.style.color = "#9b59b6";
//     h2.innerText = "You just resized!";
//   },

//   handleMouseRight: function () {
//     h2.style.color = "#f39c12";
//     h2.innerText = "Mouse was a right click";
//   },
};

h2.addEventListener("mouseover", superEventHandler.handleMouseOver);
// h2.addEventListener("mouseleave", superEventHandler.handleMouseLeave);
// h2.addEventListener("resize", superEventHandler.handleResize);
// h2.addEventListener("contextmenu", superEventHandler.handleMouseRight);
