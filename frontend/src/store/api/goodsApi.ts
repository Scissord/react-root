import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const goodsApi = createApi({
	reducerPath: 'goodsApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/' }),
	tagTypes: ['Products'],
	endpoints: (build) => ({
		getGoods: build.query({
			query: (limit = "") => `/goods?${limit && `_limit=${limit}`}`,
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
				url: '/goods',
				body
			}),
			invalidatesTags: [{ type: 'Products', id: 'LIST' }]
		}),
		deleteProduct: build.mutation({
			query: (id) => ({
				method: 'DELETE',
				url: `/goods/${id}`,
			}),
			invalidatesTags: [{ type: 'Products', id: 'LIST' }]
		}),
	})
});

export const { useGetGoodsQuery, useAddProductMutation, useDeleteProductMutation } = goodsApi;