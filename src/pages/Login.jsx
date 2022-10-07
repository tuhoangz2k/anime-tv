import { useState } from 'react';
import InputField from '../components/InputField';
import { AiTwotoneMail, AiFillLock } from 'react-icons/ai';

function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div className="flex flex-col items-center h-[100%] mt-[30vh] translate-y-[-50%]">
            <h4 className="text-[34px] text-white font-semibold">Login</h4>
            <form className="w-[80%] md:w-[60%] lg:w-[400px]">
                <InputField
                    placeholder="Enter your email address"
                    type="email"
                    icon={<AiTwotoneMail size={18} />}
                />
                <InputField
                    placeholder="Password"
                    type="password"
                    icon={<AiFillLock size={18} />}
                />
                <button
                    type="submit"
                    className="text-[#333] bg-[#d8d8d8] mt-8 w-full md:w-[150px] md:mx-[50%] md:translate-x-[-50%] h-[45px] rounded-sm font-semibold"
                >
                    Login
                </button>
            </form>
        </div>
    );
}

export default Login;
