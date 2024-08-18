const Card = ({img, title, firstName, lastName, nation }) => {

    return (
    <li className="bg-gray-500 w-64 h-80 flex flex-col justify-around items-center p-10 overflow-x-hidden ">
      <img src={img} alt="patso" className="rounded-full w-32" />
      <div className="middle-side justify-center items-center text-lg text-">
         {`${title}. ${firstName} ${lastName}`}
      </div>
      <div className="nation">{nation}</div>
    </li>
  )
}

export default Card
