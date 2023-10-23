var tablinks = document.getElementsByClassName("tab-links");
var tabcontents =document.getElementsByClassName("tab-contents");


function opentab(tabname){
    for(tablink of tablinks)
    {
        tablink.classList.remove("active-link");
    }
    
    for(tabcontent of tabcontents)
    {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}


/*--------------------Skills------------------*/
var skilltablinks = document.getElementsByClassName("skill-tab-links");
var skilltabcontents =document.getElementsByClassName("skill-tab-contents");
function openskilltab(skilltabname){
    for(skilltablink of skilltablinks)
    {
        skilltablink.classList.remove("skill-active-link");
    }
    
    for(skilltabcontent of skilltabcontents)
    {
        skilltabcontent.classList.remove("skill-active-tab");
    }
    event.currentTarget.classList.add("skill-active-link");
    document.getElementById(skilltabname).classList.add("skill-active-tab");
}

/*--------------------See more------------------*/
document.addEventListener("DOMContentLoaded", function() {
    const moreContent = document.getElementById("see-more");
    const seeMoreButton = document.getElementById("see-more-button");
  
    seeMoreButton.addEventListener("click", function() {
      if (moreContent.style.display === "none") {
        moreContent.style.display = "block";
        seeMoreButton.textContent = "See Less";
      } else {
        moreContent.style.display = "none";
        seeMoreButton.textContent = "See More";
      }
    });
  });
  

/*--------------------Responsive mobile menu------------------*/
var mobmenus = document.getElementsByClassName("mobmenu");

function openmenu() {
  for (var i = 0; i < mobmenus.length; i++) {
    mobmenus[i].style.transform = 'translateX(-125px)';
  }
}

function closemenu() {
  for (var i = 0; i < mobmenus.length; i++) {
    mobmenus[i].style.transform = 'translateX(0px)';
  }
}

/*--------------------Contact form------------------*/
document.addEventListener("DOMContentLoaded", function() {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxt_LL6X4N_W2bY_1H_7UnWZ9gjBgNSnnprxYf2U2VbhjmqNTU-LZ85d7GBXe5O3y3CKw/exec';
    const form = document.forms['submit-to-google-sheet'];
    const msg= document.getElementById("msg")
  
    form.addEventListener('submit', e => {
      e.preventDefault();
      fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent"
            setTimeout(function(){
                msg.innerHTML=""},5000)
                form.reset()
            })
        })
        .catch(error => console.error('Error!', error.message));
    });
  