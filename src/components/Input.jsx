import { motion } from "framer-motion";

function Input({placeholder, label, inputId, type, error, options, direction = 1}){
    const inputVariants = {
        initial: (direction) => ({
            x: direction > 0 ? 50 : -50,
            opacity: 0,
        }),
        animate: {
            x: 0,
            opacity: 1,
        },
        exit: (direction) => ({
            x: direction > 0 ? -50 : 50,
            opacity: 0,
        }),
    };
    return(
        <motion.div
            className="flex flex-col gap-1 mb-2"
            custom={direction}
            variants={inputVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3 }}
        >
            <label htmlFor={inputId} className="text-black">{label}</label>
            <div className="flex flex-col ">
                {type == "select" ? 
                (<select id={inputId} className="border border-black w-full p-2 rounded-2xl cursor-pointer text-black">
                    {options && options.map((opt, i) => (
                        <option key={i} value={opt}>{opt}</option>
                    ))}
                </select>) :

                <input
                    id={inputId}
                    type={type}
                    placeholder={placeholder}
                    className="border border-black w-full p-2 rounded-2xl cursor-pointer text-black"
                />
                }
            </div>
        </motion.div>
    )
}
export default Input;