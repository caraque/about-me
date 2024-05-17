import React from "react";
import {Flex} from "antd";
import {JobInfoActivity, JobTechDetail} from "../index";
import NodeJsImage from "../../../images/techs/nodejs.png";
import NestJsLogo from "../../../images/techs/nest-js.jpg";
import ReactJsLogo from "../../../images/techs/reactjs.png";
import DockerLogo from "../../../images/techs/docker.png";
import KubernetesLogo from "../../../images/techs/kubernetes.png";
import KafkaLogo from "../../../images/techs/kafka.png";

const data = [
  {
    id: 'node-js',
    imageSrc: NodeJsImage,
    description: 'NodeJs',
  },
  {
    id: 'nest-js',
    imageSrc: NestJsLogo,
    description: 'NestJs',
  },
  {
    id: 'react-js',
    imageSrc: ReactJsLogo,
    description: 'ReactJs',
  },
  {
    id: 'docker',
    imageSrc: DockerLogo,
    description: 'Docker',
  },
  {
    id: 'kubernetes',
    imageSrc: KubernetesLogo,
    description: 'Kubernetes',
  },
  {
    id: 'kafka',
    imageSrc: KafkaLogo,
    description: 'Kafka',
  }
]
export default function JobDetails(props: any) {
  return (
    <Flex>
      <Flex style={{width: '30%', alignItems: 'center'}}>
        <JobInfoActivity/>
      </Flex>
      <Flex style={{width: '70%', justifyContent: 'center', alignItems: 'center'}}>
        <JobTechDetail techs={data}/>
      </Flex>
    </Flex>
  )
}
