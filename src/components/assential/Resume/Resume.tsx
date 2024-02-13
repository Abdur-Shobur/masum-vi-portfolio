import Image from "next/image";
import photo from "@/../public/images/resumePhoto.png";
import { MdCastForEducation, MdLocationOn } from "react-icons/md";
import { FaUserTie } from "react-icons/fa";
import { GoGoal } from "react-icons/go";
import { IoStar } from "react-icons/io5";
import { LiaUserAstronautSolid } from "react-icons/lia";

const ResumeComponent = () => {
  return (
    <div className="my-10">
      {/* photo and about */}
      <div className="grid grid-cols-3 items-center gap-4">
        {/* photo */}
        <div className="col">
          <Image
            src={photo}
            width={300}
            height={300}
            layout="responsive"
            alt="profile photo"
          />
        </div>
        <div className="col-span-2">
          <h2 className="uppercase font-bold text-3xl ">MD MASUM BILLAH</h2>
          <h3 className="font-semibold text-xl py-3">
            “Venturing on the path of limitless possibilities”
          </h3>
          <p>
            Dedicated to propelling business growth with expertise in
            Administrative Service, IT Support, Customer Service, and Digital
            Marketing. My unwavering commitment to excellence ensures client
            satisfaction. I focus on empowering emerging freelancers through
            targeted training, fostering a community of skill and ambition. With
            a proven track record across diverse domains, I bring a history of
            accomplishments showcasing my proficiency. Further enhancing my
            profile are adept skills in Day Trading and market analysis,
            including Forex trading.
          </p>
        </div>
      </div>

      {/* linkedin */}
      <div className=" flex justify-center">
        <a
          className="text-lg font-bold"
          target="_blank"
          href="https://www.linkedin.com/in/masumbillahmusa/"
        >
          Linkedin
        </a>
      </div>

      {/* layout */}
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-3">
          {/* WORK EXPERIENCE */}
          <div className="">
            <div className="flex text-lg items-center gap-2 font-semibold text-main  border-b-2 border-black">
              <h2>WORK EXPERIENCE</h2>
              <MdCastForEducation />
            </div>
            {/*  */}
            <div className="">
              <h2 className="text-md font-semibold pt-2 flex items-center relative  ">
                <span className="-m-1 w-3 h-3 block rounded-full  bg-secondary"></span>
                <span className=" pl-2 text-secondary">
                  ADMINISTRATIVE DIRECTOR
                </span>
              </h2>
              <div className=" border-l border-secondary pl-2">
                <h3 className="font-semibold">Sindabad IT LTD.</h3>
                <p>12/2021 {"–"} Current</p>
                <div className="flex items-center gap-1">
                  <MdLocationOn />
                  <p className="py-1">Dhaka, Bangladesh</p>
                </div>
                <p className="border-t border-black mt-1">
                  In my role as an Administrative Director, I lead and manage
                  administrative tasks to keep everything running smoothly. This
                  includes planning, budgeting, leading teams, handling
                  facilities and vendors, ensuring compliance with regulations,
                  and solving problems. I adjust my approach based on the
                  organization s size and industry, always keeping our overall
                  business goals in mind.
                </p>
              </div>
            </div>
            {/*  */}
            <div className="">
              <h2 className="text-md font-semibold pt-2 flex items-center relative  ">
                <span className="-m-1 w-3 h-3 block rounded-full  bg-secondary"></span>
                <span className=" pl-2 text-secondary">
                  ADMINISTRATIVE DIRECTOR
                </span>
              </h2>
              <div className=" border-l border-secondary pl-2">
                <h3 className="font-semibold">Sindabad IT LTD.</h3>
                <p>12/2021 {"–"} Current</p>
                <div className="flex items-center gap-1">
                  <MdLocationOn />
                  <p className="py-1">Dhaka, Bangladesh</p>
                </div>
                <p className="border-t border-black mt-1">
                  In my role as an Administrative Director, I lead and manage
                  administrative tasks to keep everything running smoothly. This
                  includes planning, budgeting, leading teams, handling
                  facilities and vendors, ensuring compliance with regulations,
                  and solving problems. I adjust my approach based on the
                  organization s size and industry, always keeping our overall
                  business goals in mind.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <h1 className="text-xl font-semibold uppercase py-5 flex items-center gap-2">
            <p> Personal details</p>
            <FaUserTie />
          </h1>

          <div className="">
            <div className="pt-3">
              <h1 className="text-lg font-semibold text-stone-500">
                Date of birth
              </h1>
              <p>April 2, 1997</p>
            </div>
            <div className="pt-3">
              <h1 className="text-lg font-semibold text-stone-500">Gender</h1>
              <p>Male</p>
            </div>
            <div className="pt-3">
              <h1 className="text-lg font-semibold text-stone-500">
                Nationality
              </h1>
              <p>Bangladeshi</p>
            </div>
            <div className="pt-3">
              <h1 className="text-lg font-semibold text-stone-500">Mobile</h1>
              <p>+880 1734 659 001</p>
            </div>
            <div className="pt-3">
              <h1 className="text-lg font-semibold text-stone-500">eMail</h1>
              <p>spacedevs@gmail.com</p>
            </div>
          </div>

          <div className="">
            <h1 className="text-xl font-semibold uppercase pt-5 flex items-center gap-2">
              <p> Qualities</p>
              <GoGoal />
            </h1>
            <div className="">
              <h1 className="pt-2 text-lg flex items-center gap-1 ">
                <IoStar className="text-secondary" />
                <span>Early Adopter</span>
              </h1>
              <h1 className="pt-2 text-lg flex items-center gap-1 ">
                <IoStar className="text-secondary" />
                <span>Early Adopter</span>
              </h1>
              <h1 className="pt-2 text-lg flex items-center gap-1 ">
                <IoStar className="text-secondary" />
                <span>Early Adopter</span>
              </h1>
            </div>
          </div>

          <div className="">
            <h1 className="text-xl font-semibold uppercase pt-5 flex items-center gap-2">
              <p> Languages</p>
              <LiaUserAstronautSolid size={25} />
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeComponent;
