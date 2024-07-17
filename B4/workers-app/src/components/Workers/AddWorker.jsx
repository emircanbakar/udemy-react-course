import React from "react";

function AddWorker() {
  return (
    <div>
      <form className="flex flex-col gap-y-2">
        <label htmlFor="name" className="font-medium">
          Çalışan İsmi
        </label>
        <input
          type=""
          id="name"
          className="max-w-[40rem] border mx-auto w-full p-2 "
          placeholder="Çalışan ismi giriniz."
        />
        <label htmlFor="wage" className="font-medium">
          Maaş Miktari
        </label>
        <input
          type=""
          className="max-w-[40rem] border mx-auto w-full p-2 "
          id="wage"
          placeholder="Maaş miktari giriniz."
        />
        <button className="p-2 text-lg bg-teal-600 mt-2 text-white" >Ekle</button>
      </form>
    </div>
  );
}

export default AddWorker;
