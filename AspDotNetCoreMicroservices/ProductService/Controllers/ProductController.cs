using ProductService.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProductService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        IProductService ProductService;
        public ProductController(IProductService _ProductService)
        {
            ProductService = _ProductService;
        }

        [HttpGet("findall")]
        public IActionResult FindAll()
        {
            try
            {
                return Ok(ProductService.FindAll());
            }
            catch
            {
                return BadRequest();
            }
        }
    }
}
