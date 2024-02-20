import { produce } from 'immer';


const initialState = {
    confirm: true,
    nameList: ["Vanderson", "Iracema", "Paulina", "Paulo", "Lorenzo", "Cicera", "Carol", "Daniel", "Amanda", "Tia nega", "Zé", "Tia Rosa", "Gabriel", "Letícia", "Clecia", "Beatriz", "Lucas", "Jeane", "Kauane", "Guilherme", "Liliane", "Cláudio", "Kauan", "Kaike", "Weligton", "Bruno", "Paloma", "Poliana", "Wilma", "Jucelino", "Jucelandia", "Maria", "Luzia", "Edmilson", "Laize", "Emerson", "Elisabete", "Adriano", "Geralda", "Raiane", "Mayana", "João Vitor", "Geralda", "Gilson", "Vera", "Ryan", "Franciele", "Nadiele", "Nena", "Cadu", "Clemilda", "Crislane", "Eudes", "Ayane", "Sérgio", "Matheus", "Aguinaldo", "Vânia", "Jessica", "Higor Gabriel", "Hiago", "Priscila", "Ana Beatriz", "Iker", "Felipe", "Elaine", "Italo", "Eduardo", "Francine", "Jessielma", "Leandro", "Yan", "Fabiana", "Jane", "Ester", "Luana", "Thais", "Maisa", "Matheus novais", "Ana Paula", "Wilma Sara", "Jardeson", "Elysvan", "Eriton", "Kessia", "Edvania", "José Valdir"],
};

const todoReducer = (state = initialState, action) => {
  return produce(state, draftState => {
    switch (action.type) {
        case "CONFIRM":
            draftState.confirm = action.payload
        break;
      default:
        return state;
    }
  });
};

export default todoReducer;
