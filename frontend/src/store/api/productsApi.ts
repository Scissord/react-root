import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
	reducerPath: 'productsApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/' }),
	tagTypes: ['Products'],
	endpoints: (build) => ({
		getProducts: build.query({
			query: (limit = "") => `/products?${limit && `_limit=${limit}`}`,
			providesTags: (result) => result
				? [
						...result.map(({ id } : { id: string }) => ({ type: 'Products', id })),
						{ type: 'Products', id: 'LIST' }
					]
				: [{ type: 'Products', id: 'LIST' }],
		}),
		addProduct: build.mutation({
			query: (body) => ({
				method: 'POST',
				url: '/products',
				body
			}),
			invalidatesTags: [{ type: 'Products', id: 'LIST' }]
		}),
		deleteProduct: build.mutation({
			query: (id) => ({
				method: 'DELETE',
				url: `/products/${id}`,
			}),
			invalidatesTags: [{ type: 'Products', id: 'LIST' }]
		}),
	})
});

export const { useGetProductsQuery, useAddProductMutation, useDeleteProductMutation } = productsApi;