import React, { useState } from "react";

const Gallery = () => {
      let data = [
        // <div className='G1'>
        // <div className='Img1'>
             //<div className='img1'><img src={image="flower/F1.jpg"} height={"125px"} width={"100%"}/></div>
        //     <div className='img2'><img src={"flower/F2.jpg"} height={"125px"} width={"100%"} /></div>
        //     <div className='img3'><img src={"flower/f3.jpg"} height={"125px"} width={"100%"}/></div>
        //     <div className='img4'><img src={"flower/f17.jpg"} height={"125px"} width={"100%"}/></div>
        //     <div className='img5'><img src={"flower/f5.jpg"} height={"125px"} width={"100%"}/></div>
        //     </div>
        //     <div className='Img2'>
        //     <div className='img6'><img src={"flower/f14.jpg"} height={"125px"} width={"100%"}/></div>
        //     <div className='img7'><img src={"flower/f20.jpg"} height={"125px"} width={"100%"}/></div>
        //     <div className='img8'><img src={"flower/f15.jpg"} height={"125px"} width={"100%"}/></div>
        //     <div className='img9'><img src={"flower/f9.jpg"} height={"125px"} width={"100%"}/></div>
        //     <div className='img10'><img src={"flower/f10.jpg"} height={"125px"} width={"100%"}/></div>
            
        //     </div>
        //     <div className='Img3'>
        //     <div className='img11'><img src={"flower/f11.jpg"} height={"125px"} width={"100%"}/></div>
        //     <div className='img12'><img src={"flower/f12.jpg"}height={"125px"} width={"100%"}/></div>
        //     <div className='img13'><img src={"flower/f13.jpg"}height={"125px"} width={"100%"}/></div>
        //     <div className='img14'><img src={"flower/f14.jpg"}height={"125px"} width={"100%"}/></div>
        //     <div className='img15'><img src={"flower/f15.jpg"}height={"125px"} width={"100%"}/></div>
            
        //     </div>
        //     <div className='Img4'>
        //     <div className='img16'><img src={"flower/f5.jpg"}height={"125px"} width={"100%"}/></div>
        //     <div className='img17'><img src={"flower/f17.jpg"}height={"125px"} width={"100%"}/></div>
        //     <div className='img18'><img src={"flower/f18.jpg"}height={"125px"} width={"100%"}/></div>
        //     <div className='img19'><img src={"flower/f19.jpg"}height={"125px"} width={"100%"}/></div>
        //     <div className='img20'><img src={"flower/f20.jpg"}height={"125px"} width={"100%"}/></div>
        //     </div>
        //     </div>
        {
            id: 1,
            image:"flower/F1.jpg",
        },
        {
            id: 2,
            image:"flower/F2.jpg",
        },
        { 
            id: 3,
            image:"flower/f3.jpg",
        },
        {
            id: 4,
            image:"flower/f9.jpg",
        },
        {
            id: 5,
            image:"flower/f10.jpg",
        },
        {
            id: 6,
            image:"flower/f11.jpg",
        },
        {
            id: 7,
            image:"flower/f12.jpg",
        },
        {
            id: 8,
            image:"flower/f13.jpg",
        },
        {
            id: 9,
            image:"flower/f14.jpg",
        },
        {
            id: 10,
            image:"flower/f15.jpg",
        },
        {
            id: 11,
            image:"flower/f5.jpg",
        },
        {
            id: 12,
            image:"flower/f17.jpg",
        },
        {
            id: 13,
            image:"flower/f18.jpg",
        },
        {
            id: 14,
            image:"flower/f19.jpg",
        },
        {
            id: 15,
            image:"flower/f20.jpg",
        },
    ]

    const[state , setState] = useState(false);
    const[model , setModel] = useState('');
    const getImage=(image)=>{
        setModel(image);
        setState(true);
    }
    return (
        <>
        <div className={state ? "state open" : "state"}>
        {/* <button id="btn1">previous</button>
            <button id="btn2">next</button> */}
            <img src={model}/>
            
        </div>
       <div className="gallrey">
            {data.map((item,index)=>{
                return(
                    <div className="pics" key={index} onClick={()=>getImage(item.image)}>
                        <img src={item.image} style={{width:'100%'}} />
                    </div>
                )
            })}
        </div>
       



</>
    )
}
export default Gallery