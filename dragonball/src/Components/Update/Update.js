import {Component} from 'react';
import {Form, Button} from 'react-bootstrap';
import {API} from '../../API/API';

export class Update extends Component {
    constructor(props) {
        super(props);
        this.id = this.props.match.params.id;
        this.state = {
            isLoading: true,
            item: {}
        }
    }

    //Uma função async verifica se o componente foi montado e faz uma requisição, esperando uma resposta (O item requerido)
    async componentDidMount() {
        const request = await API.buildAPIGetRequest(API.readSingleUrl(this.id))
        const item = await request.json();

        this.setState({
            isLoading: false,
            item
        })
    }

    submitHandler = async event => {
        event.preventDefault();

        const {name,imageUrl} = event.target;
        const item = {
            name: name.value,
            imageUrl: imageUrl.value,
        }

        this.setState({
            isLoading: true,
        })

        const request = await API.buildAPIPutRequest(API.updateSingleUrl(this.id), item).catch(e => {
            console.error('Erro ao tentar atualizar o item selecionado:', e);
        })

        this.setState({
            isLoading: false,
        })

        await request.json();

        this.props.history.push(`/view/${this.id}`)
        
    }

    render() {
        const {item} = this.state;

        return(
            <>
                <h2>Alterar informações</h2>
                <Form onSubmit={this.submitHandler}>
                    <Form.Group controlId="name">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control type="text" placeholder="Digite um nome" defaultValue={item.name}/>
                        <Form.Text className="text-muted">Esse nome será utilizado na visualização dos itens na lista.</Form.Text>
                    </Form.Group>

                    <Form.Group controlId="imageUrl">
                        <Form.Label>URL da Imagem</Form.Label>
                        <Form.Control type="text" placeholder="Digite a URL da imagem" defaultValue={item.imageUrl}/>
                        <Form.Text className="text-muted">A imagem em questão será exibida na lista de itens.</Form.Text>
                    </Form.Group>

                    <Button variant="primary" type="submit">Alterar</Button>
                </Form>
            </>
        );
    }
}