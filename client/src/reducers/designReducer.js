const initialState = {
  addToCartPink: 'rgb(224, 60, 96)',
  borderNoire: 'rgb(26, 21, 22)',
  header: '#DE6B48',
  filter: '#A0A4B8',
  main: '#D8DDEF',
  footer: '#7293A0',
};

export default function designReducer(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_DESIGN': {
      switch (action.style) {
        case 'new': {
          return {
            addToCartPink: 'rgb(224, 60, 96)',
            borderNoire: 'rgb(26, 21, 22)',
            header: '',
            filter: '#A0A4B8',
            main: '#D8DDEF',
            footer: '#DE6B48',
          };
        }
        case 'base': {
          return {
            addToCartPink: 'rgb(224, 60, 96)',
            borderNoire: 'rgb(26, 21, 22)',
            header: '#2e4052',
            filter: '#bdd9bf;',
            main: '#ffc857',
            footer: '#412234',
          };
        }
      }
    }
    default: {
      return state;
    }
  }
}
