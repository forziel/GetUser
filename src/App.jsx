import { useState } from "react";
import Cards from "./Components/Cards";
import Form from "./Components/Form";

function App() {
  const [howManyUser, setHowManyUser] = useState(); // kaç kullanıcı isteniyor
  const [modal, setModal] = useState(true); // form ekranıyla card ekranı geçişi için
  return (
    <div
      className={`bg-blue-600 w-fullscreen ${modal ? "h-screen" : "min-h-screen"}`}
    >
      {modal ? (
        <Form
          howManyUser={howManyUser}
          setHowManyUser={setHowManyUser}
          setModal={setModal}
        />
      ) : (
        <Cards howManyUser={howManyUser} setModal={setModal} />
      )}
    </div>
  );
}

export default App;
