using System;
using System.Collections.Generic;

#nullable disable

namespace WebApplication2.Models
{
    public partial class Sample
    {
        public int Id { get; set; }
        public string Text { get; set; }
        public DateTime? CreatedOn { get; set; }
    }
}
