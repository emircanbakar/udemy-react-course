import React from 'react'

function AddProduct(props) {
  return (
    <div>
      <button onClick={()=> props.setIsOpen(true)} >Yeni ürün ekle</button>
    </div>
  )
}

export default AddProduct
