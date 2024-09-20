import MyParagraph from "./MyParagraph"
import React from "react"

const MyElement = (props) => {
  console.log("myelement renderi")
  return (
    <MyParagraph>
        {props.show ? "My Element" : ""}
    </MyParagraph>
  )
}

const MemoizedMyElement = React.memo(MyElement) 

export default MemoizedMyElement
