import shopData from '../../shopData.json'
const Shop = () => {
    return(
        <>
        {
            shopData.map(({name,id}) => (
                <h1 key={id}>{name}</h1>
                ))}
        </>
    )
}
export default Shop;