import type { NextPage } from "next";
import Image from "next/image";

// Components
import DefaultLayout from "../components/Layouts/DefaultLayout";
import {
  FaCloudSun,
  FaMoon,
  FaGithub,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { Tooltip } from "@chakra-ui/react";

const socials = [
  {
    title: "Github",
    icon: <FaGithub />,
    link: "https://github.com/MaestroHaryor",
  },
  {
    title: "LinkedIn",
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/ayomide-odewale/",
  },
  {
    title: "Twitter",
    icon: <FaTwitter />,
    link: "https://twitter.com/MaestroHaryor",
  },
  {
    title: "Facebook",
    icon: <FaFacebook />,
    link: "https://web.facebook.com/ayomide.odewale.125",
  },
  {
    title: "Instagram",
    icon: <FaInstagram />,
    link: "https://instagram.com/maestroharyorjoshua",
  },
];

const ComingSoon: NextPage = () => {
  return (
    <DefaultLayout title="Construction in Progress">
      <div className="h-full px-5 flex flex-col items-center justify-center gap-y-10 text-center pt-10">
        <Image
          src="/svgs/vault.svg"
          alt="Fovero Digital Technologies is coming soon"
          width={520}
          height={309}
        />
        <div className=" pt-10 pb-16 px-5 flex flex-col gap-6 items-center justify-center">
          <div>
            <p className="mb-3">
              This test app was built by{" "}
              <a href="https://ayomideodewale.com">Maestro</a>
            </p>
            <h2 className="text-5xl font-bold ">Contact Me:</h2>
          </div>

          <div className="flex gap-5 text-blue-500 text-3xl">
            {socials.map((social) => (
              <Tooltip
                key={social.link}
                hasArrow
                className=""
                label={social.title}
              >
                <a
                  key={social.title}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  className=" "
                >
                  <span>{social.icon}</span>
                </a>
              </Tooltip>
            ))}
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default ComingSoon;
