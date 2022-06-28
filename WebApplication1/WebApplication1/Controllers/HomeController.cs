using Microsoft.AspNetCore.Authorization;
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
    [Route("api/[controller]")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        //[HttpGet]
        //[Route("show1")]

        SampleDBContext db;

        public HomeController(SampleDBContext _db)
        {
            db = _db;
        }
        [Route("getData")]
        [HttpGet]
        public IEnumerable<Sample> getData()
        {
            return db.Samples;
        }
        [HttpPost]
        [Authorize]
        public IActionResult postData(SampleViewModel sampleViewModel)
        {
            Sample sample = new Sample();
            sample.Text = sampleViewModel.Text;
            db.Samples.Add(sample);
            db.SaveChanges();

            return Ok("Record Added Successfully");
        }

        [HttpPut]
        [Authorize]
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

        [HttpDelete]
        [Authorize]
        public IActionResult deleteData(int Id)
        {
            if (db.Samples.Any(x => x.Id == Id))
            {
                var data = db.Samples.Where(x => x.Id == Id).FirstOrDefault();
                db.Samples.Remove(data);
                db.SaveChanges();
                return Ok("Record have been successfully deleted.");
            }

            return BadRequest("Record not found.");
        }
    }
}
