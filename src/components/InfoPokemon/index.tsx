import './style.css'

type InfoPokemon = {
    setModal: (modal:boolean) => void;
    clickPokemon: string,
}

export function InfoPokemon(props:InfoPokemon){
    const { setModal, clickPokemon } = props;

    console.log(clickPokemon)

    return(
        <div className="container-info">

        </div>
    )
}