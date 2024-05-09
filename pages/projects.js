import ProjectsCard from "@/components/projects/ProjectsCard";

const projects = [
    {
        id: 0,
        projectName: "Proj Name",
        url: "",
        image: "projects/erp.png",
        projectDetail: "Desc",
        technologiesUsed: [
            {
                tech: "ReactJS"
            },
            {
                tech: "Ant Design"
            },
            {
                tech: "TailwindCSS"
            },
        ]
    },
]



const Projects = () => {

   
    return (
        <>
            <div className="grid justify items-center grid-flow-row md:grid-cols-2 grid-rows-auto gap-4 px-8 my-6">
            {
                projects?.map((data, key) => (
                    <ProjectsCard key={key} data={data} />
                ))
            }
            </div >
        </ >
    );
};

export default Projects;
