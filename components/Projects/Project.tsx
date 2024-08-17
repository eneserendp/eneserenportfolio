'use client'

import { useInView } from 'framer-motion';
import React, { useRef, useState } from 'react'
import { motion } from "framer-motion"
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';




const projectsData = [
    {
      id: 1,
      title: "TeknoEmlak",
      description: "TeknoEmlak, gayrimenkul sektöründe dijital dönüşümü hızlandırmayı amaçlayan yenilikçi bir platformdur. Bu proje, kullanıcıların mülk arama, inceleme ve randevu alma süreçlerini kolaylaştırmak için QR kod teknolojisi, çevrimiçi randevu sistemi ve sanal gezintiler gibi modern çözümler sunar.",
      image: "/tekno.png",
      tag: ["All", "FullStack"],
      gitUrl: "https://github.com/eneserendp/TeknoEmlak",
      previewUrl: "https://github.com/eneserendp/TeknoEmlak",
    },
    {
      id: 2,
      title: "E-Yemek",
      description: "Bir Yemek Şirketinin E-Ticaret Web Sitesi",
      image: "/yemek.jpeg",
      tag: ["All", "FullStack"],
      gitUrl: "https://github.com/eneserendp/E-Yemek",
      previewUrl: "https://github.com/eneserendp/E-Yemek",
    },
    {
      id: 3,
      title: "Ankavisit",
      description: "Ankara'yı Yeni Gezecek Bireyler İçin Bir Yol Haritası Web Sitesi",
      image: "/Ankara.jpeg",
      tag: ["All", "FullStack"],
      gitUrl: "https://github.com/eneserendp/MVC-ILE-ANKAVISIT-WEB-SITE",
      previewUrl: "https://github.com/eneserendp/MVC-ILE-ANKAVISIT-WEB-SITE",
    },
    {
      id: 4,
      title: "Zafer Usta",
      description: "Bu proje, müşterilerime sunduğum hizmetleri daha geniş kitlelere tanıtmak ve işimi bir sonraki seviyeye taşımak amacıyla oluşturuldu.",
      image: "/usta.jpeg",
      tag: ["All", "Frontend"],
      gitUrl: "https://github.com/eneserendp/Zaferusta",
      previewUrl: "https://github.com/eneserendp/Zaferusta",
    },
    
  ];


const Project = () => {

    const [tag, setTag] = useState("All");
    const ref = useRef(null);

    const isInview = useInView(ref, {once:true});

    const handleTagChange = (newTag :string)=>{
        setTag(newTag)
    }

    const filtredProject = projectsData.filter((project)=>
    project.tag.includes(tag)
    
    )

    const cardvariants ={
        initial : {y: 50, opacity: 0},
        animate :  {y: 0, opacity: 1},
    };    


  return (
    <section id="projects">
        <h2 className='text-center text-4xl text-mycolor-700 font-semibold
        mt-4 mb-8 lg:mt-8 lg:mb-12'>
            Projelerim
        </h2>

        <div className='text-white flex flex-row justify-center items-center
        gap-5 py-6'>
            <ProjectTag
            name='All'
            onClick={handleTagChange}
            isSelected={tag==="All"}
            />

            <ProjectTag
            name='FullStack'
            onClick={handleTagChange}
            isSelected={tag==="FullStack"}
            />

            <ProjectTag
            name='Frontend'
            onClick={handleTagChange}
            isSelected={tag==="Frontend"}
            />

        </div>
        <ul ref={ref} className='grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10'>
            {filtredProject.map((project, index)=>(
                <motion.li
                key={index}
                variants={cardvariants}
                initial="initial"
                animate={isInview ? "animate": "inital"}
                transition={{duration:0.3, delay:index* 0.4}}>

                    <ProjectCard
                    description={project.description}
                    gitUrl={project.gitUrl}
                    image={project.image}
                    previewUrl={project.previewUrl}
                    title={project.title}
                    key={project.id}
                    
                    />






                </motion.li>



            ))}


        </ul>




    </section>
  )
}

export default Project