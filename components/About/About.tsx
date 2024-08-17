'use client'

import Image from 'next/image';
import React, { useState, useTransition } from 'react'
import Tabbutton from './Tabbutton';


const TAB_DATA = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <ul className="list-disc pl-2">
          <li>Node.js</li>
          <li>C#</li>
          <li>NextJS</li>
          <li>TypeScript</li>
          <li>JavaScript</li>
          <li>React</li>
        </ul>
      ),
    },
    {
      title: "Eğitim",
      id: "education",
      content: (
        <ul className="list-disc pl-2">
          <li>Nevşehir Hacı Bektaş Veli Üniversitesi</li>
          
        </ul>
      ),
    },
    {
      title: "Sertifikalarım",
      id: "certifications",
      content: (
        <ul className="list-disc pl-2">
          <li>Tubitak Bilgem Mock-Up Figma Eğitimi</li>
          <li>Tubitak Bilgem Kullanıcı Deneyimi ve Kullanılabilirlik Eğitimi</li>
          <li>Tubitak Bilgem Mikroservis Mimarileri Eğitimi</li>
          <li>Btk Akademi Projeler ile jQuery Eğitimi</li>
          <li>Btk Akademi Temel Ağ Teknolojileri Eğitimi</li>

        </ul>
      ),
    },
  ];


const About = () => {

    const [tab, setTab] =useState("skills")

    const [isPending, startTransition] = useTransition();

    const handleChange = (id:string)=>{
        startTransition(()=>{
            setTab(id)
        });
    };


  return (
    <div className='text-white' id="about">
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center
         py-8 px-4'>

            <Image alt='' src="/4.jpeg" width={500} height={500}/>

            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                <p className='text-base lg:text-lg'>
                Nevşehir Hacı Bektaş Veli Üniversitesi Bilgisayar Mühendisliği bölümünden 2024 yılında mezun
oldum. Full-Stack Developer olarak kendimi geliştirmeye odaklandım ve bu süreçte HTML, CSS,
JavaScript, React, Node.js,Next.js Python , .NET ve SQL gibi teknolojilerde deneyim kazandım.
Gireceğim şirkette de bu bilgi ve becerilerimi en iyi şekilde kullanarak, kendimi sürekli
geliştirmeyi ve projelere değer katmayı hedefliyorum.
                </p>

                <div className='flex flex-row justify-start mt-8'>

                    <Tabbutton
                    selectTab={()=>handleChange("skills")}
                    active={tab === "skills"}>
                        Skills
                    </Tabbutton>

                    <Tabbutton
                    selectTab={()=>handleChange("education")}
                    active={tab === "education"}>
                        Education
                    </Tabbutton>

                    <Tabbutton
                    selectTab={()=>handleChange("certifications")}
                    active={tab === "certifications"}>
                        Certifications
                    </Tabbutton>



                </div>

                <div className='mt-8'>
                    {TAB_DATA.find((t)=>t.id === tab)?.content}

                </div>


            </div>







        </div>



    </div>
  )
}

export default About