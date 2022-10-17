import React from 'react';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
function Pagination({ pagination, onPageChange }) {
    const handlePaginationChange = (newPage) => {
        if (onPageChange) onPageChange(newPage);
    };
    return (
        <div className="flex gap-2 justify-center my-8 text-[#78909c] font-semibold">
            <button className="bg-[#212526] px-3 py-2 rounderd ">
                Page {pagination?.current_page} of {pagination?.last_visible_page}
            </button>
            <button
                className={`bg-[#212526] px-3 py-2 rounderd transition-all ${
                    pagination?.current_page === 1 ? '' : 'hover:bg-greensSecondary text-white'
                }`}
                onClick={() => {
                    if (pagination?.current_page === 1) return;
                    handlePaginationChange(1);
                }}
            >
                First Page
            </button>
            <button
                className={`bg-[#212526] px-3 py-2 rounderd ${
                    pagination?.current_page === 1
                        ? ''
                        : 'hover:bg-greensSecondary transition-all hover:text-white'
                }`}
                onClick={() => {
                    if (pagination?.current_page === 1) return;
                    handlePaginationChange(pagination?.current_page - 1);
                }}
            >
                <FaArrowAltCircleLeft />
            </button>

            {pagination.current_page === 1 && (
                <>
                    <button className="rounded  px-3 py-2 rounderd min-w-[42px] bg-primary text-white">
                        1
                    </button>
                    <button
                        className="bg-[#212526] px-3 py-2 rounderd min-w-[42px] transition-all hover:bg-greensSecondary text-white"
                        onClick={() => handlePaginationChange(2)}
                    >
                        2
                    </button>
                </>
            )}

            {pagination?.current_page !== 1 &&
                pagination?.current_page !== pagination?.last_visible_page && (
                    <>
                        <button
                            className="bg-[#212526] px-3 py-2 rounderd min-w-[42px] cursor-pointer transition-all hover:bg-greensSecondary hover:text-white"
                            onClick={() => {
                                handlePaginationChange(pagination?.current_page - 1);
                            }}
                        >
                            {pagination?.current_page - 1}
                        </button>
                        <button className="rounded px-3 py-2 rounderd min-w-[42px] bg-primary text-white">
                            {pagination?.current_page}
                        </button>
                        <button
                            className="bg-[#212526] px-3 py-2 rounderd min-w-[42px] cursor-pointer transition-all hover:bg-greensSecondary hover:text-white"
                            onClick={() => {
                                handlePaginationChange(pagination?.current_page + 1);
                            }}
                        >
                            {pagination?.current_page + 1}
                        </button>
                    </>
                )}

            {pagination.current_page === pagination?.last_visible_page && (
                <>
                    <button
                        className="bg-[#212526] px-3 py-2 rounderd min-w-[42px] cursor-pointer transition-all hover:bg-greensSecondary hover:text-white"
                        onClick={() => {
                            handlePaginationChange(pagination?.current_page - 1);
                        }}
                    >
                        {pagination?.last_visible_page - 1}
                    </button>
                    <button className="rounded px-3 py-2 rounderd min-w-[42px] bg-primary text-white">
                        {pagination.current_page}
                    </button>
                </>
            )}

            <button
                className={`bg-[#212526] px-3 py-2 rounderd transition-all ${
                    pagination?.current_page === pagination?.last_visible_page
                        ? ''
                        : 'hover:bg-greensSecondary hover:text-white'
                }`}
                onClick={() => {
                    if (pagination?.last_visible_page === 1) return;
                    handlePaginationChange(pagination?.current_page + 1);
                }}
            >
                <FaArrowAltCircleRight />
            </button>
            <button
                className={`bg-[#212526] px-3 py-2 rounderd transition-al ${
                    pagination?.current_page === pagination?.last_visible_page
                        ? ''
                        : 'hover:bg-greensSecondary hover:text-white'
                }`}
                onClick={() => {
                    if (pagination?.last_visible_page === 1) return;
                    handlePaginationChange(pagination?.last_visible_page);
                }}
            >
                Last Page
            </button>
        </div>
    );
}

export default Pagination;
