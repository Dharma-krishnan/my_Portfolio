//SHOW MENU
const showMenu=(toggleId,navId)=>{
    const toggle = document.getElementById(toggleId)
       nav=document.getElementById(navId)
      
       if(toggle && nav){
          toggle.addEventListener('click',()=>{
            nav.classList.toggle('show')
          });
       }
}
showMenu('nav_toggle','nav_menu')

/* ACTIVE AND REMOVE ACTIVE */ 
const navLink=document.querySelectorAll('.nav_link')
navLink.forEach(n=>n.classList.remove('active'))

function linkAction(){
    navLink.forEach(n=>n.classList.remove('active'))
    this.classList.add('active')

    const navMenu = document.getElementById('nav_menu')
    navMenu.classList.remove('show')

}
navLink.forEach(n=> n.addEventListener('click',linkAction))


// email js
const contactForm=document.getElementById('contact-form'),
      contactMessage=document.getElementById('contact-message')


const sendEmail =(e)=>{
 e.preventDefault()

//  serviceID -templateID -#form - publicKey

 emailjs.sendForm('service_8zxtwba','template_6bbgdvl','#contact-form','fBgAUH3Yz1J13uifV')
 .then(()=>{
 //show sent message
 contactMessage.textContent = 'Message sent successfully ✅'

 //remove messages after 5 seconds
      setTimeout(()=>{
          contactMessage.textContent =''
         },5000)

         //clear input fields
         contactForm.reset()
        },()=>{
          contactMessage.textContent ='message not sent (service error) ❌'
        })
} 

contactForm.addEventListener('submit',sendEmail)     
