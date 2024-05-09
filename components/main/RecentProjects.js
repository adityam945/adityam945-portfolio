import RecentProjectsCard from "./components/RecentProjectsCard"

const recentProjectCard = [
    {
        id: 0,
        name: 'Edge-Disjoint Partitioning',
        designation: 'JAVA | Graphs | Shortest-Pat | Dijkstra | A*',
        view: "Sub-Graph shortest path finding problem",
        projectLink: "https://github.com/adityam945/EDP-JAVA"
      },
      {
        id: 1,
        name: 'Image compression using Auto-Encoders',
        designation: 'Python | Neural Networks | Torch | Auto-encoders | ML Models',
        view: "Neural Network AutoEncoders",
        projectLink: "https://github.com/adityam945/DL-autoencoders"
      },
    {
      id: 2,
      name: 'DeepLearning Logistic Regression and ResNet',
      designation: 'Python | Neural Networks | Torch | ResNet | Logistic Regression',
      view: "DeepLearning & Neural Network",
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