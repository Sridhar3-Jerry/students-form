import Input from "./Input";
import { StepBack,StepForward} from "lucide-react";
import { AnimatePresence } from "framer-motion";


function PersonalInfo(props){
    const personalInfoFields = [
        {
          label: "Full Name",
          name: "fullName",
          type: "text",
          placeholder: "Enter your full name",
          inputId: "input-fullName"
        },
        {
          label: "Date of Birth",
          name: "dob",
          type: "date",
          placeholder: "Select your birth date",
          inputId: "input-dob"
        },
        {
          label: "Gender",
          name: "gender",
          type: "select",
          options: ["Male", "Female", "Other"],
          placeholder: "Select gender",
          inputId: "input-gender"
        },
        {
          label: "Email Address",
          name: "email",
          type: "email",
          placeholder: "Enter your email address",
          inputId: "input-email"
        },
        {
          label: "Phone Number",
          name: "phone",
          type: "tel",
          placeholder: "Enter your phone number",
          inputId: "input-phone"
        }
      ];
      
    return(
        <div className="flex justify-center ">
            
            <div className="bg-gray-100 p-16 w-1/4 flex flex-col gap-6 rounded-xl shadow-2xl">
                <div className="flex justify-center text-4xl">
                    Personal Info
                </div>
                {personalInfoFields.map((detail,index)=>{
                    return(
                        <Input key={index} type={detail.type} label={detail.label} inputId={detail.inputId} placeholder={detail.placeholder} options={detail.options} direction={props.direction} />
                    )
                })}
            <div className="flex justify-between pt-5 ">
                <div className="border p-2 cursor-not-allowed flex items-center rounded bg-red-500" >
                    <StepBack/>
                    <button className=" cursor-not-allowed" disabled> Prev</button>
                </div>
                <div className="border p-2 flex items-center rounded bg-green-500 cursor-pointer">
                    <button className="cursor-pointer" onClick={props.onNext}>Next</button>
                    <StepForward/>
                </div>
               
            </div>
            
            </div>
            
        </div>
        
    )
}
export default PersonalInfo