using CustomerApi.Model;
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
    public class CustomerController : ControllerBase
    {
        private readonly CustomerContext _context;

        public CustomerController(CustomerContext context)
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
            var customer = _context.Customers.Where(x=>x.ID==Id).FirstOrDefault();
            _context.Customers.Remove(customer);
            return await _context.SaveChangesAsync();
        }
    }
}
