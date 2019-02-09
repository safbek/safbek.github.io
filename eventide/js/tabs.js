function openTab(evt, item) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
    console.log(tabcontent)
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
    console.log(tablinks)
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(item).style.display = "block";
  evt.currentTarget.className += " active";
}

/*let closedText = document.querySelectorAll(".toogler_list_opened");

  for (let i = 0; i < closedText.length; i++) {
    closedText[i].style.display = "none";
  }*/

  let closedText = document.querySelector(".toogler_list_opened");
  for (let i = 0; i < closedText.length; i++) {
    closedText[i].style.display = "none";
  }

  let hiddenDescription = document.querySelectorAll(".description_hidden");
  for (let i = 0; i < hiddenDescription.length; i++) {
    hiddenDescription[i].style.display = "none";
  }

  function openText(evt, item) {

    for (i = 0; i < closedText.length; i++) {
      closedText[i].className = closedText[i].className.replace(" active", "");
      console.log(closedText)
    }

    let openText = document.querySelectorAll(".toogler_list_closed");

    document.getElementById(item).style.display = "block";
    document.getElementById(item).style.display = "none";
    evt.currentTarget.className += " active";
    console.log(openText)
  }





















  

/*let closedPlus = document.getElementById("toogler_list_closed");
let openedMinus = document.getElementById("toogler_list_opened");
let openedBlock = document.getElementsByClassName("description_hidden");

closedPlus.addEventListener("click", function(){
    closedPlus.style.display='none';
    openedMinus.style.display="block";
    openedBlock.style.display="block";
})

openedMinus.addEventListener("click", function(){
    openedMinus.style.display='none';
    closedPlus.style.display="block";
    openedBlock.style.display="none";
  })*/