import React from 'react'
import { Container,Nav,Navbar,Row,Col } from 'react-bootstrap'
const Footer = () => {
  return (
    <Container>
        <Row className='d-flex align-items-center'>
            <Col>
            <span className='fw-bold fs-6'>
            © Meta 2023.
            </span>
            <span className='py-2fs-6'>
            The Apple and Google Play logos are trademarks of their respective owners.
            </span>
            </Col>
            <Col>
            <Navbar className='d-flex align-items-center'>
                <Nav>
                    <Nav.Item>
                        <Nav.Link>
                            Privacy Policy
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            Cookie Policy
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            Terms
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            English (US)
                        </Nav.Link>
                    </Nav.Item>
                    </Nav>
                    <Navbar.Brand>
                        <img width={151} height={44} src="https://scontent.fmnl8-3.fna.fbcdn.net/v/t39.8562-6/284131241_398860802255675_7090232386370085328_n.png?_nc_cat=1&ccb=1-7&_nc_sid=6825c5&_nc_ohc=xLcoQZ0HIsQAX9t1JUS&_nc_ht=scontent.fmnl8-3.fna&oh=00_AfBtL67XiuYAK7JGtfSkbbuEnnqKLmF1uKiY75_DRQGRtQ&oe=64B62806" alt="" />
                    </Navbar.Brand>
            </Navbar>
            </Col>
        
        </Row>
    </Container>
  )
}

export default Footer