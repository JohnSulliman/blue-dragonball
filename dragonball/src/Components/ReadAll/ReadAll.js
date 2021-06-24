import {Component} from "react";
import {Col, Container, Row} from 'react-bootstrap';
import {ItemCard} from './ItemCard';
import {API} from '../../API/API';

//Styles
import '../../Styles/ReadAll.scss';

export class ReadAll extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            items: []
        }
    }

    async componentDidMount() {
        const request = await API.buildAPIGetRequest(API.readAllUrl());
        const items = await request.json();
        const itemsWithImageUrl = items.filter(item => Boolean(item.imageUrl));

        this.setState({
            isLoading: false,
            items: itemsWithImageUrl,
            filteredItems: itemsWithImageUrl,
        })
    }

    render() {
        return(
            <Container>
                <Row>

                </Row>
            </Container>
        );
    }

}