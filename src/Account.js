import React from "react"

function Account(){
    return(
        <>
        <h2>Account Settings</h2>
        <form>
            <div>
            <label>First name</label><br></br>
            <input type="text" ></input><br></br>
            <label>Email</label><br></br>
            <input type="email" ></input><br></br>
            <label>Company</label><br></br>
            <input type="text" ></input>
            </div>
            <div>
            <label>Last name</label><br></br>
            <input type="text" ></input><br></br>
            <label>Phone number</label><br></br>
            <input type="phone" ></input><br></br>
            <label>Designation</label><br></br>
            <input type="text" ></input>
            </div>
            </form>
            <h2>Bio</h2>
            <p> It is like a business card. Creating your bio is one of the first steps in setting up a new social media account. Your bio description on the social media should be unique and relevant.</p>
            
            
           

        
        </>
    )
}
export default Account