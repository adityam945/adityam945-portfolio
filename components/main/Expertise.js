import ExpertiseCard from "./components/ExpertiseCard"
import { useQuery } from "react-query";
import axios from "axios";
import LoadingParagraph from "../global/LoadingParagraph";
const data = [
    {
        id: 0,
        title: 'Full Stack Engineer',
        desc: [
            'I possess a strong understanding of application architecture, RESTful APIs, API integration, client/server-side rendering, and database management.',
            ' I am a skilled with building robust applications using frontend frameworks React.js, NextJS, React Native, and Angular, backend servers using Java SpringBoot, Node.js, ExpressJS/Fastify and Python Flask/Django, and using databases schemas SQL and NoSQL.'
        ],
    },
   
    {
        id: 2,
        title: 'Data Science',
        desc: ['I have a fond interest in Data Science. I love to work on large-scale data and datasets to learn about data correlations and business insights.',
             'I have worked on multiple research and implementation projects related to data science, building data mining models, machine learning models, and neural network models.'    
            ],
    },
    {
        id: 3,
        title: 'DevOps AWS/Azure',
        desc: [''],
    },
    // {
    //     id: 4,
    //     title: 'Designing UI/UX',
    //     desc: "Open Source is the future. I usually take some time on weekend and contribute into opensource project. It gives me opportunity to learn from best developer's practices and also gives me a chance to help others and contribute into the community for the good.",
    // },
    // {
    //     id: 1,
    //     title: 'Scrum and Jira',
    //     desc: "As a developer, I'm proficient in Jira and Scrum methodologies. I use Jira to simplify project management tasks like task assignment, prioritization, and progress tracking. Scrum has improved my teamwork, utilizing daily stand-ups, sprint planning, and retrospectives. My expertise ensures high-quality software products are delivered promptly.",
    // },
]

const MyExpertise = () => {

    return (
        <>
            <div className="px-2 md:px-8 py-4 text-xl font-bold text-Blue underline">Knowledge Base</div>
            <div className="grid justify items-center grid-flow-row md:grid-cols-2 lg:grid-cols-3 grid-rows-auto gap-4 px-2 md:px-8 " >
            {
                data?.map((data) => (
                    <ExpertiseCard data={data} />
                ))

            }

            </div>
        </>
    )
}

export default MyExpertise