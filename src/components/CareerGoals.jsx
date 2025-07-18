import Input from "./Input";
import { StepBack,StepForward} from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

function CareerGoals(props){
    const [submitted, setSubmitted] = useState(false);
    const preferencesAndGoalsFields = [
        {
          label: "Preferred Learning Mode",
          type: "select",
          options: ["Online", "Offline", "Hybrid"],
          placeholder: "Select a learning mode",
          inputId: "input-learning-mode"
        },
        {
          label: "Areas of Interest",
          type: "text",
          placeholder: "e.g., AI, Design, Business",
          inputId: "input-interests"
        },
        {
          label: "Short-Term Goal",
          type: "text",
          placeholder: "Enter your short-term goal",
          inputId: "input-short-term-goal"
        },
        {
          label: "Long-Term Goal",
          type: "text",
          placeholder: "Enter your long-term goal",
          inputId: "input-long-term-goal"
        },
        {
          label: "Willingness to Relocate for Job",
          type: "select",
          options: ["Yes", "No"],
          placeholder: "Select one",
          inputId: "input-relocate"
        }
      ];
      
      
    if (submitted) {
        return (
            <motion.div
            initial={{opacity:0,scale:0.70}}
            animate={{opacity:1,scale:1}}
            transition={{
                type: "tween", ease: "easeOut", duration: 0.6

            }}
            className="w-full flex justify-center">
                <div className="bg-white p-16 w-1/4 flex flex-col gap-6 rounded-xl items-center justify-center">
                    <div className="text-3xl text-green-600 font-bold mb-4">Success!</div>
                    <div className="text-lg text-gray-700">Your form has been submitted successfully.</div>
                </div>
            </motion.div>
        );
    }
    
    return(
        <div className="w-full flex justify-center">
            
            <div className="bg-gray-100 p-16 w-1/4 flex flex-col gap-6 rounded-xl shadow-2xl">
                <div className="flex justify-center text-4xl">
                       Career Goals
                </div>
            {preferencesAndGoalsFields.map((detail,index)=>{
                return(
                    <Input key={index} type={detail.type} label={detail.label} inputId={detail.inputId} placeholder={detail.placeholder} options={detail.options} direction={props.direction}/>
                )
            })}
            <div className="flex justify-between pt-5 ">
                <div className="border p-2 cursor-not-allowed flex items-center rounded bg-red-500" onClick={props.onPrev} >
                    <StepBack/>
                    <button className=" cursor-pointer" > Prev</button>
                </div>
                <div className="border p-2 flex items-center rounded bg-green-500 cursor-pointer">
                    <button className="cursor-pointer" onClick={() => setSubmitted(true)}>Submit</button>
                </div>
               
            </div>
            
            </div>
            
        </div>
    )
}

export default CareerGoals;