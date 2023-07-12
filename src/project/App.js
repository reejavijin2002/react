import React   from "react";
import Design from "./Design";
import "./app.css"
// import Designtwo from "./Designtwo";
// import Designthree from "./Designthree";

function App() {
  return (
  
    
    <div>
      <div className="five">
        <Design 
        img="https://media.discordapp.net/attachments/1103207862521561162/1126755241371635732/reusable-banners-card-1-bg-1.png?width=1414&height=380"
        heading="The Seasons Latest"
        para="Get the Seasons of all latest design in a flip of your hand"
        button="Show more"
        align="ac"
        color="x"
        />
        </div>
      <div className="six">
        <Design 
        img="https://media.discordapp.net/attachments/1103207862521561162/1126755241749135380/reusable-banners-card-2-bg-1.png?width=1414&height=380"
        heading="Our new designs"
        para="Get the Seasons of all latest design in a flip of your hand"
        button="Show more"
        align="ab"
        color="y"
        />
        </div>
        <div className="seven"> 
      <Design 
              img="https://media.discordapp.net/attachments/1103207862521561162/1126755242210492426/reusable-banners-card-3-bg-1.png?width=1414&height=380"

        heading="Insiders"
        para="Get the Seasons of all latest design in a flip of your hand"
        button="Show more"
        align="ad"
        color="z"
        />
      </div>


    
    </div>
    
  )
}

export default App