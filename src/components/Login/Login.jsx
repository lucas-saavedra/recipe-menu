import { Form, Container, Row, Image } from "react-bootstrap"
import { useState } from "react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { loginUser } from "../../services/axiosService.js";

const Login = ({ setToken }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const MySwal = withReactContent(Swal);
    const HandleLogin = async (e) => {
        e.preventDefault();
        if (email === '' || password === '') {
            MySwal.fire({
                icon: 'error',
                title: 'Empty fields',
                text: 'Please complete all the fields.',
            })
        } else {
            setLoading(true);
            try {
                const result = await loginUser(email, password)
                setToken(result.data.token);
                MySwal
                    .fire({
                        icon: 'success',
                        title: 'Success!',
                        text: 'Redirecting you to the home page',
                    })
            } catch (error) {
                MySwal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Please provide valid email and password',
                })
                setEmail('');
                setPassword('');
            }
            finally {
                setLoading(false)
            }
        }
    }
    return (
        <div className=" bg-success text-dark bg-opacity-50">
            <Container style={{ height: '100vh' }} className="d-flex justify-content-center">
                <Row className="d-flex justify-content-center" >

                    <Image height={300} className='py-3' src="https://spoonacular.com/images/spoonacular-logo-b.svg"></Image>
                    <div>
                        <div className='d-flex justify-content-center align-items-center'>

                            <Form onSubmit={HandleLogin} className="col-md-6">

                                <Form.Group className="mb-3" controlId="formEmail">
                                    <Form.Label >Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter email"
                                        onChange={({ target }) => setEmail(target.value)}
                                        value={email}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please enter an email.
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                        onChange={({ target }) => setPassword(target.value)}
                                        value={password}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please enter an email.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <div className=" d-grid d-block">
                                    <button className="btn btn-success" type="submit" disabled={loading}>
                                        Submit
                                    </button>
                                </div>
                                <h4 className="display-5 py-3" style={{ fontSize: '2rem' }}>
                                    Email to enter: eve.holt@reqres.in
                                </h4>

                            </Form>


                        </div>
                    </div>

                </Row>
            </Container >
        </div>
    )
}
export default Login