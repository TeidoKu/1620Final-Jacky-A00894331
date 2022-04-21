// contact list, don't change this.
const contactsList = [
  {
    name: "Togusa",
    phone: "555 555-5555",
    image: "togusa.png",
    email: "togusa@secnine.com",
    ID: "0"
  },
  {
    name: "Tachikoma",
    phone: "555 555-5555",
    image: "tachikoma.png",
    email: "tachikoma@secnine.com",
    ID: "1"
  },
  {
    name: "Saito",
    phone: "555 555-5555",
    image: "saito.png",
    email: "saito@secnine.com",
    ID: "2"
  },
  {
    name: '"major" Motoko',
    phone: "555 555-5555",
    image: "motoko.png",
    email: "motoko@secnine.com",
    ID: "3"
  },
  {
    name: "Ishikawa",
    phone: "555 555-5555",
    image: "ishikawa.png",
    email: "ishikawa@secnine.com",
    ID: "4"
  },
  {
    name: "Batou",
    phone: "555 555-5555",
    image: "batou.png",
    email: "batou@secnine.com",
    ID: "5"
  },
  {
    name: "Aramaki",
    phone: "555 555-5555",
    image: "aramaki.png",
    email: "aramaki@secnine.com",
    ID: "6"
  },
]

// Your code goes here

const allcontactbox = document.getElementById("display_all_contacts")

for(i=0; i < Object.keys(contactsList).length; i++){
  allcontactbox.appendChild(document.createElement("div"))
}

const childDivArr= allcontactbox.querySelectorAll('div')
for(i=0; i < childDivArr.length; i++){
  childDivArr[i].appendChild(document.createElement("img"))
  childDivArr[i].appendChild(document.createElement("p"))
  if(contactsList[i].name== '"major" Motoko'){
    childDivArr[i].querySelector("img").setAttribute('src','./img/motoko.png')
  }else{
    childDivArr[i].querySelector("img").setAttribute('src','./img/'+contactsList[i].name.toLocaleLowerCase() +'.png')
  }
  childDivArr[i].querySelector("p").innerText = contactsList[i].name
}


function pullupSingle(){



}