using CatalogService.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CatalogService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CatalogController : ControllerBase
    {
        ICatalogService catalogService;
        public CatalogController(ICatalogService _catalogService)
        {
            catalogService = _catalogService;
        }

        [HttpGet("findall")]
        public IActionResult FindAll()
        {
            try
            {
                return Ok(catalogService.FindAll());
            }
            catch
            {
                return BadRequest();
            }
        }
    }
}
