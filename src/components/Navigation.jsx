import React from 'react'

import { Container, Navbar,Nav } from 'react-bootstrap'

const Navigation = () => {
  return (
    <Container className='position-relative'>
        <Navbar className='d-flex justify-content-between py-3'>
            <Navbar.Brand>
                <img className='img-fluid' width={40} height={40} src="https://scontent.fmnl8-3.fna.fbcdn.net/v/t39.8562-6/120009688_325579128711709_1736249742330805861_n.png?_nc_cat=1&ccb=1-7&_nc_sid=6825c5&_nc_ohc=qvcMh0FhDYQAX_NanzB&_nc_ht=scontent.fmnl8-3.fna&oh=00_AfATe6dYfQpzwxysv5Fs_HcJmBr78fmcT0JVLYaciQJUSA&oe=64B5137D" alt="" />
            </Navbar.Brand>
            <Nav className='d-flex gap-3 fw-bold'>
                <Nav.Item>
                    <Nav.Link>
                        Features
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        Desktop App
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        Privacy & Policy
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        For Developers
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </Navbar>
    </Container>
  )
}

export default Navigation