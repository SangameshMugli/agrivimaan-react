"use strict";(self.webpackChunkagrivimaann_app=self.webpackChunkagrivimaann_app||[]).push([[671],{5667:(e,s,a)=>{a.r(s),a.d(s,{default:()=>m});var t=a(5043),l=a(722),r=a(6818),n=a(6213),o=a(3401),c=(a(2342),a(3216)),i=a(579);const m=function(){(0,c.Zp)();const[e,s]=(0,t.useState)({name:"",email:"",phone:"",message:"",drone_type:"Drone Spray"}),[a,m]=(0,t.useState)(!1),[d,x]=(0,t.useState)({}),h=a=>{const{name:t,value:l}=a.target;let r=l;"email"===t?r=l.toLowerCase():t&&(r=l.charAt(0).toUpperCase()+l.slice(1).toLowerCase()),s({...e,[t]:r})};return(0,i.jsxs)("div",{id:"contact ",className:"font-para2",children:[(0,i.jsx)("div",{className:"relative ",children:(0,i.jsxs)("div",{className:"relative w-full h-[600px] ",children:[(0,i.jsx)("img",{src:r,alt:"Background",className:"absolute  w-full h-full bg-contain shadow-xl"}),(0,i.jsx)("h1",{className:"absolute font-extrabold  top-20 left-1/2 transform -translate-x-1/2 text-center text-xl md:text-2xl lg:text-5xl text-sky-600 ",children:"Contact Us"})]})}),(0,i.jsxs)("div",{className:"bg-white py-12 text-center  ",children:[(0,i.jsx)("div",{children:(0,i.jsx)("h2",{className:"text-blue-600 text-2xl font-extrabold",children:"CONTACT US"})}),(0,i.jsx)("div",{className:"text-3xl p-4 font-semibold",children:(0,i.jsx)("h1",{children:"AGRIVIMAAN Contact"})}),(0,i.jsxs)("div",{className:"flex flex-wrap py-8 justify-evenly px-4 ",children:[(0,i.jsxs)("div",{className:"bg-card border-2 rounded-2xl h-42 w-full sm:w-72 md:w-80 lg:w-96 flex flex-col items-center justify-center p-16 my-4 sm:my-2",children:[(0,i.jsx)("p",{className:"text-lg font-semibold",children:"AGRIVIMAAN Email"}),(0,i.jsx)("p",{className:"mt-2 text-lg font-thin",children:"info@agrivimaan.com"})]}),(0,i.jsxs)("div",{className:"bg-card border-2 rounded-2xl h-42 w-full sm:w-72 md:w-80 lg:w-96 flex flex-col items-center justify-center p-16 my-4 sm:my-2",children:[(0,i.jsx)("p",{className:"text-lg font-semibold",children:"AGRIVIMAAN Phone"}),(0,i.jsx)("p",{className:"mt-2 text-lg font-thin",children:"+91-8535460665, +91-7411377836, +91-7899991769"})]}),(0,i.jsxs)("div",{className:"bg-card border-2 rounded-2xl h-42 w-full sm:w-72 md:w-80 lg:w-96 flex flex-col items-center justify-center p-16 my-4 sm:my-2",children:[(0,i.jsx)("p",{className:"text-lg font-semibold",children:"AGRIVIMAAN Office Location"}),(0,i.jsx)("p",{className:"mt-2 text-lg font-thin",children:"Adarsha Colony, Sindhanur 584128"})]})]})]}),(0,i.jsxs)("div",{className:"bg-gradient-to-r from-blue1 to-red-400 w-full py-12",children:[(0,i.jsxs)("div",{className:"text-center mb-8 font-para2 px-4",children:[(0,i.jsx)("h2",{className:"text-blue-600 text-2xl md:text-3xl mb-2 font-semibold",children:"Let's Connect"}),(0,i.jsx)("h1",{className:"text-3xl md:text-4xl font-bold mb-4 text-white",children:"Get in touch"}),(0,i.jsx)("p",{className:"text-lg md:text-2xl mx-auto max-w-2xl text-white",children:"Our team of experts will be happy to provide you with detailed information, answer your questions, and discuss how our agri drone technology can benefit your specific needs."})]}),(0,i.jsxs)("form",{onSubmit:s=>{s.preventDefault(),(()=>{const s={};return e.name?e.name.length>100&&(s.name="Name cannot exceed 100 characters"):s.name="Name is Required",e.email?(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.email)||e.email.length>255)&&(s.email="please enter a valid email address"):s.email="Email is Required",e.phone?(e.phone.length>10||!/^\d+$/.test(e.phone))&&(s.phone="Phone number must be a maximum of 10 digits"):s.phone="Phone Number is Required",e.message||(s.message="Message is required"),e.drone_type||(s.drone_type="Please select a drone type"),e.agreedToEmails||(s.agreedToEmails="You must agree to receive personalized messages"),e.agreedToPrivacy||(s.agreedToPrivacy="You must agree to the Privacy Policy"),a||(s.captcha="Please select the CAPTCHA"),x(s),0===Object.keys(s).length})()&&a?n.A.post("http://localhost:5000/api/submit",e).then((s=>n.A.post("http://localhost:5000/api/send",e))).then((e=>{o.oR.success("Email sent successfully!"),window.location.reload()})).catch((e=>{e.response?(console.error("Error data:",e.response.data),o.oR.error(`Error: ${e.response.data.message||"An error occurred"}`)):e.request?(console.error("Error request:",e.request),o.oR.error("No response from server.")):(console.error("Error message:",e.message),o.oR.error("An unexpected error occurred."))})):o.oR.error("Please fix the errors in the form.")},className:"flex flex-col items-center bg-white text-black p-6 md:p-8 rounded-lg shadow-lg mx-4 md:mx-8 lg:mx-96",children:[(0,i.jsxs)("div",{className:"w-full mb-4",children:[(0,i.jsx)("input",{type:"text",name:"name",placeholder:"Name",className:"border-2 w-full py-2 px-4 rounded font-light",value:e.name,onChange:h}),d.name&&(0,i.jsx)("p",{className:"text-red-500 text-sm mt-1",children:d.name})]}),(0,i.jsxs)("div",{className:"w-full mb-4",children:[(0,i.jsx)("input",{type:"email",name:"email",placeholder:"Email",className:"border-2 w-full py-2 px-4 rounded",value:e.email,onChange:h}),d.email&&(0,i.jsx)("p",{className:"text-red-500 text-sm mt-1",children:d.email})]}),(0,i.jsxs)("div",{className:"w-full mb-4",children:[(0,i.jsx)("input",{type:"number",name:"phone",placeholder:"Phone",className:"border-2 w-full py-2 px-4 rounded",value:e.phone,onChange:h}),d.phone&&(0,i.jsx)("p",{className:"text-red-500 text-sm mt-1",children:d.phone})]}),(0,i.jsxs)("div",{className:"w-full mb-4",children:[(0,i.jsx)("textarea",{name:"message",placeholder:"Message",className:"border-2 w-full py-2 px-4 rounded",rows:"4",value:e.message,onChange:h}),d.message&&(0,i.jsx)("p",{className:"text-red-500 text-sm mt-1",children:d.message})]}),(0,i.jsxs)("div",{className:"w-full mb-4",children:[(0,i.jsx)("label",{htmlFor:"details",className:"block mb-2 text-lg font-medium",children:"Require details for*"}),(0,i.jsxs)("select",{name:"drone_type",id:"details",className:"border-2 w-full py-2 px-4 rounded",value:e.drone_type,onChange:h,children:[(0,i.jsx)("option",{value:"",children:"Select Drone Type"}),(0,i.jsx)("option",{value:"Drone Spray",children:"Drone Spray"}),(0,i.jsx)("option",{value:"Purchase",children:"Purchase a Drone"}),(0,i.jsx)("option",{value:"partner",children:"Become a Drone Partner"}),(0,i.jsx)("option",{value:"others",children:"Others"})]}),d.drone_type&&(0,i.jsx)("p",{className:"text-red-500 text-sm mt-1",children:d.drone_type})]}),(0,i.jsxs)("div",{className:"w-full mb-4 text-left",children:[(0,i.jsxs)("label",{className:"flex items-center mb-2 text-sm md:text-base",children:[(0,i.jsx)("input",{type:"checkbox",name:"agreedToEmails",className:"mr-2",checked:e.agreedToEmails,onChange:h}),"AgriVimaan may email and call me with personalized messages and event news."]}),d.agreedToEmails&&(0,i.jsx)("p",{className:"text-red-500 text-sm mt-1",children:d.agreedToEmails}),(0,i.jsxs)("label",{className:"flex items-center text-sm md:text-base",children:[(0,i.jsx)("input",{type:"checkbox",name:"agreedToPrivacy",className:"mr-2",checked:e.agreedToPrivacy,onChange:h}),"By providing the required details you acknowledge and provide your express consent that you have read the Privacy Policy as available on our website."]}),d.agreedToPrivacy&&(0,i.jsx)("p",{className:"text-red-500 text-sm mt-1",children:d.agreedToPrivacy})]}),(0,i.jsxs)("div",{className:"w-full mb-4",children:[(0,i.jsx)(l.A,{sitekey:"6LfcpiMqAAAAACjYR8NyjsWJOCmlc486vO3gr-vW",onChange:function(e){console.log("Captcha value:",e),m(!0)}}),d.captcha&&(0,i.jsx)("p",{className:"text-red-500 text-sm mt-1",children:d.captcha})]}),(0,i.jsx)("button",{type:"submit",className:"bg-blue-600 text-white py-2 px-4 rounded mt-4 w-full sm:w-96 font-button",disabled:!a,children:"SEND"})]}),(0,i.jsx)(o.N9,{})]})]})}},6818:(e,s,a)=>{e.exports=a.p+"static/media/contactbg.abd696a71c17a5c013d7.jpg"}}]);
//# sourceMappingURL=671.357688f2.chunk.js.map