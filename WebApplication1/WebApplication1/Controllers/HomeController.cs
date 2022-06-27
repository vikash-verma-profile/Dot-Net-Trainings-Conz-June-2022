using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        //[HttpGet]
        //[Route("show1")]

        SampleDBContext db = new SampleDBContext();
        public IEnumerable<Sample> getData()
        {
            return db.Samples;
        }

        public string show2()
        {
            return "show 2 is getting called";
        }
    }
}
