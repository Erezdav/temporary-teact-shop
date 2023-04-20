import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from "../actions";

const cart_reducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    const { id, color, amount, product } = action.payload;
    const tempItem = state.cart.find((i) => i.id === id + color);
    // אם מוצר קיים בעגלה
    if (tempItem) {
      const tempCart = state.cart.map((cartItem) => {
        // if id+color indent, increase amount
        if (cartItem.id === id + color) {
          let newAmount = cartItem.amount + amount;
          //check stock
          if (newAmount > cartItem.max) {
            newAmount = cartItem.max;
          }
          //return same items but increase amount
          return { ...cartItem, amount: newAmount };
        } else {
          // if id+color not same as in the cart
          return cartItem;
        }
      });
      return { ...state, cart: tempCart };
    } else {
      const newItem = {
        id: id + color,
        name: product.name,
        color,
        amount,
        image: product.images[0].url,
        price: product.price,
        max: product.stock,
      };
      console.log(newItem.image);
      return { ...state, cart: [...state.cart, newItem] };
    }
  }
  if (action.type === REMOVE_CART_ITEM) {
    const clearedItem = state.cart.filter((i) => i.id !== action.payload);
    return { ...state, cart: clearedItem };
  }
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }
  if (action.type === TOGGLE_CART_ITEM_AMOUNT) {
    const { id, value } = action.payload;

    const tempCart = state.cart.map((item) => {
      //if ids same and value 'inc'
      if (item.id === id) {
        if (value === "inc") {
          let newAmount = item.amount + 1;
          if (newAmount > item.max) {
            newAmount = item.max;
          }
          //return cart with changed amount
          return { ...item, amount: newAmount };
        }

        //if ids same and value 'dec'
        if (value === "dec") {
          let newAmount = item.amount - 1;
          if (newAmount < 1) {
            newAmount = 1;
          }
          //return cart with changed amount
          return { ...item, amount: newAmount };
        }
      } else {
        //all other ids not match show there items as it is
        return item;
      }
    });

    return { ...state, cart: tempCart };
  }
  if (action.type === COUNT_CART_TOTALS) {
    const { total_amount, total_items, VAT } = state.cart.reduce(
      (total, cartItem) => {
        const { amount, price, VAT } = cartItem;
        total.total_items += amount;

        total.total_amount += amount * price;

        total.VAT += total.total_amount * 0.17;
        return total;
      },
      {
        total_amount: 0,
        total_items: 0,
        VAT: 0,
      }
    );
    return { ...state, total_amount, total_items, VAT };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default cart_reducer;
