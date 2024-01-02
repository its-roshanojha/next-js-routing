export default function Product1(
     { params }: {
        params : {productid : string}
     }
     ) {
    return (
        <>
           <h2>This is the detail page of Product {params.productid}</h2>
        </>  
    )
}