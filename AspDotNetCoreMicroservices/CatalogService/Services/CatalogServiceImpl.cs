using CatalogService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CatalogService.Services
{
    public class CatalogServiceImpl : ICatalogService
    {
        CatalogDBContext db;
        public CatalogServiceImpl(CatalogDBContext _db)
        {
            db = _db;
        }
        public List<Category> FindAll()
        {
            return db.Categories.ToList();
        }
    }
}
