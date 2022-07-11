using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CustomerApi.Model
{
    public class Customer
    {
        [Key]
        public int ID { get; set; }
        public string CustomerCode { get; set; }
       
        public string CustomerName { get; set; }
        public int CustomerAmount { get; set; }
    }
}
