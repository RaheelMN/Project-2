import React from 'react'
import styles from './ContactForm.module.css'
import Button from '../Button/Button'
import {MdMessage} from 'react-icons/md'
import {AiOutlineMessage} from 'react-icons/Ai'
import {MdAlternateEmail} from 'react-icons/md'
import { useState } from 'react'

let isSubmitted = false

const ContactForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail]=useState('')
  const [comment, setComment]=useState('')

  const onSubmit = function(e){
    debugger
    e.preventDefault()
    isSubmitted=true
    setName(e.target[0].value)
    setEmail(e.target[1].value)
    setComment(e.target[2].value)

    const url = 'http://localhost/javascriptRequests/reactformdata.php'
    const obj = {
      method: 'POST',
      headers: 
      {
          "Content-Type": "application/x-www-form-urlencoded"
      },
      headers: 
      {
          "Accept": 'application/json'
      },      
      body: "name=raheel&age=33"
    }
    async function getData(){
      const response = await fetch(url,obj)
      const data= await response.json()
      console.log(data)
    }
    // getData()
  }
  return (
    <section className={styles.container}>
        <div className={styles.contact_form}>
          <div className={styles.top_buttons}>
            <Button icon={<MdMessage fontSize='24px'/>} text='via support chat'/>
            <Button icon={<AiOutlineMessage fontSize='24px'/>} text='via call'/>
          </div>
          <Button isoutline={true} icon={<MdAlternateEmail fontSize='24px'/>} text='via email'/>
          <form  onSubmit={onSubmit}>
            <div className={styles.form_div}>
              <label htmlFor="cname">Name</label>
              <input type="text" name="cname" id="cname" />
            </div>
            <div className={styles.form_div}>
              <label htmlFor="cemail">Email</label>
              <input type="text" name="cemail" id="cemail" />
            </div>
            <div className={styles.form_div}>
              <label htmlFor="comment">Comments</label>
              <textarea name="comment" id="comment" rows="5" />
            </div> 
            <div className={styles.submit_div}>
              <Button  text='Submits'/>
            </div> 
            {isSubmitted?             
              <div>
                <p>
                  Name : {name}
                </p>
                <p>
                  Email: {email}
                </p>
                <p>
                  Comment: {comment}
                </p>
              </div>
              :
              <div>
              </div> 
            }  
          </form>       
        </div>
        <div className={styles.contact_image}>
          <img src="./images/Service.svg" alt="contact_img" />
        </div> 
    </section>
  )
}

export default ContactForm