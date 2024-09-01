import React from "react";

function Team() {
  return (
    /* 
    sanele:https://media.licdn.com/dms/image/v2/D4D03AQH4X0n3hehbZQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1716232043456?e=2147483647&v=beta&t=0Kyf8MG6J09G7AofYlZto5Wtf06oKMqeZLpY53oaLh0

    zakes:https://media.licdn.com/dms/image/v2/D4D03AQEvZ7Xzzn7yVA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1706807931678?e=1730332800&v=beta&t=r_NPbrPhtmW8SETQV_QYMSC42y0RUgpZka0bNw99mR8


    ahmed:https://media.licdn.com/dms/image/v2/D4D03AQEx46Xn8gu0mw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718283973713?e=2147483647&v=beta&t=2_End6vbEv4RQcjeyOkRmbRmrU5e7Ngf9-ZTpkl7zGo
    */
    <section
      className="w-screen h-screen flex flex-col space-y-10 items-center my-52"
      id="#Team"
    >
      <h1 className="text-center font-bold font-varaiable text-3xl h-32">
        Meet the Spartans
      </h1>
      <div className="flex flex-row">
        <div className="flex flex-row   mt-2 p-1 md:p-6 md:justify-center items-center justify-self-center ">
          <div className="grid grid-cols-3">
            <div
              className=" rounded-full overflow-hidden h-fit w-fit  
                 "
            >
              <img
                className="rounded-md h-28 w-28 "
                src="https://media.licdn.com/dms/image/v2/D4D03AQEx46Xn8gu0mw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718283973713?e=2147483647&v=beta&t=2_End6vbEv4RQcjeyOkRmbRmrU5e7Ngf9-ZTpkl7zGo"
                alt="profile-img"
              />
            </div>
            <div className="flex flex-col text-md font-poppins  text-md mx-auto  my-auto col-span-2 ">
              <p>Ahmed Damir</p>
              <p>Software Developer</p>
            </div>
          </div>
        </div>
        {/* Sbu */}
        <div className="flex flex-row   mt-2 p-1 md:p-6 md:justify-center items-center justify-self-center ">
          <div className="grid grid-cols-3">
            <div
              className=" rounded-full overflow-hidden h-fit w-fit  
                 "
            >
              <img
                className="rounded-md h-28 w-28 "
                src="https://media.licdn.com/dms/image/D4D03AQE2TyjKNsWxDg/profile-displayphoto-shrink_200_200/0/1723307992013?e=1729123200&v=beta&t=-fcOcNS-NxaLAiWb1mmJkmkSYhlyzOTYGEdTi1miuw0"
                alt="profile-iimg"
              />
            </div>
            <div className="flex flex-col text-md font-poppins  text-md mx-auto  my-auto col-span-2 ">
              <p>Sibusiso Zulu</p>
              <p>Frontend Developer</p>
            </div>
          </div>
        </div>
      </div>
      {/* Ahmed */}
      <div className="flex flx-row">
        {/* Sanele */}
        <div className="flex flex-row   mt-2 p-1 md:p-6 md:justify-center items-center justify-self-center ">
          <div className="grid grid-cols-3">
            <div
              className=" rounded-full overflow-hidden h-fit w-fit  
                 "
            >
              <img
                className="rounded-md h-28 w-28 "
                src="https://media.licdn.com/dms/image/v2/D4D03AQH4X0n3hehbZQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1716232043456?e=2147483647&v=beta&t=0Kyf8MG6J09G7AofYlZto5Wtf06oKMqeZLpY53oaLh0"
              />
            </div>
            <div className="flex flex-col text-md font-poppins  text-md mx-auto  my-auto col-span-2 ">
              <p>Sanele Ncube</p>
              <p>Frontend Developer</p>
            </div>
          </div>
        </div>
        {/* Sbu */}
        <div className="flex flex-row   mt-2 p-1 md:p-6 md:justify-center items-center justify-self-center ">
          <div className="grid grid-cols-3">
            <div
              className=" rounded-full overflow-hidden h-fit w-fit  
                 "
            >
              <img
                className="rounded-md h-28 w-28 "
                src="https://media.licdn.com/dms/image/v2/D4D03AQEvZ7Xzzn7yVA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1706807931678?e=1730332800&v=beta&t=r_NPbrPhtmW8SETQV_QYMSC42y0RUgpZka0bNw99mR8"
                alt="profile-iimg"
              />
            </div>
            <div className="flex flex-col text-md font-poppins  text-md mx-auto  my-auto col-span-2 ">
              <p>Zakaria Mohamed </p>
              <p>Software Developer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
