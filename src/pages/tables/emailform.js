import React ,{useState}from 'react';
import emailjs from 'emailjs-com';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function ContactUs() {
const [UserComment,setUserComment]=useState("");

function sendEmail(e) {
  e.preventDefault();
  
  emailjs.sendForm("service_ecdcn2u","template_vrmvuxf",
    e.target,"user_McDqW6dQoyvNxiXbQUolg")
    .then(() => {
      setUserComment("")
      alert('Sent!');
    }, (err) => {
      alert(JSON.stringify(err));
    });
}

return (
<div> 
  <form className="contact-form" onSubmit={sendEmail}>
    <div class="container">
      <div class="form-group">    
        <label>謝謝你的建議👍</label>
        <textarea name="message" value={UserComment} class="form-control" onChange={(e)=>setUserComment(e.target.value)}/>
      </div>
      <div class="form-group">    
        <input type="submit" value="Send" class="btn btn-primary" />
      </div>
    </div>
  </form>
</div>
);
}