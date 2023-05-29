using EventGuesserAPI.Data;
using EventGuesserAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace EventGuesserAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HistoricalEventsController : ControllerBase
    {

        private readonly DataContext _context;

        public HistoricalEventsController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<HistoricalEvent>>> GetHistoricalEvents()
        {
            return Ok(await _context.HistoricalEvents.ToListAsync());
        }

        [HttpPost]
        public async Task<ActionResult<List<HistoricalEvent>>> CreateHistoricalEvent(HistoricalEvent hEvent)
        {
            _context.HistoricalEvents.Add(hEvent);
            await _context.SaveChangesAsync();
            return Ok(await _context.HistoricalEvents.ToListAsync());
        }

        [HttpPut]
        public async Task<ActionResult<List<HistoricalEvent>>> UpdateHistoricalEvent(HistoricalEvent hEvent)
        {
            var dbEvent = await _context.HistoricalEvents.FindAsync(hEvent.id);
            if (dbEvent == null)
            {
                return BadRequest("Event not found");
            }

            dbEvent.era = hEvent.era;
            dbEvent.name = hEvent.name;
            dbEvent.year = hEvent.year;
            dbEvent.pictureName = hEvent.pictureName;

            await _context.SaveChangesAsync();


            return Ok(await _context.HistoricalEvents.ToListAsync());
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<List<HistoricalEvent>>> DeleteHistoricalEvent(int id)
        {
            var dbEvent = await _context.HistoricalEvents.FindAsync(id);
            if (dbEvent == null)
            {
                return BadRequest("Event not found");
            }

            _context.HistoricalEvents.Remove(dbEvent);
            await _context.SaveChangesAsync();

            return Ok(await _context.HistoricalEvents.ToListAsync());
        }

    }
}
