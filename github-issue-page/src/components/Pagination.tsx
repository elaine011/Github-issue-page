import { ChevronLeftIcon, ChevronRightIcon } from "@primer/octicons-react";

export default function Pagination() {
  const pagination = {
    prePages: [1, 2],
    middle: [3, 4, 5, 6, 7],
    nextPages: [8, 9],
  };
  return (
    <div className="flex justify-center items-center text-sm mt-4 mb-6 px-1">
      <a className="grid place-items-center grid-flow-col	text-[#8c959f] flex items-center py-5px px-2.5 border border-solid border-transparent hover:border-primary-border hover:rounded-md">
        <ChevronLeftIcon size={16} className="mr-1" />
        <span>Previous</span>
      </a>
      <div className=" hidden sm:block sm:flex">
        {pagination.prePages.map((page) => {
          return (
            <a className="grid place-items-center text-primary-text py-5px px-2.5 min-w-[32px] border border-solid border-transparent hover:border-primary-border hover:rounded-md">
              {page}
            </a>
          );
        })}
        <span className="py-5px px-2.5 min-w-[32px]">...</span>
        {pagination.middle.map((page) => {
          return (
            <a className="grid place-items-center text-primary-text py-5px px-2.5 min-w-[32px] border border-solid border-transparent hover:border-primary-border hover:rounded-md">
              {page}
            </a>
          );
        })}
        <span className="py-5px px-2.5 min-w-[32px]">...</span>
        {pagination.nextPages.map((page) => {
          return (
            <a className="grid place-items-center text-primary-text py-5px px-2.5 min-w-[32px] border border-solid border-transparent hover:border-primary-border hover:rounded-md">
              {page}
            </a>
          );
        })}
      </div>
      <a className="grid place-items-center grid-flow-col text-[#0969da] flex items-center py-5px px-2.5 border border-solid border-transparent hover:border-primary-border hover:rounded-md">
        <span>Next</span>
        <ChevronRightIcon size={16} className="ml-1" />
      </a>
    </div>
  );
}
