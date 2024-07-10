import { FC } from 'react'
import { IProduct } from '@interfaces';

type ProductsTopSectionProps = {
  data: IProduct[];
  limit: string;
  setLimit: (limit: string) => void;
  newProduct: string;
  setNewProduct: (newProduct: string) => void;
  handleAddProduct: () => void;
  handleDeleteProduct: (id: string) => void;
}

const ProductsTopSection: FC<ProductsTopSectionProps> = (props) => {
  const {
    data,
    limit,
    setLimit,
    newProduct,
    setNewProduct,
    handleAddProduct,
    handleDeleteProduct
  } = props;

  return (
    <section className='h-[20vh] flex items-center justify-between px-3'>
      <div className=''>
        <select value={limit} onChange={(e) => setLimit(e.target.value)}>
          <option value="">All</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <input
          type="text"
          className='border border-slate-300'
          value={newProduct}
          onChange={(e) => setNewProduct(e.target.value)}
        />
        <button onClick={() => handleAddProduct()}>
          add product
        </button>
        <ul>
          {data.map((item: IProduct) => (
            <li key={item.id} onClick={() => handleDeleteProduct(item.id)}>
              {item.name}
            </li>
          ))}
        </ul>
      </div>
      <button className="btn btn-active btn-secondary">Add Product</button>
    </section>
  )
}

export default ProductsTopSection