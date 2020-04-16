const initialState = {
  addToCartPink: 'rgb(224, 60, 96)',
  borderNoire: 'rgb(26, 21, 22)',
  header: '#17252A',
  filter: '#3AAFA9',
  main: '#DEF2F1',
  footer: '#2B7A78',
  background: '#FEFFFF',
  logo: 'base',
  addToCartPink: 'rgb(224, 60, 96)',
};

export default function designReducer(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_DESIGN': {
      switch (action.style) {
        case 'darkMode': {
          return {
            addToCartPink: 'rgb(224, 60, 96)',
            borderNoire: 'rgb(26, 21, 22)',
            header: '#DEF2F1',
            filter: '#3AAFA9',
            main: '#17252A',
            footer: '#2B7A78',
            background: '#FEFFFF',
            logo: 'dark',
            addToCartPink: 'rgb(224, 60, 96)',
          };
        }
        case 'base': {
          return {
            addToCartPink: 'rgb(224, 60, 96)',
            borderNoire: 'rgb(26, 21, 22)',
            header: '#17252A',
            filter: '#3AAFA9',
            main: '#DEF2F1',
            footer: '#2B7A78',
            background: '#FEFFFF',
            logo: 'base',
            addToCartPink: 'rgb(224, 60, 96)',
          };
        }
      }
    }

    default: {
      return state;
    }
  }
}
