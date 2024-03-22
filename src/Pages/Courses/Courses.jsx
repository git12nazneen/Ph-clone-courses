import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Level1 from '../Level1/Level1';
import Level2 from '../Level2/Level2';
import Conceptual from '../Conceptual/Conceptual';

const Courses = () => {
    const [tabIndex, setTabIndex] = useState(0);

    const [data, setData] = useState([])

    useEffect(()=>{
        fetch("fakedata.json")
        .then(res => res.json())
        .then(data => setData(data))
    },[])

    const level1 = data.filter((course)=> course.catagory === "course-1")
    // console.log(level1)
    const level2 = data.filter((course)=> course.catagory === "course-2")
    const conceptual = data.filter((course)=> course.catagory === "conceptual")


    return (
        <div className='container mx-10'>
         <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
            <Tab>Complete course 1</Tab>
            <Tab>Complete course 2</Tab>
            <Tab>Conceptual Session</Tab>
        </TabList>
        <TabPanel>
            
            <Level1 level1={level1}></Level1>
        </TabPanel>
        <TabPanel>
        <Level2 level2={level2}></Level2>
        </TabPanel>
        <TabPanel>
            <Conceptual conceptual={conceptual}></Conceptual>
        </TabPanel>
        </Tabs>
        </div>
    );
};

export default Courses;