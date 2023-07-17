import React from 'react'
import { Button, Container, Nav } from 'react-bootstrap'

const Login = () => {
  return (
    <Container className='d-flex flex-column gap-3 text-center pt-5 mt-5'>
        <div>
        <img width={50} height={50} src="https://static.xx.fbcdn.net/rsrc.php/yd/r/hlvibnBVrEb.svg" alt="" />
        </div>
        <small className='display-6 fs-3 fw-bold'>Connect with your favorite people.</small>
        <form className='d-flex align-items-center flex-column gap-2 py-3' action="">
            <input type="text" className="w-25 form-control" placeholder='Email or phone number' />
            <input type="password" className="w-25 form-control" placeholder='Password' />
            <Button className='rounded-4 px-4 mt-3'> Continue </Button>
            <label className='py-5'>
                <input type="checkbox" />
                <small className='lead fs-6 px-2'>Keep me sign in</small>
            </label>
        </form>
        <Nav className='d-flex justify-content-center'>
            <Nav.Item>
                <Nav.Link>
                    Not on Facebook?
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link>
                    Forgot Password
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link>
                    Privacy Policy
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link>
                    Terms
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link>
                    Cookies Policy
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link>
                    © Meta 2023
                </Nav.Link>
            </Nav.Item>
        </Nav>
    </Container>
  )
}

export default Login