import React from 'react';
function InputField({ icon, type = 'type', placeholder }) {
    return (
        <div className="flex items-center gap-2 mt-4 border-b-2 border-[#333]">
            {icon}
            <input
                type={type}
                placeholder={placeholder}
                className="bg-transparent text-white text-[18px] outline-none py-2 px-1"
            />
        </div>
    );
}

export default InputField;
