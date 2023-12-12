"use client";

import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Hotel Booking Website",
    description: "MERN 스택을 활용한 호텔 예약 사이트",
    image: "/images/projects/hotel-booking.png",
    tag: ["All", "Individual"],
    gitUrl: "https://github.com/dodam24/BookingApp",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Car Showcase Website",
    description: "React, TypeScript, Tailwind CSS를 활용한 자동차 쇼케이스",
    image: "/images/projects/car.png",
    tag: ["All", "Individual"],
    gitUrl: "https://github.com/dodam24/cars_showcase",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "React Portfolio Website",
    description: "Next.js 및 고급 애니메이션을 활용한 반응형 포트폴리오 웹사이트",
    image: "/images/projects/portfolio.png",
    tag: ["All", "Individual"],
    gitUrl: "https://github.com/dodam24/portfolio-website",
    previewUrl: "https://portfolio-website-nine-indol.vercel.app",
  },
  {
    id: 4,
    title: "Food Ordering Website",
    description: "AI 추천 시스템을 바탕으로 한 온라인 식재료 판매 웹 사이트",
    image: "/images/projects/kurly.png",
    tag: ["All", "Team"],
    gitUrl: "https://github.com/dodam24/Kurly",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Funding Website",
    description: "스프링 프레임워크 및 MyBatis를 활용한 기부 및 펀딩 웹사이트",
    image: "/images/projects/funding.png",
    tag: ["All", "Team"],
    gitUrl: "/",
    previewUrl: "https://drive.google.com/file/d/1nMRTm1ac7IWob7ejeM_o9xwbJFj3-v0N/view?usp=sharing",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section >
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Individual"
          isSelected={tag === "Individual"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Team"
          isSelected={tag === "Team"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
