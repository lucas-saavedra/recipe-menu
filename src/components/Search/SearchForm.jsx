import { Form, Button, Col, Row, InputGroup, FormControl } from "react-bootstrap";
const SearchForm = ({ useFormik, setSearch }) => {
    const validate = values => {
        const errors = {};
        if (!values.search) {
            errors.search = 'Required';
        } else if (values.search.length < 3) {
            errors.search = 'Must be 3 characters or more';
        }
        return errors;
    };
    const formik = useFormik({
        initialValues: {
            search: '',
        },
        validate,
        onSubmit: values => {
            setSearch(values.search)
        },
    });
    return (
        <Form onSubmit={formik.handleSubmit}>
            <Row>
                <Col className='m-0 py-3'>
                    <InputGroup className="m-0">
                        <FormControl
                            placeholder="Search a recipe"
                            aria-label="Search a recipe"
                            id="search"
                            name="search"
                            type="search"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.search}
                        />
                        <Button variant="outline-secondary" type="submit" >
                            Search
                        </Button>
                    </InputGroup>
                    {formik.errors.search ? <div className="text-danger">{formik.errors.search}</div> : null}
                </Col>
            </Row>
        </Form>
    )
}

export default SearchForm