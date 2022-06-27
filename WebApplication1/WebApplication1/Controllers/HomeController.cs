using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.Models;
using WebApplication1.ViewModel;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        //[HttpGet]
        //[Route("show1")]

        SampleDBContext db = new SampleDBContext();
        [HttpGet]
        public IEnumerable<Sample> getData()
        {
            return db.Samples;
        }
        [HttpPost]
        public IActionResult postData(SampleViewModel sampleViewModel)
        {
            Sample sample = new Sample();
            sample.Text = sampleViewModel.Text;
            db.Samples.Add(sample);
            db.SaveChanges();

            return Ok("Record Added Successfully");
        }

        [HttpPut]
        public IActionResult putData(SampleViewModel sampleViewModel)
        {
            if (db.Samples.Any(x => x.Id == sampleViewModel.Id)){
                var data = db.Samples.Where(x => x.Id == sampleViewModel.Id).FirstOrDefault();
                data.Text = sampleViewModel.Text;
                db.Samples.Update(data);
                db.SaveChanges(); 
                return Ok("Record have been successfully updated.");
            }

            return BadRequest("Record not found.");
        }
    }
}
