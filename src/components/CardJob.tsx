import React from "react";

const CardJob: React.FC  = ( job:any ) => {
  const completed_works = [
    {
      title: "Design Themes  App",
      start_end_day: "Aug 5, 2023 - Sep 28, 2023",
      review:
        "Outstanding work by Jessica. She exceeded our expectations and delivered high-quality code on time. I highly recommend her for any JavaScript project.",
    },
    {
      title: "Graphic Designer",
      start_end_day: "Mar 10, 2023 - Apr 30, 2023",
      review:
        "I had a fantastic experience working with David. His creativity and attention to detail resulted in stunning designs for our project. I couldn't be happier with the results.",
    },
    {
      title: "Data Scientist Proposal",
      start_end_day: "Jul 1, 2023 - Aug 25, 2023",
      review:
        "Katherine's data analysis skills are impressive. She provided valuable insights from our data and helped us make data-driven decisions. I'm grateful for her expertise.",
    },
  ];
  return (
    <div className="pt-4 border-b border-gray-800">
      <h2 className="font-semibold">{job?.title}</h2>
      <p className="text-sm text-gray-400 m-0">{job?.start_end_day}</p>
      <p className="mt-1 text-gray-700 tracking-wide  text-justify">{job?.review}</p>
    </div>
  );
}

export default CardJob;
