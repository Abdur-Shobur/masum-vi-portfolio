import Image from "next/image";
import photo from "@/../public/images/resumePhoto.png";
import { MdCastForEducation, MdLocationOn } from "react-icons/md";
import { FaGraduationCap, FaUserTie } from "react-icons/fa";
import { GoGoal } from "react-icons/go";
import { IoStar } from "react-icons/io5";
import { LiaCertificateSolid, LiaUserAstronautSolid } from "react-icons/lia";
import { ImPen } from "react-icons/im";
import { FaPersonRunning } from "react-icons/fa6";
import { BiSolidCheckbox } from "react-icons/bi";
import { RiUserVoiceFill } from "react-icons/ri";

const ResumeComponent = () => {
  return (
    <div className="my-10">
      {/* photo and about */}
      <div className="grid md:grid-cols-3 items-center gap-4">
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
        <div className="md:col-span-2">
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
      <div className="grid md:grid-cols-4 gap-4">
        <div className="md:col-span-3">
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

        {/* Personal details */}
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

            <div className="">
              <h2 className="text-lg font-semibold py-2">Bengali</h2>
              <div className="w-full h-3 bg-stone-500">
                <div className="bg-secondary w-[100%] h-full "></div>
              </div>
            </div>
            <div className="">
              <h2 className="text-lg font-semibold py-2">English</h2>
              <div className="w-full h-3 bg-stone-500">
                <div className="bg-secondary w-[70%] h-full "></div>
              </div>
            </div>
            <div className="">
              <h2 className="text-lg font-semibold py-2">English</h2>
              <div className="w-full h-3 bg-stone-500">
                <div className="bg-secondary w-[70%] h-full "></div>
              </div>
            </div>
            <div className="">
              <h2 className="text-lg font-semibold py-2">English</h2>
              <div className="w-full h-3 bg-stone-500">
                <div className="bg-secondary w-[70%] h-full "></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 mt-10">
        <div className="">
          {/* Internships */}
          <div className="">
            <h1 className="text-xl font-bold flex items-center gap-2">
              <ImPen size={25} className="rotate-[135deg] text-stone-500" />
              <span> Internships</span>
            </h1>
            <div className="  mt-2 border-secondary px-4 relative">
              {/* span 1 */}
              <span className="absolute top-0 left-0 w-[30%] h-[2px] bg-secondary"></span>
              {/* span 2 */}
              <span className="absolute top-0 left-0 w-[2px] h-full bg-secondary"></span>
              <h1 className="text-lg font-semibold relative">
                <span className="absolute -left-5 top-2 w-3 h-3 block rounded-full  bg-secondary"></span>
                Internship in Networking and IT Security
              </h1>
              <h2 className="font-semibold">LUMEXTECH SOLUTION</h2>
              <p>Nov 2017</p>
              <p>Dhaka, Bangladesh</p>
            </div>
          </div>

          {/* Certificates */}
          <div className="mt-10">
            <h1 className="text-xl font-bold flex items-center gap-2">
              <LiaCertificateSolid size={30} className=" text-stone-500" />
              <span> Certificates</span>
            </h1>
            <div className="  pb-2 border-secondary px-4 relative">
              {/* span 1 */}
              <span className="absolute top-0 left-0 w-[30%] h-[2px] bg-secondary"></span>
              {/* span 2 */}
              <span className="absolute top-0 left-0 w-[2px] h-full bg-secondary"></span>
              <h1 className="text-lg font-semibold relative">
                <span className="absolute -left-5 top-2 w-3 h-3 block rounded-full  bg-secondary"></span>
                Internship in Networking and IT Security
              </h1>
              <h2 className="font-semibold">LUMEXTECH SOLUTION</h2>
              <p>Nov 2017</p>
              <p>Dhaka, Bangladesh</p>
            </div>
            <div className="  pb-2 border-secondary px-4 relative">
              {/* span 1 */}
              <span className="absolute top-0 left-0 w-[30%] h-[2px] bg-secondary"></span>
              {/* span 2 */}
              <span className="absolute top-0 left-0 w-[2px] h-full bg-secondary"></span>
              <h1 className="text-lg font-semibold relative">
                <span className="absolute -left-5 top-2 w-3 h-3 block rounded-full  bg-secondary"></span>
                Internship in Networking and IT Security
              </h1>
              <h2 className="font-semibold">LUMEXTECH SOLUTION</h2>
              <p>Nov 2017</p>
              <p>Dhaka, Bangladesh</p>
            </div>
          </div>

          {/* Extracurricular Activities */}
          <div className="mt-10">
            <h1 className="text-xl font-bold flex items-center gap-2">
              <FaPersonRunning size={30} className=" text-stone-500" />
              <span> Extracurricular Activities</span>
            </h1>
            <div className="  pb-2 border-secondary px-4 relative">
              {/* span 1 */}
              <span className="absolute top-0 left-0 w-[30%] h-[2px] bg-secondary"></span>
              {/* span 2 */}
              <span className="absolute top-0 left-0 w-[2px] h-full bg-secondary"></span>
              <h1 className="text-lg font-semibold relative">
                <span className="absolute -left-5 top-2 w-3 h-3 block rounded-full  bg-secondary"></span>
                Internship in Networking and IT Security
              </h1>
              <h2 className="font-semibold">LUMEXTECH SOLUTION</h2>
              <p>Nov 2017</p>
              <p>Dhaka, Bangladesh</p>
            </div>
            <div className="  pb-2 border-secondary px-4 relative">
              {/* span 1 */}
              <span className="absolute top-0 left-0 w-[30%] h-[2px] bg-secondary"></span>
              {/* span 2 */}
              <span className="absolute top-0 left-0 w-[2px] h-full bg-secondary"></span>
              <h1 className="text-lg font-semibold relative">
                <span className="absolute -left-5 top-2 w-3 h-3 block rounded-full  bg-secondary"></span>
                Internship in Networking and IT Security
              </h1>
              <h2 className="font-semibold">LUMEXTECH SOLUTION</h2>
              <p>Nov 2017</p>
              <p>Dhaka, Bangladesh</p>
            </div>
          </div>
        </div>

        <div className="">
          {/* Education */}
          <div className="">
            <h1 className="text-xl font-bold flex items-center gap-2">
              <FaGraduationCap size={27} className=" text-stone-500" />
              <span> Education</span>
            </h1>

            <div className="mt-5">
              <h1 className="text-md font-semibold">
                B.Sc (Hons) in Computer Science & Engineering
              </h1>
              <h2 className="text-md font-semibold">
                National University, Bangladesh
              </h2>
              <p>Jan 2015 - Jun 2019</p>
              <a href="">ww.mas.com</a>
            </div>

            <div className="mt-5">
              <h1 className="text-md font-semibold">
                B.Sc (Hons) in Computer Science & Engineering
              </h1>
              <h2 className="text-md font-semibold">
                National University, Bangladesh
              </h2>
              <p>Jan 2015 - Jun 2019</p>
              <a href="">ww.mas.com</a>
            </div>
          </div>

          {/* Hobbies */}
          <div className="md:mt-48 mt-10">
            <h1 className="text-xl font-semibold uppercase pt-5 flex items-center gap-2">
              <p> Hobbies</p>
              <GoGoal />
            </h1>
            <div className="">
              <h1 className="pt-2 text-lg flex items-center gap-1 ">
                <BiSolidCheckbox className="text-secondary" />
                <span>TEACHING AND MENTORING</span>
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <div className="flex gap-5 items-center">
          <h1 className="text-xl font-semibold uppercase  flex items-center gap-2">
            <p> DIGITAL SKILLS</p>
            <RiUserVoiceFill />
          </h1>
          <a href="" className="text-secondary">
            LINKEDIN
          </a>
        </div>

        <div className="md:flex gap-10 mt-2">
          <h2>TEACHING/MENTORING</h2>
          <h2>GOOD LISTENER AND COMMUNICATOR</h2>
          <h2>MS OFFICE & ADOBE CREATIVE SUITS PROFICIENCY</h2>
        </div>
        <div className="md:flex gap-10 mt-2">
          <h2>TEACHING/MENTORING</h2>
          <h2>GOOD LISTENER AND COMMUNICATOR</h2>
          <h2>MS OFFICE & ADOBE CREATIVE SUITS PROFICIENCY</h2>
        </div>
      </div>
    </div>
  );
};

export default ResumeComponent;
