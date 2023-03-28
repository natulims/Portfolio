import React from "react";

function Badges() {
  return (
    <>
      <section className="flex flex-col lg:flex-row gap-6">
        <div className="px-5 py-10">
          <img
            className="rounded-lg w-full mb-10 lg:w-[45rem] hover:opacity-50 cursor-pointer"
            src="https://i.etsystatic.com/10119101/r/il/84a4f2/2618451668/il_fullxfull.2618451668_bv3d.jpg"
            alt=""
          />
        </div>

        <div className="px-5 py-10">
          <img
            className="rounded-lg w-full mb-10 lg:w-[45rem] hover:opacity-50 cursor-pointer"
            src="https://i.etsystatic.com/10119101/r/il/84a4f2/2618451668/il_fullxfull.2618451668_bv3d.jpg"
            alt=""
          />
        </div>

        <div className="px-5 py-10">
          <img
            className="rounded-lg w-full mb-10 lg:w-[45rem] hover:opacity-50 cursor-pointer"
            src="https://i.etsystatic.com/10119101/r/il/84a4f2/2618451668/il_fullxfull.2618451668_bv3d.jpg"
            alt=""
          />
        </div>
      </section>
    </>
  );
}

export default Badges;
