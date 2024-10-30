import React from "react";
const portfolioData = [
  {
    name: "Corporate Office Web3 Services ",
    img:
      "https://images.unsplash.com/photo-1651130532935-2ef1634501fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    name: "Coingecko Frontend Project ",
    img:
      "https://images.unsplash.com/photo-1651130537842-eec4720ba02c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
];
const Portfolio:React.FC = (props:any) => {
  return (
    <div className="pt-4">
      <h1 className="font-bold text-lg ">Portfolio</h1>
      <div className="flex flex-row gap-10">

      
      {portfolioData?.length > 0 ? (
        portfolioData.map((project, idx) => (
          <div className="flex flex-col items-center justify-center" key={idx}>
            <img src={project?.img} alt="" className=" h-auto" />
            <p className="font-bold text-md">{project?.name}</p>
          </div>
        ))
      ) : (
        <p className="text-gray-400">No Projects Available</p>
      )}
      </div>
    </div>
  );
}

export default Portfolio;
