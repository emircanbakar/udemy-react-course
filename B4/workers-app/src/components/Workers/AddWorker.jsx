import React, { useState } from "react";
import Card from "../ui/Card";
import Button from "../ui/Button";

function AddWorker() {
  const [employeeName, setEmployeeName] = useState("");
  const [wage, setWage] = useState("")
  const employeeChangeHandler = (e) =>{
    setEmployeeName(e.target.value)
  }
  const wageChangeHandler = (e) =>{
    setWage(e.target.value)
  }

  const addWorkerHandler = (e) =>{
    e.preventDefault()
    console.log(employeeName, wage)
  }
  return (
    <Card className="mt-8">
      <form className="flex flex-col gap-y-2" onSubmit={addWorkerHandler}>
        <label htmlFor="name" className="font-medium">
          Çalışan İsmi
        </label>
        <input
          type=""
          id="name"
          className="max-w-[40rem] border mx-auto w-full p-2 "
          placeholder="Çalışan ismi giriniz."
          onChange={employeeChangeHandler}
        />
        <label htmlFor="wage" className="font-medium">
          Maaş Miktari
        </label>
        <input
          type=""
          className="max-w-[40rem] border mx-auto w-full p-2 "
          id="wage"
          placeholder="Maaş miktari giriniz."
          onChange={wageChangeHandler}
        />
        <Button type="submit" className="mt-2">Ekle</Button>
      </form>
    </Card>
  );
}

export default AddWorker;
