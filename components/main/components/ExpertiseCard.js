import CardLayout from "../../global/CardLayout"

const ExpertiseCard = ({ data }) => {
    return (
        <CardLayout>
            <div className="h-full space-y-2 p-8 card_stylings">
                <div className=" text-Blue text-lg">{data.title}</div>
                <div className="text-sm text-LightGray font-normal">
                    {data.desc.map(data_desc => (
                        <p>{data_desc}</p>
                    ))}
                </div>
            </div>
        </CardLayout>
    )
}

export default ExpertiseCard