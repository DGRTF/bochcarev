import React, { Component } from 'react'
import './Price.scss';
import CardsBox from '../../components/CardsBox/CardsBox';
import CarouselBackground from '../../components/CarouselBackground/CarouselBackground';
import FormCall from '../../components/FormCall/FormCall';
import FormOrder from '../../components/FormOrder/FormOrder';
import NavBar from '../../components/NavBar/NavBar';
import { StateType } from '../../store/store';
import { connect } from 'react-redux';
import { Card, Button } from 'react-bootstrap';
import price_card_1 from '../../assets/price_card_1.jpg';
import { closeCallForm } from '../../store/actions/PriceVisible/PriceVisible';
import { bindActionCreators } from 'redux';

interface ImapStateToProps {
  priceVisible?: {
    visibleCallForm: boolean;
    visibleOrderForm: boolean;
    visibleProducts: boolean;
  }
}

interface ImapDispatchToProps {
  closeCallForm?: () => (dispatch: any, setState: () => StateType) => void;
}

interface IPriceProps extends ImapStateToProps, ImapDispatchToProps { }

class Price extends Component<IPriceProps> {
  render() {
    return (
      <div className='price'>
        <NavBar />
        <CarouselBackground />
        <div className={`price__form-order ${this.props.priceVisible.visibleOrderForm ? 'price-show' : 'price-hide'}`}>
          <FormOrder />
        </div>
        <div className={`price__card-box ${this.props.priceVisible.visibleProducts ? 'price-show' : 'price-hide'}`}>
          <CardsBox />
        </div>
        <div className={`price__form-call ${this.props.priceVisible.visibleCallForm ? 'price-show' : 'price-hide'}`}>
          <Card style={{ minWidth: '18rem', width: '18rem', maxWidth: '18rem' }}>
            <Card.Header>
              <Button onClick={this.closeCallForm.bind(this)} variant="danger" >
                Закрыть
              </Button>
            </Card.Header>
            <Card.Img className='price__card-img' variant="top" src={price_card_1} />
            <Card.Body className='price__body-form'>
              <FormCall />
            </Card.Body>
          </Card>
        </div>
      </div>
    )
  }

  private closeCallForm() {
    this.props.closeCallForm();
    window.scrollTo(null, 0);
  }
}

function mapStateToProps(state: StateType) {
  return {
    priceVisible: state.priceVisible
  };
}

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators({
    closeCallForm,
  }, dispatch);
}

export default connect<ImapStateToProps, ImapDispatchToProps, IPriceProps, StateType>(
  mapStateToProps,
  mapDispatchToProps,
)(Price);