import Footer from "@/components/main/Footer";
import ProjectsCard from "@/components/projects/ProjectsCard";

const projects = [
    {
        id: 0,
        projectName: "Image Crypotography and Steganography for Secure Data Transfer",
        url: "https://github.com/adityam945/",
        image: "images/image_crypto.jpeg",
        projectDetail: "A cryptography system that encrypts visual data",
        technologiesUsed: [
            {
                tech: "A research project that resulted in development of a secure cryptosystem. Two popular image cryptography techniques are combined to facilitate a complex data encryption"
            },
            {
                tech: "Steganography"
            },
            {
                tech: "Python"
            },
            {
                tech: "Flask"
            },
            {
                tech: "HTML, CSS"
            },

        ]
    },
    {
        id: 1,
        projectName: "Medicinal Plants Classification",
        url: "",
        image: "images/medicine.jpg",
        projectDetail: "A Neural Network trained to classifiy medicinal plant",
        technologiesUsed: [
            {
                tech: "A research project based on training a neural netwrok to recognize medicinal plants using pictures of leaves"
            },
            {
                tech: "Machine Learning"
            },
            {
                tech: "Neural Network"
            },
            {
                tech: "PyTorch"
            },
            {
                tech: "Tensor"
            },

        ]
    },
    {
        id: 2,
        projectName: "Edge-Disjoint Partitioning",
        url: "https://github.com/adityam945/EDP-JAVA",
        image: "images/edge-disjoint.jpeg",
        projectDetail: "Sub-Graph shortest path finding problem",
        technologiesUsed: [
            {
                tech: "In this project shortest path between two weighted graph is found without preprocessing of graph. The weighted graph can be of N sub-graphs and the graphs are not preprocessed"
            },
            {
                tech: "JAVA"
            },
            {
                tech: "Graphs"
            },
            {
                tech: "Shortest-Path"
            },
            {
                tech: "Dijkstra | A*"
            },

        ]
    },
    {
        id: 3,
        projectName: "Image compression using Auto-Encoders",
        url: "https://github.com/adityam945/DL-autoencoders",
        image: "images/auto.png",
        projectDetail: "Neural Network AutoEncoders",
        technologiesUsed: [
            {
                tech: "Trained four artificial neural network models on MINST, Fashion-MNIST, CIFAR-10 and STL image datasets. Used Torch neural network modules to construction the model and BCE Loss to measure reconstruction error."
            },
            {
                tech: "Python"
            },
            {
                tech: "Neural Networks"
            },
            {
                tech: "Torch"
            },
            {
                tech: "Auto-encoders"
            },

        ]
    },

    {
        id: 4,
        projectName: "Logistic Regression and ResNet",
        url: "https://github.com/adityam945/DeepLearning_LogisticRegression",
        image: "images/logistic.jpg",
        projectDetail: "Neural Network",
        technologiesUsed: [
            {
                tech: "Programmed the gradient descent, loss function and backward loss calculation for the logistic regression neural network model. Constructed ResNet architecture using the torch neural network modules."
            },
            {
                tech: "Neural Networks"
            },
            {
                tech: "Torch"
            },
            {
                tech: "ResNet "
            },
            {
                tech: "Logistic Regression"
            },
            {
                tech: "Python"
            },

        ]
    },

    {
        id: 5,
        projectName: "Taralabalu Samsthana",
        url: "https://apksos.com/app/com.taralabalu.androidapp  ",
        image: "images/react.png",
        projectDetail: "Native Mobile Application",
        technologiesUsed: [
            {
                tech: "Designed and developed a mobile application for a religious institute using React-Native framework. Worked on audio recording and submission. Used AWS S3 Butcket to stored audio files that was posted from the mobile app."
            },
            {
                tech: "Mobile Application"
            },
            {
                tech: "Android  and iSO"
            },
            {
                tech: "React-Native"
            },
            {
                tech: "Rest/Mock API"
            },

        ]
    },
    {
        id: 6,
        projectName: "Performance Based Adaptive Questioning",
        url: "https://github.com/adityam945/web-mini-adaptive-question",
        image: "images/quiz.jpg",
        projectDetail: "A student evaluation application",
        technologiesUsed: [
            {
                tech: "A performance adaptive test to test ability of students in an other approach. Developed a responsive web application using API and React JS framework."
            },
            {
                tech: "ReactJS"
            },
            {
                tech: "MongoDB"
            },
            {
                tech: "SQL/NoSQL"
            },
            {
                tech: "Rest API"
            },

        ]
    },

    {
        id: 7,
        projectName: "VTU-CSE Native Mobile App",
        url: "https://github.com/adityam945/VTU-CSE-App",
        image: "images/notes.jpg",
        projectDetail: "A mobile application with academic materials.",
        technologiesUsed: [
            {
                tech: "An useful application that helps students to access academic resources of CSE department of VTU. Designed and Developed a mobile application using API and React-Native framework"
            },
            {
                tech: "JSF"
            },
            {
                tech: "MySQL"
            },
            {
                tech: "JDBC"
            },
            {
                tech: "HTML, CSS"
            },

        ]
    },


    {
        id: 8,
        projectName: "Slot Booking System",
        url: "https://github.com/adityam945/Simple-JSF_DBMS-CURD-operation",
        image: "images/slot.jpeg",
        projectDetail: "CRUD JSF-HTML, MySQL slot booking system",
        technologiesUsed: [
            {
                tech: "This project aim is to provide slot booking facility in needed sectors. Use of Java Server Faces and MySQL database to design and develop this system."
            },
            {
                tech: "JSF & JDBC"
            },
            {
                tech: "MySQL"
            },
            {
                tech: "HTML, CSS "
            },
            {
                tech: "Java"
            },

        ]
    },



    {
        id: 9,
        projectName: "Working of Queue in OpenGL",
        url: "https://github.com/adityam945/",
        image: "images/queue.png",
        projectDetail: "A OpenGL program representing Queue Data sturucture",
        technologiesUsed: [
            {
                tech: "This project displayed working of Queue and double ended queue This was part of our college project which hepled us learn openGL functions and concepts"
            },
            {
                tech: "OpenGL"
            },
            {
                tech: "Data Structures"
            },
            {
                tech: "C++"
            },
            // {
            //     tech: ""
            // },

        ]
    },

]

import { useRouter } from 'next/router'


const Projects = () => {

    const router = useRouter()
   
    return (
        <>
        <button onClick={() => router.push("/")} className="button mx-5 mt-2">Portfolio</button>

            <div className="grid justify items-center grid-flow-row md:grid-cols-2 grid-rows-auto gap-4 px-8 my-6">
            {
                projects?.map((data, key) => (
                    <ProjectsCard key={key} data={data} />
                ))
            }
            </div >
            <Footer />

        </ >
    );
};

export default Projects;
