import Item from './Item';

export default function  ItemList({list}) {

    return (
        <>
            <div>
                {list.map(producto => 
                    <>
                        <Item key={producto.id + "list"} producto={producto} />

                        
                    </>
                )}
            </div>
        </> 
    )
}
