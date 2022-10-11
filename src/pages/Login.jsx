import { useState, memo } from 'react';
import { AiTwotoneMail, AiFillLock } from 'react-icons/ai';
import { useForm } from 'react-hook-form';
import { useNavigate, Navigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import InputField from '../components/InputField';
import * as yup from 'yup';
import ramRem from '../assets/img/ramRem.png';
import { UserAuth } from '../context/Auth';
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
function Login(props) {
    const { login, user } = UserAuth();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
        setError,
    } = useForm({
        resolver: yupResolver(schema),
    });

    const handleSubmitForm = async (data) => {
        try {
            await login(data.email, data.password);
            navigate('/');
        } catch (error) {
            console.log(error);
            setError('email', { type: 'focus', errors: error.message });
        }
    };
    if (!user?.uid) {
        return (
            <>
                <div className="relative flex flex-col items-center h-[100%] mt-[30vh] translate-y-[-50%]">
                    <div className="absolute h-[500px] z-[1]">
                        <img src={ramRem} alt="" className="w-full h-full object-cover" />
                    </div>

                    <div className="relative z-[5] w-full">
                        <h4 className="text-[34px] text-white font-semibold text-center">Login</h4>
                        <form
                            className="w-[80%] md:w-[60%] lg:w-[400px] mx-auto"
                            onSubmit={handleSubmit(handleSubmitForm)}
                        >
                            <InputField
                                placeholder="Enter your email address"
                                type="email"
                                icon={<AiTwotoneMail size={18} />}
                                register={register}
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
                                errors={errors.password}
                            />
                            <button
                                type="submit"
                                className="text-[#333] bg-[#d8d8d8] mt-8 w-full md:w-[150px] md:mx-[50%]
                            md:translate-x-[-50%] h-[45px] rounded-sm font-semibold hover:opacity-80 transition-all hover:text-[red]"
                            >
                                Login
                            </button>
                        </form>
                    </div>
                </div>
            </>
        );
    } else {
        // navigate('/');

        return <Navigate to="/" replace={true} />;
    }
}

export default memo(Login);
