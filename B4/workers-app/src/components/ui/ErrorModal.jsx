import React, { useEffect, useRef } from "react";
import Button from "./Button";
import Card from "./Card";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return (
    <div
      className="backdrop-blur-sm  bg-white/30 fixed w-screen h-screen top-0 left-0"
      onClick={props.onConfirm}
    ></div>
  );
};

const Overlay = (props) => {
  return (
    <div className="error-modal ">
      <Card className="w-[36rem] p-0 z-20">
        <header className="bg-red-700 p-4 text-white rounded-t-xl">
          <h2 className="text-center text-xl"> {props.title} </h2>
        </header>
        <section className="p-4"> {props.message} </section>
        <footer className="p-4 flex justify-end">
          <Button onClick={props.onConfirm} className="w-32">
            Tamam
          </Button>
        </footer>
      </Card>
    </div>
  );
};

const ErrorModal = (props) => {
  const { onConfirm, error } = props;
  const { message, title } = error;
  const cleanupRef = useRef();
  useEffect(() => {
    console.log("modal oluştu");
    return () => {
      if (cleanupRef.current) {
        console.log("component kaldırıldı");
        props.setWorkers([]);
      }
    };
  }, [cleanupRef]);

  useEffect(() => {
    return () => {
      cleanupRef.current = true;
    };
  }, []);
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Overlay onConfirm={onConfirm} title={title} message={message} />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default ErrorModal;
