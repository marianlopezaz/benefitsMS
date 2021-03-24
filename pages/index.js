import { Card, Col, Container, Row } from "react-bootstrap";
import styles from "../styles/Home.module.css";
import CustomModal from '../components/shared/modal/customModal';
import { getBeneficeService } from "../utils/beneft_services/benefit_services";
import { useEffect } from "react";
const Home = ({data}) => {

  useEffect(()=>{
    console.log(data)
  },[]);

  return (
    <Container className={styles.container}>
      <Row>
        <Col>
          <h2>Beneficios disponibles</h2>
        </Col>
      </Row>
      <Row className={styles.modal_container}>
        <Col>
            <CustomModal/>
        </Col>
      </Row>
      <Row className={styles.benefits_container}>
        {[0, 1, 2,3,5].map((benefit, i) => {
          return (
            <Col lg={4} md={6} sm={12} className={styles.card_container} key={i}>
              <Card>
                <Card.Title>Beneficio {i}</Card.Title>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export async function getStaticProps(context) {
  const res = await getBeneficeService();
  return {
    props: {
      data: res.data,
    },
  };
}

export default Home;
