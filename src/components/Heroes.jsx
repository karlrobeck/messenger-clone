import React from 'react'
import { Container, Row, Col,Button } from 'react-bootstrap'
const Heroes = () => {
  return (
    <Container className='py-5 my-5'>
        <Row className='d-flex align-items-center'>
            <Col>
                <h1 className='display-1 fw-bold' style={{"background":"linear-gradient(83.84deg, #0088FF -6.87%, #A033FF 26.54%, #FF5C87 58.58%)","WebkitTextFillColor":"transparent","WebkitBackgroundClip":'text'}}>
                    Hang out <br /> anytime, anywhere
                </h1>
                <small className='lead fs-4'>
                    Messenger makes it easy and fun to stay close to your favorite people.
                </small>
                <form className='d-flex flex-column gap-5 py-5' action="">
                    <div className='d-inline-flex flex-column gap-3'>
                    <input className='form-control pe-5' type="text" placeholder='Email or phone number' />
                    <input className='form-control pe-5' type="password" placeholder='Password' />
                    </div>
                    <div className='d-flex gap-3'>
                        <Button className='rounded-5 px-4'>
                            Log in
                        </Button>
                        <Button variant='link'>
                            Forgot your password?
                        </Button>
                    </div>
                    <label className='d-flex gap-3'>
                        <input type="checkbox" />
                        <small>Keep me sign in</small>
                    </label>
                </form>
                <div className='d-flex gap-2'>
                    <img width={131} height={44} src="https://scontent.fmnl8-3.fna.fbcdn.net/v/t39.8562-6/119656338_326247688451849_3018195711400016354_n.svg?_nc_cat=1&ccb=1-7&_nc_sid=6825c5&_nc_ohc=vAWDyPcjjfkAX-RkTws&_nc_ht=scontent.fmnl8-3.fna&oh=00_AfDnjwTjUHqoRt_uV9kum1MdSMxHqywKbRNAR7rHKGCZNA&oe=64B69694" alt="" />
                    <img width={121} height={44} src="https://scontent.fmnl8-3.fna.fbcdn.net/v/t39.8562-6/119597221_2801552506611915_4465041091818364564_n.svg?_nc_cat=1&ccb=1-7&_nc_sid=6825c5&_nc_ohc=6vyynpjC5WUAX9J8TmA&_nc_ht=scontent.fmnl8-3.fna&oh=00_AfAsHE9Y9AELOvFfE_NRDZw4LtyJ16C07d64ds010E3hSQ&oe=64B589F5" alt="" />
                </div>
            </Col>
            <Col>
                <img width={597} height={679} src="https://scontent.fmnl8-3.fna.fbcdn.net/v/t39.8562-6/120973513_338186077283942_8148888802958728934_n.png?_nc_cat=1&ccb=1-7&_nc_sid=6825c5&_nc_ohc=gOC25guKpNIAX8x6QEv&_nc_ht=scontent.fmnl8-3.fna&oh=00_AfBMa32FhfiHqTyKiZzxDHkfrMw7iVOExB_m_BHkQBp2Aw&oe=64B6C6E7" alt="" />
            </Col>
        </Row>
    </Container>
  )
}

export default Heroes