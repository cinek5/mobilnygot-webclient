import React from 'react';
import ListaPunktow from './ListaPunktow';
class NewPunktyContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      skladowePunkty: [
        {
          punktTrasy: {
            id: 5,
            nazwaPunktu: 'Gospoda Jana',
            wysokosc: 200,
            wysokoscGeograficzna: 40,
            szerokoscGeograficzna: 30,
          },
          kolejnoscPunktu: 1
        },
        {
          punktTrasy: {
            id: 6,
            nazwaPunktu: 'Pastwisko Owiec',
            wysokosc: 240,
            wysokoscGeograficzna: 43,
            szerokoscGeograficzna: 35,
          },
          kolejnoscPunktu: 2
        }
      ]

    }
  }

    render()
    {
      return (
        <div>
          <ListaPunktow punkty={this.state.skladowePunkty}/>
        </div>
      );
    }
  }

 export default NewPunktyContainer;
