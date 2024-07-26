import React, { useState, useRef } from "react";
import Card from "../ui/Card";
import Button from "../ui/Button";
import ErrorModal from "../ui/ErrorModal";
// import Wrapper from "../Helpers/Wrapper";

function AddWorker(props) {
  const minWage = 5000;
  const [error, setError] = useState();
  const nameInputRef = useRef();
  const wageInputRef = useRef();

  // const employeeChangeHandler = (e) => {
  //   setEmployeeName(e.target.value);
  // };
  // const wageChangeHandler = (e) => {
  //   setWage(e.target.value);
  // };

  const addWorkerHandler = (e) => {
    
    e.preventDefault();
    const enteredWorker = nameInputRef.current.value
    const enteredWage = wageInputRef.current.value
    if (nameInputRef.current.value.trim().length === 0) {
      setError({
        title: "İsim Alanı Zorunludur!",
        message: "Lütfen bir isim giriniz.",
      });
      return;
    }
    if (+wageInputRef.current.value < minWage) {
      setError({
        title: "Maaş Alanı Zorunludur!",
        message: `Lütfen ${minWage} değerinden büyük bir değer giriniz`,
      });
      return;
    }

    props.setWorkers((prevState) => [
      {
        id: Math.floor(Math.random() * 1000),
        name: enteredWorker,
        wage: enteredWage,
      },
      ...prevState,
    ]);

    nameInputRef.current.value = "";
    wageInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
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
            ref={nameInputRef}
          />
          <label htmlFor="wage" className="font-medium">
            Maaş Miktari
          </label>
          <input
            type=""
            className="max-w-[40rem] border mx-auto w-full p-2 "
            id="wage"
            placeholder="Maaş miktari giriniz."
            ref={wageInputRef}
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
