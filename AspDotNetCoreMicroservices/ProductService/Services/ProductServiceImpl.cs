using ProductService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProductService.Services
{
    public class ProductServiceImpl:IProductService
    {
        ProductDBContext db;
        public ProductServiceImpl(ProductDBContext _db)
        {
            db = _db;
        }
        public List<Product> FindAll()
        {
            return db.Products.ToList();
        }
    }
}
