import React, { useState } from "react";
import { addPizza } from "../../actions"
import { connect } from "react-redux";

const PizzaItem = ({id,imageUrl,name,types,sizes,price,addPizza,category}) => {

  const [typeState,setType] = useState(0);
  const [sizeState,setSize] = useState(sizes[0]);
  const [priceState,setPrice] = useState(price);
  const [count,setCount] = useState(0)

  function transformType(type){
    let title = "";
        switch (type){
          case 0:
            title = "Традиционное"
            break
          case 1:
            title = "Тонкое"
            break
          case 2:
            title = "Супертонкое"
            break
          default:
            title = "Традиционное"
        }
      return title
  }
  const PizzaType = () =>{

    return types.map( (elem,i) => {


        if (types.length === 1){
          return <li 
          className="active"
          onClick={() => setType(elem)}
          key={"type - "+name+elem}
          >{transformType(elem)}</li>
        }
    

      if (types.length === 1){
        return;
      }    

      if (elem === typeState){
        return <li 
        className="active"
        onClick={() => setType(elem)}
        key={"type - "+name+elem}
        >{transformType(elem)}</li>
      }
      return (<li 
        onClick={() => setType(elem)}
        key={"type - "+name+elem}
        >{transformType(elem)}</li>)
    })
    }

    const PizzaSize = () => {



      if(sizeState === 26 && sizes[0] !== 26){
        setSize(sizes[0])
      }

      return sizes.map( (elem) => {

        if(elem === sizeState){
          return <li 
          className="active"
          onClick={() => setSize(elem)}
          key={"size - "+name+elem}
          >{elem} см. </li>
        }
      
        return (<li 
          onClick={() => setSize(elem)}
          key={"size - "+name+elem}
          >{elem} см. </li>)
      })
    }

    function makeNewPrice(){
      const newPrice =  Math.floor(price+(15*sizeState))
      if (priceState === newPrice){
        return priceState
      }
      setPrice(newPrice)
      return newPrice
    }

    const showCount = () => {
      if (count === 0){
        return 
      }
    return <i>{count}</i>
    }

    function onAddPizza(){
      const pizza = {
        id : id,
        name : name,
        url : imageUrl,
        category : transformType(typeState),
        size : sizeState,
        basePrice : priceState,
        count : 1
      }
    
      setCount(count+1)
      addPizza(pizza)
    }
    let className = "pizza-block";
    if (category === 5){
      className+=" closed";
    }
  return (
        <>
          <div className={className}>
            <img
              className="pizza-block__image"
              src={imageUrl}
              alt="Pizza"
            />
            <h4 className="pizza-block__title">{name}</h4>
            <div className="pizza-block__selector">
              <ul>
              {
              PizzaType()
             }
              </ul>
              <ul>
                {PizzaSize()}
              </ul>
            </div>
            <div className="pizza-block__bottom">
              <div className="pizza-block__price">от {makeNewPrice()} ₽</div>
              <div className="button button--outline button--add" onClick={() => onAddPizza()}>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                    fill="white"
                  />
                </svg>
                <span>Добавить</span>
                {showCount()}
              </div>
            </div>
          </div> 
        </>
            )
        }


const mapStateToProps = (state) => {
  return {}
}

const mapDispathToProps = {
  addPizza,
}
export default connect(mapStateToProps,mapDispathToProps)(PizzaItem)