import React from 'react'

function Footer() {
  return (
    <div className="d-flex justify-content-around bg-dark text-white mt-4 pt-2" >
           <div className="c2">
               <h2>Contact Us:</h2>
               <p>
                Call: 9876543210 <br/>
                mail: eventmanagement123@gmail.com <br/>
                Visit: 88/2, 2nd floor,besides Food Factory, Glorious Events.
              </p>
           </div>
           <div class="c2" id="cn">
            <h2>About Us:</h2>
            <p>
            Planing a event is a EVENT-TECH platform <br/>connecting users & event planners.
            <br/> Planing a event brings in a <br/> innovative & disruptive model for the event industry.
           </p>
           </div>
      </div>
  )
}

export default Footer