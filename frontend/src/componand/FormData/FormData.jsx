import React, { useState } from 'react'
import "./formData.css"



const FormData = () => {
    const [formData, setFormData] = useState({
        Name: "",
        MobileNumber:0,
        Country:"",
        City:"",
        Address:"",
        Email:"",
        State:"",
        Pincode:0
    })
const handleChange = async (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
console.log(formData)

}

const handleSubmit = async(e) => {
    e.preventDefault()
    try {
        const response = await fetch(`http://localhost:4000/api/auth/send`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({...formData})
        })
        const data = await response.json()
        console.log(data)
        if(!response.ok) {
            return 

        }

    }
    catch(err) {
        throw new Error(err)

    }
}



  return (
    <div>
        <div className='form'>
        <div className='fill'>
            <h1>Fill the details below :</h1> 
        </div>
        <form action="" onSubmit={handleSubmit}>
        <div className='name'>
            <p>Name <small>*</small></p>
            <input type="text" name='Name' placeholder='Enter name' value={formData.Name} onChange={handleChange} />
        </div>
        <div className='detail'>
            <div>
            <p>Mobile Number <small>*</small></p>
            <input type="number" name='MobileNumber' placeholder='Enter Your Mobile Number' value={formData.MobileNumber} onChange={handleChange}/>
            </div>

            <div>
            <p>Country <small>*</small></p>
            <input type="text" name='Country' value={formData.Country} placeholder='Select Your Country' onChange={handleChange} />
            </div>

            <div>
            <p>City <small>*</small></p>
            <input type="text" name='City' value={formData.City} placeholder='Select Your City' onChange={handleChange}/>  
            </div>

            <div>
            <p>Email <small>*</small></p>
            <input type="text" name='Email' value={formData.Email} placeholder='Enter Your Email' onChange={handleChange}/>
            </div>

            <div>
            <p>State <small>*</small></p>
            <input type="text" name='State' value={formData.State} placeholder='Select Your State' onChange={handleChange}/>
            </div>

            <div>
            <p>Pincode <small>*</small></p>
            <input type="number" name='Pincode' value={formData.Pincode} placeholder='Enter Your Pincode' onChange={handleChange}/>
            </div>

        </div>
        <div className='address'>
        <p>Address <small>*</small></p>
        <input type="text" name='Address' placeholder='Enter Your Address' value={formData.Address} onChange={handleChange}/>
        </div>

        <div>
            <p><span>By clicking submit, I agree to</span>Terms and Conditions & Privacy Policy</p>
        </div>
        <div className='button'>
            <button>Submit</button>
        </div>
        </form>
        </div>
    </div>
  )
}

export default FormData