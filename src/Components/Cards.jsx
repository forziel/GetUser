import { useEffect, useState } from "react";
import Card from "./Card";
const Cards = ({ howManyUser, setModal }) => {
  const [users, setUsers] = useState(false); //veriyi aktardığım state kullandığım state
  const [loading, setLoading] = useState(true); //loading ekranı için state
  const URL = `https://randomuser.me/api/?results=${howManyUser}`;
  useEffect(() => {
    fetch(`${URL}`)
      .then((res) => {
        if (res.ok == true || res.status == 200) {
          return res.json();
        }
      })
      .then((data) => setUsers(data.results))
      .catch((err) => console.log(err));
    setTimeout(() => { //veri yüklenene kadar bir loading... ekranı koydum 
      setLoading(false);
    }, 1000);
  }, []);
  return loading ? (
    <div className="flex justify-center items-center h-screen">
      <div className="text-xl text-white">
         Yükleniyor...
      </div>
    </div>
  ) : (
    <div className="flex justify-center items-center flex-wrap ">
      <ul className="flex flex-wrap gap-5 p-10 items-center justify-center ">
        {users &&
          users.map((user) => (
            <Card
              key={user.id.value}
              title={user.name.title}
              firstName={user.name.first}
              lastName={user.name.last}
              img={user.picture.medium}
              nation={user.location.country}
            />
          ))}
      </ul>
      <button
        className="bg-gray-500 p-5 h-32 rounded-full"
        onClick={() => {
          setModal(true);
        }}
      >
        kullanıcı isteme ekranı
      </button>
    </div>
  );
};

export default Cards;
