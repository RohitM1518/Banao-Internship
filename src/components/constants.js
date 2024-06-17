import First from '../assets/first.png'
import Second from '../assets/second.png'
import Third from '../assets/third.png'
import FirstImg from '../assets/firstimg.png'
import SecondImg from '../assets/secondimg.png'
import ThirdImg from '../assets/thirdimg.png'
import FourthImg from '../assets/fourthimg.png'
import Group1 from '../assets/group1.png'
import Group2 from '../assets/group2.png'
import Group3 from '../assets/group3.png'
import Group4 from '../assets/group4.png'
import Calendar from '../assets/calendar.png'
import Location from '../assets/location.png'
import Job from '../assets/job.png'

const data = [
    {
      image: First,
      genre: "✍️ Article",
      title: "What if famous brands had regular fonts? Meet RegulaBrands!",
      content: "Artificial Intelligence (AI) is transforming industries at an unprecedented pace...",
      user: {
        avatar: FirstImg,
        name: " Sarthak Kamra"
      },
      views: 1200
    },
    {
      image: Second,
      genre: "🔬️ Education",
      title: "Tax Benefits for Investment under National Pension Scheme launched by Government",
      content: "Maintaining a healthy lifestyle is crucial for longevity and happiness. Here are 10 tips...",
      user: {
        avatar: SecondImg,
        name: "Sarah West"
      },
      views: 3400
    },
    {
      image: Third,
      genre: "🗓️ Meetup",
      title: "Finance & Investment Elite Social Mixer @Lujiazui",
      user: {
        avatar: ThirdImg,
        name: "Ronal Jones"
      },
      views: 2200,
      button:"Visit Website",
      buttonStyle:'text-red-500',
      date:'Fri, 12 Oct, 2018',
      dateImg:Calendar,
      location:'Ahmedabad, India',
      locationImg:Location
    },
    {
      genre: "🗓️ Meetup",
      title: "Software Developer",
      content: "Innovaccer Analytics Private Ltd.  Noida, India",
      user: {
        avatar: FourthImg,
        name: "Joseph Gray"
      },
      views: 2200,
      button:"Apply on Timesjobs",
      buttonStyle:'text-emerald-500',
      date:'Innovaccer Analytics Private Ltd.',
      dateImg:Job,
      location:'Noida, India',
      locationImg:Calendar
    },
    
  ];

  const users=[
    {
        avatar: Group1,
        name: "Leisure"
    },
    {
        avatar: Group2,
        name: "Activism"
    },
    {
        avatar: Group3,
        name: "MBA"
    },
    {
        avatar: Group4,
        name: "Philosophy"
    },
    
  ]
  
  export {data,users};
  