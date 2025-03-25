
import { Autocomplete, Group, RangeSlider } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { useState } from 'react';
import { Menu, UnstyledButton } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import classes from "@/css/filterdropdown.module.css";
import Location from "@/public/Location.png";
import Image, { StaticImageData } from 'next/image';
import Loadable from 'next/dist/shared/lib/loadable.shared-runtime';
import JobTypeImg from '@/public/Vector.png'
import RangeClass from '@/css/SliderLabel.module.css';
import LineSpace from '@/public/LineSpace.png'

type DropdownType = {
    label: string
}

export default function FilterSection() {
    const Locationdata = [
        { label: 'Chennai' },
        { label: 'delhi' },
        { label: 'Banglore' },
        { label: 'Mumbai' },
        { label: 'Remote' },
    ];
    const JobtypeData=[
        { label: 'Internship' },
        { label: 'FullTime' },
        { label: 'PartTime' },
        { label: 'Contract' },
    ]
    return (
       <div className=''>
         <Group className=' ml-22 flex space-x-10 justify-center  '>
            <Group>
                <SearchBar />
            </Group>
             <Image src={LineSpace} alt='line'/>
            <Group>
                <DropDown data={Locationdata} image={Location}  />
            </Group>
            <Image src={LineSpace} alt='line'/>
            <Group>
                <DropDown data={JobtypeData} image={JobTypeImg}/> 
            </Group>
            <Image src={LineSpace} alt='line'/>
            <Group className='w-96'>
            <div className=''>
            <div className='pb-2'>
            <span className=''>Salary per Month   0-100K</span>
            </div>
            <div className=''>
            <SliderLabel  />
            </div>
            </div>
            </Group>
        </Group>
        
       </div>
    );
}

function SearchBar() {
    return (
        <>
            <Autocomplete
                placeholder="Search By Job Title, Role"
                leftSection={<IconSearch size={16} stroke={1.5} />}
                visibleFrom="xs"
                styles={{
                    input: { border: "none", outline: "none", boxShadow: "none" },
                }}
            />
        </>
    )
}

function DropDown({ data, image }: { data: DropdownType[], image: StaticImageData }) {
    const [opened, setOpened] = useState<boolean>(false);
    const [selected, setSelected] = useState<DropdownType | null>(null);
    const items = data.map((item) => (
        <Menu.Item
            onClick={() => setSelected(item)}
            key={item.label}
        >
            {item.label}
        </Menu.Item>
    ));

    return (
        <Menu
            onOpen={() => setOpened(true)}
            onClose={() => setOpened(false)}
            radius="md"
            width="target"
            withinPortal
            
        >
            <Menu.Target>
                <UnstyledButton className={classes.control} data-expanded={opened || undefined}>
                    <Group gap="xs">
                        <Image src={image} alt='location icon' />
                        <span className={classes.label}>{selected ? selected.label :""}</span>
                    </Group>
                    <IconChevronDown size={16} className={classes.icon} stroke={1.5} />
                </UnstyledButton>
            </Menu.Target>
            
            <Menu.Dropdown className='h-[150px] overflow-auto' aria-placeholder=''>{items}</Menu.Dropdown>
        </Menu>
    );

}

export function SliderLabel() {
    return <RangeSlider labelAlwaysOn defaultValue={[20, 60]} classNames={RangeClass} style={{width:"248px",}} />;
  } 