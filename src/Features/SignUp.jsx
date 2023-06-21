import { useState } from "react"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"
import { signUpService } from "../services/AuthService"

export const SignUp = () => {
    const signformValue = {
        email : '',
        password : '',
        firstName : '',
        username : ''
    }
    const [signForm , setSignForm] = useState(signformValue)

    const filFormValue = (e , fieldName) => {
        setSignForm((prev)=> ({...prev, [fieldName] : e.target.value }))
    }

    const saveSignForm = (e)=>{
        e.preventDefault()
        const {  email ,
        password ,
        firstName ,
        username,  confirmPassword } = signForm
        if(password !== confirmPassword) {
             toast.error('plaese password must be same')
        }else if(email && password && firstName && username){
            signUpService(email , password, firstName, username)
        }
    }
    return (
           <>
            <div className="flex flex-column flex-center h-full w-full">
                <h2 className="fw-black  mb-m">
                    <span className="primary-color">My</span> Website
                </h2>
                <div className="white-bg br-m p-xxl pt-l pb-l" style={{width : '30rem'}} >
                   <form  onSubmit={(e)=> saveSignForm(e)}>
                   <h3 className="txt-center mb-s txt-l">Signup</h3>
                    <div className="flex flex-column">
                        <label className="txt-s">Full Name</label>
                        <input
                            type="text"
                            name="firstName"
                            className="p-xs txt-s lynx-white-color br-s mb-s "
                            style={{border : '1px solid grey', color : 'black'}}
                            required
                            placeholder="Tanay Pratap"
                            onChange={(e)=> {
                                if (/[^a-zA-Z\s]/g.test(e.target.value)) {e.target.value=e.target.value.replace(/[^a-zA-Z\s]/g,'')} if(e.target.value.trim().length==0) e.target.value=''
                                filFormValue(e, 'firstName')
                            }}
                        />
                    </div>
                    <div className="flex flex-column">
                        <label >Username</label>
                        <input
                            type="text"
                            name="username"
                            className="p-xs txt-s lynx-white-color br-s mb-s "
                            style={{border : '1px solid grey', color : 'black'}}
                            required
                            placeholder="tanaypratap"
                            onChange={(e)=> {
                                 if (/[^a-zA-Z\s]/g.test(e.target.value)) {e.target.value=e.target.value.replace(/[^a-zA-Z\s]/g,'')} if(e.target.value.trim().length==0) e.target.value=''
                                 filFormValue(e, 'username')}}
                        />
                    </div>
                    <div className="flex flex-column">
                        <label >Email Address</label>
                        <input
                            type="email"
                            name="email"
                            className="p-xs txt-s lynx-white-color br-s mb-s "
                            style={{border : '1px solid grey', color : 'black'}}
                            required
                            placeholder="tanay@neog.camp"
                            onChange={(e)=> {
                                filFormValue(e, 'email')
                            }}
                        />
                    </div>
                    <div className="flex flex-column">
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            className="p-xs txt-s lynx-white-color br-s flex mb-s items-center "
                            style={{border : '1px solid grey', color : 'black'}}
                            required
                            placeholder="************"
                            onChange={(e)=> {
                                if (/[^a-zA-Z0-9\s]/g.test(e.target.value)) {e.target.value=e.target.value.replace(/[^a-zA-Z0-9\s]/g,'')} if(e.target.value.trim().length==0) e.target.value=''
                                filFormValue(e, 'password')}}
                        />
                    </div>
                    <div className="flex flex-column">
                        <label>Confirm Password</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            className="p-xs txt-s lynx-white-color br-s flex items-center "
                            style={{border : '1px solid grey', color : 'black'}}
                            required
                            placeholder="************"
                            onChange={(e)=> {
                                if (/[^a-zA-Z0-9\s]/g.test(e.target.value)) {e.target.value=e.target.value.replace(/[^a-zA-Z0-9\s]/g,'')} if(e.target.value.trim().length==0) e.target.value=''
                                filFormValue(e, 'confirmPassword')}}
                        />
                    </div>
                    <div className="flex flex-align-center flex-space-between mt-m mb-m">
                        <div className="txt-s flex flex-align-center">
                            <input className="p-s txt-cursor" type="checkbox" required name="rmbr-me" id="" />
                            <label className="pl-xs txt-cursor" >I accept all Terms & Conditions</label>
                        </div>

                    </div>
                    <button type="submit"
                        className="w-full primary-bg white-color p-s outline-transparent border-none pt-xs pb-xs txt-s"
                    >
                        Create New Account
                    </button>
                    <Link to='/login' className="txt-center w-full mt-m" style={{display : 'block'}}
                    >Already have an account 
                    </Link>
                   </form>
                </div>
            </div>
           </>
    )
}