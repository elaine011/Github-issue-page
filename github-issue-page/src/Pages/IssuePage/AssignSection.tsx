export default function AssignSection({ assignees, labels }) {
  return (
    <div className="mt-4 mb-6 border-b border-solid border-[#d0d7de] text-[12px] font-semibold text-[#57606a] md:hidden">
      <div className="mb-4 flex">
        <div className="w-[16.66666666%]">Assignees</div>
        <div>
          {assignees &&
            assignees.map((item) => (
              <img
                src={item?.avatar_url}
                className="h-5 w-5 rounded-[50%] shadow-[0_0_0_1px_rgba(27,31,36,0.15)]"
                key={item?.id}
              />
            ))}
        </div>
      </div>
      <div className="mb-4 flex">
        <div className="w-[16.66666666%]">Labels</div>
        <div>
          {labels &&
            labels.map((item) => (
              <a
                className="mr-1 mb-1 rounded-[2em] px-[7px] py-[1px] text-[#000]"
                style={{ backgroundColor: `#${item?.color}` }}
                key={item?.id}
              >
                {item?.name}
              </a>
            ))}
        </div>
      </div>
    </div>
  );
}
