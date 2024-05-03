import RecentProjectsCard from "./components/RecentProjectsCard"

const recentProjectCard = [
    {
      id: 0,
      name: 'DeepLearning LogisticRegression',
      designation: 'React JS | NEXT JS',
      view: "Project Description",
      projectLink: "https://github.com/adityam945/DeepLearning_LogisticRegression"
    },
   
  ]
const RecentProjects = () => {

    return (
        <>
            <div className="px-2 md:px-8 py-4 text-xl font-bold text-Blue underline">Highlight Software Projects</div>
            <div className="grid w-full h-full justify-items-start grid-flow-row md:grid-cols-3 grid-rows-auto gap-x-4 gap-y-4 px-2 md:px-8 pb-8"> 
                {recentProjectCard?.map((data, key) => (
                        <RecentProjectsCard key={key} data={data} />
                    ))}
            </div>
        </>
    )
}

export default RecentProjects