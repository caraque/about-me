import React, {useEffect} from "react";
import {JobDetails} from "../../molecules";
import {Flex} from "antd";
import JobCompany from "../../molecules/JobCompanies/JobCompany";
import WalmartChileLogo from "../../../images/walmartchile_logo.jpg";
import ImageMakerLogo from "../../../images/imagemaker_logo.svg";
import ITPeopleLogo from "../../../images/it_people_logotipo.svg";
import NTTDataLogo from "../../../images/ntt_data_logo.jpg";
import NodeJsImage from "../../../images/techs/nodejs.png";
import NestJsLogo from "../../../images/techs/nest-js.jpg";
import ReactJsLogo from "../../../images/techs/reactjs.png";
import ReactNativeLogo from "../../../images/techs/react-native.svg";
import DockerLogo from "../../../images/techs/docker.png";
import KubernetesLogo from "../../../images/techs/kubernetes.png";
import KafkaLogo from "../../../images/techs/kafka.png";
import AngularLogo from "../../../images/techs/angular.png";
import IonicLogo from "../../../images/techs/ionic.png";
import PostgresqlLogo from "../../../images/techs/postgresql.png";
import CloudantLogo from "../../../images/techs/cloudant.png";
import NodeRedLogo from "../../../images/techs/node-red.png";
import JavaLogo from "../../../images/techs/java.png";
import LiquidBaseLogo from "../../../images/techs/liquidbase.svg";
import MongoDbLogo from "../../../images/techs/mongo-db.svg";
import {JobTechDetailProps} from "../../../interfaces/JobTechDetail.interface";

const jobHistories = [
  {
    id: 'walmart',
    description: 'Walmart',
    imageSrc: WalmartChileLogo,
    height: 140,
    jobDescription: 'Fue una experiencia en el desarrollo y la gestión de aplicaciones tanto en el backend como en la web para optimizar las operaciones en empresa. Esto incluyó la gestión de mensajería de transacciones desde POS de las tiendas, el manejo de devoluciones, la migración de aplicaciones a plataformas Cloud e integración a servicios internacionales.',
    techs: [
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
      },
      {
        id: 'postgresql',
        imageSrc: PostgresqlLogo,
        description: 'PostgreSQL',
      }
    ]
  },
  {
    id: 'imagemaker',
    description: 'ImageMaker',
    imageSrc: ImageMakerLogo,
    jobDescription: 'Realicé aplicaciones web y backend junto a equipos grandes y pequeños, apoyé a equipos por procesos de migración a plataforma cloud, análisis de información web mediante scrapping, transcripción de audios con la herramienta speech-to-text de Google y aplicación móvil en inglés para niños.',
    techs: [
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
        id: 'react-native',
        imageSrc: ReactNativeLogo,
        description: 'ReactNative',
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
      },
      {
        id: 'postgresql',
        imageSrc: PostgresqlLogo,
        description: 'PostgreSQL',
      }
    ]
  },
  {
    id: 'itpeople',
    description: 'ITPeople',
    imageSrc: ITPeopleLogo,
    jobDescription: 'Trabajé en el desarrollo y despliegue de una aplicación web y móvil encargada de manejar citas médicas de pacientes en una cadena de centros médicos de Chile',
    techs: [
      {
        id: 'node-js',
        imageSrc: NodeJsImage,
        description: 'NodeJs',
      },
      {
        id: 'angular',
        imageSrc: AngularLogo,
        description: 'Angular',
      },
      {
        id: 'ionic',
        imageSrc: IonicLogo,
        description: 'Ionic',
      },
      {
        id: 'cloudant',
        imageSrc: CloudantLogo,
        description: 'Cloudant',
      },
      {
        id: 'postgresql',
        imageSrc: PostgresqlLogo,
        description: 'PostgreSQL',
      },
      {
        id: 'nodered',
        imageSrc: NodeRedLogo,
        description: 'Node-RED',
      }
    ]
  },
  {
    id: 'everis',
    description: 'Everis',
    imageSrc: NTTDataLogo,
    height: 50,
    jobDescription: "Trabajé como desarrollador backend y me encargué en el desarrollo de servicios en banca chilena donde permitìa la integración de distintos equipos.",
    techs: [
      {
        id: 'java',
        imageSrc: JavaLogo,
        description: 'Java',
      },
      {
        id: 'mongo-db',
        imageSrc: MongoDbLogo,
        description: 'MongoDb',
      },
      {
        id: 'liquidbase',
        imageSrc: LiquidBaseLogo,
        description: 'Liquidbase',
      },
      {
        id: 'postgresql',
        imageSrc: PostgresqlLogo,
        description: 'PostgreSQL',
      }
    ]
  }
]
export default function JobHistory() {
  const [jobSelected, setJobSelected] = React.useState<string>('');
  const [jobDescription, setJobDescription] = React.useState<string>('');
  const [jobTechs, setJobTechs] = React.useState<JobTechDetailProps[]>([]);

  const onSelectCompany = (company: any) => {
    setJobSelected(company.id)
    setJobTechs(company.techs);
    setJobDescription(company.jobDescription);
  }

  useEffect(() => {
    setJobSelected(jobHistories[0].id)
    setJobTechs(jobHistories[0].techs);
    setJobDescription(jobHistories[0].jobDescription);
  }, [])

  return (
    <Flex vertical>
      <Flex style={{width: '100%', justifyContent: 'center', flexDirection: 'row'}}>
        <Flex>
          {

            jobHistories.map(company => (
              <Flex onClick={() => onSelectCompany(company)} key={company.id}>
                <JobCompany
                  description={company.description}
                  imageSrc={company.imageSrc}
                  height={company.height}
                  isSelected={company.id === jobSelected}
                />
              </Flex>
            ))
          }
        </Flex>
      </Flex>
      <div style={{height: 0.3, width: '15%', alignSelf: 'center', marginTop: '2%'}}/>
      <Flex style={{width: '100%', height: 350}}>
        <JobDetails techs={jobTechs} description={jobDescription}/>
      </Flex>
    </Flex>
  )
}


