import React from "react";
import {TechLogo} from "../index";
import {Col, Flex, Row} from "antd";
import {JobTechDetailProps} from "../../../interfaces/JobTechDetail.interface";

export default function JobTechDetail({techs}: { techs: JobTechDetailProps[] }) {

  const techRows = (): JobTechDetailProps[][] => {
    let itemCounts = 1;
    let items: JobTechDetailProps[] = [];
    return techs.reduce<JobTechDetailProps[][]>((collector, tech, currentIndex) => {
      if (itemCounts > 4) {
        collector.push(items);
        items = [];
        itemCounts = 0;
        items.push(tech);
      } else if (itemCounts < 4 && currentIndex === (techs.length - 1)) {
        collector.push(items);
      } else {
        items.push(tech);
      }
      itemCounts++;
      return collector;
    }, [])
  }

  return (
    <Flex wrap="wrap">
        {/*{
        techRows().map(items => (
              <Row>
                {items.map(tech => (
                  <Col span={6} key={tech.id} style={{textAlign: 'center', padding: '15px 0', alignContent: 'center'}}>
                    <TechLogo src={tech.imageSrc} alt={tech.description} style={{height: tech.height || 70}}/>
                  </Col>
                ))}
              </Row>
          )
        )
      }*/}
        {
          techs.map(tech => (

            <Flex key={tech.id} style={{textAlign: 'center', padding: '15px 0', alignContent: 'center', minWidth: '25%',
              alignItems: 'center',
              justifyContent: 'center'}}>
              <TechLogo src={tech.imageSrc} alt={tech.description} style={{height: tech.height || 70}}/>
            </Flex>
          ))

        }
    </Flex>
  )
}
