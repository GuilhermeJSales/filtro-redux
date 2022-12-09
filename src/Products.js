import { useSelector } from "react-redux"

export const Products = () => {
const {data} = useSelector(state => state.products)

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
