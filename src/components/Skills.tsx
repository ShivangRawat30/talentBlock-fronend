import React from "react";
const skills = [
  "Angular",
  "React",
  "Spring Framework",
  "Android App Development",
  "Java",
  "PHP",
  "AngularJS",
  "Laravel",
  "CodeIgniter",
  "Spring Boot",
  "Spring MVC",
  "Core Java",
  "Hibernate",
  "RESTful API",
  "Web Development",
];
function Skills(props:any) {
  return (
    <div className="pt-4">
      <h1 className="font-bold text-lg ">Skills</h1>

      <div className="grid grid-cols-3 gap-x-5 gap-y-2">
        {skills?.length > 0 ? (
          skills.map((skill, idx) => (
            <p className="border-[1px] rounded py-1 flex items-center justify-center px-1 text-sm text-custom-white text-center h-[50px]" key={idx}>
              {skill}
            </p>
          ))
        ) : (
          <p className="text-gray-400">No Projects Available</p>
        )}
      </div>
    </div>
  );
}

export default Skills;
