// import React, {useEffect, useState} from "react";
// import YourBotArmy from "./YourBotArmy";
// import BotCollection from "./BotCollection";




// function BotsPage() {
//   //start here with your code for step one
//   const [bots,setBots]=useState([])

// //API data fetch

// useEffect(()=>{
//   fetch("http://localhost:8001/bots")
//   .then(res=>res.json())
//   .then(data=>setBots(data))

// },[])

// const updateBot=(id)=>{
//   {
//     setBots(bots.map(bot => id === bot.id ? {...bot, isAdded:true} : bot))
//   }
// }

// const removeBot= (id)=>{
//   {
//     setBots(bots.map(bot => id === bot.id ? {...bot, isAdded:false} : bot))
//   }
// }
// const deleteBot=(id) => {
//   fetch(`http://localhost:8001/bots/${id}`,{
//   method:"DELETE"
//   })
// }
// return (
//     <div>
//         {
//             console.log(bots)
//         }
//         console.log(bots);
//       <YourBotArmy 
//       handleClick={removeBot}
//     handleDelete={deleteBot}
      
//       />
//       <BotCollection bots={bots}
//      handleClick={updateBot}
//     handleDelete={deleteBot}
//      />
//     </div>
//   )
// }

// export default BotsPage;