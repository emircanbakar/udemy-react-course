import React from "react";
import Button from "./Button";
import Card from "./Card";

const ErrorModal = (props) => {
    const {onConfirm, error} = props;
    const {message, title} = error;
    return (
    <div className="error-modal ">
      <div
        className="backdrop-blur-sm  bg-white/30 fixed w-screen h-screen top-0"
        onClick={onConfirm}
      ></div>
      <Card className="w-[36rem] p-0 z-20">
        <header className="bg-red-700 p-4 text-white rounded-t-xl">
          <h2 className="text-center text-xl"> {title} </h2>
        </header>
        <section className="p-4"> {message} </section>
        <footer className="p-4 flex justify-end">
          <Button onClick={onConfirm} className="w-32">
            Tamam
          </Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
