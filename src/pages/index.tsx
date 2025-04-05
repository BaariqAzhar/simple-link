import Card from "@/components/home/Card";
import { name } from "@/constants/envVariables";
import styles from "@/styles/Home.module.css";
import { Col, Row } from 'antd';
import Head from "next/head";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>{name}</title>
        <meta name="description" content={`Link of ${name}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Row justify="center" className={`${styles.cardContainer}`}>
          <Col>
            <Card />
          </Col>
        </Row>
      </div>
    </Fragment>
  );
}
