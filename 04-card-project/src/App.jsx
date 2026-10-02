import React from 'react'
import Card from './component/Card.jsx'
import User from './component/User.jsx'

const App = () => {
   
   const jobCards = [
  {
    id: 1,
    logo: "data:image/png;base64,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",
    companyName: "Google",
    jobTitle: "Frontend Developer",
    level: "Senior level",
    deadline: "5 days ago",
    jobType: "Full-time",
    price: "$120/hr",
    location:"California",
  },
  {
    id: 2,
    logo: "data:image/png;base64,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",
    companyName: "Infosys",
    jobTitle: "Web Developer",
    level: "Junior level",
    deadline: "2 days ago",
    jobType: "Full-time",
    price: "$45/hr",
    location: "Bangalore, Karnataka",
  },
  {
    id: 3,
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP2_5HxUYMxkl3AiZFcP4lBDjgMRv8d8uQ4nXU8OMOug&s=10",
    companyName: "Shopify",
    jobTitle: "UI Engineer",
    level: "Mid level",
    deadline: "3 days ago",
    jobType: "Part-time",
    price: "$80/hr",
    location: "Toronto, Ontario",
  },
  {
    id: 4,
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV9qO7bNkNikZBLmuADXHecef1Y9Y5-mAoU528VkI34g&s=10",
    companyName: "Zoho",
    jobTitle: "React Developer",
    level: "Junior level",
    deadline: "7 days ago",
    jobType: "Remote",
    price: "$55/hr",
    location: "Chennai, Tamil Nadu",
  },
  {
    id: 5,
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj7k7wLuvy_TigLlu-BNLvJLq02Cc3KpzjA-GsV0gI-w&s=10",
    companyName: "SAP",
    jobTitle: "JavaScript Developer",
    level: "Mid level",
    deadline: "1 day ago",
    jobType: "Hybrid",
    price: "$70/hr",
    location: "Berlin, Brandenburg",
  },
  {
    id: 6,
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJHDaiPfSMBTv-z2WFG0ZOGyoyJOKcOWbP1328RchFtQ&s=10",
    companyName: "Atlassian",
    jobTitle: "Full Stack Developer",
    level: "Senior level",
    deadline: "4 days ago",
    jobType: "Remote",
    price: "$110/hr",
    location: "Sydney, New South Wales",
  },
  {
    id: 7,
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv7MnwsBQsP4F7WPSEKn6qx5dD4FtBHl-iUwuvKJ6sWQ&s=10",
    companyName: "Flipkart",
    jobTitle: "AI Integration Developer",
    level: "Lead level",
    deadline: "6 days ago",
    jobType: "Contract",
    price: "$90/hr",
    location: "Hyderabad, Telangana",
  },
  {
    id: 8,
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs9KdNW_qQBbqutRCjHeQzFDPVsv7IuLAPL9duYOsXuw&s=10",
    companyName: "Careem",
    jobTitle: "Frontend Intern",
    level: "Entry level",
    deadline: "2 days ago",
    jobType: "Internship",
    price: "$25/hr",
    location: "Dubai, Dubai Emirate",
  },
  {
    id: 9,
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGWcLFrArmzd0Ev3nOOw78lzkEoikJwRxb6D-Rvy2KpQ&s=10",
    companyName: "Revolut",
    jobTitle: "React Engineer",
    level: "Senior level",
    deadline: "5 days ago",
    jobType: "Part-time",
    price: "$100/hr",
    location: "London, England",
  },
  {
    id: 10,
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQEB7KfnFU3uJgK4zEQl24r9KjqydLdbIwRdOuQsdD_Q&s=10",
    companyName: "Swiggy",
    jobTitle: "Web Performance Engineer",
    level: "Mid level",
    deadline: "8 days ago",
    jobType: "Freelance",
    price: "$85/hr",
    location: "Mysuru, Karnataka",
  },
];
console.log(jobCards)

  return ( 
      <div  style={{color:"white"}}className='parent'>

       {jobCards.map(function(elem,idx){
        console.log(idx)

        return <div key={idx}>
          <Card  logo={elem.logo} companyName={elem.companyName} jobTitle={elem.jobTitle} level={elem.level} deadline={elem.deadline} jobType={elem.jobType} price={elem.price} location={elem.location}/>
          </div>
       })}
       
       </div>

  ) 
}

export default App
