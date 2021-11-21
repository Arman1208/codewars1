function productFib(prod){
    if(prod<2)
    return prod
      return productFib(prod-1)+productFib(prod-2)
}
console.log(productFib(4))