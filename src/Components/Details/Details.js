import React from 'react'
import { useParams } from 'react-router-dom'
import img4 from '../imag/img4.jpg'
import img1 from '../imag/img1.jpg'
import img2 from '../imag/img2.cms'
import img3 from '../imag/img3.jpg'


function Details() {
    const data = [
        {
            id : 1,
            imgSrc : img1,
            name : 'Amer Fort',
            destination : 'Jaipur(Rajasthan)',
            description : "Amer Palace is situated on a forested hill promontory that juts into Maota Lake near the town of Amer, about 11 kilometres (6.8 mi) from Jaipur city, the capital of Rajasthan. The palace is near National Highway 11C to Delhi."
        },
        {
            
                id : 2,
                imgSrc : img2,
                name : 'NaharGarh Fort',
                destination : 'Jaipur(Rajasthan)',
                description : 'Nahargarh Fort stands on the edge of the Aravalli Hills, overlooking the city of Jaipur in the Indian state of Rajasthan. Along with Amer Fort and Jaigarh Fort, Nahargarh once formed a strong defence ring for the city. The fort was originally named Sudershangarh, but it became known as Nahargarh, which means '
            
        },
        {
            
            id : 3,
            img : img3,
            name : 'Hawa Mahal',
            destination : 'Jaipur(Rajasthan)',
            description : 'The Hawa Mahal is a palace in the city of Jaipur, India. Built from red and pink sandstone, it is on the edge of the City Palace, Jaipur, and extends to the Zenana, or womens chambers. '
        
    },
    {
            
        id : 4,
        imgSrc : img3,
        name : 'Jantar Mantar',
        destination : 'Jaipur(Rajasthan)',
        description : 'The Jantar Mantar, Jaipur is a collection of 19 astronomical instruments built by the Rajput king Sawai Jai Singh, the founder of Jaipur, Rajasthan. The monument was completed in 1734. '
    
    },
    {
            
        id : 5,
        imgSrc : img2,
        name : 'Hawa Mahal',
        destination : 'Jaipur(Rajasthan)',
        description : 'The Hawa Mahal is a palace in the city of Jaipur, India. Built from red and pink sandstone, it is on the edge of the City Palace, Jaipur, and extends to the Zenana, or womens chambers. '
    
    },
    {
        id : 6,
        imgSrc : img4,
        name : 'Amer Fort',
        destination : 'Jaipur(Rajasthan)',
        description : "Amer Palace is situated on a forested hill promontory that juts into Maota Lake near the town of Amer, about 11 kilometres (6.8 mi) from Jaipur city, the capital of Rajasthan. The palace is near National Highway 11C to Delhi."
    },
    {
        
            id : 7,
            imgSrc : img1,
            name : 'NaharGarh Fort',
            destination : 'Jaipur(Rajasthan)',
            description : 'Nahargarh Fort stands on the edge of the Aravalli Hills, overlooking the city of Jaipur in the Indian state of Rajasthan. Along with Amer Fort and Jaigarh Fort, Nahargarh once formed a strong defence ring for the city. The fort was originally named Sudershangarh, but it became known as Nahargarh, which means '
        
    }
    
    ]
    
    const { name } = useParams();
    const selectedData = data.find(item => item.name === name);
  
    if (!selectedData) {
      return <div>Data not found.</div>;
    }
  
    const { imgSrc, destination, description } = selectedData;
  
    return (
      <div>
        <img src={imgSrc} alt="img" />
        <h2>{name}</h2>
        <h5>{destination}</h5>
        <p>{description}</p>
      </div>
    );
  }
  
  export default Details;