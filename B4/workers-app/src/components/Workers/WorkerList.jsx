import React from "react";
import Card from "../ui/Card";

const WorkerList = (props) => {
  const { workers, setWorkers } = props;
  const deleteWorker = (id) => {
    setWorkers(workers.filter((item) => item.id !== id));
  };

  if(workers.length < 1){
    return;
  }
  return (
    <Card className="mt-10">
      <ul>
        <li className="flex justify-between p-2">
          <span className="font-bold">İsim</span>
          <span className="font-bold">Maaş </span>
        </li>
        {workers.map((worker) => (
          <li
            className="flex justify-between cursor-pointer hover:shadow-xl p-2 transition-all"
            key={worker.id}
            onClick={()=> deleteWorker(worker.id)}
          >
            <span> {worker.name} </span>
            <span className="text-teal-700 font-medium"> {worker.wage} </span>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default WorkerList;
