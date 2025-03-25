import { Group, Button } from '@mantine/core';
import classes from "@/css/header.module.css";
import Image from "next/image";
import Logo from "@/public/Frame 54.png";

const links = [
  { link: '/home', label: 'Home' },
  { link: '/findjobs', label: 'Find Jobs' },
  { link: '/findtalents', label: 'Find Talents' },
  { link: '/aboutus', label: 'About Us' },
  { link: '/testimonials', label: 'Testimonial' },
];

export default function Navbar({ openModal }: { openModal: () => void }) { // Accept openModal
  return (
    <div className={classes.header}>
      <div className={classes.inner}>
        <Group className='m-auto shadow-md  p-4 mt-[-10px] rounded-[122px]'>
          <Group>
            <Image src={Logo} alt='logo' style={{height:"44px",width:"44px"}}/>
          </Group>
          <Group visibleFrom="sm">
            {links.map((link) => (
              <a key={link.label} href={link.link} className={classes.link} onClick={(e) => e.preventDefault()}>
                {link.label}
              </a>
            ))}
          </Group>
          <Group>
            {/* Pass openModal to the button */}
            <CreateJobButton openModal={openModal} />
          </Group>
        </Group>
      </div>
    </div>
  );
}

function CreateJobButton({ openModal }: { openModal: () => void }) {
  return (
    <Button
      onClick={openModal} // Open modal when clicked
      radius="xl"
      size="md"
      h={48}
      styles={{
        root: {
          background: "linear-gradient(90deg,#A128FF 0%, #6100AD 100%)",
          color: "white",
          border: "none",
        },
      }}
    >
      Create Job
    </Button>
  );
}
