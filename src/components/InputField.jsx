import React from 'react';

function InputField({ icon, type = 'type', placeholder, register, name, errors }) {
    console.log(errors);
    return (
        <div className="">
            <div className="flex items-center gap-2 mt-4 border-b-2 border-[#333]">
                {icon}
                <input
                    type={type}
                    placeholder={placeholder}
                    className="bg-transparent text-white text-[18px] outline-none py-2 px-1"
                    {...register(name)}
                />
            </div>
            {errors && <p className="text-[#df2b4f] mt-2 font-[500]">{errors.message}</p>}
        </div>
    );
}

export default InputField;
