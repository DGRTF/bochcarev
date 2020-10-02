import React, { Component } from 'react'
import { Form, Button, DropdownButton } from 'react-bootstrap'
import './BarrelSquareForm.scss';

interface IBarrelSquareFormProps { }

interface IBarrelSquareFormState {
  price: number;
  classPriceCSS: string;
}

export default class BarrelSquareForm extends Component<IBarrelSquareFormProps, IBarrelSquareFormState> {
  constructor(prop: any) {
    super(prop);
    this.state = {
      price: 129000 + this.previousPriceSelect,
      classPriceCSS: '',
    }
  }

  private previousPriceSelect = 0;

  private length = '2м';

  private checkFoundation: HTMLFormElement = null;

  private previousCheckFoundationPrice: number = 0;

  render() {
    return (
      <div>
        <Form action='BarrelSquareForm.php' method='post'>
          <Form.Group className='barrel-square-form__group-options' controlId="formBasicPrice">
            <div className={`barrel-square-form__price ${this.state.classPriceCSS}`}>{`${this.state.price} ₽`}</div>
          </Form.Group>
          <div className='barrel-square-form__dropdown-container' >
            <DropdownButton variant='wite' id="dropdown-basic-button" title="Опции">
              <Form.Check name='circle-20' className='barrel-square-form__options' onClick={this.changePriceCircle20sm.bind(this)} type="checkbox" label="Увеличение круга на 20см" />
              <Form.Check name='visor' className='barrel-square-form__options' onClick={this.changePriceVisor.bind(this)} type="checkbox" label="Козырек" />
              <Form.Check name='entrance' className='barrel-square-form__options' onClick={this.changePriceSideEntrance.bind(this)} type="checkbox" label="Боковой вход" />
              <Form.Check name='foundation' className='barrel-square-form__options' onClick={this.changePriceFoundation.bind(this)} type="checkbox" label="Свайный фундамент" />
              <Form.Check name='step' className='barrel-square-form__options' onClick={this.changePriceSteps.bind(this)} type="checkbox" label="Ступени" />
              <Form.Check name='street-light' className='barrel-circle-form__options' onClick={this.changePriceLight.bind(this)} type="checkbox" label="Уличный светильник" />
              <Form.Check name='firebox-outside' className='barrel-circle-form__options' onClick={this.changePriceFireboxOutside.bind(this)} type="checkbox" label="Вынос топки наружу" />
              <Form.Check name='window' className='barrel-circle-form__options' onClick={this.changePriceWindow.bind(this)} type="checkbox" label="Доп. окно 30х30/40х40" />
              <Form.Check name='backs' className='barrel-circle-form__options' onClick={this.changePriceBacks.bind(this)} type="checkbox" label="Спинки в парную(осина)" />
              <Form.Check name='step-polog' className='barrel-circle-form__options' onClick={this.changePriceStepPolog.bind(this)} type="checkbox" label="Ступенька для полога" />
              <Form.Check name='shelf' className='barrel-circle-form__options' onClick={this.changePriceShelf.bind(this)} type="checkbox" label="Полочка для банных средств 50х15" />
              <Form.Check name='woodshed' className='barrel-circle-form__options' onClick={this.changePriceWoodshed.bind(this)} type="checkbox" label="Дровяник" />
            </DropdownButton>
          </div>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Длина</Form.Label>
            <Form.Control name='length' onChange={this.selectPrice.bind(this)} as="select">
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
          <Form.Group controlId="formBasicName">
            <Form.Control name='name' type="text" placeholder="Ваше имя" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Control required name='tel' type="tel" placeholder="Номер телефона" />
          </Form.Group>
          <Form.Control type="hidden" name='id' value={1} />
          <Button variant="primary" type="submit">
            Заказать
          </Button>
        </Form>
      </div>
    )
  }

  private selectPrice(event: React.ChangeEvent) {
    const select = event.currentTarget as HTMLFormElement;
    const selectedOption = select.options[select.selectedIndex];
    this.length = selectedOption.text;
    this.changePrice(selectedOption.text);
    this.updatePriceFoundationByLength();
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

    this.setState(state => {
      const previousPriceSelect = this.previousPriceSelect;
      this.previousPriceSelect = priceSelect;
      return {
        price: state.price - previousPriceSelect + priceSelect,
        classPriceCSS: 'barrel-square-form__price-big',
      }
    }
    );

    setTimeout(() =>
      this.setState({
        classPriceCSS: '',
      }), 200);
  }

  private changePriceCircle20sm(event: React.MouseEvent) {
    const check = event.currentTarget as HTMLFormElement;
    this.changePriceOptions(check, 14900);
  }

  private changePriceVisor(event: React.MouseEvent) {
    const check = event.currentTarget as HTMLFormElement;
    this.changePriceOptions(check, 7000);
  }

  private changePriceSideEntrance(event: React.MouseEvent) {
    const check = event.currentTarget as HTMLFormElement;
    this.changePriceOptions(check, 14000);
  }

  private changePriceLight(event: React.MouseEvent){
    const check = event.currentTarget as HTMLFormElement;
    this.changePriceOptions(check, 990);
  }

  private changePriceFireboxOutside(event: React.MouseEvent) {
    const check = event.currentTarget as HTMLFormElement;
    this.changePriceOptions(check, 11900);
  }

  private changePriceWindow(event: React.MouseEvent) {
    const check = event.currentTarget as HTMLFormElement;
    this.changePriceOptions(check, 3900);
  }

  private changePriceBacks(event: React.MouseEvent) {
    const check = event.currentTarget as HTMLFormElement;
    this.changePriceOptions(check, 4900);
  }

  private changePriceStepPolog(event: React.MouseEvent) {
    const check = event.currentTarget as HTMLFormElement;
    this.changePriceOptions(check, 2500);
  }

  private changePriceShelf(event: React.MouseEvent) {
    const check = event.currentTarget as HTMLFormElement;
    this.changePriceOptions(check, 990);
  }

  private changePriceWoodshed(event: React.MouseEvent) {
    const check = event.currentTarget as HTMLFormElement;
    this.changePriceOptions(check, 3900);
  }

  private updatePriceFoundationByLength() {
    if (this.checkFoundation) {
      if (this.checkFoundation.checked) {
        const priceByLength = this.calculatePriceFoundationByLength(this.length);
        this.setState(state => {
          const statePrice=state.price - this.previousCheckFoundationPrice + priceByLength;
          this.previousCheckFoundationPrice = priceByLength;
          return {
            price: statePrice,
          }
        });
      }
    }
  }

  private changePriceFoundation(event: React.MouseEvent) {
    this.checkFoundation = event.currentTarget as HTMLFormElement;
    this.previousCheckFoundationPrice = this.calculatePriceFoundationByLength(this.length);
    this.changePriceOptions(this.checkFoundation, this.previousCheckFoundationPrice);
  }

  private calculatePriceFoundationByLength(value: string): number {
    switch (value) {
      case '2м':
        return 9000
      case '3м':
        return 9000
      case '3.5м':
        return 9000
      case '4м':
        return 12000
      case '4.5м':
        return 12000
      case '5м':
        return 15000
      case '5.5м':
        return 15000
      case '6м':
        return 18000
      default:
        return 0
    }
  }

  private changePriceSteps(event: React.MouseEvent) {
    const check = event.currentTarget as HTMLFormElement;
    this.changePriceOptions(check, 2900);
  }

  private changePriceOptions(check: HTMLFormElement, changePrice: number) {
    if (check.checked) {
      this.setState(state => {
        return {
          price: state.price + changePrice,
          classPriceCSS: 'barrel-square-form__price-big',
        }
      });
      setTimeout(() => {
        this.setState({
          classPriceCSS: '',
        });
      }, 200);
    }
    else {
      this.setState(state => {
        return {
          price: state.price - changePrice,
          classPriceCSS: 'barrel-square-form__price-big',
        }
      });
      setTimeout(() =>
        this.setState({
          classPriceCSS: '',
        }), 200);
    }
  }

}
