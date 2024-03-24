import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";

const SearchBox = () => {

    const navigate = useNavigate();

    const { keyword: urlKeyword } = useParams();

    const [ keyword, setKeyWord ] = useState(urlKeyword || '');

    const submitHandler = (e) => {
        e.preventDefault();
        if (keyword.trim()){
            setKeyWord('');
            navigate(`/search/${keyword.trim()}`);
        } else {
            navigate('/');
        }
    }

    return (
        <Form onSubmit={ submitHandler } className="d-flex">
            <Form.Control
                className="mr-sm-2 ml-sm-5"
                type="text"
                name="q"
                value={keyword}
                placeholder="Search Products..."
                onChange={(e) => setKeyWord(e.target.value)}
                ></Form.Control>
            <Button
                type="submit"
                className="p-2 mx-2"
                variant="outline-light">
                    Search
                </Button>
        </Form>
    )
}

export default SearchBox