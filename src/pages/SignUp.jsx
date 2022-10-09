import { useState } from 'react';
import InputField from '../components/InputField';
import { UserAuth } from '../context/Auth';
import { AiTwotoneMail, AiFillLock } from 'react-icons/ai';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import ramRem from '../assets/img/ramRem.png';

const schema = yup
    .object({
        email: yup
            .string()
            .required('email is required')
            .email('email is invalid')
            .min(6, 'Email must have at least 6 characters'),
        password: yup
            .string()
            .required('password is required')
            .min(6, 'Password must be at least 6 characters'),
    })
    .required();

function SignUp(props) {
    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
    } = useForm({
        resolver: yupResolver(schema),
    });

    const { createUser } = UserAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmitForm = async (data) => {
        console.log(data);
        //    await createUser(email, password);
    };

    return (
        <div className="flex flex-col items-center h-[100%] mt-[30vh] translate-y-[-50%]">
            <div className="absolute h-[500px] z-[1]">
                <img src={ramRem} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="relative z-[5] w-full">
                <h4 className="text-[34px] text-white font-semibold text-center">Sign Up</h4>
                <form
                    onSubmit={handleSubmit(handleSubmitForm)}
                    className="w-[80%] md:w-[60%] lg:w-[400px] mx-auto"
                >
                    <InputField
                        placeholder="Enter your email"
                        type="email"
                        icon={<AiTwotoneMail size={18} />}
                        register={register}
                        state={email}
                        setState={setEmail}
                        errors={errors.email}
                        name="email"
                        control={control}
                    />
                    <InputField
                        placeholder="Password"
                        type="password"
                        icon={<AiFillLock size={18} />}
                        register={register}
                        name="password"
                        state={password}
                        setState={setPassword}
                        errors={errors.password}
                        control={control}
                    />
                    <button
                        type="submit"
                        className="text-[#333] bg-[#d8d8d8] mt-8 w-full md:w-[150px] 
                        md:mx-[50%] md:translate-x-[-50%] h-[45px] 
                        rounded-sm font-semibold hover:opacity-80 transition-all hover:text-[red]"
                    >
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
}

export default SignUp;
