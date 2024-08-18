import { useState } from "react";

const Form = ({ setHowManyUser, setModal }) => {
  const [inputValue, setInputValue] = useState();
  return (
    <form
      onSubmit={(e)=>{
         console.log(inputValue)
         if(inputValue>0){
         e.preventDefault();
         setHowManyUser(inputValue);
         setModal(false)}else{
         alert("lütfen geçerli bir sayı yazınız")}
      }}
      className="w-full h-full flex flex-col items-center justify-center gap-5"
    >
      <input
        type="number"
        id="getUser"
        className="w-64 p-3 outline-none "
        placeholder="Kaç kullanıcı istiyorsunuz?"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <button className="bg-white p-3 w-64">kullancıları getir</button>
    </form>
  );
};

export default Form;
