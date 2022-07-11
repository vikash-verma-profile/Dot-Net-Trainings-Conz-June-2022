using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CustomerApi.Model
{
    public class CustomerContext:DbContext
    {
        public CustomerContext()
        {

        }
        public CustomerContext(DbContextOptions<CustomerContext> options) : base(options)
        {

        }
        public DbSet<Customer> Customers { get; set; }
    }
}
