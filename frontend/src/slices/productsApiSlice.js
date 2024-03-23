import { PRODUCTS_URL } from "../constants";

//! because we have endpoints that are dealing with asynchronous requests
import { apiSlice } from "./apiSlice";

export const productApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => ({
                url: PRODUCTS_URL,
            }),
            providesTags: ['Products'], //! otherwise we may have to refresh the page
            keepUnusedDataFor: 5
        }),
        getProductDetails: builder.query({
            query: (productId) => ({
                url:`${PRODUCTS_URL}/${productId}`,
            }),
            keepUnusedDataFor: 5,
        }),
        createProduct: builder.mutation({
            query: () => ({
                url: PRODUCTS_URL,
                method: 'POST',
            }),
            invalidatesTags: ['Product'] //! this will stop it from being cached so that we have fresh data
        }),
        updateProduct: builder.mutation({
            query: (data) => ({
                url: `${PRODUCTS_URL}/${data.productId}`,
                method: 'PUT',
                body: data,
            }),
            invalidatesTags: ['Products'] //! this will clear the cache
        }),
    }),
});

export const { 
    useGetProductsQuery, 
    useGetProductDetailsQuery, 
    useCreateProductMutation,
    useUpdateProductMutation,
} = productApiSlice;