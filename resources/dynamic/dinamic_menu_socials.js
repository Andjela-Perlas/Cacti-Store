/*------------------------------------DINAMIC MENU----------------------------------*/

var menu = [
  {
    href: "index.html",
    content: "Home"
  },
 
  {
    href: "contact.html",
    content: "Contact"
  },
  {
    href: "about.html",
    content: "About Us"
  }
];
var list = "<ul class='main-nav'>";
for (var i = 0; i < menu.length; i++) {
  list+= "<li><a href='" + menu[i].href + "'>" + menu[i].content + "</li>";
}

list += "</ul>";
document.querySelector(".dropdown-content").innerHTML = list; 



/*-----------------------------------------DINAMIC SOCIAL ICONS---------------------------------------------*/


var socials = [
  {
    href: "http://www.facebook.com/",
    icon: "ion-social-facebook"
  },
  {
    href: "http://www.twitter.com/",
    icon: "ion-social-twitter"
  },
  {
    href: "http://www.pinterest.com/",
    icon: "ion-social-pinterest"
  },

  {
    href: "http://www.instagram.com/",
    icon: "ion-social-instagram"
  }
 
];
var list = "<ul class='social-icons'>";
for (var i = 0; i < socials.length; i++) {
  list+= "<li><a href='" + socials[i].href + "'><i class='" + socials[i].icon + "'></i></a></li>";
}

list += "</ul>";
document.querySelector(".icons").innerHTML = list; 


