import { useState } from "react";
import Edu_Card from "../components/Experience/Edu_Card";
import Exp_Card from "../components/Experience/Exp_Card";
// import Footer from "../components/Footer";
// import { useQuery } from "react-query";
// import axios from "axios";
// import { Skeleton } from "antd";
// import ParagraphSkeleton from "../components/Common/ParagraphSkeleton";
import Footer from "@/components/main/Footer";
import { useRouter } from 'next/router'

const eduCards = [
    {
        id: 0,
        title: 'FSU',
        degree: 'MS, Computer Science',
        detail: "Masters's Degree in Computer Science",
        year: '2022-2024'
    },
    {
        id: 0,
        title: 'Visvesvaraya Technological University (VTU)',
        degree: 'BS, Computer Science and Engineering',
        detail: "Bachelor’s Degree in Computer Science and Engineering",
        year: '2017-2021'
    },

]

const expCards = [
    {
        id: 0,
        title: 'FSU Office of Distance Learning',
        role: 'Assessment & Testing (Applacition Development)',
        url: '',
        desc: 'Developed a full stack proctor scheduling application product utilizing the tech stack Next JS, Python, Flask API, and MongoDB NoSQL technology to improve resource allocation by 50% in the testing and assessment office.',
        year: 'October 2023 – May 2024',
        location: 'Tallahassee, FL, US'
    },
    {
        id: 1,
        title: 'Grassroots',
        role: 'Software Engineer',
        url: '',
        desc: 'Architected complex technical product customer-relationship products leveraging React JS, Java, SpringBoot, JavaScript, NodeJS and MySQL and Mongo architecture, resulting in a notable 2x increase in Business Product efficiency. Applied large-scale data aggregation and processing techniques with Java and SpringBoot packages to enhance customer retention rates and satisfaction indices for a restaurant franchise, leading to a remarkable 25% increase in dine-in.',
        year: 'August 2021 – April 2022',
        location: 'Bengaluru, KA, IN'
    },
    {
        id: 2,
        title: 'Oxyease Healthcare Services pvt Ltd',
        role: 'Software Development Intern',
        url: '',
        desc: 'Planned and designed a robust medical inventory management system utilizing in fast-paced environment React, JavaScript NodeJS, and MySQL architecture, streamlining inventory tracking and delivery management processes. Devised API services in, Java, SpringBoot handling subscriptions and renewal for over 10 different types of products',
        year: 'February 2021 – June 2021',
        location: 'Bengaluru, KA, IN'
    },
    {
        id: 3,
        title: 'Marek Adventures',
        role: 'Software Development Intern',
        url: '',
        desc: 'Innovated and built a visually appealing and responsive UI/UX front end web site for an African touring firm using WordPress, HTML and JS, increased SEO ensuring 2x the online presence.',
        year: 'October 2020 – December 2020',
        location: 'Bengaluru, KA, IN'
    },
    {
        id: 4,
        title: 'Esilicon TechnoDesign Private Limited',
        role: 'Software Development Intern',
        url: '',
        desc: 'Defined data preprocessing algorithms capable of handling 2GB of data before updating SQL and NoSQL databases. Processed and deployed the algorithms in, Node, Express JS RESTful API to triggers in failing details and error logging in semiconductor machinery, provided a 20% better inventory analysis.',
        year: 'July 2020 – September 2020',
        location: 'Bengaluru, KA, IN'
    },
    {
        id: 5,
        title: 'NH Robotics',
        role: 'Freelance Software Engineer',
        url: '',
        desc: 'Collaborated on backend Robot Operating System (ROS server and bridge C++ and ROS packages, facilitating communication between the robot and the wireless server, and developed a frontend interface using React JS. Created backend services to conducted data analytics using Python packages to predict faulty robot parts, and modelled services for predicting collision distance and generating maps using image, IoT, and LiDAR data streams',
        year: '',
        location: 'Bengaluru, KA, IN'
    },
   

]
function Experience() {

    const router = useRouter()

    return (
        <>
        <button onClick={() => router.push("/")} className="button mx-5 mt-2">Portfolio</button>

            <div className="grid md:grid-cols-2 md:divide-x-4 md:divide-Blue px-4 pb-2 pt-10">
                <div className="flex flex-col gap-y-4 order-2 md:order-1  md:mr-12">
                    <div className="mt-10 md:mt-0 text-xl text-Blue font-semibold">Education</div>
                    {eduCards?.map((data, key) => (
                            <Edu_Card key={key} data={data} />
                        ))}

                </div>
                <div className="order-1 md:order-2">
                    <div className="flex flex-col gap-y-4 md:ml-12">
                        <div className=" md:pt-0 pt-4 text-xl text-Blue font-semibold">Experience</div>

                       {expCards?.map((data, key) => (
                                <Exp_Card key={key} data={data} />
                            ))}

                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Experience;
