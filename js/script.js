//gets the data from the datafile
const contacts = users;

//Adds the number of contacts to the contact counter
const contactNumber = document.querySelector('h3');
contactNumber.innerText= 'Total: '+contacts.length;

//Adds the contact list from the datafile
const contactList = document.querySelector(".contact-list");

//Clears the list
contactList.innerHTML='';

//Adds the all the contacts from the datafile
for (let i = 0; i < users.length; i++) {
    contactList.innerHTML+='\n <li class="contact-item cf" itemnumber='+i+'>\n'+
                            '<div class="contact-details">\n' +
                            '<img class="avatar" src='+contacts[i].image +'>\n'+
                            '<h3>'+users[i].name +'</h3>\n'+
                            '<span class="email">'+emailmaker(users[i].name)+'</span>\n </div>\n'+
                            '<div class="joined-details">\n <span class="date">Joined '+users[i].joined+'</span>\n'+
                            '</div>\n '
  }
  
//Creates an email address from the user's name
function emailmaker(name){
    const myArray = name.split(" ")
    let email = myArray[0]+'.'+myArray[1]+'@example.com'
    return email
}

//the following is used to make a pagination that hides and shows a certain amount of users per page

//declaring variables
const contactItems = document.querySelectorAll(".contact-item")
const pageSelector = document.querySelector('.pagination');
const itemsPerPage=10
let currentPageValue=1


//Pagination calculation
const pageAmount= Math.ceil(contacts.length /itemsPerPage);
//create the pagination 
for(i=1;i<=pageAmount;i++){
    if(i==1){
        pageSelector.innerHTML+='<li><a class=active pageIndex='+i+'>'+i+'</a></li>'
    }else{
        pageSelector.innerHTML+='<li><a pageIndex='+i+'>'+i+'</a></li>'
    }
    
}
//this adds a click event to the pagination which which inturns allows the the function setActive to be used
const page=document.querySelectorAll("a");
page.forEach(p => {
    p.addEventListener("click",setActive)
});

//this function is used to to change the active page which is then 
//used to determine which users to show and hide
function setActive() {
  page.forEach(p => {
    p.classList.remove('active');
  });
  event.target.classList.add("active");
  page.forEach(p => {
    if (p.getAttribute('class')=='active') {
        currentPageValue=p.getAttribute('pageIndex')
    }
  });
  //hides and shows the users per page
  const rangeI = (currentPageValue -1 )*itemsPerPage;
  const rangeF = currentPageValue * itemsPerPage;
contactItems.forEach(c=> {
    c.classList.add("hidden");
    if (c.getAttribute('itemnumber')>=rangeI && c.getAttribute('itemnumber') <rangeF ) {
        c.classList.remove("hidden")
    }
});
}

//inital page opening only has 10 users showing
const rangeI = (currentPageValue -1 )*itemsPerPage;
const rangeF = currentPageValue * itemsPerPage;
contactItems.forEach(c=> {
    c.classList.add("hidden");
    if (c.getAttribute('itemnumber')>=rangeI && c.getAttribute('itemnumber') <rangeF ) {
        c.classList.remove("hidden")
    }
});



