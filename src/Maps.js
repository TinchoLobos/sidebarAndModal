import React, {Component} from 'react'
import GoogleMaps from "simple-react-google-maps"
export default class Maps extends Component{
render() {
   return(
      <div className='container'>
         <GoogleMaps
         style={{heigth: "400px", width: "300px"}}
         zoom={12}
         center={{
            lat: 40.4127355,
            lng: -3.695428
         }}
         />
      </div>
   )
}
}
