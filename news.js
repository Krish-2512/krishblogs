const BaseUrl="https://coding-week-2024-api.onrender.com/api/data";
const type1 =document.querySelector(".type1");
const type2 =document.querySelector(".type2");
const type3 =document.querySelector(".type3");
const type4 =document.querySelector(".type4");
const head1 =document.querySelector(".head1");
const head2 =document.querySelector(".head2");
const head3 =document.querySelector(".head3");
const head4 =document.querySelector(".head4");
const auth2 =document.querySelector(".auth2");
const auth1 =document.querySelector(".auth1");
const auth3 =document.querySelector(".auth3");
const auth4 =document.querySelector(".auth4");
const blog1 =document.querySelector("#blog1");
const blog2 =document.querySelector("#blog2");
const blog3 =document.querySelector("#blog3");
const blog4 =document.querySelector("#blog4");
const blog5 =document.querySelector("#blog5");
const blog6 =document.querySelector("#blog6");

const getfacts= async() =>{
let promise =  await fetch(BaseUrl);
let data = await promise.json();
console.log(data[1]);

const img1 = document.querySelector("#skills");
    let newsrc1 = `${data[0].image}`;
    img1.src = newsrc1;
    img1.addEventListener('click',()=>{
       
        alert('CONTENT OF THE CHOSEN ARTICLE - '+`${data[0].content}`);
     })
    type1.innerText = data[0].type;
    date1=document.querySelector(".date1");
    date1.innerText= 'DATE~ '+ data[0].date;
    head1.innerText= data[0].headline;
    auth1.innerText= 'by '+data[0].author;




const img2 = document.querySelector("#cric");
 let newsrc2 = `${data[1].image}`;
 img2.src = newsrc2;
 img2.addEventListener('click',()=>{
       
    alert('CONTENT OF THE CHOSEN ARTICLE - '+`${data[1].content}`);
 })

 type2.innerText = data[1].type;
 date2=document.querySelector(".date2");
 date2.innerText= 'DATE~ '+ data[1].date;
 head2.innerText= data[1].headline;
 auth2.innerText= 'by '+data[1].author;




const img3 = document.querySelector("#qualification");
 let newsrc3 = `${data[2].image}`;
 img3.src = newsrc3;
 img3.addEventListener('click',()=>{
       
    alert('CONTENT OF THE CHOSEN ARTICLE - '+`${data[2].content}`);
 })
 type3.innerText = data[2].type;
 date3=document.querySelector(".date3");
 date3.innerText= 'DATE~ '+ data[2].date;
 head3.innerText= data[2].headline;
 auth3.innerText= 'by '+data[2].author;




 const img4 = document.querySelector("#soul");
     let newsrc4 = `${data[3].image}`;
     img4.src = newsrc4;
     img4.addEventListener('click',()=>{
       
        alert('CONTENT OF THE CHOSEN ARTICLE - '+`${data[3].content}`);
     })
 type4.innerText = data[3].type;
date4=document.querySelector(".date4");
date4.innerText= 'DATE~ '+ data[3].date;
head4.innerText= data[3].headline;
    auth4.innerText= 'by '+data[3].author;




}
getfacts();

const getthoughts = async()=>{
let response = await fetch(BaseUrl);
let data = await response.json();
console.log(data[4]);

const info1= document.querySelector('#info1');
info1.innerText= data[4].headline;
const dt1= document.querySelector('#dt1');
dt1.innerText= data[4].date;
 const web1 = document.querySelector("#web1");
      let newsrc1 = `${data[4].image}`;
      web1.src = newsrc1;
     blog1.addEventListener('click',()=>{
       
        alert('CONTENT OF THE CHOSEN ARTICLE - '+`${data[4].content}`);
     })


 const dt2= document.querySelector('#dt2');
 dt2.innerText= data[5].date;
const info2 = document.querySelector('#info2');
info2.innerText= data[5].headline;
 const web2 = document.querySelector("#web2");
      let newsrc2 = `${data[5].image}`;
     web2.src = newsrc2;
     blog2.addEventListener('click',()=>{
       
        alert('CONTENT OF THE CHOSEN ARTICLE - '+`${data[5].content}`);
     })

    
     const dt3= document.querySelector('#dt3');
     dt3.innerText= data[6].date;
     const info3= document.querySelector('#info3');
     info3.innerText= data[6].headline;
 const web3 = document.querySelector("#web3");
      let newsrc3 = `${data[6].image}`;
    web3.src = newsrc3;
     blog3.addEventListener('click',()=>{
       
        alert('CONTENT OF THE CHOSEN ARTICLE - '+`${data[6].content}`);
     })

     const dt4= document.querySelector('#dt4');
     dt4.innerText= data[7].date;
     const info4= document.querySelector('#info4');
info4.innerText= data[7].headline;
 const web4 = document.querySelector("#web4");
      let newsrc4 = `${data[7].image}`;
     web4.src = newsrc4;
     blog4.addEventListener('click',()=>{
       
        alert('CONTENT OF THE CHOSEN ARTICLE - '+`${data[7].content}`);
     })


     const dt5= document.querySelector('#dt5');
     dt5.innerText= data[8].date;
     const info5= document.querySelector('#info5');
info5.innerText= data[8].headline;
 const web5 = document.querySelector("#web5");
     let newsrc5 = `${data[8].image}`;
     web5.src = newsrc5;
     blog5.addEventListener('click',()=>{
       
        alert('CONTENT OF THE CHOSEN ARTICLE - '+`${data[8].content}`);
     })
  



     const dt6= document.querySelector('#dt6');
     dt6.innerText= data[9].date;
     const info6= document.querySelector('#info6');
info6.innerText= data[9].headline;
 const web6 = document.querySelector("#web6");
      let newsrc6 = `${data[9].image}`;
      web6.src = newsrc6;
     blog6.addEventListener('click',()=>{
       
        alert('CONTENT OF THE CHOSEN ARTICLE - '+`${data[9].content}`);
     })
     

     }


getthoughts();




