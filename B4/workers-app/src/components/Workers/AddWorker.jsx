import React, { useState } from "react";
import Card from "../ui/Card";
import Button from "../ui/Button";
import ErrorModal from "../ui/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

function AddWorker(props) {
  const [employeeName, setEmployeeName] = useState("");
  const [wage, setWage] = useState("");
  const minWage = 5000;
  const [error, setError] = useState();

  const employeeChangeHandler = (e) => {
    setEmployeeName(e.target.value);
  };
  const wageChangeHandler = (e) => {
    setWage(e.target.value);
  };

  const addWorkerHandler = (e) => {
    e.preventDefault();
    if (employeeName.trim().length === 0) {
      setError({
        title: "İsim Alanı Zorunludur!",
        message: "Lütfen bir isim giriniz.",
      });
      return;
    }
    if (+wage < minWage) {
      setError({
        title: "Maaş Alanı Zorunludur!",
        message: `Lütfen ${minWage} değerinden büyük bir değer giriniz`,
      });
      return;
    }

    setEmployeeName("");
    setWage("");

    props.setWorkers((prevState) => [
      {
        id: Math.floor(Math.random() * 1000),
        name: employeeName,
        wage: wage,
      },
      ...prevState,
    ]);
  };
  const errorHandler = () => {
    setError(null)
  };

  return (
    <>
      {error && <ErrorModal onConfirm={errorHandler} error={error} />}
      <Card className="mt-8 p-5">
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
            value={employeeName}
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
            value={wage}
          />
          <Button type="submit" className="mt-2">
            Ekle
          </Button>
        </form>
      </Card>
    </>
  );
}

export default AddWorker;
