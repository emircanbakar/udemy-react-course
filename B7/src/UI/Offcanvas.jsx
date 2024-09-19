import "./Offcanvas.css";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.hideCart}></div>;
};

const OffcanvasOverlay = (props) => {
  return (
    <div className="offcanvas">
      <div className="content"> {props.children} </div>
    </div>
  );
};

const Offcanvas = (props) => {
  const portalElement = document.getElementById("overlays");
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop hideCart={props.hideCart} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <OffcanvasOverlay> {props.children} </OffcanvasOverlay>,
        portalElement
      )}
    </>
  );
};

export default Offcanvas;
