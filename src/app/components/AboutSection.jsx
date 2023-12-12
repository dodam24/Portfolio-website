"use client";

import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>MySQL</li>
        <li>MongoDB</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    )
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>네이버 클라우드캠프 AIaaS 과정 3기</li>
      </ul>
    )
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Computer Specialist in Spreadsheet and Database Level- 1</li>
        <li>Advanced Data Analytics Semi-Professional</li>
      </ul>
    )
  }
]

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/id-photo.jpeg" width={500} height={500} alt="ID Photo image"/>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            {/* I am a Frontend developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, MySQL,
            MongoDB, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications. */}
            안녕하세요. 성장 지향적인 프론트엔드 신입 개발자 최도담입니다.
            ‘멀리 가려면 함께 가라’라는 모토를 가지고 웹 개발과 관련된 다양한 분야를 학습 중입니다. 
            함께 가기 위해서 스스로 필요한 기술을 습득하고, 
            프론트엔드 외에도 백엔드, 데이터 등 다양한 분야를 이해하려고 합니다.
            JavaScript, React, Node.js, Express, TypeScript, MySQL, MongoDB, Git 등 
            다양한 기술 및 프레임워크를 사용해 본 경험이 있습니다.
            항상 배움을 게을리 하지 않고, 새로운 기술과 환경, 트렌드에 능동적으로 대처할 수 있는
            개발자가 되겠습니다.
          </p>
          <div className="flex flex-row mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
