import { useSelector } from "react-redux"

const filterColors = (colors) => (product) => !colors.length || colors.includes(product.color);
const filterPrices = (prices) => (product) => (!prices.max || product.price <= prices.max) && (!prices.min || product.price >= prices.min)


const filterProducts = ({products}) => {
  const {data, filters} = products;
  const newArray = data.filter(filterColors(filters.colors)).filter(filterPrices(filters.prices))
  return newArray
}


export const Products = () => {
const data = useSelector(filterProducts)

  return (
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Cor</th>
          <th>Preço</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({id, name, color, price}) => (
          <tr key={id}>
            <td>{name}</td>
            <td>{color}</td>
            <td>R$ {price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
