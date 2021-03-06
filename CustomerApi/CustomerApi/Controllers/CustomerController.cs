using CustomerApi.Model;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CustomerApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class CustomerController : ControllerBase
    {
        private readonly CustomerDBContext _context;

        public CustomerController(CustomerDBContext context)
        {
            _context = context;
        }
        [HttpGet]
        public async Task<IEnumerable<Customer>> Get()
        {
           return  await _context.Customers.ToListAsync();
        }
        [HttpPost]
        public async Task<int>  CreateCustomer(Customer customer)
        {
             _context.Customers.Add(customer);
             return await _context.SaveChangesAsync();
        }
        [HttpGet]
        [Route("GetCustomer")]
        public async Task<Customer> GetCustomer(int id)
        {
            return await  _context.Customers.FindAsync(id);
        }

        [HttpDelete]
        [Route("delete")]
        public async Task<int> DeleteCustomer(int Id)
        {
            var customer = _context.Customers.Where(x=>x.Id==Id).FirstOrDefault();
            _context.Customers.Remove(customer);
            return await _context.SaveChangesAsync();
        }
    }
}
