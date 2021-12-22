import Item from './Item';
// ITEMLISTCOINTAINER ME PASA COMO PROP EL STATE Y LO MAPEO, LUEGO LO RENDERIZO EN APP

export default function  ItemList({state}) {

    return (
        <>
        
        <div>

            {state.map(valorActual => <Item key={valorActual.id} 
                valorActual={valorActual} />)}
            
        </div>
        </> 
    )
}
