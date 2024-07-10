import { FC, useState } from 'react';
import {
  useGetProductsQuery,
  useAddProductMutation,
  useDeleteProductMutation
} from '@store/api/productsApi';
import { Loader } from '@ui';
import ProductsTopSection from './blocks/ProductsTopSection';
import ProductsTableSection from './blocks/ProductsTableSection';

const Products: FC = () => {
  const [limit, setLimit] = useState("");
  const [newProduct, setNewProduct] = useState("");
  const { data = [], isLoading } = useGetProductsQuery(limit);
  // , { isError }
  const [addProduct] = useAddProductMutation();
  const [deleteProduct] = useDeleteProductMutation();

  const handleAddProduct = async () => {
    if(newProduct) {
      //.unwrap(); is using to take correct data from second index of useAddProductMutation, like isError
      await addProduct({ name: newProduct }).unwrap();
      setNewProduct("");
    }
  };

  const handleDeleteProduct = async (id: string) => {
    //.unwrap(); is using to take correct data from second index of useDeleteProductMutation, like isError
    await deleteProduct(id).unwrap();
  };

  if(isLoading) return <Loader/>

  return (
    <div className="min-h-[100vh]">
      <ProductsTopSection
        data={data}
        limit={limit}
        setLimit={setLimit}
        newProduct={newProduct}
        setNewProduct={setNewProduct}
        handleAddProduct={handleAddProduct}
        handleDeleteProduct={handleDeleteProduct}
      />
      <ProductsTableSection/>
    </div>

  )
}

export default Products