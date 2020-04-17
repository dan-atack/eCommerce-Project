const initialState = {
  addToCartPink: 'rgb(224, 60, 96)',
  borderNoire: 'rgb(26, 21, 22)',
  header: '#17252A',
  filter: '#3AAFA9',
  main: '#DEF2F1',
  footer: '#2B7A78',
  background: '#FEFFFF',
  logo: 'base',
  clearCart: '#FF0000',
};

export default function designReducer(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_DESIGN': {
      switch (action.style) {
        case 'darkMode': {
          return {
            borderNoire: 'rgb(26, 21, 22)',
            header: '#DEF2F1',
            filter: '#3AAFA9',
            main: '#17252A',
            footer: '#2B7A78',
            background: '#FEFFFF',
            logo: 'dark',
            addToCartPink: 'rgb(224, 60, 96)',
            clearCart: '#FF0000',
          };
        }
        case 'base': {
          return {
            borderNoire: 'rgb(26, 21, 22)',
            header: '#17252A',
            filter: '#3AAFA9',
            main: '#DEF2F1',
            footer: '#2B7A78',
            background: '#FEFFFF',
            logo: 'base',
            addToCartPink: 'rgb(224, 60, 96)',
            clearCart: '#FF0000',
          };
        }
        case 'whacky': {
          return {
            addToCartPink: 'rgb(224, 60, 96)',
            borderNoire: 'rgb(26, 21, 22)',
            header: '#EDAFB8',
            filter: '#C0C781',
            main: '#78BC61',
            footer: '#648767',
            background: '#8C271E',
            logo: 'base',
            addToCartPink: 'rgb(224, 60, 96)',
            clearCart: '#FF0000',
          };
        }
      }
    }

    default: {
      return state;
    }
  }
}
