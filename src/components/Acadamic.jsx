import Input from "./Input";
import { StepBack,StepForward} from "lucide-react";

function Acadamic(props){
    const academicDetailsFields = [
        {
          label: "Student ID / Roll Number",
          type: "text",
          placeholder: "Enter your student ID or roll number",
          inputId: "input-studentId"
        },
        {
          label: "Course / Program",
          type: "text",
          placeholder: "Enter your course or program",
          inputId: "input-program"
        },
        {
          label: "Year / Semester",
          type: "text",
          placeholder: "Enter your year or semester",
          inputId: "input-yearSemester"
        },
        {
          label: "Department",
          type: "text",
          placeholder: "Enter your department",
          inputId: "input-department"
        },
        {
          label: "GPA / Marks",
          type: "text",
          placeholder: "Enter your GPA or marks",
          inputId: "input-gpa"
        }
      ];
      
    return(
        <div className="w-full flex justify-center">
            
            <div className="bg-gray-100 p-16 w-1/4 flex flex-col gap-6 rounded-xl shadow-2xl">

                <div className="flex justify-center text-4xl">
                        Acadamic
                </div>
            {academicDetailsFields.map((detail,index)=>{
                return(
                    <Input key={index} type={detail.type} label={detail.label} inputId={detail.inputId} placeholder={detail.placeholder} />
                )
            })}
            <div className="flex justify-between pt-5 ">
                <div className="border p-2 cursor-pointer flex items-center rounded bg-red-500" onClick={props.onPrev}>
                    <StepBack/>
                    <button className=" cursor-pointer"> Prev</button>
                </div>
                <div className="border p-2 flex items-center rounded bg-green-500 cursor-pointer" onClick={props.onNext}>
                    <button className="cursor-pointer">Next</button>
                    <StepForward/>
                </div>
               
            </div>
            
            </div>
            
        </div>
    )
}

export default Acadamic;