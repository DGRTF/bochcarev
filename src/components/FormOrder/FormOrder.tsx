import React, { Component } from 'react'
import { Form, Button, Card } from 'react-bootstrap'
import price_card_1 from '../../assets/price_card_1.jpg';
import './FormOrder.scss';
import { closeOrderForm } from '../../store/actions/PriceVisible/PriceVisible';
import { StateType } from '../../store/store';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';



interface ImapStateToProps {
  barrel?: {
    id: number
  }
}

interface ImapDispatchToProps {
  closeOrderForm?: () => (dispatch: any, setState: () => StateType) => void;
}

interface IFormOrderProps extends ImapDispatchToProps, ImapStateToProps { }

interface IFormOrderState {
  price: number;
}

class FormOrder extends Component<IFormOrderProps, IFormOrderState> {
  constructor(prop: any) {
    super(prop);
    this.state = {
      price: 0,
    }
  }

  private previousPriceSelect = 0;

  render() {
    return (
      <div>
        <div className='form-order'>
          <Card style={{ minWidth: '18rem', width: '18rem', maxWidth: '18rem' }}>
            <Card.Header >
              <Button onClick={this.closeOrderForm.bind(this)} variant="danger" >
                Закрыть
              </Button>
            </Card.Header>
            <Card.Img className='form-order__card-img' variant="top" src={price_card_1} />
            <Card.Body className='form-order__body-form'>
              <Card.Title>{`${this.state.price} ₽`}</Card.Title>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Длинна</Form.Label>
                  <Form.Control onChange={this.selectPrice.bind(this)} as="select">
                    <option>2м</option>
                    <option>3м</option>
                    <option>3.5м</option>
                    <option>4м</option>
                    <option>4.5м</option>
                    <option>5м</option>
                    <option>5.5м</option>
                    <option>6м</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control type="text" placeholder="Ваше имя" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Control type="tel" placeholder="Номер телефона" />
                </Form.Group>
                <Form.Control type="hidden" name='id' value={this.props.barrel.id} />
                <Button variant="primary" type="submit">
                  Заказать баню-бочку
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </div>
    )
  }

  componentDidUpdate(prevProps: IFormOrderProps) {
    if (this.props.barrel.id !== prevProps.barrel.id)
      this.setState({
        price: this.priceBarrel(),
      });
  }

  private priceBarrel(): number {
    switch (this.props.barrel.id) {
      case 1:
        return 119000
      case 2:
        return 120000
      case 3:
        return 121000
      default:
        return 0
    }
  }

  private selectPrice(event: React.ChangeEvent) {
    const select = event.currentTarget as HTMLFormElement;
    const selectedOption = select.options[select.selectedIndex];
    this.changePrice(selectedOption.text);
  }

  private changePrice(value: string) {
    switch (value) {
      case '2м':
       return this.changePriceSetState(0)
      case '3м':
       return this.changePriceSetState(20000)
      case '3.5м':
       return this.changePriceSetState(30000)
      case '4м':
       return this.changePriceSetState(50000)
      case '4.5м':
       return this.changePriceSetState(60000)
      case '5м':
       return this.changePriceSetState(80000)
      case '5.5м':
       return this.changePriceSetState(90000)
      case '6м':
       return this.changePriceSetState(100000)
      default:
        return 0
    }
  }

  private changePriceSetState(priceSelect: number) {
    this.setState({
      price: this.state.price - this.previousPriceSelect + priceSelect,
    })
    this.previousPriceSelect = priceSelect;
  }

  private closeOrderForm() {
    this.props.closeOrderForm();
    window.scrollTo(null, 0);
  }
}

function mapStateToProps(state: StateType) {
  return {
    barrel: state.barrel
  };
}

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators({
    closeOrderForm,
  }, dispatch);
}

export default connect<ImapStateToProps, ImapDispatchToProps, IFormOrderProps, StateType>(
  mapStateToProps,
  mapDispatchToProps
)(FormOrder);
