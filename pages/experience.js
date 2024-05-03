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

]

const expCards = [
    {
        id: 1,
        title: 'Grassroots',
        role: 'Software Engineer',
        url: '',
        desc: 'Desc',
        year: 'dates-till',
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
