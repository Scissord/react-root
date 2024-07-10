import { FC } from 'react'
import { productsHeaders, mockProducts } from '@constants';

const ProductsTableSection: FC = () => {
  return (
    <section className="h-[80vh] overflow-x-auto px-2">
      <table className="table table-xs table-pin-rows table-pin-cols">
        <thead>
          <tr>
            {productsHeaders.map((header) => (
              <th
                key={header.id}
                className={`
                  bg-indigo-950 text-white
                `}
              >
                {header.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {mockProducts.map((product, index) => (
            <tr
              key={product.id}
              className={`
                bg-white
                hover:bg-gray-200
              `}
            >
              <th
                className={`
                  bg-indigo-950 text-white
                `}
              >
                {index + 1}
              </th>
              <td>{product.name}</td>
              <td>{product.job}</td>
              <td>{product.company}</td>
              <td>{product.location}</td>
              <td>{product.lastLogin}</td>
              <td>{product.favoriteColor}</td>
              <th
                className={`
                  bg-indigo-950 text-white
                `}
              >
                {index + 1}
              </th>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            {productsHeaders.map((product) => (
              <th
                key={product.id}
                className={`
                  bg-indigo-950 text-white
                `}
              >
                {product.label}
              </th>
            ))}
          </tr>
        </tfoot>
      </table>
    </section>
  )
}

export default ProductsTableSection