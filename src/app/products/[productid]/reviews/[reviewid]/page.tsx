export default function ReviewDetail(
    { params }: {
       params : {
        productid : string,
        reviewid : string,
            }
    }
    ) {
   return (
       <>
          <h2>Review {params.reviewid} for the product {params.productid}</h2>
       </>  
   )
}