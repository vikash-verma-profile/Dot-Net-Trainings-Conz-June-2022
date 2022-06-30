using MassTransit;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Shared.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Ticketing.Microservice.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TicketController : ControllerBase
    {
        private readonly IBus bus;
        public TicketController(IBus _bus)
        {
            bus = _bus;
        }

        [HttpPost]
        public async Task<IActionResult> CreateTicket(Ticket ticket)
        {
            if (ticket != null)
            {
                ticket.BookedOn = DateTime.Now;
                Uri uri = new Uri("rabbitmq://localhost/ticketQueue");
                var endpoint =await  bus.GetSendEndpoint(uri);
                await endpoint.Send(ticket);
                return Ok();
            }
            return BadRequest();
        }

        [HttpGet]
        public string Hello()
        {
            return "Hello";
        }
    }
}
